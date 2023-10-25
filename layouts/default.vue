<template>
  <CustomCursor />
  <Header />
  <slot />
  <Footer />
</template>

<script setup>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import CustomCursor from "@/components/customCursor.vue";
</script>
