'use strict'
const normalizeUrl = require('normalize-url')
const humanizeUrl = require('humanize-url')
const yeoman = require('yeoman-generator')
const _s = require('underscore.string')

module.exports = class extends yeoman.Base {
  init () {
    return this.prompt([{
			name: 'moduleName',
			message: 'Name of the module?',
			default: _s.slugify(this.appname),
			filter: x => _s.slugify(x)
		}, {
			name: 'moduleDescription',
			message: 'What is your module description?',
			default: 'A node module',
      validate: x => x.length > 0 ? true : 'You have to provide a module description'
		}, {
			name: 'githubUsername',
			message: 'What is your GitHub username?',
			store: true,
			validate: x => x.length > 0 ? true : 'You have to provide a username'
		}, {
			name: 'website',
			message: 'What is the URL of your website?',
			store: true,
			validate: x => x.length > 0 ? true : 'You have to provide a website URL',
			filter: x => normalizeUrl(x)
		}, {
			name: 'cli',
			message: 'Do you need a CLI?',
			type: 'confirm'
		}]).then((props) => {
			const or = (option, prop) => this.options[option] === undefined ? props[prop || option] : this.options[option];
			const cli = or('cli');
			const repoName = props.moduleName

			const tpl = {
				moduleName: props.moduleName,
				moduleDescription: props.moduleDescription,
				camelModuleName: _s.camelize(repoName),
				githubUsername: this.options.org || props.githubUsername,
				repoName,
				name: this.user.git.name(),
				email: this.user.git.email(),
				website: props.website,
				humanizedWebsite: humanizeUrl(props.website),
				cli,
			};

			const mv = (from, to) => {
				this.fs.move(this.destinationPath(from), this.destinationPath(to));
			};

			this.fs.copyTpl([
				`${this.templatePath()}/**`,
				'!**/cli.js'
			], this.destinationPath(), tpl);

			if (cli) {
				this.fs.copyTpl(this.templatePath('cli.js'), this.destinationPath('cli.js'), tpl);
			}

			mv('editorconfig', '.editorconfig');
			mv('gitattributes', '.gitattributes');
			mv('gitignore', '.gitignore');
			mv('travis.yml', '.travis.yml');
			mv('_package.json', 'package.json');
		});
  }

  git() {
		this.spawnCommandSync('git', ['init']);
	}
	install() {
		this.installDependencies({bower: false});
	}

  end() {
    console.log('Done!')
  }
}

// module.exports = class extends yeoman.Base {
//   init () {
//     return this.prompt([{
//       name: 'moduleName',
//       message: 'Name of the module?',
//       default: _s.slugify(this.appname),
//       filter: x => _s.slugify(x)
//     },
//     {
//       name: 'description',
//       message: 'Description of the module?',
//       default: 'A node module',
//       validate: x => x.length > 0 ? true : 'You have to provide a module description'
//     }, {
//       name: 'githubUsername',
//       message: 'Your GitHub username?',
//       store: true,
//       validate: x => x.length > 0 ? true : 'You have to provide a username'
//     }, {
//       name: 'website',
//       message: 'Your website URL?',
//       store: true,
//       validate: x => x.length > 0 ? true : 'You have to provide a website URL',
//       filter: x => normalizeUrl(x)
//     }, {
//       name: 'keywords',
//       message: 'What keywords describe this module?',
//       store: true
//     }, {
//       name: 'cli',
//       message: 'Do you need a CLI?',
//       type: 'confirm',
//       default: false
//     }], props => {

//       const tpl = {
//         moduleName: props.moduleName,
//         camelModuleName: _s.camelize(props.moduleName),
//         githubUsername: props.githubUsername,
//         name: this.user.git.name(),
//         email: this.user.git.email(),
//         website: props.website,
//         humanizedWebsite: humanizeUrl(props.website),
//         description: props.description,
//         keywords: props.keywords.split(' ').filter(item => { if (item !== '') return item }),
//         cli: props.cli
//       }

//       const mv = (from, to) => {
//         this.fs.move(this.destinationPath(from), this.destinationPath(to))
//       }

//       this.fs.copyTpl([
//         `${this.templatePath()}/**`,
//         '!**/cli.js'
//       ], this.destinationPath(), tpl)

//       if (props.cli) {
//         this.fs.copyTpl(this.templatePath('cli.js'), this.destinationPath('cli.js'), tpl)
//       }

//       mv('editorconfig', '.editorconfig')
//       mv('gitignore', '.gitignore')
//       mv('gitattributes', '.gitattributes')
//       mv('travis.yml', '.travis.yml')
//       mv('_package.json', 'package.json')

//     })
//   }

//   git() {
// 		this.spawnCommandSync('git', ['init']);
// 	}
// 	install() {
// 		this.installDependencies({bower: false});
// 	}
// }
