/**
 *  RxJS in Action
 *  Listing 3.3
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
import * as Rx from "rxjs";

Rx.Observable.from([
   'The quick brown fox',
   'jumps over the lazy dog'
   ])
   .map(str => str.split(' '))
   .do(arr => console.log(arr.length))
   .subscribe(console.log);
