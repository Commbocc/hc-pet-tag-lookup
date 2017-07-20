<template>
	<form @submit.prevent="searchPets">
		<div class="form-group">

			<div class="input-group input-group-lg">
				<input v-model="$store.state.pets.searchTerm" class="form-control" :placeholder="$store.state.pets.inputPlaceholder" :pattern="validationPattern" required>
				<span class="input-group-btn">
					<button class="btn btn-default" type="submit">Search</button>
				</span>
			</div>

		</div>
	</form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'search-form',
	data () {
		return {
			minChar: 6,
			maxChar: ''
		}
	},
	computed: {
		validationPattern () {
			return `.{${this.minChar},${this.maxChar}}`
		}
	},
	methods: mapActions([
		'searchPets'
	])
}
</script>
