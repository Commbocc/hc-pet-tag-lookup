<script setup lang="ts">
import SearchForm from "./components/SearchForm.vue";
import SearchResults from "./components/SearchResults.vue";

const containerClass = import.meta.env.DEV
  ? "py-5 container"
  : "container-fluid pt-4 pb-3";
</script>

<template>
  <article :class="containerClass">
    <SearchForm />
  </article>

  <SearchResults class="mt-3" />
</template>
