# eslint-config-p-ts

This package provides P's base TS .eslintrc as an extensible shared config.

This configure was created from this document.
https://github.com/basarat/typescript-book/blob/master/docs/styleguide/styleguide.md

## Changed rules  from TypeScript books style guide

### Naming

#### [MUST] Use prefix `I` to interface

Yes, it is useless, but rules is not unnecessary in rules.
I think, `don't use prefix I` is also perfect rule.
You can customize it in your project.

*Bad*
```ts
interface MyProps {
  hoge: string;
  fuga: number;
}
```

*Good*
```ts
interface IMyProps {
  hoge: string;
  fuga: number;
}
```

### Export

#### [SHOULD] No export default

Please ignore this when needs use default export in flamework. (eg Nuxt's middleware)

*Bad*
```ts
class Foo {}
export default Foo;
```

*Good*
```ts
export class Foo {}
```

### Semicolon

### [MUST] Use Semicolons in interfaces

In TypeScript, you can separate interfaces with semicolons, also can use commas too. But modern coding rule is recommended use semicolon.

*Bad*

```ts
interface Hoge {
  huga: string,
  piyo: number,
}

const foo: { bar: string, baz: number } = { bar: 'bar', baz: 0 };
```

*Good*

```ts
interface Hoge {
  huga: string;
  piyo: number;
}

const foo: { bar: string; baz: number; } = { bar: 'bar', baz: 0 };
```


## Usage

Packaged our JavaScript / TypeScript coding standard.

1. Install dependencies packages.

```
yarn add -D eslint-config-p-ts
```

2. Add your `.eslintrc` 's `extends` section.

```.eslintrc
extends: ['p-ts']
```

Please note here has meaning to the position. We prefer put it last or put before `prettier`.

