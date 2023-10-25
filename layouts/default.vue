<template>
  <Header />
  <slot />
  <Footer />
</template>

<script>
import Footer from "@/components/footer.vue";
import Header from "@/components/header.vue";

export default {
  components: {
    Footer,
    Header,
  },
};
</script>
