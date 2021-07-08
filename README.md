# Parallax-with-Rellax.js-Vue3CLI

## Installer le projet
```
yarn install
```

### Compiler pour le développement
```
yarn serve
```

### Compiler pour la production
```
yarn build
```

### Template

```html
<template>
  <div class="home">

    <div class="img1 rellax" data-rellax-speed="-6">sv</div>
    <div class="img2 rellax" data-rellax-speed="7">">vsdv</div>
    <div class="img3 rellax" data-rellax-speed="3">sdvsd</div>
    <div class="img4 rellax">sdvsd</div>
  </div>
</template>
```

### Script

```js
import Rellax from 'rellax'

```

```js
  mounted(){
    this.rellax = new Rellax('.rellax')
  }
  
```

### Style 


```css

  .img1{
    height: 6rem; width:20rem;
    background: url('../assets/img1.svg') no-repeat center center/contain;
    margin-bottom: 5rem;
  }
  .img2{
    height: 6rem; width:20rem; margin-left : 20rem;
    background: url('../assets/img2.png') no-repeat center center/contain;
    margin-bottom: 5rem;
  }
  .img3{
    height: 6rem; width:20rem; margin-left: 40rem;
    background: url('../assets/img3.jpg') no-repeat center center/contain;
    margin-bottom: 20rem;
  }

```
