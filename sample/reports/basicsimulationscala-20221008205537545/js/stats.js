var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "8688",
        "ok": "5272",
        "ko": "3416"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "2046"
    },
    "maxResponseTime": {
        "total": "63674",
        "ok": "60777",
        "ko": "63674"
    },
    "meanResponseTime": {
        "total": "20205",
        "ok": "18254",
        "ko": "23217"
    },
    "standardDeviation": {
        "total": "18153",
        "ok": "15953",
        "ko": "20745"
    },
    "percentiles1": {
        "total": "10031",
        "ok": "13132",
        "ko": "10013"
    },
    "percentiles2": {
        "total": "27873",
        "ok": "27337",
        "ko": "30446"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "49888",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "60008",
        "ok": "56109",
        "ko": "60188"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 354,
    "percentage": 4
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 134,
    "percentage": 2
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 4784,
    "percentage": 55
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3416,
    "percentage": 39
},
    "meanNumberOfRequestsPerSecond": {
        "total": "86.88",
        "ok": "52.72",
        "ko": "34.16"
    }
},
contents: {
"req_authentication-c75f7": {
        type: "REQUEST",
        name: "Authentication",
path: "Authentication",
pathFormatted: "req_authentication-c75f7",
stats: {
    "name": "Authentication",
    "numberOfRequests": {
        "total": "6000",
        "ok": "2688",
        "ko": "3312"
    },
    "minResponseTime": {
        "total": "2046",
        "ok": "4217",
        "ko": "2046"
    },
    "maxResponseTime": {
        "total": "60384",
        "ok": "59823",
        "ko": "60384"
    },
    "meanResponseTime": {
        "total": "23673",
        "ok": "24421",
        "ko": "23065"
    },
    "standardDeviation": {
        "total": "18770",
        "ok": "15856",
        "ko": "20817"
    },
    "percentiles1": {
        "total": "11112",
        "ok": "21350",
        "ko": "10011"
    },
    "percentiles2": {
        "total": "36901",
        "ok": "37627",
        "ko": "28596"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "50853",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60008",
        "ok": "58766",
        "ko": "60061"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 2688,
    "percentage": 45
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3312,
    "percentage": 55
},
    "meanNumberOfRequestsPerSecond": {
        "total": "60",
        "ok": "26.88",
        "ko": "33.12"
    }
}
    },"req_getusers-2c222": {
        type: "REQUEST",
        name: "GetUsers",
path: "GetUsers",
pathFormatted: "req_getusers-2c222",
stats: {
    "name": "GetUsers",
    "numberOfRequests": {
        "total": "2688",
        "ok": "2584",
        "ko": "104"
    },
    "minResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "12050"
    },
    "maxResponseTime": {
        "total": "63674",
        "ok": "60777",
        "ko": "63674"
    },
    "meanResponseTime": {
        "total": "12465",
        "ok": "11838",
        "ko": "28041"
    },
    "standardDeviation": {
        "total": "13853",
        "ok": "13303",
        "ko": "17636"
    },
    "percentiles1": {
        "total": "5813",
        "ok": "4481",
        "ko": "21052"
    },
    "percentiles2": {
        "total": "20811",
        "ok": "20143",
        "ko": "37851"
    },
    "percentiles3": {
        "total": "48091",
        "ok": "47817",
        "ko": "62270"
    },
    "percentiles4": {
        "total": "54120",
        "ok": "52490",
        "ko": "63520"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 354,
    "percentage": 13
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 134,
    "percentage": 5
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 2096,
    "percentage": 78
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 104,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "26.88",
        "ok": "25.84",
        "ko": "1.04"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
