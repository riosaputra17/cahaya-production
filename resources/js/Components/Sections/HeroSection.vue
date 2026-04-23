<template>
    <section
        id="home"
        class="relative min-h-screen w-full overflow-hidden bg-black pt-20"
    >
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
                    <div class="absolute inset-0 bg-black/60"></div>
                </div>
            </transition-group>
        </div>

        <div
            class="absolute bottom-16 left-8 md:left-16 lg:left-24 z-10 text-left"
        >
            <transition name="slide-up" mode="out-in">
                <div
                    :key="currentSlideIndex"
                    class="text-left w-full max-w-sm md:max-w-xl lg:max-w-2xl"
                >
                    <h1
                        class="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 tracking-tight leading-tight text-white drop-shadow-xl"
                    >
                        {{ activeSlide.title }}
                    </h1>
                    <p
                        class="text-sm md:text-base text-gray-200 mb-6 w-full max-w-sm md:max-w-md lg:max-w-lg leading-relaxed drop-shadow-lg"
                    >
                        {{ activeSlide.description }}
                    </p>
                    <div class="flex flex-col sm:flex-row gap-3">
                        <button
                            class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-full transition duration-300 text-sm md:text-base shadow-xl hover:shadow-2xl"
                        >
                            {{ activeSlide.button1Text }}
                        </button>
                        <button
                            class="bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700 text-white font-bold py-2.5 px-6 rounded-full transition duration-300 text-sm md:text-base border border-gray-600"
                        >
                            {{ activeSlide.button2Text }}
                        </button>
                    </div>
                </div>
            </transition>
        </div>

        <div
            class="absolute bottom-16 right-8 md:right-16 lg:right-24 z-20 flex items-center gap-4"
        >
            <button
                v-for="(slide, index) in slidesData"
                :key="'thumb-' + slide.id"
                @click="manualGoToSlide(index)"
                class="relative w-20 h-14 md:w-24 md:h-16 lg:w-32 lg:h-20 rounded-xl overflow-hidden shadow-2xl border-2 transition-all duration-500"
                :class="[
                    index === currentSlideIndex
                        ? 'border-blue-500 ring-4 ring-blue-500/30 scale-105'
                        : 'border-gray-700 opacity-60 hover:opacity-100',
                ]"
            >
                <img
                    :src="slide.thumbnailImage"
                    class="w-full h-full object-cover"
                />
                <div
                    v-if="index === currentSlideIndex"
                    class="absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-[7000ms] ease-linear w-full"
                ></div>
            </button>
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
        id: 2,
        title: "Elegant Weddings by Cahaya",
        description:
            "Ciptakan simfoni cinta yang tak terlupakan dengan layanan perencanaan dan hiburan pernikahan eksklusif kami.",
        button1Text: "Paket Wedding",
        button2Text: "Testimoni",
        backgroundImage: "/img/slide3.png",
        thumbnailImage: "/img/slide3.png",
    },
];

const currentSlideIndex = ref(0);
const activeSlide = computed(() => slidesData[currentSlideIndex.value]);
let timer = null;

// Fungsi untuk berpindah ke slide berikutnya
const nextSlide = () => {
    currentSlideIndex.value = (currentSlideIndex.value + 1) % slidesData.length;
};

// Fungsi untuk perpindahan manual (klik thumbnail)
// Kita reset timer agar setelah diklik, user punya waktu 7 detik penuh lagi
const manualGoToSlide = (index) => {
    currentSlideIndex.value = index;
    resetTimer();
};

const startTimer = () => {
    timer = setInterval(nextSlide, 7000); // 7 Detik
};

const resetTimer = () => {
    clearInterval(timer);
    startTimer();
};

// Lifecycle Hooks
onMounted(() => {
    startTimer();
});

onUnmounted(() => {
    clearInterval(timer);
});
</script>

<style scoped>
/* EFEK BERGESER KE SAMPING (Slide) */
.slide-side-enter-active,
.slide-side-leave-active {
    transition: all 0.8s ease-in-out;
}

/* Gambar baru masuk dari kanan */
.slide-side-enter-from {
    transform: translateX(100%);
}

/* Gambar lama keluar ke kiri */
.slide-side-leave-to {
    transform: translateX(-100%);
}

/* Teks Slide Up (tetap) */
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
