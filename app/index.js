'use strict'
const normalizeUrl = require('normalize-url')
const humanizeUrl = require('humanize-url')
const yeoman = require('yeoman-generator')
const yosay = require('yosay')
const chalk = require('chalk')
const _s = require('underscore.string')

module.exports =
  class extends yeoman.Base {
    init () {
		this.log(yosay(`Hi! Welcome to the ${chalk.red('dup')} generator!`))
		
      return this.prompt([{
        name: 'moduleName',
        message: `What is the ${chalk.red('name')} of your module?`,
        default: _s.slugify(this.appname),
        filter: x => _s.slugify(x)
      }, {
        name: 'moduleDescription',
        message: `What is your module ${chalk.red('description')}?`,
        default: 'A node module',
        validate: x => x.length > 0 ? true : 'You have to provide a module description'
      }, {
        name: 'githubUsername',
        message: `What is your ${chalk.red('GitHub username')}?`,
        store: true,
        validate: x => x.length > 0 ? true : 'You have to provide a username'
      }, {
        name: 'website',
        message: `What is the ${chalk.red('URL')} of your website?`,
        store: true,
        validate: x => x.length > 0 ? true : 'You have to provide a website URL',
        filter: x => normalizeUrl(x)
      }, {
        name: 'keywords',
        message: `What ${chalk.red('keywords')} describe this module?`,
        store: true
      }, {
        name: 'cli',
        message: `Do you need a ${chalk.red('CLI')}?`,
        type: 'confirm',
        default: false
      }]).then((props) => {

        const tpl = {
          moduleName: props.moduleName,
          moduleDescription: props.moduleDescription,
          camelModuleName: _s.camelize(props.moduleName),
          githubUsername: this.options.org || props.githubUsername,
          repoName: props.moduleName,
          name: this.user.git.name(),
          email: this.user.git.email(),
          website: props.website,
          humanizedWebsite: humanizeUrl(props.website),
          cli: props.cli,
		  keywords: props.keywords.split(' ')
        }

        const mv = (from, to) => {
          this.fs.move(this.destinationPath(from), this.destinationPath(to))
        }

        this.fs.copyTpl([
          `${this.templatePath()}/**`,
          '!**/cli.js'
        ], this.destinationPath(), tpl)

        if (props.cli) {
          this.fs.copyTpl(this.templatePath('cli.js'), this.destinationPath('cli.js'), tpl)
        }

        mv('editorconfig', '.editorconfig')
        mv('gitattributes', '.gitattributes')
        mv('gitignore', '.gitignore')
        mv('travis.yml', '.travis.yml')
        mv('_package.json', 'package.json')
      })
    }

    git () {
      this.spawnCommandSync('git', ['init'])
    }
    install () {
      this.installDependencies({bower: false})
    }

}
