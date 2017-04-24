define(["jquery","underscore","qlik","./properties","./initialproperties","client.utils/state","./lib/js/extensionUtils","./lib/js/perfect-scrollbar.min","./lib/js/perfect-scrollbar.jquery.min","text!./lib/css/perfect-scrollbar.min.css","text!./lib/css/style.css","text!./lib/partials/template.html","./lib/js/directives/clTouch","./lib/js/directives/onLastRepeat"],function(a,b,c,d,e,f,g,h,i,j,k,l){"use strict";var m=window.location.pathname.substr(0,window.location.pathname.toLowerCase().lastIndexOf("/sense/app/"));return g.addStyleToHeader(k),g.addStyleToHeader(j),{definition:d,initialProperties:e,snapshot:{canTakeSnapshot:!0},support:{"export":!0,exportData:!0},resize:function(a,b){this.paint(a,b)},clearSelectedValues:function(a){},paint:function(a,d){this.$scope.backendApi=this.backendApi,this.$scope.props=d.props,a.find(".selected").removeClass("selected"),a.find(".cl-cardsview").perfectScrollbar();var e=d.qHyperCube.qDimensionInfo.length,f=d.props.hideMeasureLabel?"":d.qHyperCube.qMeasureInfo[0].qFallbackTitle;return this.$scope.selectedCount=d.qHyperCube.qDimensionInfo[0].qStateCounts.qSelected+d.qHyperCube.qDimensionInfo[0].qStateCounts.qSelectedExcluded,d.qHyperCube.qDataPages[0]&&(this.$scope.dataPages=b.map(d.qHyperCube.qDataPages[0].qMatrix,function(a){return{id:a[0]?a[0].qText:"",title:a[2]?a[2].qText:"",coverUrl:"/"==a[1].qText.substr(0,1)?m+a[1].qText:a[1].qText,mainValue:a[e].qText,mainValueTitle:f,secondaryAttribute:e>3?a[3].qText:"",qElemNumber:a[0].qElemNumber,qState:a[0].qState}})),c.Promise.resolve()},template:l,controller:["$scope","$element",function(d,e){d.dataPages={},d.backendApi={},d.props={},d.selectedCount=0,d.selections={selectionsMode:"",swipe_idx_min:-1,swipe_idx_max:-1,values_to_select:[]},d.getCardSize=function(){switch(d.props.layoutMode){case"SMALL":return 35;case"LARGE":return 94;default:return 60}},d.noInteractions=function(){return!f.isInAnalysisMode()},d.compactLayout=function(){return e.width()<350},d.setVariable=function(a,d){if(!b.isEmpty(a)&&!b.isEmpty(d)){var e=c.currApp();e.variable.setContent(a,d)}},d.selectValueInField=function(a,d){if(!b.isEmpty(a)&&!b.isEmpty(d)){var e=c.currApp();e.field(a).selectMatch(d,!1)}},d.splitToStringNum=function(a,b){for(var c=a.split(b),d=0;d<c.length;d++)isNaN(c[d])||(c[d]=Number(c[d]));return c},d.selectValuesInField=function(a,e){if(!b.isEmpty(a)&&!b.isEmpty(e)){var f=c.currApp(),g=d.splitToStringNum(e,";");f.field(a).selectValues(g,!1)["catch"](function(a){})}},d.doActionBeforeNavigation=function(){switch(d.props.actionBeforeNavigation){case"selectValueInField":d.selectValueInField(d.props.field,d.props.value);break;case"selectValuesInField":d.selectValuesInField(d.props.field,d.props.values);break;case"setVariable":d.setVariable(d.props.variable,d.props.variableValue)}},d.clickCard=function(e,f){1==d.selectedCount?d.backendApi.selectValues(0,[parseInt(f)],!0):d.props.selectOneAndGoto?d.backendApi.selectValues(0,[parseInt(f)],!1).then(function(){d.props.actionBeforeNavigation&&"none"!==d.props.actionBeforeNavigation&&d.doActionBeforeNavigation(),b.isEmpty(d.props.selectedSheet)||c.navigation.gotoSheet(d.props.selectedSheet)}):(a(e.originalEvent.target).toggleClass("selected"),d.selectValues(0,[parseInt(f)],!1))},d.onSwipeStart=function(b){if(!d.props.selectOneAndGoto){d.selections.values_to_select=[];var c=a(b.originalEvent.target),e=parseInt(c.attr("idx"));d.selections.swipe_idx_min=e,d.selections.swipe_idx_max=e;var f=parseInt(c.attr("data-value"));d.selections.selectionsMode=!a(c).hasClass("selected"),"undefined"!=typeof f&&(d.selections.selectionsMode?(d.selections.values_to_select.push(f),a(c).addClass("selected")):(d.selections.values_to_select.push(f),a(c).removeClass("selected")))}},d.onSwipeUpdate=function(b){if(!d.props.selectOneAndGoto){var c=a(b.originalEvent.target),f=parseInt(c.attr("idx")),g=d.selections.swipe_idx_min>f||d.selections.swipe_idx_max<f;if(g&&!isNaN(f)){d.selections.swipe_idx_min=d.selections.swipe_idx_min>f?f:d.selections.swipe_idx_min,d.selections.swipe_idx_max=d.selections.swipe_idx_max<f?f:d.selections.swipe_idx_max;for(var h=d.selections.swipe_idx_max;h>=d.selections.swipe_idx_min;h--){var i=a(e).find("[idx='"+h+"']")[0];if(d.selections.selectionsMode){if(!a(i).hasClass("selected")){var j=parseInt(a(i).attr("data-value"));-1==d.selections.values_to_select.indexOf(j)&&"undefined"!=typeof j&&(d.selections.values_to_select.push(j),a(i).addClass("selected"))}}else if(a(i).hasClass("selected")){var j=parseInt(a(i).attr("data-value"));-1==d.selections.values_to_select.indexOf(j)&&"undefined"!=typeof j&&(d.selections.values_to_select.push(j),a(i).removeClass("selected"))}}}}},d.onSwipeCancel=function(a){!d.props.selectOneAndGoto},d.onSwipe=function(){d.props.selectOneAndGoto||(d.selections.swipe_idx_min=-1,d.selections.swipe_idx_max=-1,d.selections.values_to_select!=[]&&(d.selections.selectionsMode?d.selectValues(0,d.selections.values_to_select,!0):d.selectValues(0,d.selections.values_to_select,!0)),d.selections.field="")}}]}});