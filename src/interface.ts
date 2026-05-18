type drink= {
    name:string;
    price:number
};
class Coffee implements drink {
    name="cola";
    price=1000;
}



interface Person {
    name:'rohit'|'shivam'|'satyarth';
    age:number;
    job:string;
}
class Employee implements Person {
    name: 'rohit' | 'shivam' | 'satyarth' = 'rohit';
    age= 25;
    job= 'developer';
}


// exercise - 1
// create type
type product={
    id:number;
    name:string;
    discount?:string;
}

// create union type
type paymentStatus= 'pending' | 'completed' | 'failed';

//Create function

function printId(id:string|number) {
    if(typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    console.log(id);
}