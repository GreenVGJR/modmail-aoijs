module.exports = {
name: "modmail-setup",
$if: "v4",
code: `$setGlobalUserVar[mailmainserverid;$guildID;$clientID]
$if[$getServerVar[mailmaincategoryid]!=]
$editMessage[$get[id];{
"content": "This will remove modmail setup before.\\n\`#$channelName[$getServerVar[mailmaincategoryid]] - $getServerVar[mailmaincategoryid]\`",
"components": "{actionRow:{button:Continue:1:resetmodmail_$authorID:no} {button:Cancel:4:secondresetmodmail_$authorID:no}}",
"allowedMentions": {
   "mentionUser": false
}
}]
$else
$editMessage[$get[id];{
   "content": " ",
   "embeds": "{newEmbed:{footer:let's start with this button.} {color:$getVar[mailcolorembed]}}",
   "components": "{actionRow:{button:here:2:startmodal_$authorID:no}}",
   "allowedMentions": {
      "mentionUser": false
   }
}]
$endif
$onlyIf[$checkContains[$userPerms[$clientID;, ;$guildID];managechannel;addreactions;viewchannel;sendmessage;managemessages;embedlinks;attachfiles;readmessagehistory;externalemojis]==true;{ 
   "content": "<@$authorID>, Missing some Permissions - <@$clientID> :: \`View Channel, Send Message, Add Reactions, Manage Channels, Manage Messages, Attach Files, Embed Links, Read Message History, External Emojis\`",
   "reply": {
      "messageReference": "$get[id]"
   },
   "allowedMentions": {
      "mentionUser": false
   }
}]
$let[id;$sendMessage[{
   "content": "Checking the requirement..",
   "reply": {
      "messageReference": "$messageID"
   },
   "allowedMentions": {
      "mentionUser": false
   }
};yes]]
$onlyPerms[manageserver;Missing Permission, **Manage Server** - User]`
}