define([],function(){"use strict";var a={uses:"dimensions",min:3,max:4},b={uses:"measures",min:1,max:1},c={uses:"sorting"},d={type:"items",component:"expandable-items",translation:"properties.addons",items:{dataHandling:{uses:"dataHandling"}}},e={type:"string",component:"dropdown",label:"Layout Mode",ref:"props.layoutMode",defaultValue:"MEDIUM",options:[{value:"SMALL",label:"Small"},{value:"MEDIUM",label:"Medium"},{value:"LARGE",label:"Large"}]},f={type:"string",component:"dropdown",label:"Image Layout",ref:"props.imageLayout",defaultValue:"LANDSCAPE",options:[{value:"LANDSCAPE",label:"Landscape"},{value:"SQUARE",label:"Square"},{value:"PORTRAIT",label:"Portrait"}]},g={type:"string",component:"dropdown",label:"Image Size Mode",ref:"props.imageSizeMode",defaultValue:"CONTAIN",options:[{value:"CONTAIN",label:"Contain"},{value:"COVER",label:"Cover"},{value:"FILL",label:"Fill"}]},h={uses:"settings",items:{layoutMode:e,imageLayout:f,imageSizeMode:g,initFetchRows:{ref:"qHyperCubeDef.qInitialDataFetch.0.qHeight",label:"Initial fetch rows",type:"number",defaultValue:20}}};return{type:"items",component:"accordion",items:{dimensions:a,measures:b,sorting:c,addons:d,appearance:h}}});