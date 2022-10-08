var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "8787",
        "ok": "5434",
        "ko": "3353"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "1958"
    },
    "maxResponseTime": {
        "total": "63802",
        "ok": "59814",
        "ko": "63802"
    },
    "meanResponseTime": {
        "total": "19361",
        "ok": "15951",
        "ko": "24888"
    },
    "standardDeviation": {
        "total": "18566",
        "ok": "15470",
        "ko": "21590"
    },
    "percentiles1": {
        "total": "10012",
        "ok": "9091",
        "ko": "10016"
    },
    "percentiles2": {
        "total": "26881",
        "ok": "23737",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "49450",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "60007",
        "ok": "54273",
        "ko": "60015"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 261,
    "percentage": 3
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 115,
    "percentage": 1
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 5058,
    "percentage": 58
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3353,
    "percentage": 38
},
    "meanNumberOfRequestsPerSecond": {
        "total": "84.49",
        "ok": "52.25",
        "ko": "32.24"
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
        "ok": "2787",
        "ko": "3213"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "1958"
    },
    "maxResponseTime": {
        "total": "60058",
        "ok": "59814",
        "ko": "60058"
    },
    "meanResponseTime": {
        "total": "22878",
        "ok": "20751",
        "ko": "24724"
    },
    "standardDeviation": {
        "total": "19616",
        "ok": "16641",
        "ko": "21704"
    },
    "percentiles1": {
        "total": "10060",
        "ok": "13814",
        "ko": "10013"
    },
    "percentiles2": {
        "total": "37410",
        "ok": "36855",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "50297",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "60007",
        "ok": "56443",
        "ko": "60010"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 47,
    "percentage": 1
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 34,
    "percentage": 1
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 2706,
    "percentage": 45
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3213,
    "percentage": 54
},
    "meanNumberOfRequestsPerSecond": {
        "total": "57.692",
        "ok": "26.798",
        "ko": "30.894"
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
        "total": "2787",
        "ok": "2647",
        "ko": "140"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "12",
        "ko": "11368"
    },
    "maxResponseTime": {
        "total": "63802",
        "ok": "57395",
        "ko": "63802"
    },
    "meanResponseTime": {
        "total": "11790",
        "ok": "10897",
        "ko": "28666"
    },
    "standardDeviation": {
        "total": "13208",
        "ok": "12244",
        "ko": "18392"
    },
    "percentiles1": {
        "total": "4416",
        "ok": "3966",
        "ko": "14080"
    },
    "percentiles2": {
        "total": "19411",
        "ok": "18981",
        "ko": "38666"
    },
    "percentiles3": {
        "total": "42214",
        "ok": "29795",
        "ko": "62321"
    },
    "percentiles4": {
        "total": "56482",
        "ok": "51829",
        "ko": "63677"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 214,
    "percentage": 8
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 81,
    "percentage": 3
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 2352,
    "percentage": 84
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 140,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "26.798",
        "ok": "25.452",
        "ko": "1.346"
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