Original task

```ts
/*
  108 - Trim
  -------
  by Anthony Fu (@antfu) #medium #template-literal
  
  ### Question
  
  Implement `Trim<T>` which takes an exact string type and returns a new string with the whitespace from both ends removed.
  
  For example
  
  type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'
  
  > View on GitHub: https://tsch.js.org/108
*/

/* _____________ Your Code Here _____________ */

type Trim<S extends string> = any


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/108/answer
  > View solutions: https://tsch.js.org/108/solutions
  > More Challenges: https://tsch.js.org
*/
```

Solution

```ts
type Spase = ' ' | '\n' | '\t'

type IsSpase<S extends string> = S extends Spase ? true : false

type TrimLeft<S extends string> = S extends `${infer FirstSymbol}${infer OtherSymbols}`
  ? IsSpase<FirstSymbol> extends true
    ? TrimLeft<OtherSymbols>
    : `${FirstSymbol}${OtherSymbols}`
  : S
  
type TrimRight<S extends string> = S extends `${infer OtherSymbols}${Spase}` 
  ? TrimRight<OtherSymbols>
  : S
  
type Trim<S extends string> = TrimLeft<TrimRight<S>>
```

Solutions(not mine)

https://github.com/type-challenges/type-challenges/issues/347
```ts
type Space = ' ' | '\n' | '\t'

type Trim<S extends string> = S extends `${Space}${infer R}${Space}` ? Trim<R> : 
                              S extends `${Space}${infer U}` ? Trim<U> : 
                              S extends `${infer K}${Space}` ? Trim<K> : S
```

https://github.com/type-challenges/type-challenges/issues/353
```ts
type WhiteSpace = '\n' | ' ' | '\t';

type Trim<T extends string> = T extends `${WhiteSpace}${infer U}` 
  ? Trim<U> 
  : T extends `${infer U}${WhiteSpace}` 
    ? Trim<U> 
    : T;
```

https://github.com/type-challenges/type-challenges/issues/372
```ts
type WhiteSpace = ' ' | '\n' | '\t';

type TrimLeft<S extends string> = S extends `${WhiteSpace}${infer T}` ? TrimLeft<T> : S;

type TrimRight<S extends string> = S extends `${infer T}${WhiteSpace}` ? TrimRight<T> : S;

type Trim<S extends string> = TrimRight<TrimLeft<S>>;
```

https://github.com/type-challenges/type-challenges/issues/432
```ts
type space = ' ' | '\n' | '\t';
type Trim<S extends string> = S extends `${space}${infer R}` | `${infer R}${space}`? Trim<R> : S;
```
