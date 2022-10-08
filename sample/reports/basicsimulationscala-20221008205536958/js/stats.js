var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "8646",
        "ok": "5106",
        "ko": "3540"
    },
    "minResponseTime": {
        "total": "16",
        "ok": "16",
        "ko": "2147"
    },
    "maxResponseTime": {
        "total": "63447",
        "ok": "60589",
        "ko": "63447"
    },
    "meanResponseTime": {
        "total": "20222",
        "ok": "17523",
        "ko": "24117"
    },
    "standardDeviation": {
        "total": "18172",
        "ok": "15317",
        "ko": "21035"
    },
    "percentiles1": {
        "total": "10038",
        "ok": "12653",
        "ko": "10013"
    },
    "percentiles2": {
        "total": "27876",
        "ok": "26525",
        "ko": "38707"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "49422",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "60007",
        "ok": "54259",
        "ko": "60021"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 351,
    "percentage": 4
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 120,
    "percentage": 1
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 4635,
    "percentage": 54
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3540,
    "percentage": 41
},
    "meanNumberOfRequestsPerSecond": {
        "total": "86.46",
        "ok": "51.06",
        "ko": "35.4"
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
        "ok": "2646",
        "ko": "3354"
    },
    "minResponseTime": {
        "total": "2147",
        "ok": "4222",
        "ko": "2147"
    },
    "maxResponseTime": {
        "total": "60235",
        "ok": "59953",
        "ko": "60235"
    },
    "meanResponseTime": {
        "total": "23882",
        "ok": "23603",
        "ko": "24103"
    },
    "standardDeviation": {
        "total": "18929",
        "ok": "15433",
        "ko": "21283"
    },
    "percentiles1": {
        "total": "11714",
        "ok": "20928",
        "ko": "10011"
    },
    "percentiles2": {
        "total": "37121",
        "ok": "36953",
        "ko": "42808"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "50177",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "60008",
        "ok": "56175",
        "ko": "60013"
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
    "count": 2646,
    "percentage": 44
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3354,
    "percentage": 56
},
    "meanNumberOfRequestsPerSecond": {
        "total": "60",
        "ok": "26.46",
        "ko": "33.54"
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
        "total": "2646",
        "ok": "2460",
        "ko": "186"
    },
    "minResponseTime": {
        "total": "16",
        "ok": "16",
        "ko": "11138"
    },
    "maxResponseTime": {
        "total": "63447",
        "ok": "60589",
        "ko": "63447"
    },
    "meanResponseTime": {
        "total": "11923",
        "ok": "10982",
        "ko": "24372"
    },
    "standardDeviation": {
        "total": "12934",
        "ok": "12175",
        "ko": "15897"
    },
    "percentiles1": {
        "total": "5867",
        "ok": "4132",
        "ko": "13572"
    },
    "percentiles2": {
        "total": "19992",
        "ok": "19347",
        "ko": "34901"
    },
    "percentiles3": {
        "total": "35547",
        "ok": "29744",
        "ko": "62261"
    },
    "percentiles4": {
        "total": "54379",
        "ok": "52693",
        "ko": "63409"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 351,
    "percentage": 13
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 120,
    "percentage": 5
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 1989,
    "percentage": 75
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 186,
    "percentage": 7
},
    "meanNumberOfRequestsPerSecond": {
        "total": "26.46",
        "ok": "24.6",
        "ko": "1.86"
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