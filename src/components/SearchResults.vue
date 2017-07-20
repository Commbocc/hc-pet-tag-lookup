<template>
	<section>

		<div v-if="$store.state.pets.isLoadingResults">
			<p class="h2 text-center">
				<i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> Loading...
			</p>
		</div>

		<div v-else-if="$store.state.pets.searchResults && $store.state.pets.searchResults.length">

			<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

				<div v-for="(animal, index) in $store.state.pets.searchResults" class="panel panel-default">
					<div class="panel-heading" role="button" :id="`heading${index}`" data-toggle="collapse" data-parent="#accordion" :href="`#collapse${index}`" aria-expanded="false" :aria-controls="`collapse${index}`">
						<span class="glyphicon glyphicon-info-sign pull-right"></span>
						<h4 class="panel-title">
							{{ animal.PetName }}
							<small>
								{{ animal.PetType }} -
								{{ animal.Color }} {{ animal.Breed }}
							</small>
						</h4>
					</div>

					<div :id="`collapse${index}`" class="panel-collapse collapse" role="tabpanel" :aria-labelledby="`heading${index}`">
						<div class="panel-body">
							<dl class="dl-horizontal">
								<dt>Owner(s)</dt>
								<dd>{{ animal.OwnerName }}</dd>

								<dt>Contact</dt>
								<dd>
									<a :href="`tel:${formatPhone(animal.Phone, false)}`">
										{{ formatPhone(animal.Phone) }}
									</a>
								</dd>

								<dt>Microchip</dt>
								<dd>{{ animal.tattoo }}</dd>

								<dt>License</dt>
								<dd>{{ animal.TagNumber }}</dd>

								<dt>License Expiration</dt>
								<dd>{{ formatDate(animal.TagExpDate) }}</dd>

								<dt>Vaccine Expiration</dt>
								<dd>{{ formatDate(animal.VacExpDate) }}</dd>
							</dl>
						</div>
					</div>
				</div>

			</div>

		</div>

		<div v-else-if="$store.state.pets.hasSearched">
			<p class="h2 text-center">
				No Results
			</p>
		</div>

	</section>
</template>

<script>
export default {
	name: 'search-results',
	methods: {
		formatDate (date) {
			if (date) {
				var d = new Date(date)
				return d.toLocaleDateString('en-US', {})
			} else {
				return null
			}
		},
		formatPhone (phone, addParenthesis=true) {
			var stripped = phone.replace(/\D+/g, '')

			if (stripped.length === 10 && addParenthesis) {
				return stripped.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
			} else {
				return stripped
			}
		}
	}
}
</script>

<style scoped>
td {
	/*vertical-align: top;*/
}
</style>
