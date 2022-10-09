[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Stress testing using Gatling (Java)

Related projects (branches):
- [Performance testing using Gatling](https://github.com/eccanto/base-gatling-performance-testing)
- [Load testing using Gatling (Scala)](https://github.com/eccanto/base-gatling-performance-testing/tree/feature/load-testing-scala)
- [Load testing using Gatling (Java)](https://github.com/eccanto/base-gatling-performance-testing/tree/feature/load-testing-java)
- [Stress testing using Gatling (Scala)](https://github.com/eccanto/base-gatling-performance-testing/tree/feature/stress-testing-scala)
- [Stress testing using Gatling (Java)](https://github.com/eccanto/base-gatling-performance-testing/tree/feature/stress-testing-java) `[current branch]`

# Table of contents

* [Overview](#overview)
  * [Objetive](#objetive)
  * [Scenario](#scenario)
* [Get started](#get-started)
  * [Requirements](#requirements)
  * [Run](#run)
* [License](#license)

# Overview

## Objetive

The system will be tested with a load of `1000` requests per second from `10` Gatling **workers** during 1 minutes
(each worker will execute `100` requests per second). The system will load beyond its peak capacity to the point of
failure.

Total expected requests: `1000` * `60` * `2` = **`120000`** (in 1 minute)

**Note**: `2` is the number of events of the scenario (`login` and `get users data`).

## Scenario

The following Java code represents our stress testing Gatling example:

```java
public class BasicSimulationJava extends Simulation {
    final String SERVER_HOST = System.getenv("SERVER_HOST");               // (1)
    final String API_USERNAME = System.getenv("API_USERNAME");             // (1)
    final String API_PASSWORD = System.getenv("API_PASSWORD");             // (1)

    final int ITERATIONS = Integer.parseInt(System.getenv("ITERATIONS"));  // (2)

    final HttpProtocolBuilder httpProtocol = http.baseUrl(SERVER_HOST);

    final ScenarioBuilder test_case = scenario("BasicSimulation")
        .exec(                                                             // (3)
            http("Authentication")                                         // (3)
                .get("/api/token")                                         // (3)
                .basicAuth(API_USERNAME, API_PASSWORD)                     // (3)
                .check(status().is(200))                                   // (3)
                .check(jsonPath("$.access").saveAs("jwt_token"))           // (3)
        )                                                                  // (3)
        .exitHereIfFailed()
        .exec(                                                             // (4)
            http("GetUsers")                                               // (4)
                .get("/api/users")                                         // (4)
                .header("Authorization", "JWT ${jwt_token}")               // (4)
                .check(status().is(200))                                   // (4)
        );                                                                 // (4)

    {
        setUp(
            test_case.injectOpen(
                constantUsersPerSec(ITERATIONS).during(Duration.ofMinutes(1))
            )
        ).protocols(httpProtocol);
    }
}
```

- `(1)`: Gets server host and credentials.
- `(2)`: Gets the number of "iterations" by worker [per second] (defined in the [docker-compose.yml](./docker-compose.yml)).
- `(3)`: Log in and gets the JWT from the server.
- `(4)`: Task to obtain users data from the server.

# Get Started

## Requirements

- [Docker +20.10](https://docs.docker.com/engine/install/ubuntu/)
- [docker-compose +1.29](https://docs.docker.com/desktop/install/linux-install/)

## Run

1. Run [REST API server mock](https://github.com/eccanto/base-mockoon-api-rest-server-mock) (address: http://localhost:3000).
2. Edit [mock_variables.env](./mock_variables.env):
    ```bash
    # CHANGE!: Change <LOCAL_IP>, this IP must be accessible from within a gatling containers.
    SERVER_HOST=http://<LOCAL_IP>:3000
    API_USERNAME=test
    API_PASSWORD=test
    ```
3. Run Gatling docker containers (with `10` workers):
    ```bash
    docker-compose up --scale worker=10
    ```
4. The Gatling report file is saved in `results/reports/index.html`.
    [![Gatling Report](documentation/images/gatling_report.png)](./sample/reports/index.html)

# License

[MIT](./LICENSE)
