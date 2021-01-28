"use strict";
exports.__esModule = true;
var mobileClass_1 = require("./mobileClass");
var Nokia3210 = new mobileClass_1.Mobile("Nokia", "3210", "Nokia", 3210, "Grey", false, 1, 200);
var iphone3G = new mobileClass_1.Mobile("Iphone", "3G", "Iphone", 3, "Grey", false, 1, 500);
var samsungGalaxy = new mobileClass_1.Mobile("Samsung", "Galaxy 10", "Samsung", 10, "white", true, 2, 450);
Nokia3210.setIs5g(true);
Nokia3210.setCameraNumber(4);
var mobileTest = [Nokia3210, iphone3G, samsungGalaxy];
for (var i = 0; i < mobileTest.length; i++) {
    mobileTest[i].caracteristicasMobiles();
}
// console.table(Nokia3210);
// console.log(iphone3G);
// console.log(samsungGalaxy);
