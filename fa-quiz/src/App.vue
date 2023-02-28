<template>
  <div class="container">
    <header>
      <RouterLink to="/" class="logo">
        <img alt="Fast Track logo" class="logo" src="https://www.fasttrack-solutions.com/_nuxt/img/logo.f6d466a.svg"/>
      </RouterLink>
      
    </header>
  
    <!-- <transition name="page-transition" mode="out-in">
      <RouterView />
    </transition> -->

    <router-view></router-view>
    
  </div>
  
</template>
<script setup>
  import { RouterLink, RouterView } from 'vue-router'


  
</script>
<style lang="scss">

  header{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 2em;
    .logo{
      width: 160px;
    }
  }
  

  .fade-enter {
    opacity: 0;
}

.fade-enter-active {
    transition: opacity 2s ease;
}

.fade-leave {

}

.fade-leave-active {
    transition: opacity 2s ease;
    opacity: 0;
}
  
</style>
