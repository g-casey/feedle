<script lang="ts">
    import AppBar from "@skeletonlabs/skeleton/components/AppBar/AppBar.svelte";
    import { Avatar } from "@skeletonlabs/skeleton";
</script>

<nav class="z-50 fixed w-full top-0">
<AppBar padding="px-4 py-2">
	<svelte:fragment slot="lead">
        <h3 class="text-2xl font-semibold">Feedle</h3>
    </svelte:fragment>
	<svelte:fragment slot="trail">
    <Avatar src="https://i.pravatar.cc/" />
    </svelte:fragment>
</AppBar>
</nav>