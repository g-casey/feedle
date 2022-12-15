<script>
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import Navbar from './Navbar.svelte';
</script>
<Navbar />
<div class="mt-[96px]">
<slot/>
</div>
