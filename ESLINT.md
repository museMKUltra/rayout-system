# Prettier + ESLint

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
`npm install -D eslint`

### Init
`npx eslint --init`
* `To check syntax, find problems, and enforce code style` (purpose)
* `JavaScript modules (import/export)` (type of modules)
* `React` (framework)
* `No` (TypeScript)
* `Node` (code run)
* `Answer questions about your style` (define a style)
* `JavaScript` (config format)
* `Tabs` (indentation)
* `Single` (quotes)
* `Unix` (line endings)
* `No` (semicolons)
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