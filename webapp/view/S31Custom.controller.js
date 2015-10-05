sap.ui.controller("hcm.mytimesheet.hcmmytimesheetExtension.view.S31Custom", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf hcm.mytimesheet.hcmmytimesheetExtension.view.S31Custom
	 */
	onInit: function() {
		var geoModel = new sap.ui.model.json.JSONModel();  
		this.getView().setModel(geoModel, "geo");
	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf hcm.mytimesheet.hcmmytimesheetExtension.view.S31Custom
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf hcm.mytimesheet.hcmmytimesheetExtension.view.S31Custom
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf hcm.mytimesheet.hcmmytimesheetExtension.view.S31Custom
	 */
	//	onExit: function() {
	//
	//	},

	//	initialize: function() {
	//
	//	}
	//	setInitialInfoModelData: function(c) {
	//
	//	}
	//	initView: function() {
	//
	//	}
	//	clone: function(o) {
	//
	//	}
	//	formatDateMMMDD: function(d) {
	//
	//	}
	//	getActualOffset: function(f, c) {
	//
	//	}
	//	validate: function() {
	//
	//	}
	//	check_for_changed_data: function() {
	//
	//	}
	//	onTapOnDate: function(e) {
	//
	//	}
	//	validateSaveBtnVisibility: function() {
	//
	//	}
	//	suggestionHelpChange: function(e) {
	//
	//	}
	//	onFavoriteItemSelection: function(e) {
	//
	//	}
	//	onFavValueChange: function() {
	//
	//	}
	//	onManualItemSelection: function(e) {
	//
	//	}
	//	timeAssignmentLiveChange: function() {
	//
	//	}
	//	manualHelpChange: function(e) {
	//
	//	}
	//	onDurationValueChange: function(e) {
	//
	//	}
	//	onDecimalTimeValueChange: function(e) {
	//
	//	}
	//	_isValidDecimalNumber: function(n) {
	//
	//	}
	//	onNavButton: function() {
	//
	//	}
	//	cleanUpOnBack: function() {
	//
	//	}
	//	getDateStr: function(d) {
	//
	//	}
	//	getDateTimeStr: function(d) {
	//
	//	}
	//	getValueHelpCollection: function(o) {
	//
	//	}
	//	remoteSearch: function() {
	//
	//	}
	//	checkLocalPaging: function(r) {
	//
	//	}
	//	checkRemotePaging: function(r) {
	//
	//	}
	//	addContinueSearchItem: function() {
	//
	//	}
	//	tapToLoadMore: function(s) {
	//
	//	}
	//	continueSearchOnServer: function(s) {
	//
	//	}
	//	refineSearchResult: function() {
	//
	//	}
	//	onLiveFavChange: function(e) {
	//
	//	}
	//	onLiveChange: function(e) {
	//
	//	}
	//	resetRemoteSearch: function() {
	//
	//	}
	//	clearSearchField: function() {
	//
	//	}
	//	onEditBtnPress: function() {
	//
	//	}
	//	bindFavDialog: function(s) {
	//
	//	}
	//	onFavoriteInputHelp: function(e) {
	//
	//	}
	//	onInputHelp: function() {
	//
	//	}
	//	disableFields: function(b) {
	//
	//	}
	//	disableTimeInputs: function(b) {
	//
	//	}
	//	getFavoritesCollection: function() {
	//
	//	}
	//	getWorkListCollection: function() {
	//
	//	}
	//	valueHelpDataForamtter: function(f, a) {
	//
	//	}
	//	durationDateForamtter: function(h, m) {
	//
	//	}
	//	getProfileFields: function() {
	//
	//	}
	//	createNewCostAssignmentType: function(m, a, b, c, d, e) {
	//
	//	}
	//	onRecentUsedSelect: function() {
	//
	//	}
	//	onDone: function() {
	//
	//	}
	//	onSubmit: function() {
	//
	//	}
	//	updatePageData: function() {
	//
	//	}
	//	convertTime: function(d) {
	//
	//	}
	//	formatAMPM: function(d) {
	//
	//	}
	//	submitToOdata: function() {
	//
	//	}
	//	replaceAllOccurances: function(s) {
	//
	//	}
	//	replaceSpecialChar: function(e) {
	//
	//	}
	//	getPostData: function(d, e) {
	//
	//	}
	//	setPostObject: function(C, T, W, a, N, b, n, s, e, c, d, f) {
	//
	//	}
	//	checkFieldName: function(f) {
	//
	//	}
	//	parseDateYYYYMMdd: function(d) {
	//
	//	}
	//	onCancel: function() {
	//
	//	}
	//	onReset: function() {
	//
	//	}
	//	addFavorite: function(e, w) {
	//
	//	}
	//	updateFavorites: function() {
	//
	//	}
	//	setFavoritePostObject: function() {
	//
	//	}
	//	handleDelete: function(e) {
	//
	//	}
	//	editFavorites: function(e) {
	//
	//	}
	//	manageFavorites: function() {
	//
	//	}
	//	isClockEntry: function() {
	//
	//	}
	//	resetMainAndChildItems: function() {
	//
	//	}
	//	deleteMainItem: function() {
	//
	//	}
	//	deleteSubItems: function() {
	//
	//	}
	//	initializeChildItems: function() {
	//
	//	}
	//	getHeaderFooterOptions: function() {
	//
	//	}
	
	onGPSSuccess: function(position){
		//sap.m.MessageToast.show("gps success: " + position.coords.latitude);
		//this.byId("locationX").setValue(position.coords.latitude);
		//this.entry.locationX = "buggggg";
		//this.byId("locationY").setValue(position.coords.longitude);
		
		var geoModel = this.getView().getModel("geo");

		geoModel.setProperty("/longitude", position.coords.longitude);
		geoModel.setProperty("/latitude", position.coords.latitude);

		//this.getView().byId("locationX").setValue(position.coords.latitude);
		//this.getView().byId("locationY").setValue(position.coords.longitude);
	},
	
	onGPSError: function(){
		sap.m.MessageToast.show("gps fail");
	},
	/**
	 * Use Cordova container plugins to get GPS coordinates of user and insert into form for submission.
	 */
	getGPS: function(){
		sap.m.MessageToast.show("getting position...");
		navigator.geolocation.getCurrentPosition($.proxy(this.onGPSSuccess,this), this.onGPSError);
	//	sap.m.MessageToast.show("In cordova? " + isCordovaApp);
			
	}

});
