define(["jquery","underscore","qlik","ng!$q","ng!$http","./lib/js/components/pp-cl-about/pp-cl-about"],function(a,b,c,d){var e=c.currApp(),f=function(){var a=d.defer();return e.getAppObjectList(function(c){var d=[],e=b.sortBy(c.qAppObjectList.qItems,function(a){return a.qData.rank});return b.each(e,function(a){d.push({value:a.qInfo.qId,label:a.qMeta.title})}),a.resolve(d)}),a.promise},g={uses:"dimensions",min:3,max:4},h={uses:"measures",min:1,max:1},i={uses:"sorting"},j={type:"items",component:"expandable-items",translation:"properties.addons",items:{dataHandling:{uses:"dataHandling"}}},k={component:"pp-cl-Cards",translation:"Common.About",show:!0},l={ref:"props.selectOneAndGoto",label:"Selection mode",type:"boolean",component:"switch",defaultValue:!1,options:[{value:!0,label:"Select and goto sheet"},{value:!1,label:"Selection"}]},m={type:"string",component:"dropdown",label:"Select Sheet",ref:"props.selectedSheet",options:function(){return f().then(function(a){return a})},show:function(a){return a.props.selectOneAndGoto}},n={type:"string",component:"dropdown",label:"Layout Mode",ref:"props.actionBeforeNavigation",defaultValue:"none",options:[{value:"none",label:"None"},{value:"selectValueInField",label:"Select value in field"},{value:"selectValuesInField",label:"Select values in field"},{value:"setVariable",label:"Set variable"}],show:function(a){return a.props.selectOneAndGoto}},o={ref:"props.field",label:"Field",type:"string",expression:"optional",show:function(a){return a.props.selectOneAndGoto&&("selectValueInField"===a.props.actionBeforeNavigation||"selectValuesInField"===a.props.actionBeforeNavigation)}},p={ref:"props.value",label:"Value",type:"string",expression:"optional",show:function(a){return a.props.selectOneAndGoto&&"selectValueInField"===a.props.actionBeforeNavigation}},q={ref:"props.values",label:"Values",type:"string",expression:"optional",show:function(a){return a.props.selectOneAndGoto&&"selectValuesInField"===a.props.actionBeforeNavigation}},r={ref:"props.variable",label:"Variable",type:"string",expression:"optional",show:function(a){return a.props.selectOneAndGoto&&"setVariable"===a.props.actionBeforeNavigation}},s={ref:"props.variableValue",label:"Variable",type:"string",expression:"optional",show:function(a){return a.props.selectOneAndGoto&&"setVariable"===a.props.actionBeforeNavigation}},t={ref:"props.hideRank",label:"Hide Rank",type:"boolean",defaultValue:!1,options:[{value:!0,label:"Yes"},{value:!1,label:"No"}]},u={ref:"props.hideMeasureLabel",label:"Hide Measure Label",type:"boolean",defaultValue:!1,options:[{value:!0,label:"Yes"},{value:!1,label:"No"}]},v={label:"Selection mode",type:"items",items:{selectOneAndGoto:l,sheetList:m,actionBeforeNavigation:n,field:o,value:p,values:q,variable:r,variableValue:s}},w={type:"string",component:"dropdown",label:"Layout Mode",ref:"props.layoutMode",defaultValue:"MEDIUM",options:[{value:"SMALL",label:"Small"},{value:"MEDIUM",label:"Medium"},{value:"LARGE",label:"Large"}]},x={type:"string",component:"dropdown",label:"Image Layout",ref:"props.imageLayout",defaultValue:"LANDSCAPE",options:[{value:"LANDSCAPE",label:"Landscape"},{value:"SQUARE",label:"Square"},{value:"PORTRAIT",label:"Portrait"}]},y={type:"string",component:"dropdown",label:"Image Size Mode",ref:"props.imageSizeMode",defaultValue:"CONTAIN",options:[{value:"CONTAIN",label:"Contain"},{value:"COVER",label:"Cover"},{value:"FILL",label:"Fill"}]},z={label:"Cards Layout",type:"items",items:{layoutMode:w,imageLayout:x,imageSizeMode:y,hideRank:t,hideMeasureLabel:u}},A={uses:"settings",items:{layoutPanel:z,selectionPanel:v,initFetchRows:{ref:"qHyperCubeDef.qInitialDataFetch.0.qHeight",label:"Initial fetch rows",type:"number",defaultValue:20}}};return{type:"items",component:"accordion",items:{dimensions:g,measures:h,sorting:i,addons:j,appearance:A,about:k}}});