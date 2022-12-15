import type { Event } from 'nostr-tools';
import { writable } from 'svelte/store';

export type User = Readonly<{
    name: string, 
    about?: string,
    id: string, 
    profilePic?: string,
    relay: string
}>


function createUsers() {
	const { subscribe, set, update } = writable<User[]>([]);

	return {
		subscribe,
		push: (newUser: User) => update((users) => [...users, newUser])
	};
}

export const users = createUsers();

