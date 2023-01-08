module.exports = {
   name: "modmail-answer",
   $if: "v4",
   code: `$if[$getServerVar[mailstatustranscript]==1]
   $setChannelVar[mailtranscript;$getChannelVar[mailtranscript;$channelID]$reverse[,
{
   "position": $getTextSplitLength,
   "name": "$userTag[$authorID]",
   "userid": "$authorID",
   "timestamp": "$dateStamp",
   "modmail": {
      "channel": {
         "name": "$channelName[$channelID]",
         "id": "$channelID"
      },
      "message": "$message",
      "attachment": "$replaceText[$replaceText[$checkCondition[$messageAttachment==];true;none];false;$messageAttachment]"
   }
}];$channelID]
   $textSplit[$reverse[$getChannelVar[mailtranscript;$channelID]];"position"#NOLOC#]
   $endif
   $editMessage[$get[saveid];{"content":"$getVar[mailsentmessage]\\nDM Message ID: \`$get[messageid]\`","allowedMentions":{"mentionUser":false}}]
   $onlyIf[$djsEval[client.channels.resolve("$getGlobalUserVar[mailchannelid;$advancedTextSplit[$getChannelVar[mailchannel;$channelID];-;2]]");yes]!=null;]
   $let[messageid;$sendDM[\`$userTag[$authorID]\`: $message$replaceText[$replaceText[$checkCondition[$messageAttachment==];true;];false;\n$messageAttachment];$advancedTextSplit[$getChannelVar[mailchannel;$channelID];-;2];yes]]
   $onlyIf[$replaceText[$replaceText[$checkCondition[$messageAttachment==];true;];false;$advancedTextSplit[$djseval[message.channel.messages.cache.get("$messageID").attachments;yes];MessageAttachment;3]]==;{
      "content": "$getVar[mailerrorattachmessage]",
      "reply": {
         "messageReference": "$get[saveid]"
      },
      "allowedMentions": {
         "mentionUser": false
      }
   }]
   $onlyIf[$isUserDMEnabled[$advancedTextSplit[$getChannelVar[mailchannel;$channelID];-;2]]!=false;{
      "content": "$getVar[mailerrormessage]\\n\`DM Disable\`",
      "reply": {
         "messageReference": "$get[saveid]"
      }
   }]
   $let[saveid;$sendMessage[{"content":"...","reply":{"messageReference":"$messageID"},"allowedMentions":{"mentionUser":false}};yes]]
   $if[$getServerVar[mailroles]!=]
   $onlyIf[$checkContains[$get[finalroles];true]==true;{
      "content": "$getVar[mailerroroptionmessage]\\n\`$getVar[mailroleserrormessage]\`",
      "reply": {
         "messageReference": "$messageID"
      },
      "allowedMentions": {
         "mentionUser": false
      }
   }]
   $loop[1;{};rollroles]
   $let[count;0]
   $let[rolecount;$sub[$getTextSplitLength;1]]
   $textSplit[$get[roles];,]
   $let[finalroles;]
   $let[cacherole;$getServerVar[mailroles]]
   $onlyIf[$get[roles]!=$guildID;{
      "content": "$getVar[mailerroroptionmessage]\\n\`User Roles, 'null'\`",
      "reply": {
         "messageReference": "$messageID"
      },
      "allowedMentions": {
         "mentionUser": false
      }
   }]
   $let[roles;$userRoles[$authorID;$guildID;id]]
   $else
   $onlyPerms[managechannel;Missing Permission, **Manage Channels** - User]
   $endif
   $argsCheck[>0;Message?]
   $onlyIf[$getServerVar[mailstatussend]!=1;]
   $onlyIf[$getChannelVar[mailchannel;$channelID]!=;]
   $onlyIf[$channelCategoryID[$channelID]==$getServerVar[mailmaincategoryid];]
   $onlyIf[$getServerVar[mailstatus]!=0;]`
}