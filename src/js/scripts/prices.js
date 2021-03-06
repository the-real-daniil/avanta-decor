const plintusTree = {
    oak: {
        12: {
            70: 250,
            80: 288,
            90: 300,
            100: 330,
            120: 382,
        },
        14: {
            70: 294,
            80: 336,
            90: 350,
            100: 385,
            120: 446,
        },
        16: {
            70: 336,
            80: 384,
            90: 400,
            100: 440,
            120: 510,
        },
        18: {
            70: 378,
            80: 432,
            90: 450,
            100: 495,
            120: 573,
        },
        20: {
            70: 450,
            80: 480,
            90: 500,
            100: 550,
            120: 640,
        },
        22: {
            70: 462,
            80: 528,
            90: 550,
            100: 605,
            120: 700,
        },
    },
    ash: {
        12: {
            70: 274,
            80: 288,
            90: 300,
            100: 315,
            120: 330,
        },
        14: {
            70: 320,
            80: 336,
            90: 350,
            100: 367,
            120: 385,
        },
        16: {
            70: 365,
            80: 384,
            90: 400,
            100: 420,
            120: 440,
        },
        18: {
            70: 411,
            80: 432,
            90: 450,
            100: 472,
            120: 495,
        },
        20: {
            70: 457,
            80: 480,
            90: 500,
            100: 525,
            120: 550,
        },
        22: {
            70: 500,
            80: 528,
            90: 550,
            100: 577,
            120: 605,
        },
    },
    beech: {
        12: {
            70: 158,
            80: 175,
            90: 195,
            100: 210,
            120: 239,
        },
        14: {
            70: 184,
            80: 205,
            90: 227,
            100: 245,
            120: 278,
        },
        16: {
            70: 211,
            80: 235,
            90: 260,
            100: 280,
            120: 318,
        },
        18: {
            70: 237,
            80: 266,
            90: 292,
            100: 315,
            120: 358,
        },
        20: {
            70: 264,
            80: 295,
            90: 325,
            100: 350,
            120: 398,
        },
        22: {
            70: 290,
            80: 325,
            90: 355,
            100: 385,
            120: 438,
        },
    },
}
const plintusMDF = { // временно категории уходят, поэтому все цены на МДФ в dyed
    finish: {
        10: {
            70: 88,
            80: 98,
            100: 125,
            120: 153,
            150: 183,
        },
        12: {
            70: 105,
            80: 119,
            100: 205,
            120: 255,
            150: 305,
        },
        16: {
            70: 106,
            80: 156,
            100: 206,
            120: 256,
            150: 306,
        },
        18: {
            70: 103,
            80: 153,
            100: 203,
            120: 253,
            150: 303,
        },
    },
    veneer: {
        10: {
            70: 100,
            80: 150,
            100: 200,
            120: 250,
            150: 300,
        },
        12: {
            70: 105,
            80: 155,
            100: 205,
            120: 255,
            150: 305,
        },
        16: {
            70: 106,
            80: 156,
            100: 206,
            120: 256,
            150: 306,
        },
        18: {
            70: 103,
            80: 153,
            100: 203,
            120: 253,
            150: 303,
        },
    },
    dyed: {
        10: {
            70: 88,
            80: 98,
            100: 125,
            120: 153,
            150: 183,
        },
        12: {
            70: 105,
            80: 119,
            100: 149,
            120: 179,
            150: 219,
        },
        16: {
            70: 149,
            80: 167,
            100: 213,
            120: 255,
            150: 318,
        },
        18: {
            70: 163,
            80: 183,
            100: 231,
            120: 279,
            150: 338,
        },
    }
}
const rakeTree = {
    oak: {
        20: {
            30: 140,
            40: 160,
            50: 190,
            60: 210,
        },
        25: {
            30: 175,
            40: 200,
            50: 238,
            60: 270,
        },
        40: {
            30: 280,
            40: 320,
            50: 380,
            60: 432,
        },
        45: {
            30: 315,
            40: 360,
            50: 428,
            60: 486,
        },
    },
    ash: {
        20: {
            30: 130,
            40: 150,
            50: 180,
            60: 200,
        },
        25: {
            30: 162,
            40: 188,
            50: 225,
            60: 250,
        },
        40: {
            30: 260,
            40: 300,
            50: 360,
            60: 400,
        },
        45: {
            30: 290,
            40: 338,
            50: 405,
            60: 455,
        },
    },
    beech: {
        20: {
            30: 100,
            40: 120,
            50: 150,
            60: 180,
        },
        25: {
            30: 125,
            40: 150,
            50: 187,
            60: 225,
        },
        40: {
            30: 200,
            40: 240,
            50: 300,
            60: 360,
        },
        45: {
            30: 225,
            40: 270,
            50: 338,
            60: 405,
        },
    },
}
const rakeMDF = { // временно категории уходят, поэтому все цены на МДФ в dyed
    finish: {
        10: {
            70: 88,
            80: 98,
            100: 125,
            120: 153,
            150: 183,
        },
        12: {
            70: 105,
            80: 119,
            100: 205,
            120: 255,
            150: 305,
        },
        16: {
            70: 106,
            80: 156,
            100: 206,
            120: 256,
            150: 306,
        },
        18: {
            70: 103,
            80: 153,
            100: 203,
            120: 253,
            150: 303,
        },
    },
    veneer: {
        10: {
            70: 100,
            80: 150,
            100: 200,
            120: 250,
            150: 300,
        },
        12: {
            70: 105,
            80: 155,
            100: 205,
            120: 255,
            150: 305,
        },
        16: {
            70: 106,
            80: 156,
            100: 206,
            120: 256,
            150: 306,
        },
        18: {
            70: 103,
            80: 153,
            100: 203,
            120: 253,
            150: 303,
        },
    },
    dyed: {
        20: {
            20: 129,
            30: 139,
            40: 149,
            50: 163,
            60: 199,
            80: 259,
            90: 318,
            100: 338,
        },
        25: {
            20: 149,
            30: 169,
            40: 179,
            50: 199,
            60: 239,
            80: 308,
            90: 368,
            100: 388,
        },
        30: {
            20: 159,
            30: 179,
            40: 199,
            50: 219,
            60: 259,
            80: 338,
            90: 408,
            100: 428,
        },
        40: {
            20: 338,
            30: 368,
            40: 388,
            50: 418,
            60: 517,
            80: 677,
            90: 828,
            100: 880,
        },
        50: {
            20: 388,
            30: 438,
            40: 466,
            50: 517,
            60: 621,
            80: 806,
            90: 955,
            100: 1009,
        },
    }
}
const trimTree = {
    oak: {
        12: {
            60: 252,
            70: 270,
            80: 288,
            90: 300,
            100: 330,
        },
        14: {
            60: 294,
            70: 315,
            80: 336,
            90: 350,
            100: 385,
        },
        16: {
            60: 336,
            70: 360,
            80: 384,
            90: 400,
            100: 440,
        },
        20: {
            60: 420,
            70: 450,
            80: 480,
            90: 500,
            100: 550,
        },
    },
    ash: {
        10: {
            60: 216,
            70: 228,
            80: 240,
            90: 250,
            100: 262,
        },
        12: {
            60: 260,
            70: 274,
            80: 288,
            90: 300,
            100: 315,
        },
        16: {
            60: 346,
            70: 356,
            80: 384,
            90: 400,
            100: 420,
        },
        18: {
            60: 390,
            70: 411,
            80: 432,
            90: 450,
            100: 472,
        },
    },
    beech: {
        10: {
            60: 115,
            70: 131,
            80: 145,
            90: 162,
            100: 262,
        },
        12: {
            60: 138,
            70: 158,
            80: 175,
            90: 195,
            100: 315,
        },
        16: {
            60: 184,
            70: 210,
            80: 233,
            90: 260,
            100: 420,
        },
        18: {
            60: 207,
            70: 237,
            80: 262,
            90: 292,
            100: 472,
        },
    },
}
const trimMDF = { // временно категории уходят, поэтому все цены на МДФ в dyed
    finish: {
        10: {
            70: 88,
            80: 98,
            100: 125,
            120: 153,
            150: 183,
        },
        12: {
            70: 105,
            80: 119,
            100: 205,
            120: 255,
            150: 305,
        },
        16: {
            70: 106,
            80: 156,
            100: 206,
            120: 256,
            150: 306,
        },
        18: {
            70: 103,
            80: 153,
            100: 203,
            120: 253,
            150: 303,
        },
    },
    veneer: {
        10: {
            70: 100,
            80: 150,
            100: 200,
            120: 250,
            150: 300,
        },
        12: {
            70: 105,
            80: 155,
            100: 205,
            120: 255,
            150: 305,
        },
        16: {
            70: 106,
            80: 156,
            100: 206,
            120: 256,
            150: 306,
        },
        18: {
            70: 103,
            80: 153,
            100: 203,
            120: 253,
            150: 303,
        },
    },
    dyed: {
        10: {
            60: 438,
            70: 478,
            80: 517,
            90: 537,
            100: 557,
        },
        12: {
            60: 478,
            70: 517,
            80: 557,
            90: 577,
            100: 597,
        },
        16: {
            60: 517,
            70: 537,
            80: 577,
            90: 617,
            100: 637,
        },
        18: {
            60: 557,
            70: 557,
            80: 617,
            90: 657,
            100: 677,
        },
    }
}

const getItemFromTree = (tree, keys, idx = 0) => {
    if (idx === keys.length - 1 || tree[keys[idx]] === undefined) {
        return tree[keys[idx]]
    } else {
        return getItemFromTree(tree[keys[idx]], keys, ++idx)
    }
}