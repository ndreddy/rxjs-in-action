import * as Rx from "rxjs";

const add = (x, y) => x + y;
Rx.Observable.from([
    {
        date: '2016-07-01',
        amount: -320.00,
    }, {
        amount: 1000.00,
    },
    {
        date: '2016-07-22',
        amount: 45.0,
    },
])
    .pluck('amount') //Extracts the amount property
    .reduce(add, 0) //Reduces the set of amount values with an add function
    .subscribe(console.log); // 725.00
