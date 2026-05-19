<template>
  <div class="space-y-12 animate-fade-in-up">
    <!-- Intro Block -->
    <div class="text-center">
      <h2 class="text-3xl font-semibold tracking-tight text-ink">Analisis Mendalam</h2>
      <p class="text-steel mt-2 max-w-xl mx-auto">
        Refleksi kritis dan analisis berbasis teori pedagogi terhadap pelaksanaan pembelajaran yang telah diimplementasikan di kelas.
      </p>
    </div>

    <!-- Analysis Cards List -->
    <div class="space-y-10">
      <!-- Analysis 1: RPP C -->
      <article class="bg-white border border-hairline rounded-[12px] overflow-hidden shadow-none">
        <!-- Top header styling ala Notion callout band -->
        <div class="p-6 border-b border-hairline bg-surface-notion flex items-center justify-between">
          <h3 class="text-xl font-semibold text-ink flex items-center gap-3">
            <i class="fa-solid fa-file-code text-primary"></i>
            Analisis Rencana Aksi 1: Pemrograman C (Kelas XI)
          </h3>
          <span class="bg-[#5645d4] text-white text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[4px]">
            Tuntas
          </span>
        </div>

        <div class="p-6 sm:p-8 space-y-8">
          <!-- Context & Objectives -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 class="text-[12px] font-semibold text-stone uppercase tracking-wider mb-2 flex items-center gap-2">
                <i class="fa-solid fa-map-location-dot"></i> Konteks Lingkungan
              </h4>
              <p class="text-ink text-[14px] leading-relaxed">
                Dilaksanakan di Lab Komputer dengan pencahayaan redup tanpa <i>client management software</i>. Kondisi fisik lab menantang konsentrasi siswa, sehingga demonstrasi taktis guru sangat krusial.
              </p>
            </div>
            <div>
              <h4 class="text-[12px] font-semibold text-stone uppercase tracking-wider mb-2 flex items-center gap-2">
                <i class="fa-solid fa-bullseye"></i> Tujuan Utama
              </h4>
              <p class="text-ink text-[14px] leading-relaxed">
                Siswa menguasai konsep logika percabangan IF-ELSE lewat praktik terpandu, dan mampu menyelesaikannya dalam logika program mandiri.
              </p>
            </div>
          </div>

          <!-- Pros & Cons (Notion Tint Card style) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Kelebihan (Mint Tint) -->
            <div class="bg-card-tint-mint/40 border border-card-tint-mint rounded-[8px] p-5">
              <h5 class="text-[13px] font-bold text-brand-green uppercase tracking-wider mb-2 flex items-center gap-2">
                <i class="fa-solid fa-circle-check"></i> Kelebihan
              </h5>
              <p class="text-charcoal text-[13px] leading-relaxed">
                Apersepsi konsep biner yang menyenangkan mampu memecah kebingungan awal siswa tentang bagaimana mesin berpikir. Hal ini meningkatkan ketertarikan eksplorasi logika sejak awal.
              </p>
            </div>

            <!-- Kekurangan (Rose Tint) -->
            <div class="bg-card-tint-rose/40 border border-card-tint-rose rounded-[8px] p-5">
              <h5 class="text-[13px] font-bold text-[#e03131] uppercase tracking-wider mb-2 flex items-center gap-2">
                <i class="fa-solid fa-circle-xmark"></i> Kekurangan & Kendala
              </h5>
              <p class="text-charcoal text-[13px] leading-relaxed">
                Durasi pemahaman konsep awal/apersepsi melebihi batas waktu (20 menit), mengurangi porsi praktik mandiri siswa. Belum ada skenario cadangan jika terjadi pemadaman listrik/kendala komputer di lab.
              </p>
            </div>
          </div>

          <!-- Kajian Teori (Cream/Gray callout) -->
          <div class="border-t border-hairline pt-6">
            <h4 class="text-[12px] font-semibold text-stone uppercase tracking-wider mb-3 flex items-center gap-2">
              <i class="fa-solid fa-graduation-cap"></i> Kajian Teori Pendukung
            </h4>
            <div class="bg-surface-notion border border-hairline-strong rounded-[8px] p-5 italic text-slate-notion text-[13px] leading-relaxed">
              "Pendekatan TaRL (Teaching at the Right Level) berfungsi sebagai scaffolding penting dalam ZPD (Zone of Proximal Development) Vygotsky. Teori konstruktivisme Piaget membenarkan bahwa pengenalan logika nyata/praktis lebih cepat diserap daripada teori abstrak pada kelompok usia ini."
            </div>
          </div>
        </div>
      </article>

      <!-- Analysis 2: Media (Placeholder) -->
      <article class="bg-white border border-hairline rounded-[12px] overflow-hidden opacity-75 shadow-none">
        <div class="p-6 border-b border-hairline bg-surface-notion flex items-center justify-between">
          <h3 class="text-xl font-semibold text-stone flex items-center gap-3">
            <i class="fa-solid fa-photo-film"></i>
            Analisis Rencana Aksi 2: Media Pembelajaran
          </h3>
          <span class="bg-stone text-white text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[4px]">
            Draft
          </span>
        </div>
        <div class="p-10 text-center italic text-stone text-sm">
          [Analisis media pembelajaran interaktif sedang disusun dan akan segera dilengkapi]
        </div>
      </article>

      <!-- Analysis 3: Hasil Kerja (Placeholder) -->
      <article class="bg-white border border-hairline rounded-[12px] overflow-hidden opacity-75 shadow-none">
        <div class="p-6 border-b border-hairline bg-surface-notion flex items-center justify-between">
          <h3 class="text-xl font-semibold text-stone flex items-center gap-3">
            <i class="fa-solid fa-chart-line"></i>
            Analisis Rencana Aksi 3: Evaluasi & Hasil Siswa
          </h3>
          <span class="bg-stone text-white text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[4px]">
            Draft
          </span>
        </div>
        <div class="p-10 text-center italic text-stone text-sm">
          [Analisis data hasil asesmen diagnostik dan formatif siswa sedang dalam proses penyusunan]
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
// Page: PPG Analisis
</script>
