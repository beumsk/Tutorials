<!-- Yarn: package and dependencies manager -->

# Yarn

## Yarn commands

yarn init
yarn init -y (yes to config questions)

yarn install (or yarn)
yarn install --production

yarn list
yarn outdated (outdated packages listed)
yarn info packageName (to get info)
yarn info packageName versions (to get versions)
yarn why packageName (checks why a dependencies exist in your project)

yarn add packageName
yarn add packageName -D (devdep)
yarn add packageName@3.2.9 (certain version "3.2.9")
yarn add file:/path/to/local/folder (local package)

yarn remove packageName

yarn upgrade (update packages to latest versions respecting indications)
yarn upgrade packageName

yarn autoclean (list files to be removed; they will be cleaned out on every yarn install)
yarn autoclean --force (removes those files)

yarn import (create yarn.lock from package-lock.json)

yarn start
yarn test

## Package.json

{
  "name": "packageName",
  "version": "1.0.0",
  "description": "",
  "keywords": [],
  "author": "authorName",
  "main": "index.html",
  "scripts": {
    "start": "start-script",
    "test": "test-script"
  },
  "dependencies": {
    "package-name-exact-version": "3.2.9",
    "package-name-greater-than-version": ">3.2.9",
    "package-name-compatible-changes-version": "^3.2.9",
    "package-name-minor-level-changes-version": "~3.2.9",
  },
  "devDependencies": {
    "package-name-only-for-npm-package-in-dev": "3.2.9",
  },
  "license": "MIT",
  "private": true,
  "files": [
    "src/",
    "dist/assets"
  ],
  "browserslist": [
    "default"
  ],
  "repository": {
    "type": "git",
    "url": "https://idontknow/todo.git"
  }
}


## Create package and publish

yarn link (to create link from a local package)
yarn link packageName (to get linked local package)

yarn version (asks new version)

yarn pack (create package for npm)

yarn publish (publish package to npm)



