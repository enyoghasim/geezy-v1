<template>
  <div class="flex flex-col">
    <div
      class="border-white border-[3px] w-full h-full drop-shadow-light-blue relative overflow-hidden group"
    >
      <div
        class="absolute w-full h-full top-0 bottom-0 left-0 right-0 bg-[#00000094] z-10 sm:translate-y-full sm:opacity-0 sm:group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out flex items-center justify-center"
      >
        <a
          class="border-white drop-shadow border p-3"
          :href="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span> Visit Site </span>
        </a>
      </div>
      <img
        :src="imageUrl ?? '/img/pixel-david.jpg'"
        alt="David"
        class="w-full h-full object-cover relative"
      />
    </div>
    <div class="py-5">
      <h5
        class="font-spaceGrotesk font-medium sm:text-[32px] sm:leading-[40px] text-lg"
      >
        {{ name }}
      </h5>
      <p
        class="font-spaceGrotesk text-[#D6D5D5] sm:text-[22px] sm:leading-[28.07px] text-sm"
      >
        Creative portfolio website for maurice
      </p>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script setup lang="ts">
defineProps({
  imageUrl: String,
  name: String,
  link: String,
});
</script>
