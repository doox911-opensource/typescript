Original task

```ts
/*
  4803 - Trim Right
  -------
  by Yugang Cao (@Talljack) #medium 
  
  ### Question
  
  Implement `TrimRight<T>` which takes an exact string type and returns a new string with the whitespace ending removed.
  
  For example:
  
  type Trimed = TrimRight<'   Hello World    '> // expected to be '   Hello World'
  
  > View on GitHub: https://tsch.js.org/4803
*/

/* _____________ Your Code Here _____________ */

type TrimRight<S extends string> = any

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimRight<'str'>, 'str'>>,
  Expect<Equal<TrimRight<'str '>, 'str'>>,
  Expect<Equal<TrimRight<'str     '>, 'str'>>,
  Expect<Equal<TrimRight<'     str     '>, '     str'>>,
  Expect<Equal<TrimRight<'   foo bar  \n\t '>, '   foo bar'>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4803/answer
  > View solutions: https://tsch.js.org/4803/solutions
  > More Challenges: https://tsch.js.org
*/
```

Solution(mine)

```ts
type TrimRight<S extends string> = S extends `${infer OtherSymbols}${' '|'\n'|'\t'}` 
  ? TrimRight<OtherSymbols>
  : S
```
  
Solution(not mine)

https://github.com/type-challenges/type-challenges/issues/4914
```ts
type TrimRight<S extends string> = S extends `${infer S} ` | `${infer S}\n\t`? TrimRight<S>: S
```

https://github.com/type-challenges/type-challenges/issues/4836
```ts
type TrimRight<S extends string> =
  S extends `${infer R} ` ? TrimRight<R> : 
  S extends `${infer R}\n` ? TrimRight<R> : 
  S extends `${infer R}\t` ? TrimRight<R> : S
```
