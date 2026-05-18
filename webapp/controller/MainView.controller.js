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
               // var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
               // var sMsg = oTextBundle.getText("addButtonMsg");
              //  this.fnDisplayMsg(sMsg);

              //create dialog lazily
                if (!this._oDialog) {
                    this._oDialog = this.loadFragment({
                        name: "com.training.exer5batin.fragment.ProductDialog"
                    });
                }
                this._oDialog.then(function (oDialog) {
                    oDialog.open();
                });
            },
        onCloseDialog: function () {
                this.getView().byId("idProductDialog").close();
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
                var oInputFName = this.getView().byId("idInptFName");
                var oInputLName = this.getView().byId("idInptLName");
                var oInputFNameValue = oInputFName.getValue();
                var oInputLNameValue = oInputLName.getValue();
                var oRouter = this.getOwnerComponent().getRouter();

                // Check if first name and last name is blank
                if (oInputFNameValue === "" || oInputLNameValue === ""){
                   
                // set value state to Error
                    oInputFName.setValueState("Error");
                    oInputLName.setValueState("Error");
                } else {
                    oInputFName.setValueState("None");
                    oInputLName.setValueState("None");
                 //Navigate to review page passing first
                    oRouter.navTo("RouteReviewPage", {
                        firstName: oInputFNameValue
                    });
                }
            }

    });
});