// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require("discord.js");

//Enviroment variables
const dotenv = require("dotenv");

dotenv.config();

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
	console.log(`Bot listo como: ${client.user.tag}`);
});

client.on("interactionCreate", async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === "ping") {
		await interaction.reply("Pong!");
	} else if (commandName === "server") {
		await interaction.reply(
			`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`
		);
	} else if (commandName === "user") {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);
