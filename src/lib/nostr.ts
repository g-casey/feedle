import { relayPool } from 'nostr-tools';
import type Event from 'nostr-tools/index';
import { posts } from './posts';

export function initNostr(): any {
	const pool = relayPool();

	pool.addRelay('wss://nostr.onsats.org', { read: true, write: true });
	pool.addRelay('wss://nostr-relay.wlvs.space', { read: true, write: true });
	pool.addRelay('wss://relayer.fiatjaf.com', { read: true, write: true });
	pool.addRelay('wss://expensive-relay.fiatjaf.com', { read: true, write: false });
	pool.addRelay('wss://nostr-pub.wellorder.net', { read: true, write: true });
	pool.addRelay(' wss://rsslay.fiatjaf.com', { read: true, write: false });

	const processPost = (event: Event, relay: string) => {
		console.log(event, relay);
		posts.push({
			event,
			relay
		});
	};
	try {
		const subscription = pool.sub({
			cb: processPost,
			filter: {
				kinds: [1],
				limit: 100
			}
		});
	} catch (e) {
		console.log(e);
	}
}
