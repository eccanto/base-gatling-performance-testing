var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "8683",
        "ok": "5191",
        "ko": "3492"
    },
    "minResponseTime": {
        "total": "26",
        "ok": "26",
        "ko": "1509"
    },
    "maxResponseTime": {
        "total": "63503",
        "ok": "60756",
        "ko": "63503"
    },
    "meanResponseTime": {
        "total": "19641",
        "ok": "16634",
        "ko": "24111"
    },
    "standardDeviation": {
        "total": "18347",
        "ok": "15462",
        "ko": "21170"
    },
    "percentiles1": {
        "total": "10016",
        "ok": "10145",
        "ko": "10015"
    },
    "percentiles2": {
        "total": "27244",
        "ok": "24728",
        "ko": "40191"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "49444",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "56460",
        "ko": "60011"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 220,
    "percentage": 3
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 75,
    "percentage": 1
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 4896,
    "percentage": 56
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3492,
    "percentage": 40
},
    "meanNumberOfRequestsPerSecond": {
        "total": "85.127",
        "ok": "50.892",
        "ko": "34.235"
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
        "ok": "2683",
        "ko": "3317"
    },
    "minResponseTime": {
        "total": "1509",
        "ok": "1630",
        "ko": "1509"
    },
    "maxResponseTime": {
        "total": "60056",
        "ok": "59780",
        "ko": "60056"
    },
    "meanResponseTime": {
        "total": "23319",
        "ok": "22089",
        "ko": "24315"
    },
    "standardDeviation": {
        "total": "19448",
        "ok": "16476",
        "ko": "21502"
    },
    "percentiles1": {
        "total": "10091",
        "ok": "15678",
        "ko": "10012"
    },
    "percentiles2": {
        "total": "37470",
        "ok": "36953",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "50748",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "60007",
        "ok": "58836",
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
    "count": 2683,
    "percentage": 45
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3317,
    "percentage": 55
},
    "meanNumberOfRequestsPerSecond": {
        "total": "58.824",
        "ok": "26.304",
        "ko": "32.52"
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
        "total": "2683",
        "ok": "2508",
        "ko": "175"
    },
    "minResponseTime": {
        "total": "26",
        "ok": "26",
        "ko": "10014"
    },
    "maxResponseTime": {
        "total": "63503",
        "ok": "60756",
        "ko": "63503"
    },
    "meanResponseTime": {
        "total": "11414",
        "ok": "10798",
        "ko": "20249"
    },
    "standardDeviation": {
        "total": "12067",
        "ok": "11768",
        "ko": "12806"
    },
    "percentiles1": {
        "total": "5710",
        "ok": "4088",
        "ko": "13562"
    },
    "percentiles2": {
        "total": "19433",
        "ok": "19373",
        "ko": "30919"
    },
    "percentiles3": {
        "total": "30051",
        "ok": "29697",
        "ko": "41793"
    },
    "percentiles4": {
        "total": "52061",
        "ok": "50861",
        "ko": "63043"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 220,
    "percentage": 8
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 75,
    "percentage": 3
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 2213,
    "percentage": 82
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 175,
    "percentage": 7
},
    "meanNumberOfRequestsPerSecond": {
        "total": "26.304",
        "ok": "24.588",
        "ko": "1.716"
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
