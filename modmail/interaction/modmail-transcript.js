module.exports = [{
   name: "rollingtranscript",
   type: "interaction",
   prototype: "selectMenu",
   code: `$interactionFollowUp[;;;{file:#RIGHT#$cropText[$get[data];$charCount[$get[data]];2]#LEFT#:transcript.txt}]
   $let[data;$reverse[$nonEscape[$getChannelVar[mailtranscript;$get[id]]]]]
   $onlyIf[$getChannelVar[mailtranscript;$get[id]]!=;{
      "content": "$getVar[mailerroroptionmessage]\\n\`Not Exists.\`",
      "reply": {
         "messageReference": "$interactionData[message.id]"
      }
   }]
   $let[id;$textTrim[$advancedTextSplit[$interactionData[values[0]];_;2]]]
   $interactionDefer[yes]
   $onlyIf[$advancedTextSplit[$interactionData[values[0]];_;1]==triggertranscript;]`
},
{
   type: "interaction",
   prototype: "button",
   code: `$interactionEdit[There's no transcript logs.;;{actionRow:{button:Clear:1:deletescript_$authorID:yes:🗑} {button:Cancel:4:secondresetmodmail_$authorID:no}}]
   $setServerVar[mailtranscript;]
   $interactionEdit[Clearing..]
   $interactionDeferUpdate
   $onlyIf[$getServerVar[mailtranscript]!=;{
      "content": "There's no transcript logs.",
      "ephemeral": true,
      "options": {
         "interaction": true
      }
   }]
   $onlyPerms[managechannel;{
      "content": "Missing Permission, **Manage Channels** - User",
      "ephemeral": true,
      "options": {
         "interaction": true
      }
   }]
   $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]
   $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==deletescript;]`
}]