<template>
  <section id="projects" class="py-8 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">Projects</h2>
        <p class="text-base text-gray-600 max-w-2xl mx-auto">A showcase of my work – real-world applications built with modern technologies and best practices.</p>
      </div>
      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="project in projects" :key="project.name" class="group rounded-xl overflow-hidden border border-gray-200 bg-white hover:border-blue-400 hover:shadow-sm transition-all duration-300">
          <div class="relative overflow-hidden">
            <img :src="project.image" :alt="project.name" class="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="p-5">
            <h3 class="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
              {{ project.name }}
            </h3>
            <p class="text-sm text-gray-700 mb-4 leading-relaxed">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tech in project.tech" :key="tech" class="text-xs px-2.5 py-1 rounded-full font-medium bg-blue-50 text-blue-700">
                {{ tech }}
              </span>
            </div>
            <div class="flex gap-4">
              <a :href="project.demoLink" class="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200 flex items-center gap-1 group/link">
                Demo
                <svg class="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a :href="project.githubLink" class="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200 flex items-center gap-1 group/link">
                GitHub
                <svg class="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    name: "Modern Coffee Shop Landing Page",
    description: "A modern coffee shop website that allows users to explore menus, discover featured drinks, and experience a cozy digital café atmosphere",
    tech: ["Vue", "Tailwind CSS", "Vite", "Html"],
    image: "./projects/ruang-namu-compro.png",
    demoLink: "https://ruang-namu.vercel.app/",
    githubLink: "https://github.com/Egi-Pebriyawan/ruang-namu",
  },
  {
    name: "Web-Based Online Exam System",
    description: "An online exam system that allows teachers to create and manage exams, and students to take exams online.",
    tech: ["HTML", "Tailwind CSS", "Laravel", "MySQL", "Livewire", "Filament"],
    image: "./projects/online-exam-system.png",
    demoLink: "#",
    githubLink: "https://github.com/Egi-Pebriyawan/filament-ujianonline",
  },
];
</script>
