<template>
    <section
        id="music"
        class="min-h-screen py-24 bg-white relative border-t border-gray-200 overflow-hidden"
    >
        <div class="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-10">
            <!-- HEADER SECTION -->
            <div class="text-center mb-12 md:mb-16">
                <h2
                    class="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase text-gray-900"
                >
                    Pricelist
                    <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500"
                        >Music 2026</span
                    >
                </h2>
                <p
                    class="text-gray-600 text-sm md:text-base max-w-2xl mx-auto tracking-wide"
                >
                    Siap melayani event Anda. Pilih paket hiburan yang sesuai
                    dengan skala acara Anda, dari panggung megah hingga perayaan
                    intim.
                </p>
            </div>
        </div>

        <!-- GRID KARTU -->
        <div class="w-full px-4 md:px-8 lg:px-12 relative z-10">
            <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            >
                <div
                    v-for="(pkg, index) in packages"
                    :key="index"
                    class="group relative overflow-hidden rounded-lg min-h-[450px] lg:min-h-[550px] flex flex-col justify-end shadow-xl border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
                >
                    <!-- Background Image -->
                    <img
                        :src="pkg.bgImage"
                        :alt="pkg.name"
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <!-- Overlay Gelap Penuh -->
                    <div
                        class="absolute inset-0 bg-black/60 transition-colors duration-500 group-hover:bg-black/50"
                    ></div>

                    <!-- Konten Kartu -->
                    <div
                        class="relative z-10 p-6 md:p-8 flex flex-col h-full justify-end"
                    >
                        <!-- NEW: Badge Best Seller dipindah ke dalam alur teks (bukan absolute lagi) -->
                        <div v-if="pkg.isPopular" class="mb-3">
                            <span
                                class="bg-red-600 text-white text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full shadow-md"
                            >
                                Best Seller
                            </span>
                        </div>

                        <h3
                            class="text-xl md:text-2xl font-bold uppercase tracking-wider text-white mb-1"
                        >
                            {{ pkg.name }}
                        </h3>

                        <p
                            class="text-3xl lg:text-xl font-black text-white tracking-tighter mb-4"
                        >
                            {{ pkg.price }}
                        </p>

                        <ul class="space-y-2 mb-6">
                            <li
                                v-for="(feature, fIndex) in pkg.features"
                                :key="fIndex"
                                class="flex items-start"
                            >
                                <span
                                    class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-3 flex-shrink-0"
                                ></span>
                                <span
                                    class="text-xs md:text-sm text-gray-200 font-light leading-relaxed"
                                >
                                    {{ feature }}
                                </span>
                            </li>
                        </ul>

                        <!-- Tombol -->
                        <div class="mt-auto">
                            <button
                                class="bg-white text-black font-bold py-2 px-6 rounded-full text-xs md:text-sm tracking-wide transition-colors duration-300 hover:bg-gray-200 w-max"
                            >
                                Pesan Paket
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const packages = [
    {
        name: "Dangdut Full Live",
        price: "Rp 30 Juta",
        isPopular: true,
        bgImage: "/img/product/PriceList3.png",
        features: [
            "Line Array 20.000 Watt",
            "Panggung 10x8 & Lighting",
            "Live Streaming 4 Camera",
            "Singer 6 & MC Musik 1",
        ],
    },
    {
        name: "Band Ambyar Live",
        price: "Rp 15 Juta",
        isPopular: false,
        bgImage: "/img/product/organtunggal1.png",
        features: [
            "Line Array 10.000 Watt",
            "Panggung 8x6 & Lighting",
            "Live Streaming 3 Camera",
            "Singer 5 & MC Musik 1",
        ],
    },
    {
        name: "Organ Tunggal 1",
        price: "Rp 9 Juta",
        isPopular: false,
        bgImage: "/img/music_organ1.jpg",
        features: [
            "Line Array 10.000 Watt",
            "Panggung 6x6 & Lighting",
            "Peralatan Musik Full Set",
            "Singer 4 & MC Musik 1",
        ],
    },
    {
        name: "Organ Tunggal 2",
        price: "Rp 7 Juta",
        isPopular: false,
        bgImage: "/img/music_organ2.jpg",
        features: [
            "Ground Stage 8.000 Watt",
            "Panggung 6x6",
            "Peralatan Musik Full Set",
            "Singer 4 & MC Musik 1",
        ],
    },
];
</script>
