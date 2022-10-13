const Command = require("../../structures/Command");
const { readdirSync } = require("fs");

const snipe = require("../../schemas/GuildsConfigsSchema");

module.exports = class extends Command {
	constructor(client) {
		//Obtain the current languages and load in the command options
		const availableLanguages = [];
		const languages = readdirSync("./src/languages");
		for (const language of languages) {
			availableLanguages.push({
				name: require(`../../languages/${language}`).fullName,
				value: language.substring(0, language.length - 5),
			});
		}

		super(client, {
			name: "config",
			description: "Commands to config the bot to your Discord server.",
			type: 2,
			options: [
				{
					name: "language",
					description: "Set the language of the bot!",
					type: 1,
					options: [
						{
							name: "language",
							description: "The language to set.",
							type: 3,
							required: true,
							choices: availableLanguages,
						},
					],
				},
			],
		});
	}

	run = async interaction => {
		const subCommand = interaction.options.getSubcommand();

		await require(`./submcommands/${subCommand}`)(this.client, interaction, snipe);
	};
};
