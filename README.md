# eslint-config-p-ts

This package provides P's base TS .eslintrc as an extensible shared config.

This configure was created from this document.
https://esa-pages.io/p/sharing/13216/posts/347/2a5d899a3514d47859de.html

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

