<script setup lang="ts">

import { nextTick, ref, type Ref } from 'vue';
import type { Nosotros } from '@interfaces/nosotros';

defineProps<{
    nosotros: Nosotros[]
}>()

const expanded: Ref<number | null> = ref(null)
const sections: Ref<(HTMLElement | null)[]> = ref([])

const toggleSection = (index: number) => {
    expanded.value = expanded.value === index ? null : index;
    if (expanded.value === index) {
        nextTick(() => {
            const section = sections.value[index]
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        })
    }

}


</script>

<template>
    <div>
        <div v-for="(us, index) in nosotros" :key="index" class="border border-gray-200 rounded-lg shadow-md mb-4">
            <button @click="toggleSection(index)"
                class="w-full text-left px-4 py-3 font-medium hover:bg-blue-100 hover:text-blue-900 focus:outline-none"
                :class="{
                    'bg-gray-100 text-gray-900': expanded !== index,
                    'bg-blue-100 text-blue-900': expanded === index
                }">
                <span>{{ us.heading }}</span>
            </button>
            <div v-show="expanded === index" class="px-4 py-3 bg-white" ref="sections">
                <p>{{ us.body }}</p>
                <ul v-if="us.points" class="list-disc pl-6">
                    <li v-for="(point, i) in us.points" :key="i">{{ point }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>


<style scoped>
button {
    transition: background-color 0.3s, color 0.3s;
}
</style>