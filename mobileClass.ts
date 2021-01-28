export class Mobile {
    private name: string
    private model: string
    private trademark: string
    private sdSize: number
    private color: string
    private is5g: boolean
    private cameraNumber: number
    private price: number

        constructor(name:string, model:string, tradeMark:string, sdSize:number, color:string,is5g:boolean,cameraNumber:number,price:number) {
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
     public getName():string {
             return this.name;
     }

     public getModel():string {
             return this.model;
     }

     public getTrademark():string{
             return this.trademark;
     }

     public getSdSize():number{
             return this.sdSize;
     }

     public getColor():string{
             return this.color;
     }

     public getIs5g():boolean{
             return this.is5g;
     }

     public getCameraNumber():number{
             return this.cameraNumber;
     }

     public getPrice():number {
             return this.price;
     }
// ---------------------------Setters--------------------------

        setName(name:string){
              this.name = name;
        }
            
        setModel(model:string){
               this.model = model;     
        }
 
        setTrademark(tradeMark:string){
                this.trademark = tradeMark;
        }

        setSdSize(sdSize:number){
                this.sdSize = sdSize;
        }

        setColor(color:string){
                this.color = color;
        }

        setIs5g(is5g:boolean){
                this.is5g = is5g;
        }

        setCameraNumber(cameraNumber:number){
                this.cameraNumber = cameraNumber;
        }

        setPrice(price:number){
                this.price = price;
        }
// -------------Methods-------------------------

        caracteristicasMobiles() {
                console.log("\u004B" + "The characteristics of the mobile " + this.name + " are:" + "\n" + "\t" + "\u004B" + "Name: " + this.name + "\n" + "\t" + "\u004B" + "Model: " + this.model
            + "\n" + "\t" + "\u004B" + "Trademark: " + this.trademark + "\n" + "\t" + "\u004B" + "SD Size(GB): " + this.sdSize + "\n" + "\t" + "\u004B" + "Color: " + this.color
            + "\n" + "\t" + "\u004B" + "Is 5g?: " + this.is5g + "\n" + "\t" + "\u004B" + "Number of cameras: " + this.cameraNumber);
    };

        }

