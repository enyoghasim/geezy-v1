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

    <section class="tools mt-10">
      <h3 class="font-semibold sm:text-3xl text-2xl">Tools</h3>
      <p class="sm:text-xl text-base max-w-[600px] mt-3">
        My main stacks includes Typescript, Javascript and sometimes Go (I wont
        say i'm proficient in it tho). I've compiled a list of the relevant
        languages and tools I've either used in the past or continue to use,
        which you can find below.
      </p>

      <div class="flex flex-row gap-5 mt-3 flex-wrap">
        <tool-card v-for="tool in toolsInUse" :name="tool.name" />
      </div>
      <div class="mt-3">
        <p class="sm:text-xl text-base max-w-[600px]">
          Other things I am currently learning/trying to get the hang of
        </p>
        <div class="flex flex-row gap-5 mt-3 flex-wrap">
          <tool-card v-for="tool in toolsInLearning" :name="tool.name" />
        </div>
      </div>
    </section>
    <section class="projects mt-10">
      <h3 class="font-semibold sm:text-3xl text-2xl mb-4">Projects</h3>
      <div
        class="projects flex flex-row sm:justify-between justify-center flex-wrap sm:[&>*:nth-child(even)]:mt-[5rem] gap-2"
      >
        <div
          v-for="project in projects"
          :key="project.name"
          class="sm:w-[45%] w-full"
        >
          <project-card
            :image-url="project.imageUrl"
            :name="project.name"
            :link="project.link"
          />
        </div>
      </div>
    </section>

    <section class="experiences mt-14">
      <h3 class="font-semibold sm:text-3xl text-2xl">Experiences</h3>
      <div
        class="experiences-card flex overflow-auto flex-row mt-4 gap-5 items-stretch justify-stretch py-[10px]"
      >
        <!-- <div 
          v-for="experience in experiences"
          :key="experience.organization"
          class="max-w-[410px] h-full g"
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
    <section class="my-10 max-w-3xl">
      <h6 class="font-semibold sm:text-xl text-base">
        Do you have a project in mind? Let's talk.
      </h6>
      <p class="sm:text-xl text-base text-[#D6D5D5]">
        I can help you build your next dream product from ground up, or help you
        scale your existing product/project. Feel free to
        <a
          :href="meetingLink"
          target="_blank"
          rel="noopener noreferrer"
          class="text-green-500"
          >schedule a quick call</a
        >
        with me or send me an email at
        <a class="text-green-500" :href="mailTo">{{ myEmail }}</a> if you'd like
        to learn more
      </p>
    </section>
  </main>
</template>
<script setup lang="ts">
import { computed } from "vue";
import ProjectCard from "@/components/ProjectCard.vue";
import ExperienceCard from "@/components/ExperienceCard.vue";
import ToolCard from "@/components/ToolCard.vue";
import tools from "@/data/tools.json";
import experiences from "@/data/experiences.json";
import projects from "@/data/projects.json";

const toolsInUse = computed(() => {
  return tools?.inUse ?? [];
}).value;

const myEmail = computed(() => {
  return process.env.MY_EMAIL ?? "";
}).value;

const meetingLink = computed(() => {
  return process.env.SCHEDULE_MEETING_URL ?? "";
}).value;

const toolsInLearning = computed(() => {
  return tools?.currentlyLearning ?? [];
}).value;

const mailTo = computed(() => {
  return `mailto:${process.env.MY_EMAIL ?? ""}`;
}).value;
</script>
<style lang="scss"></style>
