let status: string | number = "active";
console.log(status);
status=99
console.log(status);


let orders: (string | number[])[] = ["order1", "order2", "order3",[44,888] ];
let currentorder;
for (let order of orders) {
    if (typeof order === "string") {
        currentorder = order;
        break;
    }
}
console.log(currentorder);