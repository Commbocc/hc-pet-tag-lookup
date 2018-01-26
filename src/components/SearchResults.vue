<template>
	<section>

		<div v-if="isLoading">
			<p class="h2 text-center">
				<i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> Loading...
			</p>
		</div>

		<div v-else-if="searchResults.length">

			<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

				<div v-for="(animal, index) in searchResults" class="panel panel-default">
					<div class="panel-heading" role="button" :id="`heading${index}`" data-toggle="collapse" data-parent="#accordion" :href="`#collapse${index}`" aria-expanded="false" :aria-controls="`collapse${index}`">
						<span class="glyphicon glyphicon-info-sign pull-right"></span>
						<h4 class="panel-title">
							{{ animal.name }}
							<small>
								{{ animal.type }} -
								{{ animal.color }} {{ animal.breed }}
							</small>
						</h4>
					</div>

					<div :id="`collapse${index}`" class="panel-collapse collapse" role="tabpanel" :aria-labelledby="`heading${index}`">
						<div class="panel-body">
							<dl class="dl-horizontal">
								<dt>Owner(s)</dt>
								<dd>{{ animal.owner.name }}</dd>

								<dt>Contact</dt>
								<dd>
									<a :href="animal.owner.phone.link">
										{{ animal.owner.phone.number }}
									</a>
								</dd>

								<dt>Microchip</dt>
								<dd>{{ animal.microchip }}</dd>

								<dt>License</dt>
								<dd>{{ animal.license.number }}</dd>

								<dt>Status</dt>
								<dd>{{ animal.license.status }}</dd>

								<dt>License Expiration</dt>
								<dd>{{ animal.license.expiration }}</dd>

								<dt>Vaccine Expiration</dt>
								<dd>{{ animal.vaccine.expiration }}</dd>

							</dl>
						</div>
					</div>
				</div>

			</div>

		</div>

		<div v-else-if="hasSearched">
			<p class="h2 text-center">
				No Results
			</p>
		</div>

	</section>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'search-results',
	computed: mapState({
		isLoading: state => state.pets.isLoadingResults,
		searchResults: state => state.pets.searchResults,
		hasSearched: state => state.pets.hasSearched
	})
}
</script>

<style scoped>
td {
	/*vertical-align: top;*/
}
</style>
