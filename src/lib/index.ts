import { computed, reactive, ref, watch } from "vue";
import Animal from "./models/animal";
import { IPetsReactive } from "./types";

const PETS_API_ENDPOINT =
  "https://app.hillsboroughcounty.org/PetTagSearch/api/Animals";

export const input = ref<string>("");

watch(input, () => {
  pets.data = null;
});

const url = computed(() => `${PETS_API_ENDPOINT}/${input.value}`);

export const pets = reactive<IPetsReactive>({
  loading: false,
  error: "",
  data: null,
});

export async function fetchPets(): Promise<void> {
  if (!input.value) return;
  pets.loading = true;
  try {
    const data = await fetch(url.value).then((r) => r.json());
    pets.data = data.map((x: any) => new Animal(x));
  } catch (error) {
    pets.error = "An error occurred";
    console.warn(error);
  } finally {
    pets.loading = false;
  }
}
