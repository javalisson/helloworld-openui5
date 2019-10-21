sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({viewName: 'HelloWorld.App_2'})
		.then(function (oView) {
			oView.placeAt('content');
		});
});
