var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "8678",
        "ok": "5189",
        "ko": "3489"
    },
    "minResponseTime": {
        "total": "6",
        "ok": "6",
        "ko": "2310"
    },
    "maxResponseTime": {
        "total": "60650",
        "ok": "60650",
        "ko": "60058"
    },
    "meanResponseTime": {
        "total": "19530",
        "ok": "16713",
        "ko": "23720"
    },
    "standardDeviation": {
        "total": "18107",
        "ok": "15267",
        "ko": "20963"
    },
    "percentiles1": {
        "total": "10019",
        "ok": "10238",
        "ko": "10017"
    },
    "percentiles2": {
        "total": "26293",
        "ok": "24553",
        "ko": "33753"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "49263",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60005",
        "ok": "54396",
        "ko": "60010"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 236,
    "percentage": 3
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 93,
    "percentage": 1
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 4860,
    "percentage": 56
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3489,
    "percentage": 40
},
    "meanNumberOfRequestsPerSecond": {
        "total": "85.921",
        "ok": "51.376",
        "ko": "34.545"
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
        "ok": "2678",
        "ko": "3322"
    },
    "minResponseTime": {
        "total": "2310",
        "ok": "3897",
        "ko": "2310"
    },
    "maxResponseTime": {
        "total": "60058",
        "ok": "59772",
        "ko": "60058"
    },
    "meanResponseTime": {
        "total": "23215",
        "ok": "22201",
        "ko": "24033"
    },
    "standardDeviation": {
        "total": "19207",
        "ok": "16119",
        "ko": "21340"
    },
    "percentiles1": {
        "total": "10115",
        "ok": "15779",
        "ko": "10014"
    },
    "percentiles2": {
        "total": "36859",
        "ok": "36803",
        "ko": "43883"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "50348",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60007",
        "ok": "58621",
        "ko": "60010"
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
    "count": 2678,
    "percentage": 45
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3322,
    "percentage": 55
},
    "meanNumberOfRequestsPerSecond": {
        "total": "59.406",
        "ok": "26.515",
        "ko": "32.891"
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
        "total": "2678",
        "ok": "2511",
        "ko": "167"
    },
    "minResponseTime": {
        "total": "6",
        "ok": "6",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60650",
        "ok": "60650",
        "ko": "40938"
    },
    "meanResponseTime": {
        "total": "11274",
        "ok": "10860",
        "ko": "17491"
    },
    "standardDeviation": {
        "total": "11715",
        "ok": "11756",
        "ko": "9035"
    },
    "percentiles1": {
        "total": "5731",
        "ok": "4135",
        "ko": "13142"
    },
    "percentiles2": {
        "total": "18695",
        "ok": "18713",
        "ko": "13672"
    },
    "percentiles3": {
        "total": "30912",
        "ok": "29753",
        "ko": "37700"
    },
    "percentiles4": {
        "total": "51093",
        "ok": "51309",
        "ko": "40791"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 236,
    "percentage": 9
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 93,
    "percentage": 3
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 2182,
    "percentage": 81
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 167,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "26.515",
        "ok": "24.861",
        "ko": "1.653"
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
