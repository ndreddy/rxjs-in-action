import * as Rx from "rxjs";

/**
 *  RxJS in Action
 *  Listing 4.3
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
const source$ = Rx.Observable.create(observer => {
    let num = 0;
    const id = setInterval(() => {
      observer.next(`Next ${num++}`);
	}, 2000); // #A Every 2 seconds prints the next number count

	return () => {  //#B The returned object contains the cancellation logic for this observable (the disposal handler).
	   clearInterval(id);
	}
});

const subscription = source$.subscribe(
    next  => console.log(next),  //# C Handles next
    error => console.log(error.message),
       () => console.log('Done!')  //# D Flags when stream is done
  );

setTimeout(function () {  //#E After 8 seconds, cancels the interval
	subscription.unsubscribe();
}, 8000);
