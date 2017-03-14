<h1 align="center"><%= repoName %></h1>
<div align="center">
  <strong><%= moduleDescription %></strong>
</div>
<br>
<div align="center">
    <a href="https://npmjs.org/package/<%= moduleName %>">
      <img src="https://img.shields.io/npm/v/<%= moduleName %>.svg?style=flat-square" alt="NPM version" />
    </a>
    <a href="https://npmjs.org/package/<%= moduleName %>">
    <img src="https://img.shields.io/npm/dm/<%= moduleName %>.svg?style=flat-square" alt="Downloads" />
    </a>
    <a href="https://github.com/feross/standard">
      <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
    </a>
    <a href="https://travis-ci.org/<%= githubUsername %>/<%= repoName %>">
      <img src="https://img.shields.io/travis/<%= githubUsername %>/<%= repoName %>/master.svg?style=flat-square" alt="Travis Build" />
    </a>
    <a href="https://github.com/RichardLitt/standard-readme)">
      <img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" alt="Standard Readme" />
    </a>
    <a href="https://badge.fury.io/gh/<%= githubUsername %>%2F<%= repoName %>">
      <img src="https://badge.fury.io/gh/<%= githubUsername %>%2F<%= repoName %>.svg?style=flat-square" alt="GitHub version" />
   </a>
   <a href="http://packagequality.com/#?package=<%= moduleName %>">
    <img src="http://packagequality.com/shield/<%= moduleName %>.svg" alt="Package quality"/>
  </a>
</div>
<div align="center">
  <a href="https://npmjs.org/package/<%= moduleName %>">
    <img src="https://img.shields.io/npm/v/<%= moduleName %>.svg?style=flat-square" alt="Package version" />
  </a>
  <a href="https://npmjs.org/package/<%= moduleName %>">
  <img src="https://img.shields.io/npm/dm/<%= moduleName %>.svg?style=flat-square" alt="Downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
  </a>
  <a href="https://travis-ci.org/<%= githubUsername %>/<%= repoName %>">
    <img src="https://img.shields.io/travis/<%= githubUsername %>/<%= repoName %>.svg?style=flat-square" alt="Travis Build" />
  </a>
  <a href="https://github.com/RichardLitt/standard-readme)">
    <img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" alt="Standard Readme" />
  </a>
  <a href="https://badge.fury.io/gh/<%= githubUsername %>%2F<%= repoName %>">
    <img src="https://badge.fury.io/gh/<%= githubUsername %>%2F<%= repoName %>.svg?style=flat-square" alt="GitHub version" />
  </a>
  <a href="https://dependencyci.com/github/<%= githubUsername %>/<%= moduleName %>">
    <img src="https://dependencyci.com/github/<%= githubUsername %>/<%= moduleName %>/badge?style=flat-square" alt="Dependency CI" />
  </a>
  <a href="https://github.com/<%= githubUsername %>/<%= moduleName %>/blob/master/other/LICENSE">
    <img src="https://img.shields.io/npm/l/<%= moduleName %>.svg?style=flat-square" alt="License" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs" />
  </a>
  <a href="https://www.paypal.me/<%= githubUsername %>/1">
    <img src="https://img.shields.io/badge/$-support-green.svg?style=flat-square" alt="Donate" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/<%= githubUsername %>/<%= moduleName %>/watchers">
    <img src="https://img.shields.io/github/watchers/<%= githubUsername %>/<%= repoName %>.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/<%= githubUsername %>/<%= moduleName %>/stargazers">
    <img src="https://img.shields.io/github/stars/<%= githubUsername %>/<%= repoName %>.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20<%= moduleName %>!%20https://github.com/<%= githubUsername %>/<%= moduleName %>%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/<%= githubUsername %>/<%= repoName %>.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="<%= humanizedWebsite %>"><%= name %></a> and <a href="https://github.com/<%= githubUsername %>/<%= repoName %>/graphs/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#api">API</a></li>
  <% if (cli) { %><li><a href="#cli">CLI</a></li><% } %>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>


## Install

```sh
$ npm install --save <%= moduleName %>
```

Or

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

Note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

Licensed under the MIT License.