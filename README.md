# Configuración de Jest con Expo

[Documentación oficial](https://docs.expo.dev/develop/unit-testing/)

### Configuración rápida

- Instalar

```
npx expo install jest-expo jest
```

- Actualizar el **package.json** para incluir:

```
"scripts": {
  ...
  "test": "jest"
},
"jest": {
  "preset": "jest-expo"
}
```
