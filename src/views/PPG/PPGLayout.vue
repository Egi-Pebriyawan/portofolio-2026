<template>
  <div class="min-h-screen bg-surface-notion pt-24 pb-16 font-notion-sans">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Banner (Notion Style Hero) -->
      <div class="text-center mb-10">
        <h1 class="text-4xl sm:text-5xl font-semibold tracking-[-0.5px] leading-[1.15] text-ink mb-4">
          E-Portfolio PPL Terbimbing
        </h1>
        <p class="text-lg text-steel max-w-2xl mx-auto">
          Dokumentasi perjalanan praktik, analisis kritis, dan pengembangan model pembelajaran profesional oleh Egi Pebriyawan di SMAN 1 Bandung.
        </p>
      </div>

      <!-- Navigation Tabs (Notion pill-tab style) -->
      <div class="flex justify-center mb-12">
        <div class="inline-flex flex-wrap gap-2 p-1.5 bg-white border border-hairline rounded-[12px] shadow-sm">
          <router-link
            to="/ppg"
            class="px-5 py-2.5 rounded-[8px] text-[14px] font-medium transition-all duration-200 text-steel hover:text-ink hover:bg-surface-notion"
            exact-active-class="!bg-ink !text-white hover:!bg-ink hover:!text-white"
          >
            Profil Mahasiswa
          </router-link>
          <router-link
            to="/ppg/artefak"
            class="px-5 py-2.5 rounded-[8px] text-[14px] font-medium transition-all duration-200 text-steel hover:text-ink hover:bg-surface-notion"
            active-class="!bg-ink !text-white hover:!bg-ink hover:!text-white"
          >
            Artefak Pembelajaran
          </router-link>
          <router-link
            to="/ppg/analisis"
            class="px-5 py-2.5 rounded-[8px] text-[14px] font-medium transition-all duration-200 text-steel hover:text-ink hover:bg-surface-notion"
            active-class="!bg-ink !text-white hover:!bg-ink hover:!text-white"
          >
            Analisis Mendalam
          </router-link>
          <router-link
            to="/ppg/model-guru"
            class="px-5 py-2.5 rounded-[8px] text-[14px] font-medium transition-all duration-200 text-steel hover:text-ink hover:bg-surface-notion"
            active-class="!bg-ink !text-white hover:!bg-ink hover:!text-white"
          >
            Model Guru
          </router-link>
        </div>
      </div>

      <!-- Route Transition view -->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup>
// Layout for PPG Pages
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
