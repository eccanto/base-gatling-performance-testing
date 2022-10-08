var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "8709",
        "ok": "5252",
        "ko": "3457"
    },
    "minResponseTime": {
        "total": "17",
        "ok": "17",
        "ko": "2422"
    },
    "maxResponseTime": {
        "total": "63677",
        "ok": "59785",
        "ko": "63677"
    },
    "meanResponseTime": {
        "total": "19811",
        "ok": "17407",
        "ko": "23463"
    },
    "standardDeviation": {
        "total": "17928",
        "ok": "15349",
        "ko": "20729"
    },
    "percentiles1": {
        "total": "10018",
        "ok": "12135",
        "ko": "10011"
    },
    "percentiles2": {
        "total": "27414",
        "ok": "26282",
        "ko": "32305"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "49306",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "60004",
        "ok": "53952",
        "ko": "60008"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 315,
    "percentage": 4
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 114,
    "percentage": 1
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 4823,
    "percentage": 55
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3457,
    "percentage": 40
},
    "meanNumberOfRequestsPerSecond": {
        "total": "87.09",
        "ok": "52.52",
        "ko": "34.57"
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
        "ok": "2709",
        "ko": "3291"
    },
    "minResponseTime": {
        "total": "2422",
        "ok": "4210",
        "ko": "2422"
    },
    "maxResponseTime": {
        "total": "60043",
        "ok": "59785",
        "ko": "60043"
    },
    "meanResponseTime": {
        "total": "23395",
        "ok": "23247",
        "ko": "23516"
    },
    "standardDeviation": {
        "total": "18770",
        "ok": "15639",
        "ko": "21000"
    },
    "percentiles1": {
        "total": "10471",
        "ok": "20739",
        "ko": "10009"
    },
    "percentiles2": {
        "total": "36869",
        "ok": "37115",
        "ko": "32794"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "50130",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "60005",
        "ok": "54553",
        "ko": "60007"
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
    "count": 2709,
    "percentage": 45
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3291,
    "percentage": 55
},
    "meanNumberOfRequestsPerSecond": {
        "total": "60",
        "ok": "27.09",
        "ko": "32.91"
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
        "total": "2709",
        "ok": "2543",
        "ko": "166"
    },
    "minResponseTime": {
        "total": "17",
        "ok": "17",
        "ko": "11265"
    },
    "maxResponseTime": {
        "total": "63677",
        "ok": "58326",
        "ko": "63677"
    },
    "meanResponseTime": {
        "total": "11873",
        "ok": "11186",
        "ko": "22407"
    },
    "standardDeviation": {
        "total": "12710",
        "ok": "12288",
        "ko": "14307"
    },
    "percentiles1": {
        "total": "5925",
        "ok": "4253",
        "ko": "13616"
    },
    "percentiles2": {
        "total": "20264",
        "ok": "19672",
        "ko": "30325"
    },
    "percentiles3": {
        "total": "34970",
        "ok": "29795",
        "ko": "57596"
    },
    "percentiles4": {
        "total": "51121",
        "ok": "50891",
        "ko": "63432"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 315,
    "percentage": 12
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 114,
    "percentage": 4
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 2114,
    "percentage": 78
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 166,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "27.09",
        "ok": "25.43",
        "ko": "1.66"
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
