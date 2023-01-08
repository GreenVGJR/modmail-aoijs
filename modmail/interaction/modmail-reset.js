module.exports = [{
type: "interaction",
prototype: "button",
code: `$setGlobalUserVar[mailmainserverid;$guildID;$clientID]
$editMessage[$interactionData[message.id];{
   "content": " ",
   "embeds": "{newEmbed:{footer:let's start with this button.} {color:$getVar[mailcolorembed]}}",
   "components": "{actionRow:{button:here:2:startmodal_$authorID:no}}",
   "allowedMentions": {
      "mentionUser": false
   }
}]
$setServerVar[mailstatusrecorddata;0]
$setServerVar[mailstatustranscript;0]
$setServerVar[mailstatusdelete;0]
$setServerVar[mailstatusroles;0]
$setServerVar[mailstatussend;0]
$setServerVar[mailstatusdm;0]
$setServerVar[mailstatus;0]
$setGlobalUserVar[mailmainserverid;;$clientID]
$setServerVar[mailroles;]
$setServerVar[mailmessage;]
$setServerVar[mailkeepcategoryid;]
$setServerVar[mailmaincategoryid;]
$setServerVar[mailtypecreate;$getVar[mailtypecreate]]
$interactionEdit[Cleaning previous modmail..]
$interactionDeferUpdate
$onlyPerms[manageserver;{
   "content": "Missing Permission, **Manage Server** - User",
   "ephemeral": true,
   "options": {
      "interaction": true
   }
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==resetmodmail;]
$suppressErrors`
},
{
//modmail-setup cancel reset interaction
type: "interaction",
prototype: "button",
code: `$deleteMessage[$interactionData[message.id]]
$onlyPerms[manageserver;{
   "content": "Missing Permission, **Manage Server** - User",
   "ephemeral": true,
   "options": {
      "interaction": true
   }
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==secondresetmodmail;]
$suppressErrors`
}]