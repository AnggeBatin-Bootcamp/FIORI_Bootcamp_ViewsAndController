sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], /**
 * @param {typeof sap.ui.core.mvc.Controller} Controller
 * @param {typeof sap.m.MessageToast} MessageToast
 */
    function (Controller, MessageToast) {       
        "use strict";

    return Controller.extend("com.training.exer5batin.controller.MainView", {
        onInit() {
        },
        onAddItem: function (){
                var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                var sMsg = oTextBundle.getText("addButtonMsg");
                this.fnDisplayMsg(sMsg);
            },
        onChangeMOP: function (oEvent) {
                var oSelectedItem = oEvent.getParameter("selectedItem");
                var sSelectedKey = oSelectedItem.getProperty("key");
                var sSelectedText = oSelectedItem.getText();

                //Shows selected MOP
                MessageToast.show("Selected Payment Method: " + sSelectedText);

                var oMobileLabel = this.getView().byId("idLblPhone");
                var oMobileInput = this.getView().byId("idInputPhone");

                //Credit Card fields
                var oCCLabel = this.getView().byId("idLblCC");
                var oCCInput = this.getView().byId("idInputCC");
                var oNameCCLabel = this.getView().byId("idLblNameCC");
                var oCVVLabel = this.getView().byId("idLblCVV");
                var oCVVInput = this.getView().byId("idInputCVV");
                var oExpDateLabel = this.getView().byId("idLblExpDate");
                var oExpDateInput = this.getView().byId("idInputExpDate");

                //hide all optional fields by default
            oMobileLabel.setVisible(false);
            oMobileInput.setVisible(false);

            oCCLabel.setVisible(false);
            oCCInput.setVisible(false);
            oNameCCLabel.setVisible(false);
            oCVVLabel.setVisible(false);
            oCVVInput.setVisible(false);
            oExpDateLabel.setVisible(false);
            oExpDateInput.setVisible(false);

                if (sSelectedKey === "GCASH"){
                    // show the mobile field
                    oMobileLabel.setVisible(true);
                    oMobileInput.setVisible(true);
              
                } else if (sSelectedKey === "CC"){
                    oCCLabel.setVisible(true);
                    oCCInput.setVisible(true);
                    oNameCCLabel.setVisible(true);
                    oCVVLabel.setVisible(true);
                    oCVVInput.setVisible(true);
                    oExpDateLabel.setVisible(true);
                    oExpDateInput.setVisible(true);
                } else {
                    oCCLabel.setVisible(false);
                    oCCInput.setVisible(false);
                    oNameCCLabel.setVisible(false);
                    oCVVLabel.setVisible(false);
                    oCVVInput.setVisible(false);
                    oExpDateLabel.setVisible(false);
                    oExpDateInput.setVisible(false);
                }
                
            },
        onPressCheckout: function (){
                var sFName = this.getView().byId("idInptFName").getValue().trim();
                var sLName = this.getView().byId("idInptLName").getValue().trim();
                    if (sFName === "" && sLName === "") {
                     sap.m.MessageToast.show("First Name and Last Name are required.");
                        return;
                    }
            }

    });
});