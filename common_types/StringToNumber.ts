```ts
type StringToNumber<S extends `${number | bigint}`> = S extends `${infer N extends number | bigint}` 
  ? N 
  : never;
```
