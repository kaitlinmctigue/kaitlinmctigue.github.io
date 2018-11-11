# My Portfolio

---

## Other people's starter code and how-tos (THANK YOU)
* [react-starter]: https://github.com/drminnaar/react-starter by - [Douglas Minnaar](https://github.com/drminnaar)
* Concept for Theming in SASS: https://medium.com/@dmitriy.borodiy/easy-color-theming-with-scss-bc38fd5734d1 by [Dmitry Borody](https://medium.com/@dmitriy.borodiy)
* Color choices based on the rearch of: https://ethanschoonover.com/solarized/ by [Ethan Schoonover](https://ethanschoonover.com/)

## Developed With

* [Node.js 8.11](https://nodejs.org/en/) - Javascript runtime
* [React 16.4](https://reactjs.org/) - A javascript library for building user interfaces
* [Babel 6.26](https://babeljs.io/) - A transpiler for javascript
* [Webpack 4.x](https://webpack.js.org/) - A module bundler
* [SCSS](http://sass-lang.com/) - A css metalanguage

---

### Prerequisites

The following software is required to be installed on your system:

* Node 8.x
* Npm 3.x


### Install

Follow the following steps to get development environment running.

* Clone _'react-starter'_ repository from GitHub

  ```bash
  git clone https://github.com/drminnaar/react-starter.git
  ```

   _OR USING SSH_

  ```bash
  git clone git@github.com:drminnaar/react-starter.git
  ```

* Install node modules

   ```bash
   cd react-starter
   npm install
   ```

### Build

#### Build Application

dev | prod
:---: | :---:
npm run build:dev | npm run build:prod

#### Build Application And Watch For Changes

dev | prod
:---: | :---:
npm run build:dev:watch | npm run build:prod:watch

#### Build Application With BundleAnalayzer Plugin Included

dev | prod
:---: | :---:
npm run build:dev:bundleanalyze | npm run build:prod:bundleanalyze

After running the above command, a browser window will open displaying an interactive graph resembling the following image:

![bundle-analyzer](https://user-images.githubusercontent.com/33935506/36382812-eadf199e-1592-11e8-9681-cf5ccf67951f.png)

### Run ESlint

#### Lint Project Using ESLint

  ```bash
  npm run lint
  ```

#### Lint Project Using ESLint, and autofix

  ```bash
  npm run lint:fix
  ```

### Run

#### Run Start

This will run the _'serve:dev'_ npm task

```bash
npm start
```

#### Run Dev Server

```bash
npm run serve:dev
```

#### Run Dev Server With Dashboard

```bash
npm run serve:dev:dashboard
```

The above command will display a dashboard view in your console resembling the following image:

![webpack-dashboard](https://user-images.githubusercontent.com/33935506/36382813-eb10b0a8-1592-11e8-9506-fd25db65a258.png)

#### Run Prod Server

This command will build application using production settings and start the application using _live-server_

```bash
npm run serve:prod
```

---