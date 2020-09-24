/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sample1/zSampl/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});