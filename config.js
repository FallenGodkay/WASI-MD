const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://telegra.ph/file/4243a6ba2fc3257e9cc8e.mp4" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="jastinmtewa@yahoo.com"
global.location="Morogoro,Tanzania."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority"

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Pakistan";
global.github=process.env.GITHUB|| "https://whatsapp.com/channel/0029VaYsAMI9sBI1dl0Oh03q";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaYsAMI9sBI1dl0Oh03q";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaYsAMI9sBI1dl0Oh03q" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e246ee698f261f17b4dcf.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "27653224519" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '27653224519') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '27653224519') : "27653224519";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923135673658,923192173398";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "923135673658,923192173398";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923135673658,923192173398";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://myqr-43bb863fa5eb.herokuapp.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUNWLzE1MFJVd2RETzBhejh5MXE2anBFYkNIcGxIbWJQZWdkUVVEQlFtUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmJDcjJsVUVWQ2diUTZjbXU0dmZONmRjT2ZmM0dGa0Y2dmhtVVdRaldDZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0RW4yeFBLNlpYa3BuaUtNdGIxYVZ4MHo4bzNpNFZLdEJDMWNja0pWOWtrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3dWRVSHE1RE4yVmsyTjk1VXZlQ1NBMTBiVzdUQ0l2c0hvSk5jdmtvclFrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktKeGZPcCswd3FGY3VtOFhPMVl4Z3ZCdFlub2tHd1JhaWJPQ1FQa0xIVjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJiQnVLVldFekxiQ2d4RzlGdVE0d21kbEZZVk5tMGtENzlyeFBJNzJ6RUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUFYUzJBbkNLbmdjUnZiR2dEbTV3dSt6MFppVUJoZmNUV293UU44V2Uybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFFSGF3SDJRN292cWpCWFdZM0lGZWVzeXdNbFZiUStuWVhPSFdBZ1JVQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhjZ2xBVWdOeUtpeE1iRE5yTGZOaHcrSHBsa3lSN08vdFJ0M0o5RTZrWi9lTkFReDVPcHVZVlJqT0o4UE5lcTFuRldoVmFJcTZLOUk0aDRlNEl2WWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEsImFkdlNlY3JldEtleSI6IkhsSlFoNEtPWHBWWlBZWXRYckFsYkt5WTNkbEFocnRLei9MVzZLejYvZ2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjQ0NDdBbm9KUUVTZnV5dURjS09rU0EiLCJwaG9uZUlkIjoiNThiOTBjMjAtZjhlNC00ZTllLWI3OTgtMDFmMGI5MTJiMjQyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFrdXNoNVY1Yk5hV3o3RFZTck5EVDdLc2dCQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyK05PamNXOUE5K2JJeWpoWnl0N2tJNjR0U2c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTlRCWUg3QkEiLCJtZSI6eyJpZCI6IjI3NjUzMjI0NTE5OjEwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuOAjMOY4oKu4rGg44CNS0FZ4oG54oG14pmh4pml77iOIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNNkw4S2NFRVBLTzJiRUdHQWdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJKYnJEeXlEbXdzODM5QTY5ekJydFNTVHViUC9xMEFjRUhpelBMSEN4N2lzPSIsImFjY291bnRTaWduYXR1cmUiOiJsR3NSbWllalhYUGtrR21ZWHJsQjdpT2c3ZXdocmp6eVRpdENLQWRLdEdzdHlGT0dlMWx6QThrTVpqd3pBSnpDOHJIUExRK1NtYktZNm1YZ2V1UVVBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoib0dqcmJJT1dnOTV0aTVKSHhLUVVzYXo5ak1yNVF6QjkwY2hJVFJkQlE4RVE2OW9WeFhhb2VoU0RMYmhOaW1ySzEyOEw2MnpJL1dzdzFzVUlET3VZaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzY1MzIyNDUxOToxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTVzZ3OHNnNXNMUE4vUU92Y3dhN1Vrazdtei82dEFIQkI0c3p5eHdzZTRyIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE0ODMzMjc5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVoeSJ9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Venocyber-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.0.0",
  caption : process.env.CAPTION || "𝙵𝙸𝙻𝙴 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 Kay⁹⁵ from 「Ø₮Ⱡ」ØɄ₮Ⱡ₳₩Ƶ-Guild🚩" , // ```『 ²⁴ ᴠᴇɴᴏᴄʏʙᴇʀ-ᴍᴅ 』```", //*『ᴠᴇɴᴏᴄʏʙᴇʀ ᴍᴅ』*\n youtube.com/@JASTINMTEWA-vn9pl"),
 
  author : process.env.PACK_AUTHER|| "Kay⁹⁵ ",
  packname: process.env.PACK_NAME || "「Ø₮Ⱡ」ØɄ₮Ⱡ₳₩Ƶ-Guild TOP 1 IN SA",
  botname : process.env.BOT_NAME  || "「Ø₮Ⱡ」ØɄ₮Ⱡ₳₩Ƶ",
  ownername:process.env.OWNER_NAME|| "KAY⁹⁵",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-a9ee4ecf-f89e-4704-9261-099f2f14e2dd",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "otlwasi",
  antilink_values:process.env.ANTILINK_VALUES|| "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "01",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "a0e25c3901a992c4afc2ccd14c87f9ec",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "KAY⁹⁵",



};

























global.rank = "updated"
global.isMongodb = true ; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.0.0 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
