
module sampleApp{


export class main{
    constructor(){
        console.log("I'm a real spa!")
    }

    public add(x: number, y: number): number{
        return x + y;
    }
}

}

// Run on load
new sampleApp.main();