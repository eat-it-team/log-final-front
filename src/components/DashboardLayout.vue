<template>
  <div class="flex h-screen bg-gray-200 font-roboto">

    <div class="flex-1 flex flex-col">
      <Header />

      <main class="flex-1  bg-gray-200">
        <div class="container mx-auto mt-10 px-6 py-8 text-gray-800 ">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./Header.vue";
</script>
