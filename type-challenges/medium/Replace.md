Original task

```ts
/*
  116 - Replace
  -------
  by Anthony Fu (@antfu) #medium #template-literal
  
  ### Question
  
  Implement `Replace<S, From, To>` which replace the string `From` with `To` once in the given string `S`
  
  For example
  
  type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'
  
  > View on GitHub: https://tsch.js.org/116
*/

/* _____________ Your Code Here _____________ */

type Replace<S extends string, From extends string, To extends string> = any

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/116/answer
  > View solutions: https://tsch.js.org/116/solutions
  > More Challenges: https://tsch.js.org
*/
```

Solution

```ts
type Replace<S extends string, From extends string, To extends string> = From extends '' 
  ? S
  : S extends `${From}${infer Rest}`
    ? `${To}${Rest}`
    : S extends `${infer First}${infer Rest}`
      ? `${First}${Replace<Rest, From, To>}`
      : S
```

Solutions(not mine)

https://github.com/type-challenges/type-challenges/issues/354
```ts
type Replace<S extends string, From extends string, To extends string> = S extends `${infer U}${From}${infer V}`
  ? From extends '' 
    ? `${U}${From}${V}`
    : `${U}${To}${V}`
  : S;
```

https://github.com/type-challenges/type-challenges/issues/377
```ts
type Replace<S extends string, From extends string, To extends string> =
  From extends ''
    ? S
    : S extends `${infer A}${From}${infer B}`
      ? `${A}${To}${B}`
      : S;
```

https://github.com/type-challenges/type-challenges/issues/584
```ts
type Replace<S extends string, From extends string, To extends string> = S extends `${infer First}${From}${infer Last}`
  ? `${First}${From extends '' ? '' : To}${Last}`
  : S
```
