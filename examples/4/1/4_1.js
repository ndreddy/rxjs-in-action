/**
 *  RxJS in Action
 *  Listing 4.1 creates an observable that will fire once after a second and then complete, without being tied to
 *  any business logic, and it provides the unsubscription mecha- nism of the timer by passing clearTimeout(timeoutId)
 *  back as the disposal logic. It turns out, however, that this kind of boilerplate code is unnecessary because
 *  the RxJS library already possess implementations for these base cases. The setTimeout() method can be
 *  substituted with the timer() operator, which creates an observable that will emit a single event after a given
 *  period of time. The next listing performs the same action as before, using a one-second timer to emit an action
 *  that changes the lay- out of an HTML element.
 *
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
const source$ = Rx.Observable.create(observer => {
    const timeoutId = setTimeout(() => {
      observer.next();
      observer.complete();
    }, 1000);

    return () => clearTimeout(timeoutId);
  });

source$.subscribe(() =>
  document.querySelector('#panel').style.backgroundColor = 'red');
