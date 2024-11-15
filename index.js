const TelegramBot = require("node-telegram-bot-api");
const { Telegram } = require("telegraf");
// require("dotenv").config();
// const token = process.env.SECRET_TOKEN;
const bot = new TelegramBot('7769107162:AAGkIsfUyEtdW5Qzp9dx9dxrCIKMa83t-RQ');
const bott = new Telegram('7769107162:AAGkIsfUyEtdW5Qzp9dx9dxrCIKMa83t-RQ');

// function RequestSignIn(param) {
//   let urlPush = `https://lamiun-web-cys3.vercel.app`;
//   try {
//     const res = fetch("http://localhost:8080/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: "jamshidddd@gmail.com",
//         password: "234",
//       }),
//     });

//     if (res.ok) {
//       urlPush = "https://lamiun-web-cys3.vercel.app/dashboard";
//     } else {
//       urlPush = `https://lamiun-web-cys3.vercel.app?search=${param.username}`;
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }

//   return urlPush;
// }


bott.setChatMenuButton({
  menuButton: {
    type: "web_app",
    text: "Ochish",
    web_app: {
      url: `https://lamiun-web-cys3.vercel.app`,
    },
  },
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  // req ui backend
  if (text === "/start") {
    await bot.sendMessage(
      chatId,
      "Assalomu Alaykum \n\n *Lamiun* -  Arab tilini boshlang'ich bilimlarni o'rganishga yordam beruvchi platforma.   \n\n  Ilovadan foydalanish uchun pastdagi *ochish* tugmasin bosing!📱",
      { parse_mode: "Markdown" }
    );
    // await bot.setch;
    // await bot.sendMessage(chatId, " \n\nPlatforma ni ochish 📱", {
    //   parse_mode: "Markdown",
    //   reply_markup: {
    //     inline_keyboard: [
    //       [
    //         {
    //           text: "Lamiun",
    //           web_app: {
    //             url: requestSignIn(msg.from),
    //           },
    //         },
    //       ],
    //     ],
    //   },
    // });

    // bot.sendMessage(
    //   chatId,
    //   "Platformaga kirish uchun pastdagi tugmani bosing 📱",
    //   {
    //     reply_markup: {
    //       keyboard: [
    //         [
    //           {
    //             text: "Lamiun",
    //             web_app: { url: "https://ibro.uz" }, // Replace with your actual web app URL
    //           },
    //         ],
    //       ],
    //       resize_keyboard: false,
    //       one_time_keyboard: true,
    //     },
    //   }
    // );
  }
});
