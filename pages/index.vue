<template>
  <main class="text-white w-full max-w-[1200px] px-5 mx-auto">
    <section
      class="flex sm:flex-row flex-col-reverse justify-between w-full items-center sm:mt-10 mt-4"
    >
      <div class="w-full sm:mt-0 mt-5">
        <h1 class="sm:text-5xl text-2xl font-medium font-firaCode">
          Hi,I'm <strong class="text-lightBlue">David</strong> 👋
        </h1>
        <p class="sm:text-2xl text-lg sm:mt-5 mt-3">
          I'm a
          <!-- <span class="text-lightBlue">Computer Science</span> student and -->
          software developer based in Nigeria.
        </p>
      </div>
      <div class="w-full flex items-center sm:justify-end justify-center">
        <img
          src="/img/pixel-david.jpg"
          alt="David"
          class="rounded-full w-60 h-60 bg-green-500"
        />
      </div>
    </section>
    <section class="projects mt-10">
      <h3 class="font-semibold sm:text-3xl text-2xl">Projects</h3>
      <div class="projects">
        <project-card />
      </div>
    </section>
    <section class="tools mt-10">
      <h3 class="font-semibold sm:text-3xl text-2xl">Tools</h3>
      <p class="sm:text-xl text-base max-w-[600px] mt-3">
        My primary stack includes Typescript, Javascript and sometimes Go (i
        wont say i'm proficient in it tho). I've compiled a list of the
        languages and tools I've either used in the past or continue to use,
        which you can find down.
      </p>
    </section>
    <div class="w-full text-center my-10">
      <h4 class="font-bold sm:text-3xl text-2xl">
        Over <span class="text-lightBlue">the years</span>
      </h4>
      <p class="max-w-2xl mx-auto sm:text-xl text-base">
        I've frequently engaged in experimentation and bringing to life my
        random imaginations. Regrettably, many of these endeavors remain
        concealed within my private GitHub, with some ultimately evolving into
        unsuccessful projects.
      </p>
    </div>
    <section class="experiences mt-14">
      <h3 class="font-semibold sm:text-3xl text-2xl">Experiences</h3>
      <div
        class="experiences-card flex overflow-auto flex-row mt-4 gap-5 items-stretch justify-stretch"
      >
        <!-- <div
          v-for="experience in experiences"
          :key="experience.organization"
          class="max-w-[410px] h-full"
        > -->
        <experience-card
          v-for="experience in experiences"
          :key="experience.organization"
          :role="experience.role"
          :organization="experience.organization"
          :description="experience.description"
        />
        <!-- </div> -->
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import { computed } from "vue";
import ProjectCard from "@/components/ProjectCard.vue";
import ExperienceCard from "@/components/ExperienceCard.vue";
import tools from "@/data/tools.json";
import experiences from "@/data/experiences.json";

const toolsInUse = computed(() => {
  return tools?.inUse ?? [];
}).value;

const toolsInLearning = computed(() => {
  return tools?.currentlyLearning ?? [];
}).value;

// computed data using vue-3 syntax
</script>
<style lang="scss"></style>
