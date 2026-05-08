<template>
    <header
        class="fixed w-full top-0 z-50 transition-all duration-500 font-sans"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
        :class="navBackgroundClass"
    >
        <div
            class="px-4 md:px-8 border-b transition-colors duration-500"
            :class="borderClass"
        >
            <div class="flex items-center justify-between h-16 md:h-20">
                <div class="flex-shrink-0">
                    <a
                        href="#home"
                        class="group flex items-center transition-all duration-300"
                        :class="textClass"
                    >
                        <span
                            class="text-xl md:text-3xl font-bold tracking-tight"
                            >Cahaya</span
                        >
                        <span
                            class="text-xl md:text-3xl font-light ml-1 md:ml-2 opacity-90"
                            >Production</span
                        >
                        <span
                            class="text-red-600 font-black text-2xl md:text-3xl ml-0.5 transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                            >.</span
                        >
                    </a>
                </div>

                <div class="hidden lg:flex space-x-10">
                    <a
                        href="#home"
                        class="relative text-sm font-bold uppercase tracking-widest transition-colors duration-300 after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
                        :class="textClass"
                        >Home</a
                    >
                    <a
                        href="#music"
                        class="relative text-sm font-bold uppercase tracking-widest transition-colors duration-300 after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
                        :class="textClass"
                        >Music</a
                    >
                    <a
                        href="#wedding"
                        class="relative text-sm font-bold uppercase tracking-widest transition-colors duration-300 after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
                        :class="textClass"
                        >Wedding</a
                    >
                    <a
                        href="#contact"
                        class="relative text-sm font-bold uppercase tracking-widest transition-colors duration-300 after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
                        :class="textClass"
                        >Contact</a
                    >
                </div>

                <div
                    class="flex items-center space-x-4 md:space-x-6 transition-colors duration-500"
                    :class="textClass"
                >
                    <button
                        class="transition-all transform hover:scale-110 hover:opacity-60 hidden sm:block"
                    >
                        <svg
                            class="w-5 h-5 md:w-6 md:h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                    </button>
                    <button
                        class="transition-all transform hover:scale-110 hover:opacity-60 hidden sm:block"
                    >
                        <svg
                            class="w-5 h-5 md:w-6 md:h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                        </svg>
                    </button>

                    <button
                        @click="toggleSidebar"
                        class="lg:hidden transition-all transform hover:scale-110 hover:opacity-60 focus:outline-none"
                    >
                        <svg
                            class="w-6 h-6 md:w-7 md:h-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                v-if="!isSidebarOpen"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                            <path
                                v-else
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div
            class="fixed inset-0 bg-black/95 z-40 transition-transform duration-300 ease-in-out lg:hidden"
            :class="isSidebarOpen ? 'translate-x-0' : 'translate-x-full'"
            style="top: 64px"
        >
            <div
                class="flex flex-col px-6 py-10 space-y-8 h-full overflow-y-auto"
            >
                <a
                    @click="closeSidebar"
                    href="#home"
                    class="text-white text-2xl font-light tracking-widest uppercase border-b border-gray-800 pb-4"
                    >Home</a
                >
                <a
                    @click="closeSidebar"
                    href="#music"
                    class="text-white text-2xl font-light tracking-widest uppercase border-b border-gray-800 pb-4"
                    >Music</a
                >
                <a
                    @click="closeSidebar"
                    href="#wedding"
                    class="text-white text-2xl font-light tracking-widest uppercase border-b border-gray-800 pb-4"
                    >Wedding</a
                >
                <a
                    @click="closeSidebar"
                    href="#contact"
                    class="text-white text-2xl font-light tracking-widest uppercase border-b border-gray-800 pb-4"
                    >Contact</a
                >

                <div class="flex gap-6 pt-4 text-gray-400">
                    <span
                        class="hover:text-white cursor-pointer uppercase text-xs tracking-widest"
                        >Login</span
                    >
                    <span
                        class="hover:text-white cursor-pointer uppercase text-xs tracking-widest"
                        >Search</span
                    >
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const isHovered = ref(false);
const isScrolled = ref(false);
// State baru untuk Sidebar
const isSidebarOpen = ref(false);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

// Fungsi untuk membuka/tutup menu mobile
const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
    // Mencegah body di-scroll saat sidebar terbuka
    if (isSidebarOpen.value) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
};

// Fungsi untuk menutup sidebar saat link diklik
const closeSidebar = () => {
    isSidebarOpen.value = false;
    document.body.style.overflow = "";
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
    document.body.style.overflow = ""; // Bersihkan saat komponen hancur
});

// Jika sidebar terbuka, navbar selalu solid agar panel hitamnya tidak transparan berantakan
const isSolid = computed(
    () => isHovered.value || isScrolled.value || isSidebarOpen.value,
);

const navBackgroundClass = computed(() => {
    // Saat sidebar terbuka, background atasnya ikut hitam
    if (isSidebarOpen.value) return "bg-black shadow-xl";
    return isSolid.value ? "bg-white shadow-xl" : "bg-transparent";
});

const textClass = computed(() => {
    // Saat sidebar terbuka, teks icon hamburger harus putih
    if (isSidebarOpen.value) return "text-white drop-shadow-md";
    return isSolid.value ? "text-gray-900" : "text-white drop-shadow-md";
});

const borderClass = computed(() => {
    if (isSidebarOpen.value) return "border-gray-800";
    return isSolid.value ? "border-gray-200" : "border-transparent";
});
</script>
