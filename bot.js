
import { Telegraf } from "telegraf";
const TOKEN = "7462210652:AAFFkIFBl9zTAf4ZXC9vaqeW3QqQKTG568I";
const bot = new Telegraf(TOKEN);

const web_link = "https://kaleidoscopic-conkies-202a3a.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app dummy", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();