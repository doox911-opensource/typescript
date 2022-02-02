Original task

```ts
/*
  1097 - IsUnion
  -------
  by null (@bencor) #medium 
  
  ### Question
  
  Implement a type `IsUnion`, which takes an input type `T` and returns whether `T` resolves to a union type.
  
  For example:
    
    type case1 = IsUnion<string>  // false
    type case2 = IsUnion<string|number>  // true
    type case3 = IsUnion<[string|number]>  // false

  > View on GitHub: https://tsch.js.org/1097
*/


/* _____________ Your Code Here _____________ */

type IsUnion<T> = any

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsUnion<string>, false >>,
  Expect<Equal<IsUnion<string|number>, true >>,
  Expect<Equal<IsUnion<'a'|'b'|'c'|'d'>, true >>,
  Expect<Equal<IsUnion<undefined|null|void|''>, true >>,
  Expect<Equal<IsUnion<{a: string}|{a: number}>, true >>,
  Expect<Equal<IsUnion<{a: string|number}>, false >>,
  Expect<Equal<IsUnion<[string|number]>, false >>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<string|never>, false >>,
  Expect<Equal<IsUnion<string|unknown>, false >>,
  Expect<Equal<IsUnion<string|any>, false >>,
  Expect<Equal<IsUnion<string|'a'>, false >>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/1097/answer
  > View solutions: https://tsch.js.org/1097/solutions
  > More Challenges: https://tsch.js.org
*/
```

Solutions(not mine)

https://github.com/type-challenges/type-challenges/issues/1140
```ts
type IsUnion<UnionType, CloneUnionType extends UnionType = UnionType> = (
  UnionType extends UnionType 
    ? CloneUnionType extends UnionType 
      ? true 
      : unknown 
    : never
) extends true ? false : true;
```

https://github.com/type-challenges/type-challenges/issues/1227
```ts
type IsUnion2<T, B = T> = T extends B 
  ? [B] extends [T] 
    ? false 
    : true 
  : never;
```

https://github.com/type-challenges/type-challenges/issues/1146
```ts
type UnionToInterSection<T> = (T extends any ? (arg: T) => any : never) extends (arg : infer R) => any ? R : never
type IsUnion<T> = [T] extends [UnionToInterSection<T>] ? false : true
```

But all solutions fail in one test case:
```ts
type cases = [
 Expect<Equal<IsUnion<(() => any)|(() => 15)>, true >>,
]
```
