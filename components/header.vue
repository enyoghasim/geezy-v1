<template>
  <header class="w-full sticky top-0 z-50">
    <div class="text-white bg-green-500 text-center w-full text-sm p-2">
      Open to Opportunities
    </div>
    <div
      class="w-full max-w-[1200px] px-5 py-5 mx-auto flex flex-row justify-start sm:justify-between items-center"
    >
      <a href="#" class="text-lightBlue sm:text-3xl text-xl font-semibold"
        ><span class="font-firaCode">&#60;</span>David<span
          class="font-firaCode"
          >/&#62;</span
        ></a
      >
      <nav class="sm:block hidden">
        <ul class="flex flex-row items-center gap-4">
          <li>
            <a class="text-white font-medium text-xl">Projects</a>
          </li>
          <li>
            <a class="text-white font-medium text-xl">Tools</a>
          </li>
          <li>
            <a class="text-white font-medium text-xl">Experiences</a>
          </li>
        </ul>
      </nav>
      <a
        :href="mailTo"
        class="font-medium text-xl text-lightBlue border-lightBlue border rounded-md px-4 py-2 sm:block hidden"
        >Say Hello 👋</a
      >
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue";

const mailTo = computed(() => {
  return `mailto:${process.env.MY_EMAIL ?? ""}`;
}).value;
</script>
