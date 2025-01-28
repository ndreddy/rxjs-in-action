import * as Rx from "rxjs";

/**
 *  RxJS in Action
 *  Listing 3.6
 *  The operator chain is core to the design of an RxJS operator: every operator must perform some work on the data
 *  passing through it and then wrap it into another observable instance that gets returned.
 *  In this manner, the subscription gets internally passed around from one context to the next.
 *  To show how this works, you’ll add your own operator using prototype extension (using ES6, you could also do it by
 *  extending from the Observable class); this operator is the logical inverse of filter(), called exclude()
 *
 */
function exclude(predicate) {
    return Rx.Observable.create(subscriber => {   //Creates a new observable context to return with the new result
        let source = this;       //Because you’re in a lambda function, “this” points to the outer scope.
        return source.subscribe(value => {
                try {
                    if (!predicate(value)) {
                        subscriber.next(value);   //Passes the next value to the new operator in the chain
                    }
                } catch (err) {
                    subscriber.error(err);
                }
            },
            err => subscriber.error(err),  //Be sure to handle errors appropriately and pass them along.
            () => subscriber.complete());
    });
}

Rx.Observable.prototype.exclude = exclude; //Adds the operator by extending the Observable prototype

//--------------------------------------------------//
//                Usage                             //
//--------------------------------------------------//
Rx.Observable.from([1, 2, 3, 4, 5])
    .exclude(x => x % 2 === 0)
    .subscribe(console.log);
