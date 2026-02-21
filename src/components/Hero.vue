<template>
  <section id="home" class="min-h-screen flex items-center justify-center pt-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <!-- Left Content -->
        <div class="text-center md:text-left space-y-4 order-2 md:order-1">
          <!-- Greeting Badge -->
          <div class="fade-in-up inline-block">
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-gray-700 text-sm font-medium border border-gray-200">
              <span class="text-lg">👋</span>
              Hello Everyone
            </span>
          </div>

          <!-- Name -->
          <div class="fade-in-up" style="animation-delay: 0.1s">
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-800">
              I'm
              <span class="block mt-1 text-blue-600"> Egi Pebriyawan </span>
            </h1>
          </div>

          <!-- Typing Animation -->
          <div class="h-10 flex items-center justify-center md:justify-start fade-in-up" style="animation-delay: 0.2s">
            <p class="text-lg sm:text-xl font-medium typing-text text-gray-600">
              {{ typedText }}
            </p>
          </div>

          <!-- Description -->
          <p class="text-sm sm:text-base max-w-xl mx-auto md:mx-0 fade-in-up" style="animation-delay: 0.3s">
            <span class="text-gray-600"> S1 Information Technology | Postgraduate PPG Professional Teacher 2026 | Web Developer | Sports Enthusiast </span>
          </p>

          <!-- CTA Buttons - All in one row -->
          <div class="flex flex-wrap gap-3 justify-center md:justify-start fade-in-up" style="animation-delay: 0.4s">
            <a
              href="#projects"
              @click.prevent="scrollToSection('#projects')"
              class="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span>View Projects</span>
              <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#contact"
              @click.prevent="scrollToSection('#contact')"
              class="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-sm hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:bg-emerald-400"
            >
              <span>Contact Me</span>
              <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="/cv.pdf"
              download="cv.pdf"
              class="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-sm hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <svg class="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download CV</span>
            </a>
          </div>
        </div>

        <!-- Right Content - Profile Image -->
        <div class="flex justify-center order-1 md:order-2 fade-in-up" style="animation-delay: 0.3s">
          <div class="relative">
            <!-- Image Container -->
            <div class="relative w-64 h-64 sm:w-72 sm:h-72 md:w-72 md:h-72 rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <img src="/profile.jpeg" alt="Egi Pebriyawan - Profile" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>

            <!-- Availability Badge -->
            <div class="absolute -bottom-2 -right-2 bg-white rounded-lg p-2.5 shadow-md border border-gray-200">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span class="text-xs font-medium text-gray-700">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const roles = ["Teacher & Web Developer", "Web Developer", "Professional Teacher", "Tech Enthusiast"];
const typedText = ref("");
let currentRoleIndex = 0;
let isDeleting = false;
let typingTimer = null;

const type = () => {
  const currentRole = roles[currentRoleIndex];
  const currentText = typedText.value;

  if (isDeleting) {
    typedText.value = currentRole.substring(0, currentText.length - 1);
  } else {
    typedText.value = currentRole.substring(0, currentText.length + 1);
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && typedText.value === currentRole) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && typedText.value === "") {
    isDeleting = false;
    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
    typeSpeed = 500;
  }

  typingTimer = setTimeout(type, typeSpeed);
};

const scrollToSection = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    const navbarHeight = 64;
    const extraPadding = 25;
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - navbarHeight - extraPadding;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

onMounted(() => {
  type();
});

onUnmounted(() => {
  if (typingTimer) {
    clearTimeout(typingTimer);
  }
});
</script>

<style scoped>
.typing-text {
  overflow: hidden;
  border-right: 3px solid #2563eb;
  white-space: nowrap;
  min-width: 280px;
  animation: blink 0.8s step-end infinite;
}

@keyframes blink {
  0%,
  100% {
    border-color: transparent;
  }
  50% {
    border-color: #2563eb;
  }
}

@media (max-width: 640px) {
  .typing-text {
    min-width: 200px;
    font-size: 1.125rem;
  }
}
</style>
