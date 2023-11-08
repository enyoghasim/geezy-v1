<template>
  <div
    class="flex flex-row items-center gap-1 hover:opacity-60 transition-all duration-500 ease-in-out"
  >
    <component :is="iconName" class="!w-[24px] !h-[24px]" />
    <span class="font-spaceGrotesk text-[#D6D5D5] text-base">
      {{ name }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const iconName = computed(() => {
  return `svgo-${props.name.toLowerCase()}`;
}).value;
</script>
