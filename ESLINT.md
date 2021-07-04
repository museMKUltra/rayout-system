# Prettier + ESLint + Standard

## Prettier

### Install

`npm install -D prettier`

### rc file

`touch .prettierrc`

```json
{
  "arrowParens": "avoid",
  "useTabs": true,
  "singleQuote": true,
  "semi": false
}
```

### WebStorm setting

1. `⌘ + ,`
1. Languages & Frameworks > Javascript > Prettier
1. Setting 
   - `Prettier package`
   - - [x] On save
    
## ESLint

### Install
`npm install -D eslint-config-standard`

### Init
`npx eslint --init`
* `To check syntax and find problems`
* `JavaScript modules (import/export)` (esm)
* `React`
* `No` (TypeScript)
* `Node`
* `JavaScript`
* `Yes` (eslint-plugin-react@latest eslint@latest)

### WebStorm setting

1. `⌘ + ,`
1. Languages & Frameworks > Javascript > Code Quality Tools > ESLint
1. Setting
   - - [x] `Manual ESLint Configuration` 
   - path of `ESLint package`
   - path of `Configuration file`
   
### React Property
```
module.exports = {
   ...
   rules: {
      "react/prop-types": "off"
   },
}
```