Original task

```ts
/*
  106 - Trim Left
  -------
  by Anthony Fu (@antfu) #medium #template-literal
  
  ### Question
  
  Implement `TrimLeft<T>` which takes an exact string type and returns a new string with the whitespace beginning removed.
  
  For example
  
  type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '
  
  > View on GitHub: https://tsch.js.org/106
*/

/* _____________ Your Code Here _____________ */

type TrimLeft<S extends string> = any

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/106/answer
  > View solutions: https://tsch.js.org/106/solutions
  > More Challenges: https://tsch.js.org
*/
```

Solution(mine)

```ts
type TrimLeft<S extends string> = S extends `${infer FirstSymbol}${infer OtherSymbols}`
  ? FirstSymbol extends ' ' | '\n' | '\t'
    ? TrimLeft<OtherSymbols>
    : `${FirstSymbol}${OtherSymbols}`
  : S
```

Solutions(not mine)

https://github.com/type-challenges/type-challenges/issues/2752
```ts
type TrimChar = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${infer Left}${infer Rest}` ? Left extends TrimChar ? TrimLeft<Rest> : S : S
```

https://github.com/type-challenges/type-challenges/issues/346
```ts
type Space = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${Space}${infer R}` ? TrimLeft<R> : S
```

https://github.com/type-challenges/type-challenges/issues/757
```ts
type TrimLeft<S extends string> =
  S extends ` ${infer R}`
    ? TrimLeft<R> :
  S extends `\n${infer R}`
    ? TrimLeft<R> :
  S extends `\t${infer R}`
    ? TrimLeft<R> :
  S;
```

https://github.com/type-challenges/type-challenges/issues/876
```ts
type TrimPrefix<StringType extends string, Prefix extends string, Recursive extends boolean = false> =
  StringType extends `${Prefix}${infer Trimmed}` ? 
    (Recursive extends true ? TrimPrefix<Trimmed, Prefix, Recursive> : Trimmed) :
    StringType;
type TrimLeft<S extends string> = TrimPrefix<S, ' '|'\n'|'\t', true>;
```
