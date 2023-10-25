<template>
  <main class="text-white w-full max-w-[1200px] px-5 mx-auto">
    <section class="flex flex-row justify-between w-full items-center mt-10">
      <div class="w-full">
        <h1 class="text-5xl font-medium font-firaCode">
          Hi,I'm <strong class="text-lightBlue">David</strong> 👋
        </h1>
        <p class="text-2xl mt-5">
          I'm a
          <!-- <span class="text-lightBlue">Computer Science</span> student and -->
          software developer based in Nigeria.
        </p>
      </div>
      <div class="w-full flex items-center justify-end">
        <img
          src="/img/pixel-david.jpg"
          alt="David"
          class="rounded-full w-60 h-60 bg-green-500"
        />
      </div>
    </section>
    <section class="projects mt-10">
      <h3 class="font-semibold text-3xl">Projects</h3>
      <div class="projects">
        <projectCard />
      </div>
    </section>
    <section class="tools mt-10">
      <h3 class="font-semibold text-3xl">Tools</h3>
      <p class="text-xl max-w-[600px] mt-3">
        My primary stack includes Typescript, Javascript and sometimes Go (i
        wont say i'm proficient in it tho). I've compiled a list of the
        languages and tools I've either used in the past or continue to use,
        which you can find down.
      </p>
    </section>
  </main>
</template>
<script setup>
import { computed, onMounted } from "vue";
import projectCard from "@/components/projectCard.vue";
import projects from "@/data/projects.json";

const toolsInUse = computed(() => {
  return projects?.inUse ?? [];
}).value;

const toolsInLearning = computed(() => {
  return projects?.currentlyLearning ?? [];
}).value;

// computed data using vue-3 syntax
</script>
<style lang="scss"></style>
