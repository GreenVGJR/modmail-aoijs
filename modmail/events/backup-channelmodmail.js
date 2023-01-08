module.exports = {
   channel: "$channelID",
   type: "channelDelete",
   $if: "v4",
   code: `Recovered Modmail Channel.
Old Channel: \`$oldChannel[id] - #$oldChannel[name]\`

User: \`$userTag[$get[type2]]\`
ID: \`$get[type2]\`
   $useChannel[$get[id]]
   $setChannelVar[mailtranscript;;$oldChannel[id]]
   $if[$getServerVar[mailstatustranscript]==1]
   $setChannelVar[mailtranscript;$getChannelVar[mailtranscript;$oldChannel[id]]$reverse[,
{
   "position": $getTextSplitLength,
   "name": "$userTag[$get[type2]]",
   "userid": "$get[type2]",
   "timestamp": "$dateStamp",
   "modmail": "(RECOVER_CHANNEL)",
   "old_channel": {
      "name": "$oldChannel[name]",
      "id": "$oldChannel[id]"
   }
}];$get[id]]
   $textSplit[$reverse[$getChannelVar[mailtranscript;$oldChannel[id]]];"position"#NOLOC#]
   $endif
   $setGlobalUserVar[mailchannelid;$get[id];$get[type2]]
   $setChannelVar[mailchannel;$get[id]-$get[type2];$get[id]]
   $setChannelVar[mailchannel;;$get[type1]]
   $let[id;$createChannel[$get[serverid];$oldChannel[name];text;yes;$getServerVar[mailmaincategoryid;$get[serverid]]]]
   $onlyBotPerms[managechannel;{execute:errorconsole}]
   $let[serverid;$getGlobalUserVar[mailmainserverid;$clientID]]
   $let[type2;$advancedTextSplit[$getChannelVar[mailchannel;$oldChannel[id]];-;2]]
   $let[type1;$advancedTextSplit[$getChannelVar[mailchannel;$oldChannel[id]];-;1]]
   $onlyIf[$getChannelVar[mailchannel;$oldChannel[id]]!=;]
   $onlyIf[$channelCategoryID[$oldChannel[id]]==$getServerVar[mailmaincategoryid];]
   $onlyIf[$getServerVar[mailstatus]!=0;]
   $onlyIf[$getServerVar[mailmessage]!=;]
   $onlyIf[$getGlobalUserVar[mailmainserverid;$clientID]!=;]`
}