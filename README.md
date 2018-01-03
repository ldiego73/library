# library
Libreria

## 1. babel

Conjunto de librerías para la compilación y/o exportación de codigo ES6 a ES5.

- babel-core: El core del compilador.
- babel-cli: Cliente para ejecutar codigo ES6.
- babel-loader: Loader para el Webpack.
- babel-preset-es2015-native-modules: Preset para todos los complementos nativos de ES5.
- babel-preset-es2015: Preset para todos los complementos de ES5.
- babel-preset-es2017: Preset para todos los complementos de ES7.
- babel-preset-env: Determina el soporte de ECMAScript en los browsers.
- babel-polyfill: Transforma la sintaxis de '->' a funciones.
- babel-preset-stage-0: Si se desea hacer uso de ES7 experimental (async / await).
- babel-eslint: ESLint para Babel.
- babel-register: Compila los archivos de forma automática usando el require de NodeJS.

```
yarn add -D babel-core
yarn add -D babel-cli
yarn add -D babel-loader
yarn add -D babel-preset-es2015-native-modules
yarn add -D babel-preset-es2015
yarn add -D babel-preset-es2017
yarn add -D babel-preset-env
yarn add -D babel-polyfill
yarn add -D babel-preset-stage-0
yarn add -D babel-eslint
yarn add -D babel-register
```

## 2. eslint

Conjunto de paquetes para realizar la validación del JS

- eslint: Librería para validar el JS.
- eslint-config-airbnb: Guía de buenas practicas para JS.
- eslint-plugin-import: Valida la importación / exportación para evitar faltas de ortografia en los nombres y rutas de los archivos.

```
yarn add -D eslint
yarn add -D eslint-config-airbnb
yarn add -D eslint-plugin-import
```

## 3. eventsource-polyfill

Proporciona polyfill para apoyar el EventSource en los browser que no lo soportan.

> eventsource: Se utiliza para recibir eventos server-side.
> polyfill: Trozo de codigo que permiten tener las nuevas funcionalidades de HTML5 / ES6 / ES7 en los navegadores que nativamente no lo soportan.

```
yarn add -D eventsource-polyfill
```

## 4. extract-text-webpack-plugin

Extrae el nombre de un bundle para renombrarlo.

```
yarn add -D extract-text-webpack-plugin
```

## 5. copy-webpack-plugin

Copia los recursos que no deben ser modificados.

```
yarn add -D copy-webpack-plugin
```

## 6. html-webpack-plugin

Injecta las dependencias en el HTML

```
yarn add -D html-webpack-plugin
```

## 7. uglifyjs-webpack-plugin

Injecta las dependencias en el HTML

```
yarn add -D uglifyjs-webpack-plugin
```

## 8. unminified-webpack-plugin

Genera el archivo no minificado del JS

```
yarn add -D unminified-webpack-plugin
```

## 9. optimize-css-assets-webpack-plugin

Genera el archivo minificado CSS

```
yarn add -D optimize-css-assets-webpack-plugin
```

## 10. clean-webpack-plugin 

Permite remover o limpiar una carpeta antes de comenzar el build

```
yarn add -D clean-webpack-plugin 
```

## 11. webpack-bundle-analyzer

Permite analyzar los bundles generados y sus dependencias

```
yarn add -D webpack-bundle-analyzer
```

## 12. webpack

Development workflow para aplicaciones web

- webpack: Workflow para apps.
- webpack-merge: Combina dos o mas archivos webpack.config

```
yarn add -D webpack
yarn add -D webpack-merge
```

## 13. path

Modulo para obtener el path

```
yarn add -D path
```

# Publicar la libreria

```
npm publish

git tag -a v1.0.3 -m 'Release 1.0.3'
git push origin --tags
```

Solo hacerlo una vez

```
bower register library https://github.com/ldiego73/library
```
