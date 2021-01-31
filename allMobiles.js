"use strict";
exports.__esModule = true;
exports.mobile8 = exports.mobile7 = exports.mobile6 = exports.mobile5 = void 0;
var mobileLibrary_1 = require("./mobileLibrary");
var mobileClass_1 = require("./mobileClass");
exports.mobile5 = new mobileClass_1.Mobile("Blackberry", "UltraMAx", "Blackberry", 0, "Blue", false, 3, 250);
exports.mobile6 = new mobileClass_1.Mobile("Cactus Pro", "Alpha Warrior", "Cactus", 5, "Brown", true, 4, 1500);
exports.mobile7 = new mobileClass_1.Mobile("Tutancamon", "Rx5 - Max", "Tutancamon", 3, "Old white", true, 4, 2500);
exports.mobile8 = new mobileClass_1.Mobile("Fever Mobile", "$4k9b", "Fever", 3, "Green Olive", true, 4, 3000);
var shopName = "Mobile World";
var localization = "New York";
var allNewMobiles = [exports.mobile5, exports.mobile6, exports.mobile7, exports.mobile8];
var shopMobile = new mobileLibrary_1.MobileLibrary(shopName, localization, allNewMobiles);
// console.log(shopMobile.getName());
// console.log(shopMobile.getLocalization());
// console.log(shopMobile.getMobiles());
// console.log(shopMobile.getTotalPrice());
shopMobile.printLibrary();
