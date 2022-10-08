var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "8790",
        "ok": "5431",
        "ko": "3359"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "13",
        "ko": "1005"
    },
    "maxResponseTime": {
        "total": "63179",
        "ok": "60791",
        "ko": "63179"
    },
    "meanResponseTime": {
        "total": "19310",
        "ok": "15864",
        "ko": "24881"
    },
    "standardDeviation": {
        "total": "18436",
        "ok": "15340",
        "ko": "21417"
    },
    "percentiles1": {
        "total": "10012",
        "ok": "9065",
        "ko": "10016"
    },
    "percentiles2": {
        "total": "26905",
        "ok": "23911",
        "ko": "56436"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "49094",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "60005",
        "ok": "54056",
        "ko": "60010"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 210,
    "percentage": 2
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 64,
    "percentage": 1
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 5157,
    "percentage": 59
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3359,
    "percentage": 38
},
    "meanNumberOfRequestsPerSecond": {
        "total": "84.519",
        "ok": "52.221",
        "ko": "32.298"
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
        "ok": "2790",
        "ko": "3210"
    },
    "minResponseTime": {
        "total": "146",
        "ok": "146",
        "ko": "1005"
    },
    "maxResponseTime": {
        "total": "60063",
        "ok": "59937",
        "ko": "60063"
    },
    "meanResponseTime": {
        "total": "22844",
        "ok": "20532",
        "ko": "24853"
    },
    "standardDeviation": {
        "total": "19558",
        "ok": "16454",
        "ko": "21702"
    },
    "percentiles1": {
        "total": "10044",
        "ok": "13668",
        "ko": "10014"
    },
    "percentiles2": {
        "total": "37361",
        "ok": "36481",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "50150",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "58704",
        "ko": "60009"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 16,
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
    "count": 2774,
    "percentage": 46
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3210,
    "percentage": 54
},
    "meanNumberOfRequestsPerSecond": {
        "total": "57.692",
        "ok": "26.827",
        "ko": "30.865"
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
        "total": "2790",
        "ok": "2641",
        "ko": "149"
    },
    "minResponseTime": {
        "total": "13",
        "ok": "13",
        "ko": "11144"
    },
    "maxResponseTime": {
        "total": "63179",
        "ok": "60791",
        "ko": "63179"
    },
    "meanResponseTime": {
        "total": "11710",
        "ok": "10933",
        "ko": "25486"
    },
    "standardDeviation": {
        "total": "12789",
        "ok": "12270",
        "ko": "13912"
    },
    "percentiles1": {
        "total": "4218",
        "ok": "3884",
        "ko": "13902"
    },
    "percentiles2": {
        "total": "20035",
        "ok": "19068",
        "ko": "36145"
    },
    "percentiles3": {
        "total": "39027",
        "ok": "29957",
        "ko": "45108"
    },
    "percentiles4": {
        "total": "51264",
        "ok": "50936",
        "ko": "62599"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 194,
    "percentage": 7
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 64,
    "percentage": 2
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 2383,
    "percentage": 85
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 149,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "26.827",
        "ok": "25.394",
        "ko": "1.433"
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
