# MESA

![MESA](/screenshots/mesa.png")

MESA stands for Material Electron SQLite Angular2

This is your go to template for creating Electron apps with a Material UI. Included is a basic demo using angular and electron. It uses [ngrx] to manage state.

## Install dependencies and build project

```bash
$ npm install
$ npm run build
```

## Run the demo
In one terminal, run the following to build when changes are made to the source:
```bash
$ npm run watch
```

In another terminal, run the following to actually see the electron app:
```bash
$ npm run electron
```

## Packaging

The app has support for packaging using 'electron-packager'

```bash
$ npm run package
```

Will run the package for OSX. You can also provide additional options to the package command such as

*  --name : The package name
*  --all : Will packaget the application to all the platforms
*  --arch : Arches to be provided
*  --icon : The icon for the app

## License
This project is based on [angular-electron](https://github.com/joaogarin/angular-electron)
[MIT]

[Webpack]: http://webpack.github.io
[MIT]: http://markdalgleish.mit-license.org
[angular]: http://angular.io
[electron]: http://electron.atom.io/
[ngrx]: https://github.com/ngrx/store
[material2]: https://github.com/angular/material2
[electron-packager]: https://github.com/electron-userland/electron-packager
