### Remake from Basement Moderators.
### No Client Include.
```json
ONLY USE THIS ON SINGLE SERVER / PRIVAVE BOT.
```
___
#### Require Permissions for Bot & Moderator / Whitelist Role
- View Channel / Read Message
- Send Message
- Manage Channels
- Manage Messages
- Attach Files
- Embed Links
- Read Message History
- External Emojis

#### Require Permissions for Modmail Category
(yes, i don't make a auto-setup thing, bcus aoi.js don't like it)

- View Channel / Read Message
- Send Message
- Manage Channels
- Manage Messages
- Attach Files
- Embed Links
- Read Message History
- External Emojis
- Mentions @everyone, @here, and All Roles `(optional)`
___
Commands
```
- modmail-setup //Create Modmail
- modmail-options //Options Modmail
- modmail-reset //Reset Modmail

- modmail-transcript //Transcript Logs

- modmail-answer //Answer the Modmail (if "allow send message" feature disabled)
- modmail-close //Close the Modmail
```

Callbacks
```js
bot.onMessage({
   guildOnly: false
})
bot.onInteractionCreate()
bot.onChannelDelete()
```

Variables
```
   mailcolorembed: "a09fff",

   //Customize Message
   mailerroroptionmessage: "Cannot process this action.",
   mailerrorcategorymessage: "Category not found.",
   mailerrorattachmessage: "You can't send multiple attach files.",
   mailseconderrorattachmessage: "Failed to create.",
   mailroleserrormessage: "You don't have roles that are whitelisted.",
   mailsentmessage: "Modmail message sent.",
   mailerrormessage: "Failed to send.",
   maildisabledmmessage: "Modmail cannot be used.",
   mailtranscriptmessage: "This conversation's will be record.",

   //Configuration
   mailtypecreate: "userid", //available: userid, timestamp, name, discriminator | you can combain with '-': name-userid / timestamp-discriminator
   mailchannel: "", //store modmail channel
   mailstatus: "0", //0 = off | 1 = on
   mailstatusdm: "0", //0 = off | 1 = on
   mailstatussend: "0", //0 = off | 1 = on
   mailstatusroles: "0", //0 = off | 1 = on
   mailstatusdelete: "0", //0 = off | 1 = on

   //Database
   mailmaincategoryid: "", //store category id, when doing setup
   mailkeepcategoryid: "", //store second category id, for "keep modmail channel" feature
   mailmainserverid: "", //store server id, when doing setup
   mailroles: "", //store roles, when doing setup
   mailmessage: "", //store welcome message

   mailmessageid: "", //modmail messageid user
   mailchannelid: "", //modmail channel user

   mailstatustranscript: "0", //0 = off | 1 = on
   mailtranscript: "",

   mailstatusrecorddata: "0", //0 = off | 1 = on
   mailrecorddatacustom: "//Server ID: {sid} | Category ID: {cid}\n\n{return}",
   //{sid}, {cid}, {return}, {date}
   mailrecorddatapath: "./database/mail-recorddata.txt" //location file its save/update
```
### [Preview](https://google.com)
### Features
```
- Transcript
- Record Data
- Ping Roles

- Backup Modmail Channel
- Keep Modmail Channel (from modmail-close)
- Recover Modmail (if some modmail data was deleted/corrupted)

- Edit Welcome Message, support Embed
- Whitelist Roles (for modmail-answer, modmail-close, and "ping roles" feature)
```
Thanks for Aggelos btw
