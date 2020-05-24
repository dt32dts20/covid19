# Oita COVID-19 Task Force website



[![大分県 新型コロナウイルス感染症対策サイト](https://user-images.githubusercontent.com/24912801/77246566-1f8fb180-6c6c-11ea-81b5-ebda94b8c163.png)](https://oita.stopcovid19.jp/)


### [日本語](./../../README.md) | English


## How to Contribute

All contributions are welcome!
Please check [How to contribute](./CONTRIBUTING.md) for details.

## License
This software is released under [the MIT License](./../../LICENSE.txt).

## For Translators

Please check [How to translate](./../../TRANSLATION.md) doc and [Code of Conduct](./../../CODE_OF_CONDUCT.md).

## For Developers

### How to Set Up Environments

- Required Node.js version: 10.19.0 or higher

**Use yarn**
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

**Use docker**
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

### How to resolve `Cannot find module ****` error

**Use yarn**
```bash
$ yarn install
```

**Use docker**
```bash
$ docker-compose run --rm app yarn install
```

### When developing with VSCode + Remote Containers

1.	The VSCode extension "[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)" is introduced.
2.	If you select the “Open Folder in Container” root of this repository (as seen in the lower left [here（external site）](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)), the environment construction will start.

#### Notes
- If you want to change the settings, modify `'.devcontainer/devcontainer.json `'. Please refer to [devcontainer.json reference](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference) for more details.
- The extension "ESLint" is only valid when executing Remote Container. Please add it to the `'extensions `' of `'devcontainer.json `' if necessary.
- A detailed procedure can be found [here（external site）] (https://code.visualstudio.com/docs/remote/containers#_managing-extensions).
- When rebuilding the development environment, please execute “Rebuild Container” which can be found at the lower left.

### Detect production/others environment

On the production environment, `'production'` is assigned to `process.env.GENERATE_ENV` variable, on the other case `'development'` is assigned to the variable.
Please use the variable to detect which enviroinment is used at the runtime.

### Deployment to Staging & Production Environments

When `master` branch is updated, the HTML files will be automatically built onto `production` branch,
and then the production site (https://covid19-oita.netlify.com/) will be also updated.

When `development` branch is updated, the HTML files will be automatically built onto `dev-pages` branch,
and then the development site (https://dev-covid19-oita.netlify.com/) will be also updated.

### Branch rules

Pull Request is allowed only for `development`, `dev-i18n` and `dev-hotfix`.
Please use the following naming rules for the branch when sending a Pull Request.

Feature implementation: feature/#{ISSUE_ID}-#{branch_title_name}
Hotfix commit: hotfix/#{ISSUE_ID}-{branch_title_name}

#### Basic branch
| Purpose | Branch | Confirmation URL | Remarks |
| ---- | -------- | ---- | ---- |
| Development | development | http://dev-covid19-oita.netlify.com/ | base branch. Basically send a Pull Request here |
Production | master | https://oita.stopcovid19.jp/ | Pull Requests other than Administrators are prohibited |

#### Branch used by the system
| Purpose | Branch | Confirmation URL | Remarks |
| ---- | -------- | ---- | ---- |
| Production site HTML | production | https://oita.stopcovid19.jp/ | Location where statically built HTML is located |

### Media Coverage
- [COVID-19 Infomation (Oita Pref.)](https://www.pref.oita.jp/site/covid19-oita/): The link was posted.

- [Government CIOs' Portal, Japan](https://cio.go.jp/node/2581): The site was introduced as a countermeasure against a new type of coronavirus infection using open source from the Tokyo Metropolitan Government.

- [TOS TV Oita](https://www.tostv.jp/emergency/): Some of the site's content was cited.

- [PhotoPRESS COVID-19 Dashboard](https://photopress.jp/covid19-dashboard): Some of the site's content was cited.
