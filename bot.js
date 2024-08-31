import { Telegraf } from 'telegraf';

const TOKEN = '7462210652:AAFFkIFBl9zTAf4ZXC9vaqeW3QqQKTG568I';
const bot = new Telegraf(TOKEN);

const webLink = 'https://telegram-app-gamma.vercel.app/';

bot.start((ctx) => {
  ctx.reply('Welcome :)))))', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Open Web App',
            web_app: { url: webLink }
          }
        ]
      ]
    }
  });
});

bot.launch();
