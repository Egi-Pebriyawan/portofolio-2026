<template>
  <section id="skills" class="py-8 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          Skills
        </h2>
        <p class="text-base text-gray-600 max-w-2xl mx-auto px-4">
          The tools and technologies I use to bring ideas to life – from frontend to backend, and everything in between.
        </p>
      </div>

      <!-- Part A: Infinite Marquee -->
      <div class="mb-10">
        <div class="marquee-container">
          <div class="marquee-content">
            <div class="flex items-center gap-8 px-4" v-for="i in 2" :key="i">
              <div v-for="skill in marqueeSkills" :key="skill.name" class="flex items-center gap-2.5 group">
                <i :class="`devicon-${skill.icon}-plain text-4xl transition-all duration-300 group-hover:scale-125 text-${skill.color}`"></i>
                <span class="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Part B: Skills Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="group rounded-xl p-5 border border-gray-200 bg-white hover:border-blue-400 hover:shadow-sm transition-all duration-300"
        >
          <div class="flex flex-col items-center text-center">
            <i v-if="!skill.custom" :class="`devicon-${skill.icon}-plain text-5xl mb-3 transition-all duration-300 group-hover:scale-125 text-${skill.color}`"></i>
            <div v-else class="text-5xl mb-3 transition-transform duration-300 group-hover:scale-125">{{ skill.icon }}</div>
            <h3 class="font-bold text-gray-800 mb-2 text-sm">{{ skill.name }}</h3>
            <span
              class="text-xs px-3 py-1 rounded-full font-medium"
              :class="skill.level === 'Advanced' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'"
            >
              {{ skill.level }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const marqueeSkills = [
  { name: 'HTML5', icon: 'html5', color: 'orange-500' },
  { name: 'CSS3', icon: 'css3', color: 'blue-500' },
  { name: 'Tailwind', icon: 'tailwindcss', color: 'cyan-500' },
  { name: 'JavaScript', icon: 'javascript', color: 'yellow-400' },
  { name: 'Laravel', icon: 'laravel', color: 'red-500' },
  { name: 'Vue.js', icon: 'vuejs', color: 'green-500' },
  { name: 'Filament', icon: 'filament', color: 'orange-400' },
  { name: 'Vite', icon: 'vitejs', color: 'purple-500' },
  { name: 'Git', icon: 'git', color: 'orange-500' },
  { name: 'GitHub', icon: 'github', color: 'slate-300' },
];

const skills = [
  { name: 'HTML', icon: 'html5', color: 'orange-500', level: 'Advanced' },
  { name: 'CSS', icon: 'css3', color: 'blue-500', level: 'Advanced' },
  { name: 'Tailwind CSS', icon: 'tailwindcss', color: 'cyan-500', level: 'Advanced' },
  { name: 'JavaScript', icon: 'javascript', color: 'yellow-400', level: 'Intermediate' },
  { name: 'Laravel', icon: 'laravel', color: 'red-500', level: 'Intermediate' },
  { name: 'Filament', icon: 'filament', color: 'orange-400', level: 'Intermediate' },
  { name: 'Vue', icon: 'vuejs', color: 'green-500', level: 'Intermediate' },
  { name: 'Vite', icon: 'vitejs', color: 'purple-500', level: 'Intermediate' },
  { name: 'AI Agent', icon: '🤖', color: 'blue-400', level: 'Intermediate', custom: true },
  { name: 'Git & GitHub', icon: 'git', color: 'orange-500', level: 'Intermediate' },
  { name: 'Network & Security', icon: '🔒', color: 'green-400', level: 'Intermediate', custom: true },
  { name: 'IT Support', icon: '💻', color: 'blue-500', level: 'Advanced', custom: true },
];
</script>
