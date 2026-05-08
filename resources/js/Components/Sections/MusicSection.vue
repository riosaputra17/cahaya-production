<template>
    <section
        id="music"
        class="min-h-screen py-24 bg-neutral-950 relative border-t border-gray-900"
    >
        <div
            class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-red-900/20 blur-[120px] pointer-events-none"
        ></div>

        <div class="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-10">
            <div class="text-center mb-16 md:mb-24">
                <h2
                    class="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase text-white"
                >
                    Pricelist
                    <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800"
                        >2026</span
                    >
                </h2>
                <p
                    class="text-gray-400 text-sm md:text-base max-w-2xl mx-auto tracking-wide"
                >
                    Siap melayani event Anda. Pilih paket hiburan yang sesuai
                    dengan skala acara Anda, dari panggung megah hingga perayaan
                    intim.
                </p>
            </div>

            <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            >
                <div
                    v-for="(pkg, index) in packages"
                    :key="index"
                    class="group relative bg-neutral-900/50 backdrop-blur-sm border rounded-2xl p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(220,38,38,0.2)]"
                    :class="
                        pkg.isPopular
                            ? 'border-red-600/50 hover:border-red-500'
                            : 'border-gray-800 hover:border-red-500/50'
                    "
                >
                    <div
                        v-if="pkg.isPopular"
                        class="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-800 text-white text-[10px] font-black tracking-widest uppercase px-4 py-1 rounded-full shadow-lg"
                    >
                        Best Seller
                    </div>

                    <h3
                        class="text-lg md:text-xl font-bold uppercase tracking-wider text-gray-200 mt-2"
                    >
                        {{ pkg.name }}
                    </h3>

                    <div class="mt-4 mb-6">
                        <span
                            class="text-4xl font-black text-white tracking-tighter"
                            >{{ pkg.price }}</span
                        >
                    </div>

                    <hr
                        class="border-gray-800 mb-6 group-hover:border-red-900/50 transition-colors duration-500"
                    />

                    <ul class="space-y-4 mb-10 flex-grow">
                        <li
                            v-for="(feature, fIndex) in pkg.features"
                            :key="fIndex"
                            class="flex items-start"
                        >
                            <svg
                                class="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                ></path>
                            </svg>
                            <span
                                class="text-sm text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                            >
                                {{ feature }}
                            </span>
                        </li>
                    </ul>

                    <div class="mt-auto">
                        <button
                            class="w-full relative z-10 overflow-hidden rounded-full border border-red-600/50 px-6 py-3 text-xs md:text-sm font-bold uppercase tracking-widest text-red-400 transition-colors duration-500 hover:text-white shadow-lg before:absolute before:top-0 before:-left-10 before:-z-10 before:h-full before:w-0 before:-skew-x-[45deg] before:bg-red-600 before:transition-all before:duration-700 hover:before:w-[160%] hover:border-red-600"
                        >
                            Pesan Paket
                        </button>
                    </div>
                </div>
            </div>

            <div
                class="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 border-t border-gray-900 pt-10"
            ></div>
        </div>
    </section>
</template>

<script setup>
// Data Pricelist diambil persis dari brosur yang Anda berikan
const packages = [
    {
        name: "Dangdut Full Live",
        price: "Rp 30 Juta",
        isPopular: true, // Paket ini akan mendapat desain "Best Seller"
        features: [
            "Sound System Line Array 20.000 Watt",
            "Panggung 10x8 & Cover Sound",
            "Peralatan Musik Full Set",
            "Lighting Full Set",
            "Live Streaming 4 Camera",
            "Genset 2 unit",
            "Singer 6 & MC Musik 1",
        ],
    },
    {
        name: "Band Ambyar Live",
        price: "Rp 15 Juta",
        isPopular: false,
        features: [
            "Sound System Line Array 10.000 Watt",
            "Panggung 8x6 & Cover Sound",
            "Musik Dangdut & Band",
            "Lighting Semi Set",
            "Live Streaming 3 Camera",
            "Genset 1 unit",
            "Singer 5 & MC Musik 1",
        ],
    },
    {
        name: "Organ Tunggal 1",
        price: "Rp 9 Juta",
        isPopular: false,
        features: [
            "Sound System Line Array 10.000 Watt",
            "Panggung 6x6 & Cover Sound",
            "Peralatan Musik Full Set",
            "Lighting Set Organ Tunggal",
            "Genset 1 unit",
            "Singer 4 & MC Musik 1",
        ],
    },
    {
        name: "Organ Tunggal 2",
        price: "Rp 7 Juta",
        isPopular: false,
        features: [
            "Sound System Ground Stage 8.000 Watt",
            "Panggung 6x6",
            "Peralatan Musik Full Set",
            "Lighting",
            "Singer 4 & MC Musik 1",
        ],
    },
];
</script>
