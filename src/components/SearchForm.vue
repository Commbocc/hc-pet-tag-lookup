<script setup lang="ts">
import { fetchPets, input } from "../lib";

if (import.meta.env.DEV) input.value = "123456";
</script>

<template>
  <h1>Pet Tag Lookup Tool</h1>

  <form @submit.prevent="fetchPets">
    <div class="input-group">
      <div class="input-group input-group-lg">
        <input
          v-model="input"
          class="form-control"
          placeholder="License or Microchip number..."
          minlength="6"
          required
          aria-label="License or Microchip number"
          aria-describedby="submitButton"
        />

        <button
          id="submitButton"
          class="btn btn-outline-secondary"
          type="submit"
        >
          Search
        </button>
      </div>
    </div>
  </form>
</template>
