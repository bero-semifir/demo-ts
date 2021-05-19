# Typescript

Typescript est une surcouche à JS créée par Microsoft. C'est à dire une extension du langage.

Transpilation: Conversion vers un langage de même niveau.
Compilation: Conversion vers un langage plus bas niveau.

Typescript transpile les fichiers en .ts en fichier Javascript.

## initialiser un projet NodeJS

Comme tous les projets en NodeJS, il faut initialiser le package.json.
C'est un fichier qui renseigne diverses informations sur le projet: le nom du projet, sa description, ses dépendances, etc.

`npm init`

## Initialiser un projet en Typescript

### Installer typescript au niveau du projet

Avec npm: `npm install typescript --save-dev`

Typescript sera alors incrit en tant que dépendance de développement. (Non inclu dans la version buildé de l'application)

### Initialiser Typescript

Avec npx (node package executor):

`npx tsc --init`

Ceci va créer un fichier `tsconfig.json` qui contient les infos pour que ts transpile.

aux lignes 17 et 49 du tsconfig.json se trouvent 2 options qui sont utile dans le cadre d'un projet en TS.

Ligne 17:
```js
    outDir: "./dist" // renseigne l'emplacement de compliation (transpilation) du projet (en .js)
```
Ligne 49:
```js
    rootDirs: ["./app"] // renseigne l'emplacement du projet non transpilé (en .ts)
```
