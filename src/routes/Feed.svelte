<script lang="ts">
    export let posts;
</script>

<div class="w-1/2 -z-10 overflow-auto">
{#each posts as post}
<div class="card p-4 mb-4">
<span class="line-clamp-5">{post.event.content}</span>
</div>
{/each}
</div>



