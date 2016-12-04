# <%= repoName %> 
[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
[![Build Status](https://travis-ci.org/<%= githubUsername %>/<%= repoName %>.svg?branch=master)]
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

TODO: Put more badges here.

> <%= moduleDescription %>

TODO: Fill out this long description.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
<% if (cli) { %>
- [CLI](#cli)
<% } %>
- [Contribute](#contribute)
- [License](#license)


## Install

```sh
$ npm install --save <%= moduleName %>
```

```sh
$ yarn add <%= moduleName %>
```

## Usage

```js
const <%= camelModuleName %> = require('<%= moduleName %>');
```

## API

<% if (cli) { %>

## CLI

```sh
$ npm install --global <%= moduleName %>
```
<% } %>

## Contribute

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

Created with ♥ by [<%= name %>](<%= website %>). Licensed under the MIT License.