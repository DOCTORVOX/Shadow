const muteSync = require('../util/syncs/muteSync');
const tempBanSync = require('../util/syncs/tempBanSync');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Logged into ${client.user.tag}!`);
		console.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);
		client.user.setActivity('members use /help', { type: 'WATCHING' });
		muteSync(client);
		tempBanSync(client);
	},
};