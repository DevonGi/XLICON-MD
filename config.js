const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "6282394486234"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanytofficial:s4salmanyt@cluster0.6wtgil3.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'thedevissmart@gmail.com'
global.github = 'https://github.com/DevonGi/XLICON-MD'
global.location = 'Jakarta Indonesia'
global.gurl = 'https://instagram.com/DevCouldntBeBack/' // add your username
global.sudo = process.env.SUDO || '6289603924264' 
global.devs = '6289603924264';
global.website = 'https://github.com/DevonGi/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/09297d311573675a19c0a.png'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0hqMVB5SHZQVVBGYzhCV1EyZVlTVWx5U2xKNTNsWWM1R1pHZEdlQlBIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTJiL2V6YWhndWgwRE0wWkhydlM0TjZ2U1Yzam9OVkZTL1B4OTR2dHVGST0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTDVSa0loTmlKQXpKZXZWajFPSVBqKzF4ckhCVkZGdUcxdDNmN0ozR25BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5L3MxYktMY2FiV1lnQW5CdGFyQ2l6emV4bVVsbDB4cUpQcWZreFRXVmh3PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFEdkE2eCtCZWJ2Y0FvSkdheU1CTUFwd2tTMjVtSnRreE5rY1U1SFZOa0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFmdzY2WFZzcTQ1ZXdzYUtZU3FiMWEvM003RFR6VXp4UStyQ0w2UnplaEU9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3VFJhYzFsUm9qbjJMbWd4WXdrbmJOS0J2NlRtYnJaMGZzSWV6YVQ5ellCVjJrOUh0WXNpVEtYRzZSY3lWekE0VTM1emtsTVRBeVRJYWtXWEU4M0xqUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE3NywiYWR2U2VjcmV0S2V5IjoiclJNMW1kcmcrcXlNc1duNUZCV1BzWVRwUXpUd2hZc09hUnk2a0FVRk1FMD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiRXA2cTJKRG1ReG1HNTg5alk3OVhrQSIsInBob25lSWQiOiJhN2QwMzgwNC05YjVkLTRkN2EtOWNlMy00OWMxZGEwNDZkMmYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnJSK0NOTzMzSU51TGVTRVJ6M2U3MjhBR3JZPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6WlZXY0xTNG5sRXNwT0NrbEY5R3hPNlRkMEk9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNKNlB6cjhFRUlqaTE2a0dHQVU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlVOaVVKbEpobFRpdHJ0MFRFU0dqcXlBd0JHdlpUV2Z1ck50ODN1TlBwQms9IiwiYWNjb3VudFNpZ25hdHVyZSI6InJEUkFTNytQRjJVSHdZd2RreGJZSWRnOXYxVEtsdmhGWUl1bEJBMlVsdHpNaEpyS3pHQnlDRTJyQ2oyNjBDRVVGRGFWZmt5S1Z5U1dsK3h2VUxjSERRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI5d3Bkb1EvNklINzVBemFaOVdHYldJa3pVekN4U2s2UWFMZXoyZ1NlS0dTZWdUeERFWEp1VFZFcmZwRFhjRnU3N3VzMFUyQ1cwd25lclZsSGlpR1FpUT09In0sIm1lIjp7ImlkIjoiMTYzMTM3ODQ4MDQ6NUBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNjMxMzc4NDgwNDo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZEWWxDWlNZWlU0cmE3ZEV4RWhvNnNnTUFScjJVMW43cXpiZk43alQ2UVoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE2OTgwMzM5MzB9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'Akmal Rabbani',
  packname:  process.env.PACK_NAME || '𝓐𝓴𝓫𝓸𝓽',
   
  botname:   process.env.BOT_NAME === undefined ? "𝓐𝓴𝓫𝓸𝓽" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Akmal Rabbani' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Assalamualaikum saya telah Bangun!!' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
