<template>
    <section
        id="wedding"
        class="min-h-screen py-24 bg-black relative border-t border-gray-900"
    >
        <div class="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-10">
            <div class="text-center mb-16 md:mb-20">
                <h2
                    class="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase text-white"
                >
                    Wedding
                    <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-300"
                        >Organizer</span
                    >
                </h2>
                <p
                    class="text-gray-400 text-sm md:text-base max-w-2xl mx-auto tracking-wide"
                >
                    Ciptakan momen sakral yang tak terlupakan. Percayakan hari
                    bahagia Anda pada layanan profesional kami.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                <div
                    v-for="(pkg, index) in weddingPackages"
                    :key="index"
                    class="group relative overflow-hidden rounded-2xl min-h-[450px] flex flex-col justify-end cursor-pointer shadow-2xl border border-gray-800 hover:border-gray-500 transition-all duration-500"
                >
                    <img
                        :src="pkg.bgImage"
                        :alt="pkg.name"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90"
                    ></div>

                    <div
                        class="relative z-10 p-8 transform transition-transform duration-500 group-hover:-translate-y-2"
                    >
                        <h3
                            class="text-2xl md:text-3xl font-black uppercase tracking-wider mb-2"
                            :class="pkg.colorClass"
                        >
                            {{ pkg.name }}
                        </h3>
                        <p class="text-4xl font-bold text-white mb-4">
                            {{ pkg.price }}
                        </p>

                        <ul class="space-y-2 mb-8">
                            <li
                                v-for="(summary, i) in pkg.summary"
                                :key="i"
                                class="text-gray-300 text-sm font-light flex items-center"
                            >
                                <span
                                    class="w-1.5 h-1.5 rounded-full bg-gray-400 mr-3"
                                ></span>
                                {{ summary }}
                            </li>
                        </ul>

                        <button
                            @click="openModal(pkg)"
                            class="w-full bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white hover:text-black text-white font-bold py-3 rounded-full uppercase tracking-widest text-xs transition-colors duration-300"
                        >
                            Lihat Detail Lengkap
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <transition name="fade">
            <div
                v-if="selectedPackage"
                class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            >
                <div
                    class="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    @click="closeModal"
                ></div>

                <div
                    class="relative w-full max-w-5xl bg-neutral-900 border border-gray-700 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                >
                    <div
                        class="px-8 py-6 border-b border-gray-800 flex justify-between items-center bg-black"
                    >
                        <div>
                            <h3
                                class="text-2xl md:text-3xl font-black uppercase"
                                :class="selectedPackage.colorClass"
                            >
                                {{ selectedPackage.name }}
                            </h3>
                            <p class="text-gray-400 mt-1">
                                {{ selectedPackage.price }}
                            </p>
                        </div>
                        <button
                            @click="closeModal"
                            class="text-gray-400 hover:text-white transition-colors bg-gray-800 hover:bg-gray-700 rounded-full p-2"
                        >
                            <svg
                                class="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    <div class="p-8 overflow-y-auto custom-scrollbar">
                        <div
                            class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
                        >
                            <div
                                v-for="(
                                    items, category
                                ) in selectedPackage.details"
                                :key="category"
                            >
                                <h4
                                    class="text-lg font-bold text-white uppercase tracking-widest mb-4 border-b border-gray-800 pb-2 flex items-center"
                                >
                                    <span
                                        class="w-2 h-2 rounded-full mr-3"
                                        :class="selectedPackage.bgBadgeClass"
                                    ></span>
                                    {{ formatCategoryName(category) }}
                                </h4>
                                <ul class="space-y-3">
                                    <li
                                        v-for="(item, idx) in items"
                                        :key="idx"
                                        class="text-sm text-gray-400 font-light flex items-start"
                                    >
                                        <svg
                                            class="w-4 h-4 mr-3 mt-0.5 text-gray-500 flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            ></path>
                                        </svg>
                                        {{ item }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div
                        class="px-8 py-6 border-t border-gray-800 bg-black flex justify-end"
                    >
                        <button
                            class="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full uppercase tracking-widest text-xs transition-colors duration-300 flex items-center"
                        >
                            <svg
                                class="w-4 h-4 mr-2"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.183-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.181-2.589-5.769-5.765-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.573-.187-.981-.342-2.276-.86-3.764-3.214-3.878-3.366-.115-.153-.927-1.233-.927-2.353 0-1.12.581-1.674.792-1.902.21-.228.461-.284.614-.284.153 0 .306.002.438.008.143.006.335-.054.516.38.188.452.643 1.572.7 1.705.058.132.096.286.019.438-.077.153-.115.247-.23.38-.115.131-.242.277-.344.381-.11.112-.228.235-.1.456.128.22.569.938 1.22 1.516.843.748 1.554.981 1.768 1.085.215.104.34.088.465-.054.125-.143.539-.63.684-.847.145-.216.29-.18.485-.107.195.074 1.233.582 1.445.688.212.106.353.159.404.247.051.088.051.511-.093.916z"
                                />
                            </svg>
                            Booking via WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </transition>
    </section>
</template>

<script setup>
import { ref } from "vue";

// Data State untuk Modal
const selectedPackage = ref(null);

const openModal = (pkg) => {
    selectedPackage.value = pkg;
    document.body.style.overflow = "hidden"; // Kunci scroll halaman belakang
};

const closeModal = () => {
    selectedPackage.value = null;
    document.body.style.overflow = ""; // Buka kunci scroll
};

// Merapikan nama key (misal: 'makeUp' menjadi 'Make Up')
const formatCategoryName = (name) => {
    const names = {
        makeUp: "Make Up & Busana",
        dekorasi: "Dekorasi",
        tenda: "Tenda & Kelengkapan",
        dokumentasi: "Dokumentasi",
    };
    return names[name] || name;
};

// Data Paket Lengkap (Diambil dari gambar Anda)
const weddingPackages = [
    {
        name: "Silver Package",
        price: "Rp 20 Juta",
        bgImage: "/img/product/PriceList_wd2.jpg",
        colorClass: "text-gray-300",
        bgBadgeClass: "bg-gray-300",
        summary: [
            "Decoration Lengkap 6 Meter",
            "Tenda & Perlengkapan",
            "Make up 3 Baju",
            "Foto & Video",
        ],
        details: {
            makeUp: [
                "Make Up Pengantin",
                "Busana Pengantin 3 (1 Akad, 2 Resepsi)",
                "Melati Segar, Hena, Softlens",
                "Make Up Orang Tua & Busana",
                "Make Up Pagar Ayu & Busana",
            ],
            dekorasi: [
                "Dekorasi Pelaminan 6 Meter",
                "Fresh Flower mix Artificial",
                "Panggung & Taman",
                "Kursi Pelaminan 1 Set",
                "Kotak Amplop",
                "Welcome Sign",
            ],
            tenda: [
                "Tenda 96 Meter",
                "Karpet Jalan",
                "Kursi Futura 100 Pcs",
                "Meja Tamu 4",
                "Meja Prasmanan 2",
                "Kipas Blower 2",
                "Perlengkapan Makan (Sesuai Kebutuhan)",
            ],
            dokumentasi: [
                "Foto & Video Shooting",
                "Cetak 1 Album Foto",
                "Video 32GB",
            ],
        },
    },
    {
        name: "Gold Package",
        price: "Rp 25 Juta",
        bgImage: "/img/product/PriceList_wd3.jpg",
        colorClass: "text-yellow-400",
        bgBadgeClass: "bg-yellow-400",
        summary: [
            "Decoration Lengkap 6 Meter",
            "Tenda & Perlengkapan",
            "Make up 4 Baju",
            "Foto & Video",
        ],
        details: {
            makeUp: [
                "Make Up Pengantin",
                "Busana Pengantin 4 (1 Akad, 3 Resepsi)",
                "Melati Segar, Hena, Softlens",
                "Make Up Orang Tua & Busana",
                "Make Up Pagar Ayu & Busana",
            ],
            dekorasi: [
                "Dekorasi Pelaminan 6 Meter",
                "Fresh Flower mix Artificial",
                "Panggung & Taman",
                "Kursi Pelaminan 1 Set",
                "Kotak Amplop",
                "Welcome Sign",
                "Kursi Akad 4",
                "Akrilik 6 Pcs",
                "Janur",
            ],
            tenda: [
                "Tenda 128 Meter",
                "Karpet Jalan",
                "Kursi Futura 100 Pcs",
                "Meja Tamu 5",
                "Meja Prasmanan 2",
                "Kipas Blower 2",
                "Perlengkapan Makan (Sesuai Kebutuhan)",
            ],
            dokumentasi: [
                "Foto & Video Shooting",
                "Cetak 1 Album Foto",
                "Video 64GB",
            ],
        },
    },
    {
        name: "Platinum Package",
        price: "Rp 30 Juta",
        bgImage: "/img/wedding_platinum.jpg", // <--- GANTI DENGAN FOTO LOKAL ANDA
        colorClass: "text-rose-300",
        bgBadgeClass: "bg-rose-300",
        summary: [
            "Decoration Lengkap 8 Meter",
            "Taman Jalan & Lighting",
            "Make up 4 Baju",
            "Foto & Video",
        ],
        details: {
            makeUp: [
                "Make Up Pengantin",
                "Busana Pengantin 4 (1 Akad, 3 Resepsi)",
                "Melati Segar, Hena, Softlens",
                "Make Up Orang Tua & Busana",
                "Make Up Pagar Ayu & Busana",
            ],
            dekorasi: [
                "Dekorasi Pelaminan 8 Meter",
                "Fresh Flower mix Artificial",
                "Panggung & Taman 12 Pcs Akrilik",
                "Kursi Pelaminan 1 Set",
                "Kotak Amplop",
                "Welcome Sign",
                "Kursi Akad 4",
                "Janur",
            ],
            tenda: [
                "Tenda 160 Meter",
                "Karpet Jalan",
                "Kursi Futura 150 Pcs",
                "Meja Tamu 5",
                "Meja Prasmanan 2",
                "Kipas Blower 3",
                "Perlengkapan Makan (Sesuai Kebutuhan)",
            ],
            dokumentasi: [
                "Foto & Video Shooting",
                "Cetak 1 Album Foto",
                "Video 64GB",
            ],
        },
    },
];
</script>

<style scoped>
/* Transisi Halus untuk Modal */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Kustomisasi Scrollbar di dalam Modal agar terlihat estetik */
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
    background: #171717;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #3f3f46;
    border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #52525b;
}
</style>
