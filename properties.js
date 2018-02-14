define(["jquery","underscore","qlik","qvangular","./lib/js/components/pp-cl-about/pp-cl-about"],function(a,b,c,d){var e=d.getService("$q"),f=c.currApp(),g=function(){var a=e.defer();return f.getAppObjectList(function(c){var d=[],e=b.sortBy(c.qAppObjectList.qItems,function(a){return a.qData.rank});return b.each(e,function(a){d.push({value:a.qInfo.qId,label:a.qMeta.title})}),a.resolve(d)}),a.promise},h={uses:"dimensions",min:3,max:4},i={uses:"measures",min:1,max:1},j={uses:"sorting"},k={type:"items",component:"expandable-items",translation:"properties.addons",items:{dataHandling:{uses:"dataHandling"}}},l={component:"pp-cl-cards",translation:"Common.About",show:!0},m={ref:"props.selectOneAndGoto",label:"Selection mode",type:"boolean",component:"switch",defaultValue:!1,options:[{value:!0,label:"Select and goto sheet"},{value:!1,label:"Selection"}]},n={type:"string",component:"dropdown",label:"Select Sheet",ref:"props.selectedSheet",options:function(){return g().then(function(a){return a})},show:function(a){return a.props.selectOneAndGoto}},o={type:"string",component:"dropdown",label:"Action before nav",ref:"props.actionBeforeNavigation",defaultValue:"none",options:[{value:"none",label:"None"},{value:"selectValueInField",label:"Select value in field"},{value:"selectValuesInField",label:"Select values in field"},{value:"setVariable",label:"Set variable"}],show:function(a){return a.props.selectOneAndGoto}},p={ref:"props.field",label:"Field",type:"string",expression:"optional",show:function(a){return a.props.selectOneAndGoto&&("selectValueInField"===a.props.actionBeforeNavigation||"selectValuesInField"===a.props.actionBeforeNavigation)}},q={ref:"props.value",label:"Value",type:"string",expression:"optional",show:function(a){return a.props.selectOneAndGoto&&"selectValueInField"===a.props.actionBeforeNavigation}},r={ref:"props.values",label:"Values",type:"string",expression:"optional",show:function(a){return a.props.selectOneAndGoto&&"selectValuesInField"===a.props.actionBeforeNavigation}},s={ref:"props.variable",label:"Variable",type:"string",expression:"optional",show:function(a){return a.props.selectOneAndGoto&&"setVariable"===a.props.actionBeforeNavigation}},t={ref:"props.variableValue",label:"Variable",type:"string",expression:"optional",show:function(a){return a.props.selectOneAndGoto&&"setVariable"===a.props.actionBeforeNavigation}},u={ref:"props.hideRank",label:"Hide Rank",type:"boolean",defaultValue:!1,options:[{value:!0,label:"Yes"},{value:!1,label:"No"}]},v={ref:"props.hideMeasureLabel",label:"Hide Measure Label",type:"boolean",defaultValue:!1,options:[{value:!0,label:"Yes"},{value:!1,label:"No"}]},w={label:"Selection mode",type:"items",items:{selectOneAndGoto:m,sheetList:n,actionBeforeNavigation:o,field:p,value:q,values:r,variable:s,variableValue:t}},x={type:"string",component:"dropdown",label:"Layout Mode",ref:"props.layoutMode",defaultValue:"MEDIUM",options:[{value:"SMALL",label:"Small"},{value:"MEDIUM",label:"Medium"},{value:"LARGE",label:"Large"}]},y={type:"string",component:"dropdown",label:"Image Layout",ref:"props.imageLayout",defaultValue:"LANDSCAPE",options:[{value:"LANDSCAPE",label:"Landscape"},{value:"SQUARE",label:"Square"},{value:"PORTRAIT",label:"Portrait"}]},z={type:"string",component:"dropdown",label:"Image Size Mode",ref:"props.imageSizeMode",defaultValue:"CONTAIN",options:[{value:"CONTAIN",label:"Contain"},{value:"COVER",label:"Cover"},{value:"FILL",label:"Fill"}]},A={label:"Cards Layout",type:"items",items:{layoutMode:x,imageLayout:y,imageSizeMode:z,hideRank:u,hideMeasureLabel:v}},B={uses:"settings",items:{layoutPanel:A,selectionPanel:w,initFetchRows:{ref:"qHyperCubeDef.qInitialDataFetch.0.qHeight",label:"Initial fetch rows",type:"number",defaultValue:20}}};return{type:"items",component:"accordion",items:{dimensions:h,measures:i,sorting:j,addons:k,appearance:B,about:l}}});