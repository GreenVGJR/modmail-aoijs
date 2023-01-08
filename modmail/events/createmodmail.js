module.exports = [{
   name: "$alwaysExecute",
   $if: "v4",
   code: `$if[$getGlobalUserVar[mailchannelid]==]
   $replaceText[$replaceText[$getServerVar[mailstatusroles;$getGlobalUserVar[mailmainserverid;$clientID]];0;];1;$getServerVar[mailroles;$getGlobalUserVar[mailmainserverid;$clientID]]]
Use \`modmail-close\` to close this modmail.
$replaceText[$replaceText[$getServerVar[mailstatussend;$getGlobalUserVar[mailmainserverid;$clientID]];0;Use \`modmail-answer\` to answer this modmail.];1;]$replaceText[$replaceText[$getServerVar[mailstatustranscript;$getGlobalUserVar[mailmainserverid;$clientID]];0;];1;\n> $getVar[mailtranscriptmessage]]
   $nonEscape[
   $replaceText[$replaceText[$checkCondition[$get[authorattach]==];true;];false;$image[2;$get[authorattach]]
   $color[2;$getVar[mailcolorembed]]
   $description[2;$get[authormessage]]
   $author[2;$userTag[$get[userid]];$userAvatar[$get[userid]]]
   $title[1;Modmail Created]
   $description[1;User: \`$userTag[$get[userid]]\`\nID: \`$get[userid]\`\nCreate: <t:$cropText[$dateStamp;10]:F>]
   $color[1;$getVar[mailcolorembed]]
   $thumbnail[1;$userAvatar[$get[userid]]]
   ]
   $useChannel[$get[fixid]]
   $setChannelVar[mailtranscript;$replaceText[$replaceText[$getServerVar[mailstatustranscript;$getGlobalUserVar[mailmainserverid;$clientID]];0;];1;$getChannelVar[mailtranscript;$get[fixid]]$reverse[,
{
   "position": $getTextSplitLength,
   "name": "$userTag[$get[userid]]",
   "userid": "$get[userid]",
   "timestamp": "$dateStamp",
   "modmail": {
      "channel": "(DIRECT_MESSAGES)",
      "message": "$get[authormessage]",
      "attachment": "$replaceText[$replaceText[$checkCondition[$get[authorattach]==];true;none];false;$get[authorattach]]"
   }
}]];$get[fixid]]
   $textSplit[$reverse[$getChannelVar[mailtranscript;$get[fixid]]];"position"#NOLOC#]
   $if[$getServerVar[mailstatustranscript;$getGlobalUserVar[mailmainserverid;$clientID]]==1]
   $sendDM[$getVar[mailtranscriptmessage];$get[userid]]
   $endif    
   $let[authorattach;$messageAttachment]
   $let[authormessage;$message]
   $let[userid;$authorID]
   $setGlobalUserVar[mailchannelid;$get[fixid]]
   $setChannelVar[mailchannel;$get[fixid]-$authorID;$get[fixid]]
   $let[fixid;$advancedTextSplit[$get[id];
;1]]
   $let[secondid;$sendMessage[$nonEscape[{$replaceText[$replaceText[$checkCondition[$get[condition]==true-true-true-true-true];true;"embeds":];false;"content":]"$get[message]","reply":{"messageReference": "$messageID"},"allowedMentions":{"mentionUser":true}}];yes]]
   $let[condition;$checkContains[$get[message];newEmbed]-$checkContains[$get[message];{]-$checkContains[$get[message];}]-$checkContains[$get[message];:]-$checkContains[$get[message];author;title;color;footer;description;thumbnail;field;image;timestamp]]
   $let[id;$createChannel[$get[serverid];$get[typecreate];text;yes;$getServerVar[mailmaincategoryid;$get[serverid]]]]
   $let[typecreate;$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[mailtypecreate;$get[serverid]];userid;$authorID];timestamp;$dateStamp];name;$username[$authorID]];discriminator;$discriminator[$authorID]]]
   $let[message;$getServerVar[mailmessage;$get[serverid]]]
   $let[serverid;$getGlobalUserVar[mailmainserverid;$clientID]]
   $onlyIf[$replaceText[$replaceText[$checkCondition[$messageAttachment==];true;];false;$advancedTextSplit[$djseval[message.channel.messages.cache.get("$messageID").attachments;yes];MessageAttachment;3]]==;{
      "content": "$getVar[mailseconderrorattachmessage]\\n\`$getVar[mailerrorattachmessage]\`",
      "reply": {
         "messageReference": "$messageID"
      },
      "allowedMentions": {
         "mentionUser": false
      }
   }]
   $onlyIf[$getServerVar[mailstatusdm;$getGlobalUserVar[mailmainserverid;$clientID]]!=0;$getVar[maildisabledmmessage]]
   $onlyIf[$guildID==;]
   $else
   $if[$guildID==]
   $nonEscape[
   $author[1;$userTag[$authorID];$authorAvatar[128]]
   $description[1;$message]
   $color[1;$getVar[mailcolorembed]]
   $replaceText[$replaceText[$checkCondition[$messageAttachment==];true;];false;$image[1;$messageAttachment]]
   ]
   $useChannel[$getGlobalUserVar[mailchannelid]]
   $sendMessage[$getVar[mailsentmessage];no]
   $setChannelVar[mailtranscript;$replaceText[$replaceText[$getServerVar[mailstatustranscript;$getGlobalUserVar[mailmainserverid;$clientID]];0;];1;$getChannelVar[mailtranscript;$getGlobalUserVar[mailchannelid]]$reverse[,
{
   "position": $getTextSplitLength,
   "name": "$userTag[$authorID]",
   "userid": "$authorID",
   "timestamp": "$dateStamp",
   "modmail": {
      "channel": "(DIRECT_MESSAGES)",
      "message": "$message",
      "attachment": "$replaceText[$replaceText[$checkCondition[$messageAttachment==];true;none];false;$messageAttachment]"
   }
}]];$getGlobalUserVar[mailchannelid]]
   $textSplit[$reverse[$getChannelVar[mailtranscript;$getGlobalUserVar[mailchannelid]]];"position"#NOLOC#]
   $onlyIf[$replaceText[$replaceText[$checkCondition[$messageAttachment==];true;];false;$advancedTextSplit[$djseval[message.channel.messages.cache.get("$messageID").attachments;yes];MessageAttachment;3]]==;{
      "content": "$getVar[mailerrorattachmessage]",
      "reply": {
         "messageReference": "$messageID"
      },
      "allowedMentions": {
         "mentionUser": false
      }
   }]
   $onlyIf[$advancedTextSplit[$getChannelVar[mailchannel;$getGlobalUserVar[mailchannelid]];-;1]==$getGlobalUserVar[mailchannelid];{execute:autoremovedatamodmailuser}]
   $onlyIf[$djsEval[client.channels.resolve("$getGlobalUserVar[mailchannelid]");yes]!=null;{execute:autoremovedatamodmailuser}]
   $onlyIf[$getServerVar[mailstatusdm;$getGlobalUserVar[mailmainserverid;$clientID]]!=0;$getVar[maildisabledmmessage]]
   $else
   $if[$getServerVar[mailstatustranscript]==1]
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
   $onlyIf[$getGlobalUserVar[mailchannelid;$advancedTextSplit[$getChannelVar[mailchannel;$channelID];-;2]]!=;]
   $onlyIf[$getChannelVar[mailchannel;$channelID]!=;]
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
   $onlyIf[$djsEval[client.channels.resolve("$getGlobalUserVar[mailchannelid;$advancedTextSplit[$getChannelVar[mailchannel;$channelID];-;2]]");yes]!=null;]
   $onlyIf[$commandInfo[$advancedTextSplit[$message;$djsEval[client.prefix;yes];2];name]==;]
   $onlyIf[$getServerVar[mailstatussend]!=0;]
   $onlyIf[$getChannelVar[mailchannel;$channelID]!=;]
   $onlyIf[$advancedTextSplit[$getChannelVar[mailchannel;$channelID];-;1]==$getGlobalUserVar[mailchannelid;$advancedTextSplit[$getChannelVar[mailchannel;$channelID];-;2]];]
   $onlyIf[$channelCategoryID[$channelID]==$getServerVar[mailmaincategoryid];]
   $endif
   $endif
   $onlyIf[$getServerVar[mailstatus;$getGlobalUserVar[mailmainserverid;$clientID]]!=0;]
   $onlyIf[$getServerVar[mailmessage;$getGlobalUserVar[mailmainserverid;$clientID]]!=;]
   $onlyIf[$getGlobalUserVar[mailmainserverid;$clientID]!=;]`
},
{
   name: "autoremovedatamodmailuser",
   type: "awaited",
   code: `$deleteMessage[$get[mid]]
   $onlyIf[$get[mid]!=;]
   $setGlobalUserVar[mailmessageid;$get[id];$clientID]
   $let[mid;$getGlobalUserVar[mailmessageid;$clientID]]
   $let[id;$sendMessage[{
      "content": "Seems like your Modmail was deleted/corrupted.",
      "components": "{actionRow:{button:Recover:1:recovermodmailuser:no} {button:Remove:4:removemodmailuser:no}"
   };yes]]`
},
{
   name: "recovermodmailuser",
   type: "interaction",
   prototype: "button",
   code: `Recovered Modmail Channel.
   
   User: \`$userTag[$get[type2]]\`
   ID: \`$get[type2]\`
   $useChannel[$get[id]]
   $interactionEdit[Successfully Recover.]
   $setChannelVar[mailtranscript;$getChannelVar[mailtranscript;$get[channelid]];$get[id]]
   $setGlobalUserVar[mailchannelid;$get[id];$interactionData[author.id]]
   $setChannelVar[mailchannel;$get[id]-$interactionData[author.id];$get[id]]
   $setChannelVar[mailchannel;;$get[channelid]]
   $let[channelid;$getGlobalUserVar[mailchannelid;$interactionData[author.id]]]
   $interactionFollowUp[Recovering..]
   $let[id;$createChannel[$get[serverid];$get[typecreate];text;yes;$getServerVar[mailmaincategoryid;$get[serverid]]]]
   $let[typecreate;$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[mailtypecreate;$get[serverid]];userid;$interactionData[author.id]];timestamp;$dateStamp];name;$username[$interactionData[author.id]]];discriminator;$discriminator[$interactionData[author.id]]]]
   $let[serverid;$getGlobalUserVar[mailmainserverid;$clientID]]
   $setGlobalUserVar[mailmessageid;;$clientID]
   $deleteMessage[$interactionData[message.id]]
   $interactionDefer`
},
{
   name: "removemodmailuser",
   type: "interaction",
   prototype: "button",
   code: `$interactionFollowUp[(\`$formatDate[$dateStamp;LLLL]\`) Modmail closed by \`$userTag[$authorID]\`.]
   $setGlobalUserVar[mailchannelid;;$interactionData[author.id]]
   $setChannelVar[mailchannel;;$getGlobalUserVar[mailchannelid]]
   $setGlobalUserVar[mailmessageid;;$clientID]
   $deleteMessage[$interactionData[message.id]]
   $interactionDefer`
}]