import { Mobile } from "./mobileClass";



export class MobileLibrary {
    private name: string;
    private localitation: string;
    private mobiles : Mobile[]
    private totalPrice: number

        constructor(name: string, localization: string, mobiles: Mobile[]){
            this.name = name;
            this.localitation = name;
            this.mobiles = mobiles;
            this.totalPrice = this.totalPriceCalculation()
        }
// --------------Method----------------------- 
// (crear funcion denominada TPC() que calcule precio total de la libreria (suma precio de todos los objetos almacenados en atributo Mobiles))
        public totalPriceCalculation() {
            this.totalPrice = 0;

                for (let i = 0; i <this.mobiles.length; i++) {
                    this.totalPrice += this.mobiles[i].getPrice()
            }
                 return this.totalPrice;
        }


        public printLibrary() {
            console.log("\u2023" + "Here i have all my Mobile Phones!");

            for (let i = 0; i <this.mobiles.length; i++) {
                this.mobiles[i].caracteristicasMobiles();
            }
            console.log("\u2023" + "Price overall " + this.totalPrice);
        }


// --------------Getters----------------------
        public getName(name:string) {
            this.name = name;
        }   

        public getLocalization(localization:string) {
            this.localitation = localization;
        }

        public getMobile():Mobile[] {
            return this.mobiles;
        }

        public getTotalPrice(totalPrice:number) {
            return this.totalPrice = totalPrice;
        }
// ----------------Setters---------------------

        public setName(name:string) {
            this.name = name;
        }

        public setLocalization(localitation: string) {
            this.localitation = localitation
        }

        public setMobile(mobiles: Mobile[]) {
            return this.mobiles = mobiles
        }

        public setTotalPrice(totalPrice: number) {
            this.totalPrice = totalPrice
        }

};



