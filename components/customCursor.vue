<template>
  <div
    class="rounded-full out firstCursor pointer-events-none fixed z-50 w-10 h-10 left-0 top-0 bg-transparent border border-[#20c55e] lg:block hidden"
  ></div>
  <div
    class="rounded-full out secondCursor bg-lightBlue pointer-events-none fixed z-50 w-4 h-4 opacity-30 lg:block hidden"
  ></div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  let cursor = document.querySelector(".firstCursor");
  let cursorinner = document.querySelector(".secondCursor");

  document.addEventListener("mousemove", function (e) {
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
  });

  document.addEventListener("mousemove", function (e) {
    let x = e.clientX;
    let y = e.clientY;
    cursorinner.style.left = x + "px";
    cursorinner.style.top = y + "px";
  });

  document.addEventListener("mousedown", function () {
    cursorinner.classList.add("cursorinnerhover");
  });

  document.addEventListener("mouseup", function () {
    cursorinner.classList.remove("cursorinnerhover");
  });

  document.addEventListener("mouseleave", function () {
    cursor.classList.add("out");
    cursorinner.classList.add("out");
  });

  document.addEventListener("mouseenter", function () {
    cursor.classList.remove("out");
    cursorinner.classList.remove("out");
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
