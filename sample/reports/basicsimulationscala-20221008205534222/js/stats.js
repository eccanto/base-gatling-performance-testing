var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "8718",
        "ok": "5280",
        "ko": "3438"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "7",
        "ko": "2120"
    },
    "maxResponseTime": {
        "total": "63792",
        "ok": "60708",
        "ko": "63792"
    },
    "meanResponseTime": {
        "total": "19508",
        "ok": "16110",
        "ko": "24725"
    },
    "standardDeviation": {
        "total": "18602",
        "ok": "15529",
        "ko": "21497"
    },
    "percentiles1": {
        "total": "10014",
        "ok": "9100",
        "ko": "10019"
    },
    "percentiles2": {
        "total": "26600",
        "ok": "23678",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "49563",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "60007",
        "ok": "54225",
        "ko": "60019"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 179,
    "percentage": 2
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 47,
    "percentage": 1
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 5054,
    "percentage": 58
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3438,
    "percentage": 39
},
    "meanNumberOfRequestsPerSecond": {
        "total": "84.641",
        "ok": "51.262",
        "ko": "33.379"
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
        "ok": "2718",
        "ko": "3282"
    },
    "minResponseTime": {
        "total": "25",
        "ok": "25",
        "ko": "2120"
    },
    "maxResponseTime": {
        "total": "60387",
        "ok": "59951",
        "ko": "60387"
    },
    "meanResponseTime": {
        "total": "22779",
        "ok": "20771",
        "ko": "24442"
    },
    "standardDeviation": {
        "total": "19562",
        "ok": "16552",
        "ko": "21600"
    },
    "percentiles1": {
        "total": "10058",
        "ok": "13722",
        "ko": "10015"
    },
    "percentiles2": {
        "total": "37340",
        "ok": "36542",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "50330",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "58621",
        "ko": "60008"
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
    "count": 2702,
    "percentage": 45
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3282,
    "percentage": 55
},
    "meanNumberOfRequestsPerSecond": {
        "total": "58.252",
        "ok": "26.388",
        "ko": "31.864"
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
        "total": "2718",
        "ok": "2562",
        "ko": "156"
    },
    "minResponseTime": {
        "total": "7",
        "ok": "7",
        "ko": "11272"
    },
    "maxResponseTime": {
        "total": "63792",
        "ok": "60708",
        "ko": "63792"
    },
    "meanResponseTime": {
        "total": "12285",
        "ok": "11165",
        "ko": "30679"
    },
    "standardDeviation": {
        "total": "13761",
        "ok": "12602",
        "ko": "18218"
    },
    "percentiles1": {
        "total": "4482",
        "ok": "4009",
        "ko": "30084"
    },
    "percentiles2": {
        "total": "20097",
        "ok": "19032",
        "ko": "38808"
    },
    "percentiles3": {
        "total": "45879",
        "ok": "42043",
        "ko": "63119"
    },
    "percentiles4": {
        "total": "61409",
        "ok": "53005",
        "ko": "63469"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 163,
    "percentage": 6
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 47,
    "percentage": 2
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 2352,
    "percentage": 87
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 156,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "26.388",
        "ok": "24.874",
        "ko": "1.515"
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
