<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { Post } from '$lib/posts';

	export let posts: Post[];
</script>

<div class="w-wull sm:w-1/2 -z-10 overflow-auto">
	{#each posts as post}
		<div class="card p-4 mb-4">
			<div class="flex mb-3 gap-3 items-center">
				{#if post.user?.profilePic}
					<Avatar src={post.user.profilePic} />
				{:else}
					<Avatar
						src={`https://www.colorbook.io/imagecreator.php?width=100&height=100&text=${post.creatorId}`}
					/>
				{/if}
				<span class="text-sm">
					{post.user?.name || post.creatorId?.substring(0, 10)}
				</span>
			</div>
			<span class="line-clamp-10">{post.content}</span>
		</div>
	{/each}
</div>
