import { relayPool } from 'nostr-tools';
import type { Event } from 'nostr-tools/index';
import { identity } from 'svelte/internal';
import { get } from 'svelte/store';
import { posts, type Post } from './posts';
import { users } from './users';


function handleMetaData(event: Event, relay: string) {
	const data = JSON.parse(event.content);
	users.push({
		name: data.name,
		id: event.pubkey,
		profilePic: data.picture,
		about: data.about,
		relay
	});
}

function handlePost(event: Event, relay: string) {
	const postUser = get(users).find(user => user.id == event.pubkey);

	const previousEvent = event.tags.find(tag => tag.includes("e"));
	let originalPost: Post | undefined;

	if(previousEvent) {
		const originalPostId = previousEvent[1];
		originalPost = get(posts)
			.find(post => post.id === originalPostId);
	}	

	posts.push({
			content: event.content,
			created_at: new Date(event.created_at * 1000),
			id: event.id,
			creatorId: event.pubkey,
			sig: event.sig,
			relay,
			user: postUser,
			previousPosts: originalPost ? [originalPost] : []
		});
	
		console.log(get(posts).filter(post => post.previousPosts.length > 0));
}

export function initNostr() {
	const pool = relayPool();

	pool.addRelay('wss://nostr.onsats.org', { read: true, write: true });
	pool.addRelay('wss://nostr-relay.wlvs.space', { read: true, write: true });
	pool.addRelay('wss://relayer.fiatjaf.com', { read: true, write: true });
	pool.addRelay('wss://expensive-relay.fiatjaf.com', { read: true, write: false });
	pool.addRelay('wss://nostr-pub.wellorder.net', { read: true, write: true });
	pool.addRelay(' wss://rsslay.fiatjaf.com', { read: true, write: false });

	const processPost = (event: Event, relay: string) => {
		switch(event.kind) {
			case 0: 
				handleMetaData(event, relay);
			break; 
			case 1: 
				handlePost(event, relay);
		}
};
	try {
		pool.sub({
			cb: processPost,
			filter: {
				kinds: [0, 1],
				limit: 100
			}
		});
	} catch (e) {
		console.log(e);
	}
}
