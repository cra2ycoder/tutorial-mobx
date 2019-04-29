# tutorial-mobx

- my-js-react-app + mobx installed
- for any `react + mobx` based application which needs to be worked in the javascript then we can use this repo

---

## cloning

- clone the `my-js-react-app`

```
git clone https://cra2ycoder@github.com/cra2ycoder/my-js-react-app.git
```

- move the all files into root directory
- and the checkin the files

---

## enabling babel support for mobx (specially for decorators)

- adding this package as `devDependencies` in `package.json` file as this required only for development purpose

```js
{
  "devDependencies": {
    // core support
    "@babel/plugin-proposal-decorators": "7.4.4"
  },
}
```

- then, run the following command for installing

```
yarn install
```

- configure this plugins and preset with extends property in `.babelrc`

```js
{
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true } ],
    ["@babel/plugin-proposal-class-properties", { "loose": true } ]
  ]
}
```

- remove the following as its added again with options

```js
{
  "plugins": [
    "@babel/plugin-proposal-class-properties"
  ]
}
```

---

## install core mobx

- adding this package as `dependencies` in `package.json` file as this required only for development purpose

```js
{
  "devDependencies": {
    // core mobx features
    "mobx": "5.9.4",
    // for react specific
    "mobx-react": "5.4.3"
  },
}
```

- then, run the following command for installing

```
yarn install
```

---
