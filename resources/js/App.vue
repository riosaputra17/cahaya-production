<template>
    <MainLayout>
        <HeroSection />
        <MusicSection />
        <WeddingSection />
        <ContactSection />
    </MainLayout>
</template>

<script setup>
// Import Layout Utama
import MainLayout from "./Layouts/MainLayout.vue";

// Import Semua Section
import HeroSection from "./Components/Sections/HeroSection.vue";
import MusicSection from "./Components/Sections/MusicSection.vue";
import WeddingSection from "./Components/Sections/WeddingSection.vue";
import ContactSection from "./Components/Sections/ContactSection.vue";
</script>
