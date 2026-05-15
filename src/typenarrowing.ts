function servedrink(mssg?:string) {
    if(mssg) {
        return `Here is your ${mssg}`;
    }
    return "Here is your drink";
}