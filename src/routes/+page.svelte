<script lang="ts">
	import { initNostr } from "$lib/nostr";
	import { posts } from "$lib/posts";
	import { onMount } from "svelte";
	import Feed from "./Feed.svelte";


	onMount(() =>{
		initNostr();
	})

</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<Feed posts={$posts}/>
</div>
