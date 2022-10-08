var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "87132",
        "ok": "52706",
        "ko": "34426"
    },
    "minResponseTime": {
        "total": "6",
        "ok": "6",
        "ko": "1005"
    },
    "maxResponseTime": {
        "total": "63802",
        "ok": "60791",
        "ko": "63802"
    },
    "meanResponseTime": {
        "total": "19650",
        "ok": "16724",
        "ko": "24129"
    },
    "standardDeviation": {
        "total": "18315",
        "ok": "15505",
        "ko": "21162"
    },
    "percentiles1": {
        "total": "10015",
        "ok": "10294",
        "ko": "10014"
    },
    "percentiles2": {
        "total": "27160",
        "ok": "25009",
        "ko": "39642"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "49497",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "54300",
        "ko": "60012"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2623,
    "percentage": 3
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 925,
    "percentage": 1
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 49158,
    "percentage": 56
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 34426,
    "percentage": 40
},
    "meanNumberOfRequestsPerSecond": {
        "total": "837.808",
        "ok": "506.788",
        "ko": "331.019"
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
        "total": "60000",
        "ok": "27132",
        "ko": "32868"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "1005"
    },
    "maxResponseTime": {
        "total": "60387",
        "ok": "59953",
        "ko": "60387"
    },
    "meanResponseTime": {
        "total": "23215",
        "ok": "22083",
        "ko": "24150"
    },
    "standardDeviation": {
        "total": "19281",
        "ok": "16283",
        "ko": "21397"
    },
    "percentiles1": {
        "total": "10115",
        "ok": "15778",
        "ko": "10012"
    },
    "percentiles2": {
        "total": "37181",
        "ok": "36896",
        "ko": "52163"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "50390",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "60007",
        "ok": "58237",
        "ko": "60010"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 104,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 34,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 26994,
    "percentage": 45
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 32868,
    "percentage": 55
},
    "meanNumberOfRequestsPerSecond": {
        "total": "576.923",
        "ok": "260.885",
        "ko": "316.038"
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
        "total": "27132",
        "ok": "25574",
        "ko": "1558"
    },
    "minResponseTime": {
        "total": "6",
        "ok": "6",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "63802",
        "ok": "60791",
        "ko": "63802"
    },
    "meanResponseTime": {
        "total": "11766",
        "ok": "11039",
        "ko": "23701"
    },
    "standardDeviation": {
        "total": "12842",
        "ok": "12304",
        "ko": "15369"
    },
    "percentiles1": {
        "total": "4867",
        "ok": "4081",
        "ko": "13598"
    },
    "percentiles2": {
        "total": "19668",
        "ok": "19131",
        "ko": "33777"
    },
    "percentiles3": {
        "total": "38418",
        "ok": "29815",
        "ko": "62126"
    },
    "percentiles4": {
        "total": "53047",
        "ok": "51891",
        "ko": "63450"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 2519,
    "percentage": 9
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 891,
    "percentage": 3
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 22164,
    "percentage": 82
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1558,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "260.885",
        "ok": "245.904",
        "ko": "14.981"
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