import { MobileLibrary } from "./mobileLibrary";
import { Mobile } from "./mobileClass";





export let mobile5 = new Mobile("Blackberry","UltraMAx","Blackberry", 0,"Blue", false, 3, 250);
export let mobile6 = new Mobile("Cactus Pro","Alpha Warrior", "Cactus", 5, "Brown", true, 4, 1500);
export let mobile7 = new Mobile("Tutancamon", "Rx5 - Max", "Tutancamon", 3, "Old white", true, 4,2500);
export let mobile8 = new Mobile("Fever Mobile", "$4k9b", "Fever", 3, "Green Olive",true,4,3000);



let shopName = "Mobile World";


let localization = "New York";

let allNewMobiles = [mobile5,mobile6,mobile7,mobile8];

let shopMobile = new MobileLibrary(shopName,localization,allNewMobiles);


// console.log(shopMobile.getName());
// console.log(shopMobile.getLocalization());
// console.log(shopMobile.getMobiles());
// console.log(shopMobile.getTotalPrice());
shopMobile.printLibrary();