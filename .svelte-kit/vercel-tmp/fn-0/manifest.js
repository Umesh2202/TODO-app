export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","ss1.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-6b6892a2.js","imports":["_app/immutable/start-6b6892a2.js","_app/immutable/chunks/index-89b8a16b.js","_app/immutable/chunks/singletons-353a9dcb.js","_app/immutable/chunks/index-5d1507dc.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../../output/server/nodes/0.js'),
			() => import('../../output/server/nodes/1.js'),
			() => import('../../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
