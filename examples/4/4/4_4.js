/**
 *  RxJS in Action
 *  Listing 4.4
 *  @author Paul Daniels
 *  @author Luis Atencio
 */

/*
Money value object: A value object is a design pattern used to represent simple immutable data structures whose
equality is based not on the entity itself but on its values. In other words, two value objects are equal only if
they have the same content or their corresponding properties contain the same values.
These objects are ideal to transfer immutable state from one component to another.
 */
const Money = function (currency, val) {
  return {
    value: function () {
      return val;
    },
    currency: function () {
      return currency;
    },
    toString: function () {
      return `${currency} ${val}`;
    }
  };
};

const newRandomNumber = () => Math.floor(Math.random() * 100);

const USDMoney = Money.bind(null, 'USD');

Rx.Observable.interval(2000)
  .skip(1)
  .take(5)
  .map(num => new USDMoney(newRandomNumber()))
  // WARNING: NOT IN TEXT
  // Added to address #11 (https://github.com/RxJSInAction/rxjs-in-action/issues/11)
  .map(usd => usd.toString())
  .forEach(console.log);
