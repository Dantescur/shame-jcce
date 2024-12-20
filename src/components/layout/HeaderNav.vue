<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import MobileMenu from "@components/features/header/MobileMenu.vue";
import logo from "@assets/images/logos/logo-jcce.png";
import type { Link } from "@interfaces/links";

const navLinks: Link[] = [
    { label: "HOME", href: "/" },
    { label: "¿QUIÉNES SOMOS?", href: "/nosotros" },
    { label: "SERVICIOS", href: "/servicios", hasChevroon: true },
    { label: "NOTICIAS", href: "/noticias" },
    { label: "ATENCIÓN", href: "/atencion" },
    { label: "TIENDA VIRTUAL", href: "/tienda" },
];

const scrolled = ref(false);
const sentinel = ref<HTMLElement | null>(null)

onMounted(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            scrolled.value = !entry.isIntersecting;
        },
        {
            root: null,
            threshold: 0.1
        }
    );
    if (sentinel.value) {
        observer.observe(sentinel.value)
    }

    onUnmounted(() => {
        observer.disconnect()
    })
});
</script>

<template>
    <div ref="sentinel" v-bind="$attrs" class="h-0"></div>

    <header :class="['sticky top-0 z-10 p-2 shadow-md transition-colors duration-300', { 'bg-bluestrong': scrolled }]"
        class="bg-bluehead">
        <div class="container flex items-center justify-between mx-auto max-w-screen-xl">
            <a href="/" class="flex-shrink-0">
                <img :src="logo.src" alt="Logo JCce" class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain" />
            </a>

            <nav class="hidden pl-7 md:flex items-center space-x-4 ml-auto">
                <a v-for="link in navLinks" :key="link.href" :href="link.href"
                    class="hover:underline flex items-center space-x-1">
                    <span class="font-sans text-sm text-center">{{ link.label }}</span>
                    <span v-if="link.hasChevroon" class="transition-transform group-hover:translate-x-1">
                        ▼
                    </span>
                </a>
            </nav>

            <div class="ml-4 cursor-pointer hidden md:flex">
                <svg xmlns=" http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48">
                    <g fill="none" stroke-linejoin="round" stroke-width="4">
                        <path fill="#2f88ff" stroke="#000"
                            d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z" />
                        <path stroke="#fff" stroke-linecap="round"
                            d="M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431" />
                        <path stroke="#000" stroke-linecap="round" d="M33.2216 33.2217L41.7069 41.707" />
                    </g>
                </svg>
            </div>

            <MobileMenu :links="navLinks" />
        </div>
    </header>
</template>
