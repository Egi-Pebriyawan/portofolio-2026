<template>
  <div id="app">
    <Navbar />
    <Home />
    <ScrollToTop />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Home from './views/Home.vue';
import Footer from './components/Footer.vue';
import ScrollToTop from './components/ScrollToTop.vue';
</script>

<style>
@import './styles/main.css';
</style>
