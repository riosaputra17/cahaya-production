<template>
    <section
        id="event"
        class="py-24 bg-white relative border-t border-gray-200"
    >
        <div class="max-w-7xl mx-auto px-4 md:px-8">
            <!-- HEADER & NAVIGATION -->
            <div
                class="flex flex-col md:flex-row md:justify-between md:items-end mb-8 gap-4"
            >
                <div>
                    <h2
                        class="text-3xl md:text-4xl font-black uppercase text-gray-900 tracking-tight"
                    >
                        Event
                        <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500"
                            >Organizer</span
                        >
                    </h2>
                </div>

                <!-- Navigasi View All & Panah (Khas Gibson) -->
                <div class="flex items-center gap-6">
                    <a
                        href="#"
                        class="text-sm font-bold text-gray-900 underline underline-offset-4 hover:text-red-600 transition-colors"
                    >
                        View All
                    </a>
                    <div class="hidden md:flex gap-2">
                        <button
                            @click="scrollLeft"
                            class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-600"
                        >
                            <svg
                                class="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 19l-7-7 7-7"
                                ></path>
                            </svg>
                        </button>
                        <button
                            @click="scrollRight"
                            class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-600"
                        >
                            <svg
                                class="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 5l7 7-7 7"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- FILTER PILLS (Tombol Kategori) -->
            <div
                class="flex gap-2 mb-8 overflow-x-auto pb-2 custom-scrollbar-hide snap-x"
            >
                <button
                    v-for="category in categories"
                    :key="category"
                    @click="activeFilter = category"
                    class="px-4 py-2 rounded-full text-xs md:text-sm font-bold whitespace-nowrap transition-colors duration-300 snap-start"
                    :class="
                        activeFilter === category
                            ? 'bg-black text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    "
                >
                    {{ category }}
                </button>
            </div>

            <!-- CAROUSEL KARTU EVENT -->
            <div
                ref="carouselContainer"
                class="flex overflow-x-auto gap-4 md:gap-6 pb-8 custom-scrollbar-hide snap-x snap-mandatory scroll-smooth"
            >
                <div
                    v-for="event in filteredEvents"
                    :key="event.id"
                    class="min-w-[280px] md:min-w-[320px] bg-slate-50 border border-gray-100 rounded-lg p-4 snap-start hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col"
                >
                    <!-- Kotak Gambar (Rasio 1:1 atau 4:5 ala produk) -->
                    <div
                        class="aspect-[4/5] bg-gray-200 rounded-md overflow-hidden mb-4 relative"
                    >
                        <img
                            :src="event.image"
                            :alt="event.title"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <!-- Label tipe event di atas gambar -->
                        <div
                            class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-gray-800 uppercase tracking-wider shadow-sm"
                        >
                            {{ event.type }}
                        </div>
                    </div>

                    <!-- Teks Keterangan Event -->
                    <div class="text-left mt-auto">
                        <p
                            class="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider"
                        >
                            {{ event.status }}
                        </p>
                        <h4
                            class="text-lg font-bold text-gray-900 mb-1 leading-tight group-hover:text-red-600 transition-colors"
                        >
                            {{ event.title }}
                        </h4>
                        <p class="text-sm text-gray-600 font-light">
                            {{ event.location }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from "vue";

// Referensi untuk menggeser carousel secara manual menggunakan panah
const carouselContainer = ref(null);

const scrollLeft = () => {
    if (carouselContainer.value) {
        carouselContainer.value.scrollBy({ left: -340, behavior: "smooth" });
    }
};

const scrollRight = () => {
    if (carouselContainer.value) {
        carouselContainer.value.scrollBy({ left: 340, behavior: "smooth" });
    }
};

// Data Kategori
const categories = [
    "Semua Event",
    "Corporate",
    "Konser & Festival",
    "Pensi",
    "Private Party",
];
const activeFilter = ref("Semua Event");

// Data Portofolio Event (Silakan sesuaikan dengan foto asli Anda nanti)
const events = [
    {
        id: 1,
        type: "Corporate",
        status: "Sukses Terlaksana",
        title: "Family Gathering PT. Shindengen Indonesia",
        location: "Cikarang, Jawa Barat",
        image: "/img/event_corp.jpg",
    },
    {
        id: 2,
        type: "Konser & Festival",
        status: "Sukses Terlaksana",
        title: "Pesta Rakyat Cibitung 2025",
        location: "Lapangan Utama Cibitung",
        image: "/img/event_konser.jpg",
    },
    {
        id: 3,
        type: "Pensi",
        status: "Sukses Terlaksana",
        title: "Pentas Seni SMAN 1",
        location: "Bekasi, Jawa Barat",
        image: "/img/event_pensi.jpg",
    },
    {
        id: 4,
        type: "Private Party",
        status: "Sukses Terlaksana",
        title: "Anniversary Gala Dinner",
        location: "Hotel Aston, Bekasi",
        image: "/img/event_gala.jpg",
    },
    {
        id: 5,
        type: "Corporate",
        status: "Sukses Terlaksana",
        title: "Product Launching Exhibition",
        location: "Jakarta Expo Center",
        image: "/img/event_launch.jpg",
    },
];

// Computed property untuk memfilter event secara langsung saat kategori diklik
const filteredEvents = computed(() => {
    if (activeFilter.value === "Semua Event") {
        return events;
    }
    return events.filter((event) => event.type === activeFilter.value);
});
</script>

<style scoped>
/* Menyembunyikan scrollbar bawaan browser agar terlihat bersih seperti di aplikasi native */
.custom-scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.custom-scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
