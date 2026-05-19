<template>
  <div class="space-y-12 animate-fade-in-up">
    <!-- Intro Block -->
    <div class="text-center">
      <h2 class="text-3xl font-semibold tracking-tight text-ink">Artefak Pembelajaran</h2>
      <p class="text-steel mt-2 max-w-xl mx-auto">
        Koleksi Rencana Pelaksanaan Pembelajaran (RPP), media visual interaktif, penilaian, serta dokumentasi praktik mengajar selama PPL di SMAN 1 Bandung.
      </p>
    </div>

    <!-- Tab Navigation (Notion pill-tab style) -->
    <div class="flex justify-center">
      <div class="flex flex-wrap gap-2 p-1.5 bg-white border border-hairline rounded-[12px]">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          class="px-4 py-2 text-[13px] font-semibold transition-all duration-200"
          :class="activeTab === tab.id
            ? 'bg-ink text-white rounded-[8px]'
            : 'text-steel hover:text-ink hover:bg-surface-notion rounded-[8px]'"
        >
          <i :class="tab.icon" class="mr-2"></i>
          {{ tab.name }}
        </button>
      </div>
    </div>

    <!-- Tab Contents -->
    <div class="mt-8">
      <!-- CATEGORY: RPP -->
      <div v-if="activeTab === 'rpp'" class="grid gap-8 grid-cols-1 md:grid-cols-2">
        <!-- Card 1 -->
        <div class="bg-white border border-hairline rounded-[12px] p-6 shadow-none flex flex-col justify-between">
          <div>
            <span class="inline-block bg-card-tint-mint/80 text-brand-green text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[4px] mb-3">
              Rencana Aksi 1
            </span>
            <h3 class="text-xl font-semibold text-ink mb-2">RPP Kelas XI: Pemrograman C Dasar</h3>
            <p class="text-steel text-sm mb-6 leading-relaxed">
              Membahas fungsi sederhana menggunakan bahasa pemrograman C.
            </p>
        <div class="aspect-video border border-hairline rounded-[8px] mb-6 overflow-hidden">
  <iframe
    src="https://docs.google.com/document/d/1r29qlpLq54dt77hEau2so-sqP8syldCK/preview"
    class="w-full h-full"
    allow="autoplay"
  ></iframe>
</div>
          </div>
          <a
            href="https://docs.google.com/document/d/1r29qlpLq54dt77hEau2so-sqP8syldCK/edit?usp=sharing&ouid=118338534349543867012&rtpof=true&sd=true"
            target="_blank"
            class="w-full bg-primary hover:bg-primary-pressed text-white px-[18px] py-[10px] rounded-[8px] font-medium text-[14px] transition-colors flex items-center justify-center gap-2"
          >
            <i class="fa-solid fa-eye"></i> Lihat Rencana Pelaksanaan
          </a>
        </div>

        <!-- Card 2 -->
        <div class="bg-white border border-hairline rounded-[12px] p-6 shadow-none flex flex-col justify-between">
          <div>
            <span class="inline-block bg-card-tint-mint/80 text-brand-green text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[4px] mb-3">
              Rencana Aksi 2
            </span>
            <h3 class="text-xl font-semibold text-ink mb-2">RPP Kelas X: Microsoft Excel Intermediate</h3>
            <p class="text-steel text-sm mb-6 leading-relaxed">
              Fokus pada penggunaan fungsi analisis data lanjutan seperti VLOOKUP, HLOOKUP, dan logika bersarang.
            </p>
            <div class="aspect-video bg-surface-notion border border-hairline rounded-[8px] mb-6 overflow-hidden flex items-center justify-center">
              <div class="text-center p-4">
                <i class="fa-solid fa-file-pdf text-[#e03131] text-4xl mb-2"></i>
                <p class="text-xs text-stone font-medium">Dokumen RPP X - Microsoft Excel</p>
              </div>
            </div>
          </div>
          <button class="w-full bg-primary hover:bg-primary-pressed text-white px-[18px] py-[10px] rounded-[8px] font-medium text-[14px] transition-colors flex items-center justify-center gap-2">
            <i class="fa-solid fa-download"></i> Unduh Rencana Pelaksanaan
          </button>
        </div>
      </div>

      <!-- CATEGORY: Media -->
      <div v-if="activeTab === 'media'" class="grid gap-8 grid-cols-1 md:grid-cols-3">
        <!-- Media 1: Video -->
        <div class="bg-white border border-hairline rounded-[12px] p-6 shadow-none flex flex-col justify-between">
          <div>
            <h3 class="text-lg font-semibold text-ink mb-4 text-center">Video Tutorial: Live Coding C</h3>
            <div class="aspect-video bg-ink rounded-[8px] mb-4 overflow-hidden">
              <iframe
                class="w-full h-full"
                src="https://www.youtube.com/embed/GEsaSWmVQSo"
                title="Video Tutorial: Coding Bahasa C Hello World!"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <p class="text-steel text-xs text-center leading-relaxed">
              Demonstrasi praktik langsung pemrograman dasar untuk membantu pemahaman belajar mandiri siswa di rumah.
            </p>
          </div>
        </div>
