package computerdatabase;

import java.time.Duration;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;


public class BasicSimulationJava extends Simulation {
    final String SERVER_HOST = System.getenv("SERVER_HOST");
    final String API_USERNAME = System.getenv("API_USERNAME");
    final String API_PASSWORD = System.getenv("API_PASSWORD");

    final int ITERATIONS = Integer.parseInt(System.getenv("ITERATIONS"));

    final HttpProtocolBuilder httpProtocol = http.baseUrl(SERVER_HOST);

    final ScenarioBuilder test_case = scenario("BasicSimulation")
        .exec(
            http("Authentication")
                .get("/api/token")
                .basicAuth(API_USERNAME, API_PASSWORD)
                .check(status().is(200))
                .check(jsonPath("$.access").saveAs("jwt_token"))
        )
        .exitHereIfFailed()
        .exec(
            http("GetUsers")
                .get("/api/users")
                .header("Authorization", "JWT ${jwt_token}")
                .check(status().is(200))
        );

    {
        setUp(
            test_case.injectOpen(
                constantUsersPerSec(ITERATIONS).during(Duration.ofMinutes(1))
            )
        ).protocols(httpProtocol);
    }
}
