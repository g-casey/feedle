import type { Event } from 'nostr-tools';
import { writable } from 'svelte/store';
import type { User } from './users';

export type Post = Readonly<{
	content: string, 
	created_at: Date,
	id: string,
	creatorId?: string,
	sig: string,
	relay: string,
	user?: User,
	previousPosts: Post[]
}>;

function createPosts() {
	const { subscribe, set, update } = writable<Post[]>([]);

	return {
		subscribe,
		push: (newPost: Post) => update((posts) => [...posts, newPost])
	};
}

export const posts = createPosts();
