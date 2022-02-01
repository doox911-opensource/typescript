Original task

```ts
/*
  4484 - IsTuple
  -------
  by jiangshan (@jiangshanmeta) #medium #tuple
  
  ### Question
  
  Implement a type ```IsTuple```, which takes an input type ```T``` and returns whether ```T``` is tuple type.
  
  For example:

  type case1 = IsTuple<[number]> // true
  type case2 = IsTuple<readonly [number]> // true
  type case3 = IsTuple<number[]> // false
  
  > View on GitHub: https://tsch.js.org/4484
*/

/* _____________ Your Code Here _____________ */

type IsTuple<T> = any

/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1}>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4484/answer
  > View solutions: https://tsch.js.org/4484/solutions
  > More Challenges: https://tsch.js.org
*/
```

Solution

```ts
type IsAny<T> = 1 extends T & 0 ? true : false
type IsNever<T> = [T] extends [never] ? true : false

type IsTuple<T> = true extends IsAny<T> | IsNever<T>
  ? false
  : T extends readonly [infer First, ...infer Other] | readonly []
    ? true
    : false
```
