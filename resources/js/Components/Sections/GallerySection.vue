<template>
    <section
        id="gallery"
        class="py-24 bg-white relative border-t border-gray-200"
    >
        <div class="max-w-7xl mx-auto px-4 md:px-8">
            <div class="text-center mb-16">
                <h2
                    class="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase text-gray-900"
                >
                    Our
                    <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500"
                        >Gallery</span
                    >
                </h2>
                <p
                    class="text-gray-600 text-sm md:text-base max-w-2xl mx-auto tracking-wide"
                >
                    Kumpulan momen magis dan epik yang berhasil kami abadikan.
                    Dari gemerlap panggung musik hingga sakralnya janji suci.
                </p>
            </div>

            <div class="mb-20">
                <div
                    class="flex items-center justify-between mb-8 border-b border-gray-200 pb-4"
                >
                    <h3
                        class="text-2xl font-black uppercase text-gray-900 tracking-wider"
                    >
                        Featured <span class="text-red-600">Videos</span>
                    </h3>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    <div
                        v-for="(video, index) in formattedVideos"
                        :key="'vid-' + index"
                        @click="openLightbox(video)"
                        class="group relative overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 bg-gray-100 aspect-video"
                    >
                        <img
                            :src="video.thumbnail"
                            :alt="video.title"
                            class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />

                        <div
                            class="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center"
                        >
                            <div
                                class="w-16 h-16 bg-red-600/90 backdrop-blur-sm rounded-full flex items-center justify-center pl-1.5 shadow-[0_0_20px_rgba(220,38,38,0.5)] transform group-hover:scale-110 transition-transform duration-300"
                            >
                                <svg
                                    class="w-8 h-8 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>

                        <div
                            class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent"
                        >
                            <p
                                class="text-white font-bold tracking-wider text-sm md:text-base drop-shadow-md"
                            >
                                {{ video.title }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div
                    class="flex flex-col sm:flex-row justify-between items-center mb-8 border-b border-gray-200 pb-4 gap-4"
                >
                    <h3
                        class="text-2xl font-black uppercase text-gray-900 tracking-wider"
                    >
                        Photo <span class="text-red-600">Moments</span>
                    </h3>

                    <div class="flex flex-wrap justify-center gap-2">
                        <button
                            v-for="category in categories"
                            :key="category"
                            @click="activeFilter = category"
                            class="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300"
                            :class="
                                activeFilter === category
                                    ? 'bg-black text-white shadow-md'
                                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900'
                            "
                        >
                            {{ category }}
                        </button>
                    </div>
                </div>

                <div
                    class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
                >
                    <div
                        v-for="(photo, index) in filteredPhotos"
                        :key="'photo-' + index"
                        @click="openLightbox(photo)"
                        class="group relative overflow-hidden rounded-lg cursor-pointer break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-500 bg-gray-100"
                    >
                        <img
                            :src="photo.src"
                            :alt="photo.title"
                            class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                        />

                        <div
                            class="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100"
                        >
                            <div
                                class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
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
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                    ></path>
                                </svg>
                            </div>
                            <p
                                class="text-white font-bold tracking-wider uppercase text-center text-sm px-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75"
                            >
                                {{ photo.title }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <transition name="fade">
            <div
                v-if="selectedItem"
                class="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
            >
                <button
                    @click="closeLightbox"
                    class="absolute top-6 right-6 md:top-10 md:right-10 text-gray-400 hover:text-white transition-colors bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 z-50"
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

                <div
                    class="relative max-w-5xl w-full max-h-full flex flex-col items-center justify-center"
                >
                    <div
                        v-if="selectedItem.type === 'video'"
                        class="w-full aspect-video rounded-lg overflow-hidden shadow-2xl bg-black border border-gray-800"
                    >
                        <iframe
                            :src="selectedItem.embedUrl"
                            class="w-full h-full border-0"
                            allow="
                                accelerometer;
                                autoplay;
                                clipboard-write;
                                encrypted-media;
                                gyroscope;
                                picture-in-picture;
                            "
                            allowfullscreen
                        >
                        </iframe>
                    </div>

                    <img
                        v-else
                        :src="selectedItem.src"
                        :alt="selectedItem.title"
                        class="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl"
                    />

                    <div class="mt-6 text-center">
                        <p
                            class="text-white font-bold text-lg md:text-xl tracking-widest uppercase"
                        >
                            {{ selectedItem.title }}
                        </p>
                    </div>
                </div>
            </div>
        </transition>
    </section>
</template>

<script setup>
import { ref, computed } from "vue";

// --- BAGIAN VIDEO YOUTUBE ---
// Anda HANYA PERLU menaruh link youtube biasa (watch?v=) atau (youtu.be) di sini.
const rawVideos = [
    {
        title: "Konser Dangdut Full Spesial",
        url: "https://youtu.be/I1QzqrNyxx8?si=cTTHEhNMOZ8o-Plx",
    },
    {
        title: "Aftermovie Wedding Platinum",
        url: "https://youtu.be/ENOREXWFtBE?si=GvNCLOQ54menpK7N",
    },
    {
        title: "Pentas Seni SMAN 1",
        url: "https://youtu.be/6CWYvvjIiIw?si=9jnYqhxfWkpWsl9G",
    },
];

// Fungsi pintar pembuat Thumbnail & Embed URL otomatis dari link YouTube
const formattedVideos = computed(() => {
    return rawVideos.map((video) => {
        // Ekstrak ID Video YouTube dari berbagai format link
        const regExp =
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = video.url.match(regExp);
        const videoId = match && match[2].length === 11 ? match[2] : null;

        return {
            ...video,
            type: "video",
            // maxresdefault adalah kualitas thumbnail tertinggi (HD) di YouTube
            thumbnail: videoId
                ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
                : "",
            embedUrl: videoId
                ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
                : "",
        };
    });
});

// --- BAGIAN PHOTO GALLERY ---
const categories = ["All", "Wedding", "Music", "Event"];
const activeFilter = ref("All");

// Data Foto-foto
const photos = [
    {
        type: "image",
        category: "Wedding",
        title: "Akad Nikah Outdoor",
        src: "/img/gallery/actor4.jpg",
    },
    {
        type: "image",
        category: "Event",
        title: "Gala Dinner Corporate",
        src: "/img/gallery/actor3.jpg",
    },
    {
        type: "image",
        category: "Music",
        title: "Band Ambyar Stage",
        src: "/img/gallery/actor2.jpg",
    },
    {
        type: "image",
        category: "Wedding",
        title: "Pelaminan Platinum",
        src: "/img/gallery/elvi.jpg",
    },
    {
        type: "image",
        category: "Music",
        title: "Setup Organ Tunggal",
        src: "/img/gallery/gian.jpg",
    },
    {
        type: "image",
        category: "Event",
        title: "Festival Pensi",
        src: "/img/gallery/tenda_2.jpg",
    },
    {
        type: "image",
        category: "Wedding",
        title: "Detail Dekorasi Gold",
        src: "/img/gallery/tenda_3.jpg",
    },
    {
        type: "image",
        category: "Event",
        title: "Gathering Karyawan",
        src: "/img/gallery/tenda_4.jpg",
    },
];

const filteredPhotos = computed(() => {
    if (activeFilter.value === "All") return photos;
    return photos.filter((photo) => photo.category === activeFilter.value);
});

// --- LIGHTBOX STATE ---
const selectedItem = ref(null);

const openLightbox = (item) => {
    selectedItem.value = item;
    document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
    selectedItem.value = null;
    document.body.style.overflow = "";
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
