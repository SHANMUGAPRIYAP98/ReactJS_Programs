import { circle,radius } from "./Shapes.js";
class Circle
{
    print()
    {
        console.log("Radius : "+radius)
        console.log("Area of Circle : "+circle(radius))
        
    }
}
let c=new Circle();
c.print()