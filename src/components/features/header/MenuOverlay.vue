<script setup lang="ts">
import type { Link } from '../../../interfaces/links';



defineProps<{
    isMenuOpen: boolean;
    links: Link[];
}>();

defineEmits(["closeMenu"]);
</script>

<template>
    <transition enter-active-class="transition transform ease-out duration-300"
        enter-from-class="opacity-0 -translate-y-full" enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition transform ease-in duration-200" leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-full">
        <div v-if="isMenuOpen"
            class="fixed inset-0 z-20 bg-bluehead text-white flex flex-col items-center justify-center space-y-6 p-6">
            <a v-for="link in links" :key="link.href" :href="link.href" class="text-sm font-condensed hover:underline">
                {{ link.label }}
            </a>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 48 48">
                <g fill="none" stroke-linejoin="round" stroke-width="4">
                    <path fill="#2f88ff" stroke="#000"
                        d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z" />
                    <path stroke="#fff" stroke-linecap="round"
                        d="M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431" />
                    <path stroke="#000" stroke-linecap="round" d="M33.2216 33.2217L41.7069 41.707" />
                </g>
            </svg>
            <button class="absolute top-4 right-4 p-2 focus:outline-none" aria-label="Close menu"
                @click="$emit('closeMenu')">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </transition>
</template>
