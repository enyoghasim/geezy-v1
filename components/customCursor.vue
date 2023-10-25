<template>
  <div
    class="rounded-full out firstCursor pointer-events-none fixed z-50 w-10 h-10 left-0 top-0 bg-transparent border border-[#20c55e] lg:block hidden"
  ></div>
  <div
    class="rounded-full out secondCursor bg-lightBlue pointer-events-none fixed z-50 w-4 h-4 opacity-30 lg:block hidden"
  ></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  let cursor = document.querySelector<HTMLElement>(".firstCursor")!;
  let cursorInner = document.querySelector<HTMLElement>(".secondCursor")!;

  if (!cursor || !cursorInner) return;

  document.addEventListener("mousemove", (e: MouseEvent) => {
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
  });

  document.addEventListener("mousemove", (e: MouseEvent) => {
    let x = e.clientX;
    let y = e.clientY;
    cursorInner.style.left = x + "px";
    cursorInner.style.top = y + "px";
  });

  document.addEventListener("mousedown", () => {
    cursorInner.classList.add("cursorinnerhover");
  });

  document.addEventListener("mouseup", () => {
    cursorInner.classList.remove("cursorinnerhover");
  });

  document.addEventListener("mouseleave", () => {
    cursor.classList.add("out");
    cursorInner.classList.add("out");
  });

  document.addEventListener("mouseenter", () => {
    cursor.classList.remove("out");
    cursorInner.classList.remove("out");
  });
});
</script>

<style lang="scss">
.firstCursor {
  transition: all 200ms ease-out;
  transform: translate(calc(-50% + 15px), -50%);
  &.out {
    opacity: 0;
  }
}
.secondCursor {
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s, opacity 0.3s;

  &.out {
    opacity: 0;
  }
}
.cursorinnerhover {
  width: 50px;
  height: 50px;
  opacity: 0.5;
  z-index: 9999;

  &.out {
    opacity: 0;
  }
}
</style>
