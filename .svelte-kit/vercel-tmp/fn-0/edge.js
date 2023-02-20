import { Server } from '../../output/server/index.js';
import { manifest } from './manifest.js';

const server = new Server(manifest);
const initialized = server.init({
	env: /** @type {Record<string, string>} */ (process.env)
});

/**
 * @param {Request} request
 */
export default async (request) => {
	await initialized;
	return server.respond(request, {
		getClientAddress() {
			return /** @type {string} */ (request.headers.get('x-forwarded-for'));
		}
	});
};
