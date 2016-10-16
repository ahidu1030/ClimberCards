define( [], function () {
	'use strict';

	// ****************************************************************************************
	// Dimensions & Measures
	// ****************************************************************************************
	var dimensions = {
		uses: "dimensions",
		min: 3,
		max: 4
	};

	var measures = {
		uses: "measures",
		min: 1,
		max: 1
	};

	var sorting = {
		uses: "sorting"
	};

	// ****************************************************************************************
	// Other Settings
	// ****************************************************************************************

	var addons = {
		type:"items",
		component:"expandable-items",
		translation:"properties.addons",
		items: {
				dataHandling:{uses:"dataHandling"}
		}
	};

	// ****************************************************************************************
	// Property Panel Definition
	// ****************************************************************************************

	  var layoutMode = {
	    type: "string",
	    component: "dropdown",
	    label: "Layout Mode",
	    ref: "props.layoutMode",
	    defaultValue: "MEDIUM",
	    options: [{
	      value: "SMALL",
	      label: "Small",
	    }, {
	      value: "MEDIUM",
	      label: "Medium",
	    }, {
	      value: "LARGE",
	      label: "Large",
	    }],
	  };

	  var imageLayout = {
	    type: "string",
	    component: "dropdown",
	    label: "Image Layout",
	    ref: "props.imageLayout",
	    defaultValue: "LANDSCAPE",
	    options: [ {
	      value: "LANDSCAPE",
	      label: "Landscape",
	    }, {
	      value: "SQUARE",
	      label: "Square",
	    }, {
	      value: "PORTRAIT",
	      label: "Portrait",
	    }],
	  };

	  var imageSizeMode = {
	    type: "string",
	    component: "dropdown",
	    label: "Image Size Mode",
	    ref: "props.imageSizeMode",
	    defaultValue: "CONTAIN",
	    options: [ {
	      value: "CONTAIN",
	      label: "Contain",
	    }, {
	      value: "COVER",
	      label: "Cover",
	    }, {
	      value: "FILL",
	      label: "Fill",
	    }],
	  };
	// Appearance Panel
	var appearancePanel = {
		uses: "settings",
		items: {
			layoutMode: layoutMode,
			imageLayout: imageLayout,
			imageSizeMode: imageSizeMode,
			initFetchRows : {
							ref : "qHyperCubeDef.qInitialDataFetch.0.qHeight",
							label : "Initial fetch rows",
							type : "number",
							defaultValue : 20
			}
		}
	};

	// Return values
	return {
		type: "items",
		component: "accordion",
		items: {
			dimensions: dimensions,
			measures: measures,
			sorting: sorting,
			addons: addons,
			appearance: appearancePanel

		}
	};

} );
