<template>
  <div class="space-y-12 animate-fade-in-up">
    <!-- Hero Section (Notion Inspired Profile Header) -->
    <section class="bg-white border border-hairline rounded-[12px] p-8 md:p-12 shadow-none">
      <div class="md:flex md:items-center md:gap-10">
        <!-- Profile Image Column (Left-ish) -->
        <div class="flex-shrink-0 flex justify-center mb-8 md:mb-0">
          <div class="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border border-hairline bg-surface-notion">
            <img
              class="w-full h-full object-cover"
              src="/ppg/foto-profil.jpeg"
              alt="Foto Profil Egi Pebriyawan"
            />
          </div>
        </div>

        <!-- Info Column (Right-ish) -->
        <div class="text-center md:text-left flex-grow">
          <span class="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-[6px] mb-4">
            Mahasiswa PPG Prajabatan
          </span>
          <h2 class="text-3xl sm:text-4xl font-semibold tracking-[-0.5px] leading-tight text-ink mb-4">
            Egi Pebriyawan, S.Kom.
          </h2>
          <p class="text-base text-steel leading-relaxed mb-6 max-w-2xl">
            Mahasiswa PPG Prajabatan PPL Informatika SMAN 1 Bandung. Berkomitmen untuk menginspirasi siswa melalui integrasi teknologi kreatif dan pendekatan pedagogi yang bermakna.
          </p>
          <div class="flex flex-wrap justify-center md:justify-start gap-3">
            <router-link
              to="/ppg/artefak"
              class="inline-block bg-primary hover:bg-primary-pressed text-white px-[18px] py-[10px] rounded-[8px] font-medium text-[14px] transition-colors"
            >
              Lihat Artefak Pembelajaran
            </router-link>
            <a
              href="#detail-profil"
              class="inline-block bg-transparent text-ink border border-hairline-strong hover:bg-surface-notion px-[18px] py-[10px] rounded-[8px] font-medium text-[14px] transition-colors"
            >
              Tentang Saya
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Quote Section (Notion styled callout banner) -->
    <section class="bg-[#fef7d6] border border-[#f9e79f] rounded-[12px] p-8 text-center text-charcoal">
      <div class="max-w-3xl mx-auto">
        <i class="fa-solid fa-quote-left text-[#dd5b00]/40 text-3xl mb-4 block"></i>
        <blockquote class="text-xl font-medium italic leading-relaxed mb-3">
          "The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires."
        </blockquote>
        <cite class="text-sm font-semibold text-stone not-italic">— William Arthur Ward</cite>
      </div>
    </section>

    <!-- Detail Profil Section -->
    <section id="detail-profil" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Left Column: Motivasi (Notion Base Card) -->
      <div class="lg:col-span-2 bg-white border border-hairline rounded-[12px] p-8 shadow-none">
        <h3 class="text-2xl font-semibold tracking-tight text-ink mb-6 flex items-center gap-3">
          <i class="fa-solid fa-user-graduate text-primary"></i>
          Motivasi & Perjalanan
        </h3>
        <div class="space-y-4 text-steel leading-relaxed text-[16px]">
          <p>
            Ketertarikan saya terhadap teknologi dan dunia pendidikan mendorong saya untuk terus belajar dan berkontribusi secara profesional sebagai calon pendidik di bidang Informatika.
          </p>
          <p>
            Melalui Praktik Pengalaman Lapangan (PPL) di SMAN 1 Bandung, saya berkesempatan untuk memahami dinamika pendidikan secara langsung. Saya berfokus pada penciptaan pembelajaran yang aktif, kreatif, dan relevan dengan perkembangan teknologi digital saat ini.
          </p>
          <p>
            Bagi saya, Informatika bukan sekadar mengajarkan coding atau program aplikasi, tetapi membangun pola pikir komputasional (computational thinking), kreativitas, dan literasi digital yang bijak di era modern.
          </p>
        </div>
      </div>

      <!-- Right Column: Identitas & Info (Notion Base Card) -->
      <div class="bg-white border border-hairline rounded-[12px] p-8 shadow-none space-y-6">
        <h3 class="text-xl font-semibold tracking-tight text-ink flex items-center gap-3">
          <i class="fa-solid fa-address-card text-primary"></i>
          Identitas Akademik
        </h3>
        
        <div class="space-y-4 text-sm">
          <div class="border-b border-hairline pb-3">
            <span class="text-stone block mb-1 uppercase tracking-wider text-[11px] font-semibold">Nomor Induk Mahasiswa</span>
            <span class="text-ink font-medium text-[15px]">2531035</span>
          </div>
          <div class="border-b border-hairline pb-3">
            <span class="text-stone block mb-1 uppercase tracking-wider text-[11px] font-semibold">Program Studi</span>
            <span class="text-ink font-medium text-[15px]">Pendidikan Informatika</span>
          </div>
          <div class="border-b border-hairline pb-3">
            <span class="text-stone block mb-1 uppercase tracking-wider text-[11px] font-semibold">Lembaga Mitra PPL</span>
            <span class="text-ink font-medium text-[15px]">SMAN 1 Bandung</span>
          </div>
          <div>
            <span class="text-stone block mb-1 uppercase tracking-wider text-[11px] font-semibold">Universitas Asal</span>
            <span class="text-ink font-medium text-[15px]">Universitas Pendidikan Indonesia (UPI)</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Page: PPG Profil Mahasiswa
</script>
