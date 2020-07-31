<img src="https://jungsoft.io/static/media/jungsoft_logo.c44eaf52.png" width="300px"/>

[![NPM](https://img.shields.io/npm/v/parse-grouped-float.svg?style=flat-square)](https://www.npmjs.com/jungsoft/parse-grouped-float)
[![Languages](https://img.shields.io/github/languages/count/jungsoft/parse-grouped-float?style=flat-square)](#)
[![Stars](https://img.shields.io/github/stars/jungsoft/parse-grouped-float?style=flat-square)](https://github.com/jungsoft/parse-grouped-float/stargazers)
[![Forks](https://img.shields.io/github/forks/jungsoft/parse-grouped-float?style=flat-square)](https://github.com/jungsoft/parse-grouped-float/network/members)
[![Contributors](https://img.shields.io/github/contributors/jungsoft/parse-grouped-float?style=flat-square)](https://github.com/jungsoft/parse-grouped-float/graphs/contributors)

> 🔢 Powerfully handle the parsing of decimal numbers, grouped floats, and all sorts of other numbers.

# Parse Grouped Float

This package provides a way to handle the parsing of decimal numbers, grouped floats, and all sorts of other numbers.

## Installation

With NPM
```
npm install parse-grouped-float
```

With Yarn

```
yarn add parse-grouped-float
```

## Usage

```jsx
import parseGroupedFloat from "parse-grouped-float";

parseGroupedFloat("11,11"); // results to 11.11
parseGroupedFloat("11.11"); // results to 11.11
parseGroupedFloat("11,000"); // results to 11
parseGroupedFloat("11,000.1"); // results to 11000.1
parseGroupedFloat("11,000.12"); // results to 11000.12
parseGroupedFloat("11..00"); // results to 11
parseGroupedFloat("11,,00"); // results to 11
parseGroupedFloat("42.01690672268907563025210084"); // results to 42.01690672268908
```

## Made possible by

<a href="https://github.com/jungsoft/parse-grouped-float/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=jungsoft/parse-grouped-float" />
</a>

## License

MIT © [Jungsoft](https://github.com/jungsoft)
