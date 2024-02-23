<!-- NPM: Node Package Manager -->

# NPM

## NPM commands

npm view packageName (to get info)
npm view packageName versions (to get versions)

npm init
npm init -y (yes to config questions)

npm install
npm install --production

npm list
npm version (list package versions)

npm install packageName
npm install packageName -D (devdep)
npm install packageName@3.2.9 (certain version "^3.2.9")
npm install packageName@3.2.9 --save-exact (certain version exactly "3.2.9")
npm install file:/path/to/local/folder (local package)

npx depcheck (check unused dependencies)

npm uninstall packageName

npm audit (check for vulnerabilities)

npm update (update packages to latest versions respecting indications)
npm update packageName

npm run start
npm run test

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

npm link (to create link from a local package)
npm link packageName (to get linked local package)

npm pack (create package for npm)

npm publish (publish package to npm)



