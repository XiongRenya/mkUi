<template>
  <h1>123123</h1>
  <hr />
  <p>123123</p>
  <header>
    <Button @click="clickIt" size="large">small Button1</Button>
    <Button @toClick="clickIt" ref="btnRef" type="danger">测试button</Button>
    <Button disabled>disabled Button</Button>
    <Button plain>plain Button</Button>
    <Button round>round Button</Button>
    <a href="#">12456</a>

    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Button from './components/Button/Button.vue'
import type { ButtonInstance } from './components/Button/type'

const btnRef = ref<ButtonInstance | null>(null)
onMounted(() => {
  if (btnRef.value) {
    console.log(btnRef.value.ref)
  }
})
const clickIt = (val: any) => {
  console.log(123456, val)
}
</script>
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
