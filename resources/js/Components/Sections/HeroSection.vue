<template>
    <section
        id="home"
        class="relative min-h-screen w-full overflow-hidden bg-black pt-20"
    >
        <!-- Area Latar Belakang (Carousel) -->
        <div class="absolute inset-0 z-0">
            <transition-group
                name="slide-side"
                tag="div"
                class="relative w-full h-full"
            >
                <div
                    v-for="(slide, index) in slidesData"
                    :key="slide.id"
                    v-show="index === currentSlideIndex"
                    class="absolute inset-0 w-full h-full"
                >
                    <img
                        :src="slide.backgroundImage"
                        :alt="slide.title"
                        class="w-full h-full object-cover"
                    />
                    <div class="absolute inset-0 bg-black/50"></div>
                </div>
            </transition-group>
        </div>

        <!-- AREA KONTEN & NAVIGASI (Sejajar dengan Navbar) -->
        <div class="absolute bottom-12 md:bottom-30 left-0 w-full z-10">
            <!-- max-w-7xl mx-auto px-4 md:px-8 memastikan sejajar dengan logo Navbar -->
            <div
                class="w-full px-4 md:px-8 flex flex-col md:flex-row justify-between items-end gap-10"
            >
                <!-- BAGIAN KIRI: Teks & Tombol -->
                <transition name="slide-up" mode="out-in">
                    <div
                        :key="currentSlideIndex"
                        class="max-w-xl text-left w-full"
                    >
                        <h1
                            class="text-3xl md:text-5xl font-bold mb-4 tracking-tight leading-tight text-white drop-shadow-md"
                        >
                            {{ activeSlide.title }}
                        </h1>
                        <p
                            class="text-base md:text-lg text-gray-200 mb-8 max-w-md leading-relaxed drop-shadow-sm"
                        >
                            {{ activeSlide.description }}
                        </p>

                        <!-- TOMBOL DIKEMBALIKAN KE VERSI DIAGONAL SWIPE -->
                        <div class="flex flex-row gap-3 mt-4">
                            <button
                                class="relative z-10 overflow-hidden rounded-full border border-blue-500 px-4 md:px-8 py-2 md:py-3 text-xs md:text-base font-bold uppercase tracking-widest text-blue-400 transition-colors duration-500 hover:text-white shadow-lg before:absolute before:top-0 before:-left-10 before:-z-10 before:h-full before:w-0 before:-skew-x-[45deg] before:bg-blue-500 before:transition-all before:duration-700 hover:before:w-[160%] w-1/2 md:w-auto"
                            >
                                {{ activeSlide.button1Text }}
                            </button>

                            <button
                                class="relative z-10 overflow-hidden rounded-full border border-gray-300 px-4 md:px-8 py-2 md:py-3 text-xs md:text-base font-bold uppercase tracking-widest text-gray-300 transition-colors duration-500 hover:text-gray-900 shadow-lg before:absolute before:top-0 before:-left-10 before:-z-10 before:h-full before:w-0 before:-skew-x-[45deg] before:bg-gray-300 before:transition-all before:duration-700 hover:before:w-[160%] w-1/2 md:w-auto"
                            >
                                {{ activeSlide.button2Text }}
                            </button>
                        </div>
                    </div>
                </transition>

                <!-- BAGIAN KANAN: Thumbnail -->
                <div class="flex items-center gap-4 pb-2 md:pb-0">
                    <button
                        v-for="(slide, index) in slidesData"
                        :key="'thumb-' + slide.id"
                        @click="manualGoToSlide(index)"
                        class="relative w-20 h-14 md:w-24 md:h-16 lg:w-32 lg:h-20 rounded-xl overflow-hidden shadow-2xl border-2 transition-all duration-500"
                        :class="[
                            index === currentSlideIndex
                                ? 'border-white ring-4 ring-white/30 scale-105'
                                : 'border-gray-500 opacity-60 hover:opacity-100 hover:border-white',
                        ]"
                    >
                        <img
                            :src="slide.thumbnailImage"
                            class="w-full h-full object-cover"
                        />
                        <div
                            v-if="index === currentSlideIndex"
                            class="absolute bottom-0 left-0 h-1 bg-white transition-all duration-[7000ms] ease-linear w-full"
                        ></div>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const slidesData = [
    {
        id: 1,
        title: "Cahaya Production: Your Sound, Your Moment",
        description:
            "Bekerja sama dengan produser dan musisi terbaik untuk menghadirkan kualitas audio premium di setiap acara Anda.",
        button1Text: "Layanan Musik",
        button2Text: "Portofolio",
        backgroundImage: "/img/slide.png",
        thumbnailImage: "/img/slide.png",
    },
    {
        id: 2,
        title: "Elegant Weddings by Cahaya",
        description:
            "Ciptakan simfoni cinta yang tak terlupakan dengan layanan perencanaan dan hiburan pernikahan eksklusif kami.",
        button1Text: "Paket Wedding",
        button2Text: "Testimoni",
        backgroundImage: "/img/slide2.png",
        thumbnailImage: "/img/slide2.png",
    },
    {
        id: 3,
        title: "Capture Every Precious Memory",
        description:
            "Layanan dokumentasi foto dan video profesional untuk mengabadikan setiap detik kebahagiaan Anda.",
        button1Text: "Galeri Foto",
        button2Text: "Hubungi Kami",
        backgroundImage: "/img/slide3.png",
        thumbnailImage: "/img/slide3.png",
    },
];

const currentSlideIndex = ref(0);
const activeSlide = computed(() => slidesData[currentSlideIndex.value]);
let timer = null;

const nextSlide = () => {
    currentSlideIndex.value = (currentSlideIndex.value + 1) % slidesData.length;
};

const manualGoToSlide = (index) => {
    currentSlideIndex.value = index;
    resetTimer();
};

const startTimer = () => {
    timer = setInterval(nextSlide, 7000);
};

const resetTimer = () => {
    clearInterval(timer);
    startTimer();
};

onMounted(() => {
    startTimer();
});

onUnmounted(() => {
    clearInterval(timer);
});
</script>

<style scoped>
.slide-side-enter-active,
.slide-side-leave-active {
    transition: all 0.8s ease-in-out;
}
.slide-side-enter-from {
    transform: translateX(100%);
}
.slide-side-leave-to {
    transform: translateX(-100%);
}
.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.6s ease-out;
}
.slide-up-enter-from {
    opacity: 0;
    transform: translateY(20px);
}
.slide-up-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}
</style>
