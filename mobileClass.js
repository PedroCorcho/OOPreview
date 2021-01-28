"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, tradeMark, sdSize, color, is5g, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = tradeMark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5g = is5g;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    // ---------------------Getters-----------------------
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.getSdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.getIs5g = function () {
        return this.is5g;
    };
    Mobile.prototype.getCameraNumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    // ---------------------------Setters--------------------------
    Mobile.prototype.setName = function (name) {
        this.name = name;
    };
    Mobile.prototype.setModel = function (model) {
        this.model = model;
    };
    Mobile.prototype.setTrademark = function (tradeMark) {
        this.trademark = tradeMark;
    };
    Mobile.prototype.setSdSize = function (sdSize) {
        this.sdSize = sdSize;
    };
    Mobile.prototype.setColor = function (color) {
        this.color = color;
    };
    Mobile.prototype.setIs5g = function (is5g) {
        this.is5g = is5g;
    };
    Mobile.prototype.setCameraNumber = function (cameraNumber) {
        this.cameraNumber = cameraNumber;
    };
    Mobile.prototype.setPrice = function (price) {
        this.price = price;
    };
    // -------------Methods-------------------------
    Mobile.prototype.caracteristicasMobiles = function () {
        console.log("\u00A4" + "The characteristics of the mobile " + this.name + " are:" + "\n" + "\t" + "\u00A4" + "Name: " + this.name + "\n" + "\t" + "\u00A4" + "Model: " + this.model
            + "\n" + "\t" + "\u00A4" + "Trademark: " + this.trademark + "\n" + "\t" + "\u00A4" + "SD Size(GB): " + this.sdSize + "\n" + "\t" + "\u00A4" + "Color: " + this.color
            + "\n" + "\t" + "\u00A4" + "Is 5g?: " + this.is5g + "\n" + "\t" + "\u00A4" + "Number of cameras: " + this.cameraNumber);
    };
    ;
    return Mobile;
}());
exports.Mobile = Mobile;
