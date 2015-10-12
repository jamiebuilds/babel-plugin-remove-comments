# babel-plugin-remove-comments

Remove comments.

## Installation

```sh
$ npm install babel-plugin-remove-comments
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["remove-comments"]
}
```

### Via CLI

```sh
$ babel --plugins remove-comments script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["remove-comments"]
});
```
