Original task

```ts
/*
  223 - IsAny
  -------
  by Pavel Glushkov (@pashutk) #hard #utils
  
  ### Question
  
  Sometimes it's useful to detect if you have a value with `any` type. This is especially helpful while working with third-party Typescript modules, which can export `any` values in the module API. It's also good to know about `any` when you're suppressing implicitAny checks.
  
  So, let's write a utility type `IsAny<T>`, which takes input type `T`. If `T` is `any`, return `true`, otherwise, return `false`.
  
  > View on GitHub: https://tsch.js.org/223
*/

/* _____________ Your Code Here _____________ */

type IsAny<T> = any

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsAny<any>, true>>,
  
  Expect<Equal<IsAny<undefined>, false>>,
  Expect<Equal<IsAny<unknown>, false>>,
  Expect<Equal<IsAny<never>, false>>,
  Expect<Equal<IsAny<string>, false>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/223/answer
  > View solutions: https://tsch.js.org/223/solutions
  > More Challenges: https://tsch.js.org
*/
```

Solution(mine)

```ts
type IsAny<T> = Equal<T, any>
```

Solutions(not mine)

https://github.com/type-challenges/type-challenges/issues/5794
```ts
type IsAny<T> = [{}, T] extends [T, null] ? true : false;
```

https://github.com/type-challenges/type-challenges/issues/3693
```ts
type IsAny<T> = 1 extends T & 0 ? true : false
type IsAny<T> = boolean extends (T extends 1 ? true : false) ? true : false
```

https://github.com/type-challenges/type-challenges/issues/232
```ts
type IsAny<T> = 0 extends (1 & T) ? true : false;
```

