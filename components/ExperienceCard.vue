<template>
  <div
    class="bg-white border-[7px] border-lightBlue flex flex-col w-full h-full p-5"
  >
    <div
      class="flex flex-row bg-inherit text-[#1E1E1E] sm:text-lg text-base items-center"
    >
      <span class="bg-inherit sm:leading-[28.38px] sm:text-[22.24px] text-lg">
        {{ organization }}
      </span>
      &nbsp;-&nbsp;
      {{ role }}
    </div>
    <p class="mt-5 text-[#808080] bg-inherit sm:text-base text-sm">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  role: String,
  organization: String,
  description: String,
});
</script>
