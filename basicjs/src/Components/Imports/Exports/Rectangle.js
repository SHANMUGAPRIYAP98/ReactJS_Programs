import Area from "./Area.js";
class Rectangle{
    
    constructor(len,breath)
    {
        this.length=len;
        this.breath=breath;
    }
    area()
    {
        let a=new Area();
        console.log(this.length)
        console.log("Ärea of Rectangle : "+a.areaRect(this.length,this.breath))
    }
}
let r=new Rectangle(20,30)
r.area()