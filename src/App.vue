<template>
  <div id="app">
    <Navbar />
    <router-view />
    <ScrollToTop />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import ScrollToTop from './components/ScrollToTop.vue';
</script>

<style>
@import './styles/main.css';
</style>

