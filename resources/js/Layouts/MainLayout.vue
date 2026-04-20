<template>
    <div
        class="min-h-screen bg-gray-900 text-white font-sans selection:bg-blue-500 selection:text-white"
    >
        <Navbar />

        <main>
            <slot />
        </main>

        <Footer />
    </div>
</template>

<script setup>
// Mengimpor komponen dari folder yang sama
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>
