jQuery.sap.declare("hcm.mytimesheet.hcmmytimesheetExtension.Component");
// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "hcm.mytimesheet",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on cloud
	url: jQuery.sap.getModulePath("hcm.mytimesheet.hcmmytimesheetExtension") + "/parent" // we use a URL relative to our own component
	// extension application is deployed with customer namespace
});
this.hcm.mytimesheet.Component.extend("hcm.mytimesheet.hcmmytimesheetExtension.Component", {
	metadata: {
		version: "1.0",
		config: {
		},
		customizing: {
			"sap.ui.viewExtensions": {
				"hcm.mytimesheet.view.S31": {
					"extS31FormElementForInputs": {
						"className": "sap.ui.core.Fragment",
						"fragmentName": "hcm.mytimesheet.hcmmytimesheetExtension.view.S31_extS31FormElementForInputsCustom",
						"type": "XML"
					}
				}
			},
			"sap.ui.controllerExtensions": {
				"hcm.mytimesheet.view.S31": {
					"controllerName": "hcm.mytimesheet.hcmmytimesheetExtension.view.S31Custom"
				}
			}
		}
	}
});