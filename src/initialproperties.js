/*global define*/
define( [], function () {
    'use strict';
    return {
        props: {
            layoutMode: "MEDIUM",
            imageLayout: "LANDSCAPE",
            imageSizeMode: "CONTAIN",
        },
        qHyperCubeDef: {
            qDimensions: [],
            qMeasures: [],
            qInitialDataFetch: [
                {
                    qWidth: 5,
                    qHeight: 50
                }
            ]
        }
    };
} );
