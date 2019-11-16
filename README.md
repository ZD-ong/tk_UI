# tk-wheel

[![Build Status](https://travis-ci.org/ZD-ong/tk_UI.svg?branch=master)](https://travis-ci.org/ZD-ong/tk_UI)

this is a awesome UI framwork using vue

- author: Dong Zuo

## Introduction

`CSS` style

Before using this framework, you should use 'border-box'

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

This feature is supported by IE8 and above.

---

You also need to set variables such as global colors (subsequently changed to `sass variable`)

```css
:root {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999999;
  --border-color-hover: #666;
}
```

This feature is supported by IE15 and above.

## Install

1. install `tk-wheel`

```javascript
npm i --save tk-wheel
```

2. import `tk-wheel`

```javascript
import { Button } from "tk-wheel";

export default {
  name: "app",
  components: {
    "tk-button": Button
  }
};
```

## Ecosystem

## Documentation

## Questions

## Issues

## Changelog
