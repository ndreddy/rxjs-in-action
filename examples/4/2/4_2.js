/**
 *  RxJS in Action
 *  Listing 4.2 is the same as that of Listing 4.1 taking advantage of RxJS operators has, in our opinion,
 *  drastically improved the readability of this simple program. As an additional plus, the timer is now emitting a
 *  generic event that can be used by several consumers if you want it to go through subsequent subscriptions,
 *  rather than being forced to cram several callbacks together.
 *
 */
Rx.Observable.timer(1000)   // Timer factory function in milliseconds
  .subscribe(()=>
     document.querySelector('#panel').style.backgroundColor = 'red');
