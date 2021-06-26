export class Square
{
    constructor(side)
    {
        this.side=side;
    }
    areaSq()
    {
        return Math.square(this.side);
    }

}