package computerdatabase

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._


class BasicSimulationScala extends Simulation {
    val SERVER_HOST = sys.env.get("SERVER_HOST").get
    val API_USERNAME = sys.env.get("API_USERNAME").get
    val API_PASSWORD = sys.env.get("API_PASSWORD").get

    val SIMULATION_CYCLES = sys.env.get("SIMULATION_CYCLES").get.toInt
    val SIMULATION_REACH_SECONDS = sys.env.get("SIMULATION_REACH_SECONDS").get.toInt
    val SIMULATION_CYCLE_SECONDS = sys.env.get("SIMULATION_CYCLE_SECONDS").get.toInt
    val SIMULATION_MINIMUM_PEAK = sys.env.get("SIMULATION_MINIMUM_PEAK").get.toInt
    val SIMULATION_MAXIMUM_PEAK = sys.env.get("SIMULATION_MAXIMUM_PEAK").get.toInt

    val httpProtocol = http.baseUrl(SERVER_HOST)

    val test_case = scenario("BasicSimulationScala")
        .exec(
            http("Authentication")
                .get("/api/token")
                .basicAuth(API_USERNAME, API_PASSWORD)
                .check(status.is(200))
                .check(jsonPath("$.access").saveAs("jwt_token"))
        )
        .exitHereIfFailed
        .exec(
            http("GetUsers")
                .get("/api/users")
                .header("Authorization", "JWT ${jwt_token}")
                .check(status.is(200))
        )

    var simulation_cycle = List(
        reachRps(SIMULATION_MINIMUM_PEAK).in(SIMULATION_REACH_SECONDS.seconds),
        holdFor(SIMULATION_CYCLE_SECONDS.seconds)
    )

    for(interval <- 0 until SIMULATION_CYCLES)
    {
        simulation_cycle = simulation_cycle :+ jumpToRps(SIMULATION_MAXIMUM_PEAK)
        simulation_cycle = simulation_cycle :+ holdFor(SIMULATION_CYCLE_SECONDS.seconds)
        simulation_cycle = simulation_cycle :+ jumpToRps(SIMULATION_MINIMUM_PEAK)
        simulation_cycle = simulation_cycle :+ holdFor(SIMULATION_CYCLE_SECONDS.seconds)
    }

    setUp(
        test_case.inject(
            constantUsersPerSec(SIMULATION_MAXIMUM_PEAK).during(
                (SIMULATION_REACH_SECONDS + SIMULATION_CYCLE_SECONDS + (SIMULATION_CYCLES * SIMULATION_CYCLE_SECONDS * 2)).seconds
            )
        )
    )
    .throttle(
        simulation_cycle:_*
    )
    .protocols(httpProtocol)
}
