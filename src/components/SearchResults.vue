<script setup lang="ts">
import { pets } from "../lib";
</script>

<template>
  <section>
    <div v-if="pets.loading" class="d-flex justify-content-center mt-3">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-else-if="pets.data?.length" class="mt-3">
      <div class="accordion" id="accordion">
        <!--  -->
        <div v-for="(animal, index) in pets.data" class="accordion-item">
          <h2 class="accordion-header" :id="`heading${index}`">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#collapse${index}`"
              :aria-controls="`collapse${index}`"
            >
              <strong class="text-nowrap">
                {{ animal.name }}
              </strong>

              &nbsp;

              <small class="text-truncate">
                {{ animal.type }} - {{ animal.color }} {{ animal.breed }}
              </small>
            </button>
          </h2>
          <div
            :id="`collapse${index}`"
            class="accordion-collapse collapse"
            :aria-labelledby="`heading${index}`"
            data-bs-parent="#accordion"
          >
            <div class="accordion-body">
              <dl>
                <template v-if="animal.owner.name">
                  <dt>Owner(s)</dt>
                  <dd>{{ animal.owner.name }}</dd>
                </template>

                <template v-if="animal.owner.phone">
                  <dt>Contact</dt>
                  <dd>
                    {{ animal.owner.phone }}
                  </dd>
                </template>

                <template v-if="animal.microchip">
                  <dt>Microchip</dt>
                  <dd>{{ animal.microchip }}</dd>
                </template>

                <dt>License</dt>
                <dd>{{ animal.license.number }}</dd>

                <dt>License Expiration</dt>
                <dd>{{ animal.license.expiration.toLocaleDateString() }}</dd>

                <dt>Vaccine Expiration</dt>
                <dd>{{ animal.vaccine.expiration.toLocaleDateString() }}</dd>
              </dl>
            </div>
          </div>
        </div>
        <!--  -->
      </div>
    </div>

    <div v-else-if="pets.data !== null" class="mt-3">
      <p class="h2 text-center">No Results</p>
    </div>
  </section>
</template>
