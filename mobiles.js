"use strict";
exports.__esModule = true;
exports.samsungGalaxy = exports.iphone3G = exports.nokia3210 = void 0;
var mobileClass_1 = require("./mobileClass");
exports.nokia3210 = new mobileClass_1.Mobile("Nokia", "3210", "Nokia", 3210, "Grey", false, 1, 200);
exports.iphone3G = new mobileClass_1.Mobile("Iphone", "3G", "Iphone", 3, "Grey", false, 1, 500);
exports.samsungGalaxy = new mobileClass_1.Mobile("Samsung", "Galaxy 10", "Samsung", 10, "white", true, 2, 450);
exports.nokia3210.setIs5g(true);
exports.nokia3210.setCameraNumber(4);
var mobileTest = [exports.nokia3210, exports.iphone3G, exports.samsungGalaxy];
for (var i = 0; i < mobileTest.length; i++) {
    mobileTest[i].caracteristicasMobiles();
}
// console.table(Nokia3210);
// console.log(iphone3G);
// console.log(samsungGalaxy);
