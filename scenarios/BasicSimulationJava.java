package computerdatabase;

import java.time.Duration;
import java.util.ArrayList;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;


public class BasicSimulationJava extends Simulation {
    final String SERVER_HOST = System.getenv("SERVER_HOST");
    final String API_USERNAME = System.getenv("API_USERNAME");
    final String API_PASSWORD = System.getenv("API_PASSWORD");

    final int SIMULATION_CYCLES = Integer.parseInt(System.getenv("SIMULATION_CYCLES"));
    final int SIMULATION_REACH_SECONDS = Integer.parseInt(System.getenv("SIMULATION_REACH_SECONDS"));
    final int SIMULATION_CYCLE_SECONDS = Integer.parseInt(System.getenv("SIMULATION_CYCLE_SECONDS"));
    final int SIMULATION_MINIMUM_PEAK = Integer.parseInt(System.getenv("SIMULATION_MINIMUM_PEAK"));
    final int SIMULATION_MAXIMUM_PEAK = Integer.parseInt(System.getenv("SIMULATION_MAXIMUM_PEAK"));

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
        ArrayList<ThrottleStep> simulation_cycle = new ArrayList<ThrottleStep>();
        simulation_cycle.add(reachRps(SIMULATION_MINIMUM_PEAK).in(Duration.ofSeconds(SIMULATION_REACH_SECONDS)));
        simulation_cycle.add(holdFor(Duration.ofSeconds(SIMULATION_CYCLE_SECONDS)));

        for (int interval = 0; interval < SIMULATION_CYCLES; interval++) {
            simulation_cycle.add(jumpToRps(SIMULATION_MAXIMUM_PEAK));
            simulation_cycle.add(holdFor(SIMULATION_CYCLE_SECONDS));
            simulation_cycle.add(jumpToRps(SIMULATION_MINIMUM_PEAK));
            simulation_cycle.add(holdFor(SIMULATION_CYCLE_SECONDS));
        }

        setUp(
            test_case.injectOpen(
                constantUsersPerSec(SIMULATION_MAXIMUM_PEAK).during(Duration.ofSeconds(
                    SIMULATION_REACH_SECONDS + SIMULATION_CYCLE_SECONDS + (SIMULATION_CYCLES * SIMULATION_CYCLE_SECONDS * 2)
                ))
            )
        )
        .throttle(
            simulation_cycle
        )
        .protocols(httpProtocol);
    }
}
