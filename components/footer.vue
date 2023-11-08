<template>
  <footer class="text-white">
    <div
      class="w-full max-w-[1200px] px-5 py-5 mx-auto flex flex-col items-center justify-center border-[#FFFFFF4D] border-t mt-5"
    >
      <nav>
        <ul class="flex flex-row items-center sm:gap-4 gap-2">
          <li v-for="socialItem in socials">
            <a
              class="text-white font-medium sm:text-xl text-base"
              :key="socialItem.link"
              :href="socialItem.link"
              target="_blank"
              rel="noopener noreferrer"
              >{{ socialItem.name }}</a
            >
          </li>
        </ul>
      </nav>
      <div class="flex flex-col items-center font-medium sm:text-base text-sm">
        <p class="mt-5">Made with ❤️ by David.</p>
        <p class="text-center">
          Designed by
          <a
            href="https://twitter.com/einstein_nnamah"
            target="_blank"
            rel="noopener noreferrer"
            >@einstein_nnamah</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import socials from "../data/socials.json";
</script>
