module.exports = [{
   name: "modmail-transcript",
   aliases: ["modmail-logs", "modmail-log"],
   code: `$if[$get[count]<=25;{execute:truetranscript};{execute:falsetranscript}]
   $loop[1;{};rolltranscript]
   $let[count;0]
   $if[$get[channelcount]>=10;{execute:timetranscript}]
   $let[channelcount;$sub[$getTextSplitLength;2]]
   $textSplit[$get[channel];-]
   $let[finalchannel;]
   $let[id;$sendMessage[...;yes]]
   $onlyIf[$message==;]
   $if[$checkCondition[$message==]==false;{execute:awaittranscript}]
   $onlyIf[$get[channel]!=;There's no transcript logs.]
   $let[channel;$textTrim[$getServerVar[mailtranscript]]]
   $onlyPerms[managechannel;Missing Permission, **Manage Channels** - User]`
},
{
   name: "awaittranscript",
   type: "awaited",
   code: `$reply[$messageID;no]
   $createFile[#RIGHT#$cropText[$get[data];$charCount[$get[data]];2]#LEFT#;transcript.txt]
   $let[data;$reverse[$nonEscape[$getChannelVar[mailtranscript;$findNumbers[$message]]]]]
   $onlyIf[$getChannelVar[mailtranscript;$findNumbers[$message]]!=;$getVar[mailerroroptionmessage]\n\`"$findNumbers[$message]" Not Exists.\`]`
},
{
   name: "timetranscript",
   type: "awaited",
   code: `$editMessage[$get[id];This can take long time.]`
},
{
   name: "truetranscript",
   type: "awaited",
   code: `$editMessage[$get[id];$nonEscape[{
      "content": " ",
      "embeds": "{newEmbed:{author:$sum[$get[channelcount];1] Transcript Logs.} {description:\`\`\`\\n>  $replaceText[$replaceText[$cropText[$getServerVar[mailtranscript];$charCount[$getServerVar[mailtranscript]];2];,;)\\n> ];-; (])\\n\`\`\`} {footer:modmail-transcript (channelid)} {color:$getVar[mailcolorembed]} {timestamp}}",
      "components": "{actionRow:{button:Clear:1:deletescript_$authorID:no:🗑} {button:Cancel:4:secondresetmodmail_$authorID:no}} {actionRow:{selectMenu:rollingtranscript:Transcript:1:1:no:$nonEscape[{selectMenuOptions:1. $get[cachechannel]} $replaceText[$replaceText[$checkCondition[$get[count]==1];true;];false;$get[finalchannel]]}}"
   }]]
   $let[cachechannel;$advancedTextSplit[$getServerVar[mailtranscript];,;2;-;1]:triggertranscript_$advancedTextSplit[$getServerVar[mailtranscript];,;2;-;1]_$advancedTextSplit[$getServerVar[mailtranscript];,;2;-;2]_1:$userTag[$advancedTextSplit[$getServerVar[mailtranscript];,;2;-;2]]]`
},
{
name: "falsetranscript",
type: "awaited",
code: `$editMessage[$get[id];$nonEscape[{
   "content": " ",
   "embeds": "{newEmbed:{author:$sum[$get[channelcount];1] Transcript Logs.} {footer:modmail-transcript (channelid)} {color:$getVar[mailcolorembed]} {timestamp}}",
   "components": "{actionRow:{button:Clear:1:deletescript_$authorID:no:🗑} {button:Cancel:4:secondresetmodmail_$authorID:no}}"
}]]
$reply[$get[id]]
$createFile[>  $replaceText[$replaceText[$cropText[$getServerVar[mailtranscript];$charCount[$getServerVar[mailtranscript]];2];,;)\n> ];-; (]);transcript-logs.txt]`
}]