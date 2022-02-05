Original task

```ts
/*
  191 - Append Argument
  -------
  by Maciej Sikora (@maciejsikora) #medium #arguments
  
  ### Question
  
  For given function type `Fn`, and any type `A` (any in this context means we don't restrict the type, and I don't have in mind any type 😉) create a generic type which will take `Fn` as the first argument, `A` as the second, and will produce function type `G` which will be the same as `Fn` but with appended argument `A` as a last one.
  
  For example,

  type Fn = (a: number, b: string) => number
  
  type Result = AppendArgument<Fn, boolean> 
  
  > This question is ported from the [original article](https://dev.to/macsikora/advanced-typescript-exercises-question-4-495c) by [@maciejsikora](https://github.com/maciejsikora)
  
  > View on GitHub: https://tsch.js.org/191
*/

/* _____________ Your Code Here _____________ */

type AppendArgument<Fn, A> = any

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>
type Result1 = (a: number, b: string, x: boolean) => number

type Case2 = AppendArgument<() => void, undefined>
type Result2 = (x: undefined) => void

type cases = [
  Expect<Equal<Case1, Result1>>,
  Expect<Equal<Case2, Result2>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/191/answer
  > View solutions: https://tsch.js.org/191/solutions
  > More Challenges: https://tsch.js.org
*/
```
Solution

```ts
type AppendArgument<F, A> = F extends (...args: infer P) => infer ReturnType 
  ? (...args: [...P, ...[x: A]]) => ReturnType
  : F
```

Solutions(not mine)

https://github.com/type-challenges/type-challenges/issues/222
```ts
type AppendArgument<Fn, A> = Fn extends (...args: infer R) => infer T ? (...args: [...R, A]) => T : never
```
