import { writable } from 'svelte/store';

function createPosts() {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		push: (newPost) => update((posts) => [...posts, newPost])
	};
}

export const posts = createPosts();
