const { ActivityType } = require("discord.js");
const Event = require("../../structures/Event");
<<<<<<< HEAD
=======
const { loadLanguages } = require("../../structures/Language");
>>>>>>> bdcec82e2611802ff5e84f96fbf07d1f680d34e4

module.exports = class extends Event {
	constructor(client) {
		super(client, { name: "ready" });
	}

	run = async () => {
		console.log(`${this.client.user.tag} are ready`);
		//Register the status of the bot
		this.client.user.setActivity("/help", { type: ActivityType.Listening });

		this.client.registerCommands();
		await this.client.databaseConnection();
<<<<<<< HEAD
=======

		//Load languages
		await loadLanguages(this.client);
>>>>>>> bdcec82e2611802ff5e84f96fbf07d1f680d34e4
	};
};
