import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';

declare let self: ServiceWorkerGlobalScope;

self.addEventListener('message', (event) => {
	if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

precacheAndRoute(self.__WB_MANIFEST);

// Cache blog posts
registerRoute(
	({ url }) => url.pathname.startsWith('/blog/'),
	new CacheFirst({
		cacheName: 'blog-posts'
	})
);
