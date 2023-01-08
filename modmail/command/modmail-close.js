module.exports = {
   name: "modmail-close",
   $if: "v4",
   code: `$sendDM[(\`$formatDate[$dateStamp;LLLL]\`) Modmail closed by \`$userTag[$authorID]\`.\nReason#COLON#\n\`\`\`\n$replaceText[$replaceText[$checkCondition[$message==];true;Not Provided];false;$message]\n\`\`\`;$advancedTextSplit[$get[channel];-;2]]
   $if[$getServerVar[mailstatusdelete]==1]
   $editMessage[$get[id];$nonEscape[{
      "content": "(\`$formatDate[$dateStamp;LLLL]\`) Modmail closed by \`$userTag[$authorID]\`.\\nReason#COLON#\\n\`\`\`\\n$replaceText[$replaceText[$checkCondition[$message==];true;Not Provided];false;$message]\\n\`\`\`",
      "allowedMentions": {
         "mentionUser": false
      }
   }]]
   $editChannel[$channelID;$nonEscape[{"name": "$replaceText[$replaceText[$parseDate[$dateStamp;date];/;_];:;-]", "parent": "$getServerVar[mailkeepcategoryid]"}]]
   $setChannelVar[mailchannel;;$channelID]
   $onlyIf[$channelExists[$getServerVar[mailkeepcategoryid]]!=false;{
      "content": "$getVar[mailerroroptionmessage]\\n\`$getVar[mailerrorcategorymessage]\`",
      "reply": {
         "messageReference": "$get[id]"
      }
   }]
   $onlyIf[$getServerVar[mailkeepcategoryid]!=;{
      "content": "$getVar[mailerroroptionmessage]\\n\`failed to move channel: Category ID, 'null'\`",
      "reply": {
         "messageReference": "$get[id]"
      }
   }]
   $else
   $deleteChannel[$channelID]
   $setChannelVar[mailchannel;;$channelID]
   $endif
   $if[$getServerVar[mailstatusrecorddata]==1]
   $appendFile[$getVar[mailrecorddatapath];$replaceText[$replaceText[$replaceText[$replaceText[$getVar[mailrecorddatacustom];{cid};$getServerVar[mailmaincategoryid;$getGlobalUserVar[mailmainserverid;$clientID]]];{sid};$getGlobalUserVar[mailmainserverid;$clientID]];{date};$formatDate[$dateStamp;LLLL]];{return};$get[file]];utf8]
$let[file;{
   "channel": {
      "channel_name": "$channelName[$channelID]",
      "channel_id": "$channelID",
         "user": {
            "usertag": "$userTag[$advancedTextSplit[$getChannelVar[mailchannel;$channelID];-;2]]",
            "id": "$advancedTextSplit[$getChannelVar[mailchannel;$channelID];-;2]"
         },
       "transcript": "$replaceText[$replaceText[$getServerVar[mailstatustranscript];0;none];1;$getChannelVar[mailchannel;$channelID]]",
      "timestamp": "$dateStamp"
   }
}

]
   $onlyIf[$fileExists[$getVar[mailrecorddatapath]]!=false;{
   "content": "$getVar[mailerroroptionmessage]\\nError: There's no file \`$advancedTextSplit[$getVar[mailrecorddatapath];/;3]\` on \`database\` folder. \`./database/???\`",
   "reply": {
      "messageReference": "$get[id]"
   }
}]
   $endif
   $if[$getServerVar[mailstatustranscript]==1]
   $reply[$get[id];no]
   $createFile[#RIGHT#$cropText[$get[transcript];$charCount[$get[transcript]];2]#LEFT#;transcript.txt]
   $let[transcript;$reverse[$nonEscape[$getChannelVar[mailtranscript;$channelID]]]]
   $endif
   $setGlobalUserVar[mailchannelid;;$advancedTextSplit[$getChannelVar[mailchannel];-;2]]
   $let[channel;$getChannelVar[mailchannel;$channelID]]
   $if[$getServerVar[mailstatustranscript]==1]
   $setServerVar[mailtranscript;$getServerVar[mailtranscript], $getChannelVar[mailchannel;$channelID]]
   $setChannelVar[mailtranscript;$getChannelVar[mailtranscript;$channelID]$reverse[,
{
   "position": $getTextSplitLength,
   "name": "$userTag[$authorID]",
   "userid": "$authorID",
   "timestamp": "$dateStamp",
   "modmail": "(CLOSED)"
}];$channelID]
   $textSplit[$reverse[$getChannelVar[mailtranscript;$channelID]];"position"#NOLOC#]
   $endif
   $let[id;$sendMessage[{
      "content": "Closing the Modmail..",
      "reply": {
         "messageReference": "$messageID"
      },
      "allowedMentions": {
         "mentionUser": false
      }
   };yes]]
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
   $onlyBotPerms[managechannel;Missing Permission, **Manage Channels** - Bot]
   $onlyIf[$getChannelVar[mailchannel;$channelID]!=;]
   $onlyIf[$channelCategoryID[$channelID]==$getServerVar[mailmaincategoryid];]
   $onlyIf[$getServerVar[mailstatus]!=0;]`
}