<!-- Media 2 : Asesment Diagnostik Awal -->
        <div class="bg-white border border-hairline rounded-[12px] p-6 shadow-none flex flex-col justify-between">
          <div>
            <h3 class="text-lg font-semibold text-ink mb-4 text-center">Asesem Diagnostik Awal Kelas X</h3>
            <div class="aspect-video rounded-[8px] border border-hairline mb-4 overflow-hidden">
              <iframe
                src="https://assesment-awal-kelas.vercel.app/"
                class="w-full h-full border-0"
                allow="autoplay"
              ></iframe>
            </div>
            <p class="text-steel text-xs text-center leading-relaxed mb-5">
            Asesemen dilakukan untuk mengetahui pemahaman siswa terhadap materi Microsoft Excel menggunakan website
            </p>
          </div>
          <a
            href="https://assesment-awal-kelas.vercel.app/"
            target="_blank"
            class="flex items-center justify-center w-full bg-primary hover:bg-primary-pressed text-white px-[18px] py-[10px] rounded-[8px] font-medium text-[14px] transition-colors gap-2"
          >
            <i class="fa-solid fa-up-right-from-square"></i> Lihat Asesmen
          </a>
        </div>
        <!-- Media 2: Presentasi IF -->
        <div class="bg-white border border-hairline rounded-[12px] p-6 shadow-none flex flex-col justify-between">
          <div>
            <h3 class="text-lg font-semibold text-ink mb-4 text-center">Slide Presentasi: Rumus IF</h3>
            <div class="aspect-video rounded-[8px] border border-hairline mb-4 bg-surface-notion flex items-center justify-center overflow-hidden">
              <img
                src="/ppg/excel-if.svg"
                alt="Preview Slide Rumus IF"
                class="w-full h-full object-contain p-2"
              />
            </div>
            <p class="text-steel text-xs text-center leading-relaxed mb-5">
              Media presentasi visual interaktif untuk menyederhanakan pemahaman logika bersarang IF di kelas X.
            </p>
          </div>
          <a
            href="https://canva.link/excelif"
            target="_blank"
            class="flex items-center justify-center w-full bg-primary hover:bg-primary-pressed text-white px-[18px] py-[10px] rounded-[8px] font-medium text-[14px] transition-colors gap-2"
          >
            <i class="fa-solid fa-up-right-from-square"></i> Lihat Presentasi
          </a>
        </div>

        <!-- Media 3: Presentasi C -->
        <div class="bg-white border border-hairline rounded-[12px] p-6 shadow-none flex flex-col justify-between">
          <div>
            <h3 class="text-lg font-semibold text-ink mb-4 text-center">Slide: Mengenal Dunia C</h3>
            <div class="aspect-video rounded-[8px] border border-hairline mb-4 bg-surface-notion flex items-center justify-center overflow-hidden">
              <img
                src="/ppg/presentasi-mengenal-dunia-c.svg"
                alt="Preview Slide Mengenal Dunia C"
                class="w-full h-full object-contain p-2"
              />
            </div>
            <p class="text-steel text-xs text-center leading-relaxed mb-5">
              Visualisasi pengenalan bahasa pemrograman C, compiler, dan sintaks dasar bagi siswa tingkat menengah.
            </p>
          </div>
          <a
            href="https://canva.link/nn7vffs4s3gw71w"
            target="_blank"
            class="flex items-center justify-center w-full bg-primary hover:bg-primary-pressed text-white px-[18px] py-[10px] rounded-[8px] font-medium text-[14px] transition-colors gap-2"
          >
            <i class="fa-solid fa-up-right-from-square"></i> Lihat Presentasi
          </a>
        </div>
      </div>

      <!-- CATEGORY: Hasil Siswa -->
      <div v-if="activeTab === 'hasil'" class="grid gap-8 grid-cols-1 md:grid-cols-3">
        <!-- Hasil 1: Asesmen Diagnostik -->
        <div class="bg-white border border-hairline rounded-[12px] p-6 shadow-none flex flex-col justify-between">
          <div>
            <h3 class="text-lg font-semibold text-ink mb-4">Asesmen Diagnostik Kelas X</h3>
            <div class="aspect-square rounded-[8px] border border-hairline mb-4 bg-surface-notion flex flex-col items-center justify-center p-6 text-center">
              <i class="fa-solid fa-calculator text-primary text-4xl mb-3"></i>
              <span class="text-xs text-stone font-semibold uppercase tracking-wider">Hasil Pengolahan</span>
              <p class="text-[11px] text-stone mt-1">Data Kognitif Awal Siswa (Excel)</p>
            </div>
            <p class="text-steel text-xs leading-relaxed">
              Dokumentasi pemetaan kemampuan dasar siswa sebelum memulai unit pembelajaran baru.
            </p>
          </div>
        </div>

        <!-- Hasil 2: Praktik C -->
        <div class="bg-white border border-hairline rounded-[12px] p-6 shadow-none flex flex-col justify-between">
          <div>
            <h3 class="text-lg font-semibold text-ink mb-4">Praktik Pemrograman C</h3>
            <div class="aspect-square rounded-[8px] border border-hairline mb-4 bg-surface-notion flex flex-col items-center justify-center p-6 text-center">
              <i class="fa-solid fa-code text-primary text-4xl mb-3"></i>
              <span class="text-xs text-stone font-semibold uppercase tracking-wider">Source Code & Logika</span>
              <p class="text-[11px] text-stone mt-1">Studi Kasus Logika Percabangan C</p>
            </div>
            <p class="text-steel text-xs leading-relaxed">
              Hasil lembar kerja coding siswa yang memecahkan skenario logika sederhana dengan bahasa C.
            </p>
          </div>
        </div>

        <!-- Hasil 3: Excel -->
        <div class="bg-white border border-hairline rounded-[12px] p-6 shadow-none flex flex-col justify-between">
          <div>
            <h3 class="text-lg font-semibold text-ink mb-4">Pengolahan Data Excel</h3>
            <div class="aspect-square rounded-[8px] border border-hairline mb-4 bg-surface-notion flex flex-col items-center justify-center p-6 text-center">
              <i class="fa-solid fa-file-excel text-primary text-4xl mb-3"></i>
              <span class="text-xs text-stone font-semibold uppercase tracking-wider">Formulas & Charts</span>
              <p class="text-[11px] text-stone mt-1">Latihan Analisis Data Sederhana</p>
            </div>
            <p class="text-steel text-xs leading-relaxed">
              Aktivitas pengolahan data menggunakan rumus statistik, diagram, dan visualisasi grafik oleh siswa.
            </p>
          </div>
        </div>
      </div>

      <!-- CATEGORY: Penilaian -->
      <div v-if="activeTab === 'penilaian'" class="space-y-4 max-w-3xl mx-auto">
        <!-- Item 1 -->
        <div class="bg-white border border-hairline rounded-[12px] p-5 shadow-none flex items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-card-tint-sky/80 text-link-blue rounded-[8px] flex items-center justify-center text-xl flex-shrink-0">
              <i class="fa-solid fa-list-check"></i>
            </div>
            <div>
              <h4 class="font-semibold text-ink text-sm sm:text-base">Lampiran 7: Instrumen Penilaian RPP</h4>
              <p class="text-xs text-steel">Lembar penilaian format Rencana Pembelajaran oleh Guru Pamong & DPL.</p>
            </div>
          </div>
          <button class="bg-transparent hover:bg-surface-notion text-ink border border-hairline-strong px-4 py-2 rounded-[8px] font-medium text-[13px] transition-colors whitespace-nowrap">
            Lihat Berkas
          </button>
        </div>

        <!-- Item 2 -->
        <div class="bg-white border border-hairline rounded-[12px] p-5 shadow-none flex items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-card-tint-sky/80 text-link-blue rounded-[8px] flex items-center justify-center text-xl flex-shrink-0">
              <i class="fa-solid fa-chalkboard-user"></i>
            </div>
            <div>
              <h4 class="font-semibold text-ink text-sm sm:text-base">Lampiran 8: Instrumen Praktik Mengajar</h4>
              <p class="text-xs text-steel">Feedback tertulis hasil observasi aktivitas mengajar di kelas secara langsung.</p>
            </div>
          </div>
          <button class="bg-transparent hover:bg-surface-notion text-ink border border-hairline-strong px-4 py-2 rounded-[8px] font-medium text-[13px] transition-colors whitespace-nowrap">
            Lihat Berkas
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('rpp');

const tabs = [
  { id: 'rpp', name: 'RPP (Rencana)', icon: 'fa-solid fa-file-invoice' },
  { id: 'media', name: 'Media Interaktif', icon: 'fa-solid fa-photo-film' },
  { id: 'hasil', name: 'Hasil Kerja Siswa', icon: 'fa-solid fa-user-check' },
  { id: 'penilaian', name: 'Instrumen Penilaian', icon: 'fa-solid fa-clipboard-check' },
];
</script>
