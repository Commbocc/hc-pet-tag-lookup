<template>
	<div id="app">

		<!-- <details><pre>{{ $store.state }}</pre></details> -->

		<search-form></search-form>
		<search-results></search-results>

		<!-- <router-view></router-view> -->
	</div>
</template>

<script>
import SearchForm from '@/components/SearchForm'
import SearchResults from '@/components/SearchResults'

export default {
	name: 'app',
	components: {
		'search-form': SearchForm,
		'search-results': SearchResults
	}
}
</script>
