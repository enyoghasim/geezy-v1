<template>
  <div
    class="bg-white border-[7px] border-lightBlue flex flex-col w-full p-5 relative"
  >
    <div
      class="flex flex-row bg-inherit text-[#1E1E1E] sm:text-lg text-base items-center"
    >
      {{ role }}
      &nbsp;-&nbsp;
      <span
        class="bg-inherit sm:leading-[28.38px] sm:text-[22.24px] text-lg font-medium"
      >
        {{ organization }}
      </span>
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
