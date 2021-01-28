import { Mobile } from "./mobileClass";

const Nokia3210:Mobile = new Mobile("Nokia", "3210", "Nokia", 3210, "Grey", false, 1,200);
const iphone3G:Mobile = new Mobile("Iphone", "3G", "Iphone", 3, "Grey", false, 1, 500);
const samsungGalaxy:Mobile = new Mobile("Samsung", "Galaxy 10", "Samsung", 10, "white", true, 2, 450);


// console.table(Nokia3210);
// console.log(iphone3G);
// console.log(samsungGalaxy);

Nokia3210.is5g = true;
Nokia3210.cameraNumber = 4;

let allMobiles = [Nokia3210,iphone3G,samsungGalaxy];

console.log(allMobiles);