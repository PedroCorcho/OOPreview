"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, localization, mobiles) {
        this.name = name;
        this.localitation = name;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    // --------------Method----------------------- 
    // (crear funcion denominada TPC() que calcule precio total de la libreria (suma precio de todos los objetos almacenados en atributo Mobiles))
    MobileLibrary.prototype.totalPriceCalculation = function () {
        this.totalPrice = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            this.totalPrice += this.mobiles[i].getPrice();
        }
        return this.totalPrice;
    };
    MobileLibrary.prototype.printLibrary = function () {
        console.log("\u2023" + "Here i have all my Mobile Phones!");
        for (var i = 0; i < this.mobiles.length; i++) {
            this.mobiles[i].caracteristicasMobiles();
        }
        console.log("\u2023" + "Price overall " + this.totalPrice);
    };
    // --------------Getters----------------------
    MobileLibrary.prototype.getName = function (name) {
        this.name = name;
    };
    MobileLibrary.prototype.getLocalization = function (localization) {
        this.localitation = localization;
    };
    MobileLibrary.prototype.getMobile = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.getTotalPrice = function (totalPrice) {
        return this.totalPrice = totalPrice;
    };
    // ----------------Setters---------------------
    MobileLibrary.prototype.setName = function (name) {
        this.name = name;
    };
    MobileLibrary.prototype.setLocalization = function (localitation) {
        this.localitation = localitation;
    };
    MobileLibrary.prototype.setMobile = function (mobiles) {
        return this.mobiles = mobiles;
    };
    MobileLibrary.prototype.setTotalPrice = function (totalPrice) {
        this.totalPrice = totalPrice;
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
;
