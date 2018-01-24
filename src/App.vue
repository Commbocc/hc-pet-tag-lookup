<template>
	<div id="app">

		<!-- <details open><pre>{{ $store.state }}</pre></details> -->

		<SearchForm/>
		<SearchResults/>

		<!-- <router-view></router-view> -->
	</div>
</template>

<script>
import SearchForm from '@/components/SearchForm'
import SearchResults from '@/components/SearchResults'

export default {
	name: 'app',
	components: {
		SearchForm,
		SearchResults
	}
}
</script>
