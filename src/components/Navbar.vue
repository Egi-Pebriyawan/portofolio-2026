<template>
  <nav
    id="navbar"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/50 backdrop-blur-xl shadow-lg border-b border-gray-200/30' : 'bg-white/30 backdrop-blur-md border-b border-gray-200/20'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="#home" class="text-xl font-bold text-gray-800">
            EP<span class="text-blue-600">.</span>
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-8 flex items-baseline space-x-1">
            <template v-for="link in navLinks" :key="link.name">
              <!-- Route Link (PPG Pages) -->
              <router-link
                v-if="link.isRoute"
                :to="link.href"
                class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                active-class="text-blue-600 bg-blue-50"
              >
                {{ link.name }}
              </router-link>

              <!-- Scroll Anchor Link (Home Sections) -->
              <a
                v-else
                :href="link.href"
                class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative"
                :class="activeLink === link.href && route.path === '/'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'"
                @click.prevent="setActiveLink(link.href)"
              >
                {{ link.name }}
                <!-- Active Indicator -->
                <span
                  v-if="activeLink === link.href && route.path === '/'"
                  class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"
                ></span>
              </a>
            </template>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            type="button"
            class="p-2 rounded-lg border border-gray-200 bg-white/50 backdrop-blur-sm text-gray-600 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-show="mobileMenuOpen"
        class="md:hidden border-t border-gray-200/30 bg-white/95 backdrop-blur-xl"
      >
        <div class="px-4 pt-2 pb-3 space-y-1">
          <template v-for="link in navLinks" :key="link.name">
            <!-- Route Link (PPG) -->
            <router-link
              v-if="link.isRoute"
              :to="link.href"
              class="block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300"
              active-class="text-blue-600 bg-blue-50"
              @click="mobileMenuOpen = false"
            >
              {{ link.name }}
            </router-link>

            <!-- Scroll Anchor Link -->
            <a
              v-else
              :href="link.href"
              class="block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300"
              :class="activeLink === link.href && route.path === '/'"
              @click.prevent="setActiveLink(link.href); mobileMenuOpen = false"
            >
              {{ link.name }}
            </a>
          </template>
        </div>
      </div>
    </transition>

  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const scrolled = ref(false);
const mobileMenuOpen = ref(false);
const activeLink = ref('#home');

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'E-Portfolio PPL', href: '/ppg', isRoute: true },
  { name: 'Contact', href: '#contact' },
];

const setActiveLink = (href) => {
  activeLink.value = href;
  
  if (route.path !== '/') {
    router.push('/').then(() => {
      setTimeout(() => {
        scrollToSection(href);
      }, 100);
    });
  } else {
    scrollToSection(href);
  }
};

const scrollToSection = (href) => {
  const element = document.querySelector(href);
  if (element) {
    const navbarHeight = 64;  // Actual navbar height
    const extraPadding = 25;  // Extra space
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - navbarHeight - extraPadding;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;

  if (route.path !== '/') return;

  const sections = [];
  
  navLinks.forEach(link => {
    if (link.isRoute) return;
    const section = document.querySelector(link.href);
    if (section) {
      const navbarHeight = 64;
      const extraPadding = 25;
      const sectionTop = section.offsetTop - navbarHeight - extraPadding;
      
      sections.push({
        href: link.href,
        top: sectionTop,
        bottom: sectionTop + section.offsetHeight
      });
    }
  });

  const scrollPos = window.scrollY;
  
  for (let i = sections.length - 1; i >= 0; i--) {
    if (scrollPos >= sections[i].top) {
      activeLink.value = sections[i].href;
      break;
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
