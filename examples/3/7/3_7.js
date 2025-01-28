import * as Rx from "rxjs";

/**
 *  RxJS in Action
 *  Listing 3.7
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
let candidates = [
	{name: 'Brendan Eich', experience : 'JavaScript Guru'},
	{name: 'Emmet Brown', experience: 'Historian'},
	{name: 'George Lucas', experience: 'Sci-fi writer'},
	{name: 'Alberto Perez', experience: 'Zumba Instructor'},
	{name: 'Bjarne Stroustrup', experience: 'C++ Developer'}
];



//--------------------------------------------------//
//                Usage                             //
//--------------------------------------------------//
Rx.Observable.from(candidates)
  .pluck('experience')
  .take(2)		// Takes only the first two elements (another filtering operator)
  .do(val => console.log(`Visiting ${val}`)) 	// Performs the logging routine and passes along the observable sequence
  .subscribe();
