var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "8770",
        "ok": "5396",
        "ko": "3374"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "1278"
    },
    "maxResponseTime": {
        "total": "63476",
        "ok": "59793",
        "ko": "63476"
    },
    "meanResponseTime": {
        "total": "19412",
        "ok": "16467",
        "ko": "24122"
    },
    "standardDeviation": {
        "total": "18434",
        "ok": "15748",
        "ko": "21228"
    },
    "percentiles1": {
        "total": "10013",
        "ok": "9429",
        "ko": "10014"
    },
    "percentiles2": {
        "total": "26940",
        "ok": "24535",
        "ko": "39227"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "49727",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60004",
        "ok": "54564",
        "ko": "60009"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 252,
    "percentage": 3
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 77,
    "percentage": 1
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 5067,
    "percentage": 58
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3374,
    "percentage": 38
},
    "meanNumberOfRequestsPerSecond": {
        "total": "85.146",
        "ok": "52.388",
        "ko": "32.757"
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
        "ok": "2770",
        "ko": "3230"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "1278"
    },
    "maxResponseTime": {
        "total": "60033",
        "ok": "59793",
        "ko": "60033"
    },
    "meanResponseTime": {
        "total": "23070",
        "ok": "21584",
        "ko": "24344"
    },
    "standardDeviation": {
        "total": "19539",
        "ok": "16801",
        "ko": "21531"
    },
    "percentiles1": {
        "total": "10036",
        "ok": "15249",
        "ko": "10012"
    },
    "percentiles2": {
        "total": "37574",
        "ok": "37228",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "50784",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "58816",
        "ko": "60009"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 25,
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
    "count": 2745,
    "percentage": 46
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3230,
    "percentage": 54
},
    "meanNumberOfRequestsPerSecond": {
        "total": "58.252",
        "ok": "26.893",
        "ko": "31.359"
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
        "total": "2770",
        "ok": "2626",
        "ko": "144"
    },
    "minResponseTime": {
        "total": "10",
        "ok": "10",
        "ko": "10894"
    },
    "maxResponseTime": {
        "total": "63476",
        "ok": "59370",
        "ko": "63476"
    },
    "meanResponseTime": {
        "total": "11490",
        "ok": "11070",
        "ko": "19138"
    },
    "standardDeviation": {
        "total": "12537",
        "ok": "12454",
        "ko": "11548"
    },
    "percentiles1": {
        "total": "4603",
        "ok": "4041",
        "ko": "13462"
    },
    "percentiles2": {
        "total": "19118",
        "ok": "19091",
        "ko": "28765"
    },
    "percentiles3": {
        "total": "35601",
        "ok": "29808",
        "ko": "38997"
    },
    "percentiles4": {
        "total": "51850",
        "ok": "51729",
        "ko": "63292"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 227,
    "percentage": 8
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 77,
    "percentage": 3
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 2322,
    "percentage": 84
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 144,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "26.893",
        "ok": "25.495",
        "ko": "1.398"
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
