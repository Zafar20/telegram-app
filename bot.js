import { Telegraf } from 'telegraf';

const TOKEN = '7462210652:AAFFkIFBl9zTAf4ZXC9vaqeW3QqQKTG568I';
const bot = new Telegraf(TOKEN);

const webLink = 'https://telegram-app-gamma.vercel.app/';

// Сообщения и тексты кнопок для разных языков
const messages = {
    'ru': {
        welcome: 'Добро пожаловать:)))))',
        button: 'Нажмите для открытия'
    },
    'es': {
        welcome: 'Bienvenido :)))))',
        button: 'Haz clic para abrir'
    },
    // добавьте другие языки здесь
};

const defaultMessages = {
    welcome: 'Welcome :)))))',
    button: 'Click to open'
};

bot.start((ctx) => {
<<<<<<< HEAD
    // Определение языка пользователя
    const languageCode = ctx.from.language_code;

    // Получение сообщений и текста кнопки на основе языка
    const { welcome, button } = messages[languageCode] || defaultMessages;

    // Отправка сообщения с кнопкой
    ctx.reply(welcome, {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: button,
                        web_app: { url: webLink }
                    }
                ]
            ]
        }
    });
=======
  ctx.reply('Welcome :)))))', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Click to Open',
            web_app: { url: webLink }
          }
        ]
      ]
    }
  });
>>>>>>> cf7662b172adf4efe37b41176e354af3e4c96430
});

bot.launch();
