const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://holyhazard215:<password>@cluster0.895vvpe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233595652412";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_29_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDczLFxuICAgICAgICA0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDMyLFxuICAgICAgICA1NixcbiAgICAgICAgNDEsXG4gICAgICAgIDY2LFxuICAgICAgICA1NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA2MixcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDY2LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2NixcbiAgICAgICAgODUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDM4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxODgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU3LFxuICAgICAgICA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDksXG4gICAgICAgIDg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAxLFxuICAgICAgICA4MyxcbiAgICAgICAgNTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcxLFxuICAgICAgICA0MCxcbiAgICAgICAgODgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6Q0NNSzRwbXR6b2VKTUpZM2RnN3hCRHpwUHNUMnVnRGRwa2Y1ckNhRDMwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPUzJPX1NMa1F1U0xTMmI0U0tQU2tnXCIsXG4gIFwicGhvbmVJZFwiOiBcImViYTZhODE3LTQxNTUtNGNlYi1iMTlhLTcyMzc4NGJhM2JjOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODcsXG4gICAgICA4MyxcbiAgICAgIDIzOCxcbiAgICAgIDE0MSxcbiAgICAgIDM1LFxuICAgICAgMTU2LFxuICAgICAgMjEsXG4gICAgICAxMzMsXG4gICAgICAxMzUsXG4gICAgICA0OCxcbiAgICAgIDE1NSxcbiAgICAgIDExMSxcbiAgICAgIDI0NCxcbiAgICAgIDI0NSxcbiAgICAgIDEzOSxcbiAgICAgIDEwMCxcbiAgICAgIDEzMixcbiAgICAgIDIyOSxcbiAgICAgIDE3NyxcbiAgICAgIDIxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTEsXG4gICAgICAxMjcsXG4gICAgICA5NyxcbiAgICAgIDcsXG4gICAgICAyMDgsXG4gICAgICA2MSxcbiAgICAgIDE4MixcbiAgICAgIDQ1LFxuICAgICAgMTQ0LFxuICAgICAgMjEzLFxuICAgICAgNTEsXG4gICAgICA0MSxcbiAgICAgIDE1OCxcbiAgICAgIDEyLFxuICAgICAgMTMsXG4gICAgICAyMDgsXG4gICAgICAyMDcsXG4gICAgICAxOTAsXG4gICAgICA2LFxuICAgICAgMTQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkM5NEo3S1cyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1OTU2NTI0MTI6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyNjA0ODkxMDMxOTcxNjoyOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNVEd6bzRHRUxxRG9yUUdHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInYrV1MvL05Nd2UyVno3TXlVVHorbjB0cmZ3bS8wM0pHRHR0cXNXUG1QMUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZzAzZVFvV2lnQmhpRDFxR28vd28xS1dwVEJSL29tSFE3Wkc2S242MDM2TExZandvYkxBdlZRZEdpQy9pd3dsT0JMckcrdXVMV0p5MWNDeXZiSFoyQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYTJrQno0blpBcFBqN0FrS21LQjRBMnE0MGZQRFVYVzM5Smp1Q2NiWUlkNTdKenF4RVU0NWNjb25KSEdpVU9oeHZ2V0krYjBZVDZteTZaU2JSaCtiQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTk1NjUyNDEyOjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjIyMTU4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRGx6XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEbHouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCRk91ZzlwM1oyS1RIc1d3R3RjT1NLYW4rOXV5N29nVVAwbmVUYmNPdU1vPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NDEyNTk4NDIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "BiG Sly",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
