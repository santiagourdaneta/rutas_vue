<template>
  <div id="app">
    <router-link :to="{ name: 'Inicio' }">Inicio</router-link>
    <router-link to="/acercade">Acerca De</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
