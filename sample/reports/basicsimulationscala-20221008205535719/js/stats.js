var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "8663",
        "ok": "5155",
        "ko": "3508"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "11",
        "ko": "1768"
    },
    "maxResponseTime": {
        "total": "63538",
        "ok": "60645",
        "ko": "63538"
    },
    "meanResponseTime": {
        "total": "19511",
        "ok": "16395",
        "ko": "24091"
    },
    "standardDeviation": {
        "total": "18364",
        "ok": "15413",
        "ko": "21178"
    },
    "percentiles1": {
        "total": "10011",
        "ok": "9563",
        "ko": "10012"
    },
    "percentiles2": {
        "total": "26444",
        "ok": "24290",
        "ko": "39154"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "49506",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "54145",
        "ko": "60011"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 245,
    "percentage": 3
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 86,
    "percentage": 1
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 4824,
    "percentage": 56
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3508,
    "percentage": 40
},
    "meanNumberOfRequestsPerSecond": {
        "total": "84.931",
        "ok": "50.539",
        "ko": "34.392"
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
        "ok": "2663",
        "ko": "3337"
    },
    "minResponseTime": {
        "total": "1768",
        "ok": "3302",
        "ko": "1768"
    },
    "maxResponseTime": {
        "total": "60332",
        "ok": "59801",
        "ko": "60332"
    },
    "meanResponseTime": {
        "total": "23094",
        "ok": "21777",
        "ko": "24145"
    },
    "standardDeviation": {
        "total": "19351",
        "ok": "16271",
        "ko": "21437"
    },
    "percentiles1": {
        "total": "10026",
        "ok": "15451",
        "ko": "10010"
    },
    "percentiles2": {
        "total": "37122",
        "ok": "36879",
        "ko": "55088"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "50701",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "56327",
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
    "count": 2663,
    "percentage": 44
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3337,
    "percentage": 56
},
    "meanNumberOfRequestsPerSecond": {
        "total": "58.824",
        "ok": "26.108",
        "ko": "32.716"
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
        "total": "2663",
        "ok": "2492",
        "ko": "171"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "11",
        "ko": "10115"
    },
    "maxResponseTime": {
        "total": "63538",
        "ok": "60645",
        "ko": "63538"
    },
    "meanResponseTime": {
        "total": "11440",
        "ok": "10644",
        "ko": "23038"
    },
    "standardDeviation": {
        "total": "12623",
        "ok": "12020",
        "ko": "15242"
    },
    "percentiles1": {
        "total": "4253",
        "ok": "3893",
        "ko": "13600"
    },
    "percentiles2": {
        "total": "19175",
        "ok": "18546",
        "ko": "31092"
    },
    "percentiles3": {
        "total": "33904",
        "ok": "29786",
        "ko": "62010"
    },
    "percentiles4": {
        "total": "51985",
        "ok": "50888",
        "ko": "63452"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 245,
    "percentage": 9
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 86,
    "percentage": 3
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 2161,
    "percentage": 81
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 171,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "26.108",
        "ok": "24.431",
        "ko": "1.676"
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
