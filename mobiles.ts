import { Mobile } from "./mobileClass";

export const nokia3210:Mobile = new Mobile("Nokia", "3210", "Nokia", 3210, "Grey", false, 1,200);
export const iphone3G:Mobile = new Mobile("Iphone", "3G", "Iphone", 3, "Grey", false, 1, 500);
export const samsungGalaxy:Mobile = new Mobile("Samsung", "Galaxy 10", "Samsung", 10, "white", true, 2, 450);






nokia3210.setIs5g(true);
nokia3210.setCameraNumber(4);


let mobileTest: Mobile[] = [nokia3210,iphone3G,samsungGalaxy] 

for (let i = 0; i < mobileTest.length; i++) {
    mobileTest[i].caracteristicasMobiles()
}







// console.table(Nokia3210);
// console.log(iphone3G);
// console.log(samsungGalaxy);



