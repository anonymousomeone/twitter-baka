const { Client } = require('discord.js');
const { TwitterApi } = require('twitter-api-v2');
const token = require('./token.json');

const client = new Client;
const twitter = new TwitterApi({
  appKey: token.apikey,
  appSecret: token.apikeysecret,
  accessToken: token.accesstoken,
  accessSecret: token.accesstokensecret,
  bearer: token.bearer
}).v2;

console.log(twitter.me())
twitter.tweet('hello world!')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login(token.token);