<script setup lang="ts">
import { ref } from "vue";
import type { Link } from "@interfaces/links";
import MenuOverlay from "@components/features/header/MenuOverlay.vue";

defineProps<{
    links: Link[];
}>();

const isMenuOpen = ref(false);
</script>

<template>
    <nav>
        <button @click="isMenuOpen = !isMenuOpen" aria-label="Toggle menu" class="md:hidden p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>
        <MenuOverlay :isMenuOpen="isMenuOpen" :links="links" @closeMenu="isMenuOpen = false" />
    </nav>
</template>
