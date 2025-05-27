const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "SESSION_ID": process.env.SESSION_ID || "Sarkarmd$eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU83dThXSlpDNTZBdFovcGxBT1A2c3R0cGtwbURyRnJTNUdwOVdCSFgxdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXAwbGdzUHg0QW53eFBuSGpaS2tiazhTVkVJWlZ1WldxUzhPeHpSN0lWbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFUGdHT1hQMnBVeXZ6Q0RDdStMMXJlNnlidHVTZy9OTWRQMlFtcWlmOG40PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvZHpPeWdKS2M5blVoYWJrRlpkdHczcUEyOUUveGlaTklhVlgxQkJlM1VnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdNNU5Zb3J0aUU4YWdjbVI1emRhQTRXT082WW9ack9VOEd0TDhaeWl4bGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNtYWt5S1kyM2J6d29mQ011dUNuK25ETlp3K2o0aGVEWDE5VUsvTnBuVVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUNWNGEzbUhaNXNQVGN3Z2xkakFBRU52RHgva0JLK3ErekRjQXBDZVFrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFh2Uk9rb2E2TUN3aERUUFI3ck9aTjNLQnNxL3NGL0E2YnltKzRoZjZXWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdTaldnb1Z3dzl4NVZ4ZVl6Y2lkRXpmWTl1aGxPc244RTJjaEc2b2lsOElwSGJ1MG1Eby8rczVBZGZsOVlKNnhCN2NzOG1TZFJZaGZVQUdxcWgra0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA4LCJhZHZTZWNyZXRLZXkiOiJrb1RXckI2bVNRc1FzajFVQ1A5bkY5NEd6TktSc1hkN3RMNkFTRG1KM0ZvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJIMlBZWThLNyIsIm1lIjp7ImlkIjoiMjc3OTQ1NjI0ODY6OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNMUNINDNMIE0xQ0s0VjEzTEw0IiwibGlkIjoiMjY1MjA2MTYwNzM2NDYwOjlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKK0VtdjhERUlqc3k4RUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJSMDA2amYvVlN4dm5zUnMyVjdnYmJEL0NvcWYxNm1qVVdVZFpuNWJEVTNFPSIsImFjY291bnRTaWduYXR1cmUiOiIwSzdGRm1qdExpaTFMbTBlYklWRUtKQUlQelU3a09GNjByb1pXN2tDSkhMMWFPNVV5ZFhmRXB6R0szdUczTDZrSGpYSDlVak9Eb1g5cHN4bHhLeTBCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidUtlclNrM0tPSTJFTmgrS2Naa2hYNTF4OWxwMlJGNnVSU25XWnlSVjFQZkNFdmNVTzNjSWtnK1BlUllENTJBY1FFWmpidVJUVS8yTGdkd0NjM0JUREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzc5NDU2MjQ4Njo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVkTk9vMy8xVXNiNTdFYk5sZTRHMncvd3FLbjllcG8xRmxIV1orV3cxTngifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0ODE3MDI1MiwibGFzdFByb3BIYXNoIjoiMUs0aEg0In0=",
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'true',
  "MODE": process.env.MODE || "public",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "923072380380",
  "OWNER_NAME": process.env.OWNER_NAME || "Hamza",
  "ALWAYS_ONLINE": process.env.ALWAYS_ONLINE === 'true',
  "PRESENCE": process.env.PRESENCE || "online",
  "OMDB_API_KEY": process.env.OMDB_API_KEY || "76cb7f39",
  "READ_CMD": process.env.READ_CMD === 'true',
  "AUTO_VOICE": process.env.AUTO_VOICE === 'true',
  "AUTO_STICKER": process.env.AUTO_STICKER === 'true',
  "AUTO_REPLY": process.env.AUTO_REPLY === 'true',
  "AUTO_REACT": process.env.AUTO_REACT === 'true',
  "WELCOME": process.env.WELCOME === 'true',
  "ANTI_BAD": process.env.ANTI_BAD === 'true',
  "ANTI_LINK": process.env.ANTI_LINK === 'true',
  "ANTI_GROUP_LINK": process.env.ANTI_GROUP_LINK === 'true',
  "ANTI_DELETE": process.env.ANTI_DELETE === 'true',
  "ANTI_VIEW_ONCE": process.env.ANTI_VIEW_ONCE === 'true',
  "ANTI_BOT": process.env.ANTI_BOT === 'true',
  "PREMIUM_USERS": process.env.PREMIUM_USERS || "",
  "COUNTRY_BLOCK": process.env.COUNTRY_BLOCK === 'true',
  "COUNTRY_BLOCK_CODE": process.env.COUNTRY_BLOCK_CODE || "972",
  "EMOJI": process.env.EMOJI || "🙄",
  "AUTO_TYPING": process.env.AUTO_TYPING === 'true'
};
