// Wheel class that defines the properties of a wheel
class Wheel {
  
   // Declare properties of the Wheel class using private access modifiers
   private diameter: number;
   private tireBrand: string;
 
   // Constructor for the Wheel class
   constructor(diameter: number = 18, tireBrand: string = "GoodYear") {
     this.diameter = diameter;
     this.tireBrand = tireBrand;
   }
 
   // Getter method for the diameter property
   getDiameter(): number {
     return this.diameter;
   }
 
   // Getter method for the tireBrand property
   getTireBrand(): string {
     return this.tireBrand;
   }
 
   // Setter method for the diameter property
   setDiameter(diameter: number): void {
     if (diameter > 0) {
       this.diameter = diameter;
     } else {
       console.error("Diameter must be greater than 0");
     }
   }
 
   // Setter method for the tireBrand property
   setTireBrand(tireBrand: string): void {
     if (tireBrand.trim().length > 0) {
       this.tireBrand = tireBrand;
     } else {
       console.error("Tire brand cannot be empty");
     }
   }
 }
 
 // Export the Wheel class
 export default Wheel;
