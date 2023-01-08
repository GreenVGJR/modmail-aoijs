// modmail/command/modmail-transcript.js
module.exports = {
   name: "rolltranscript",
   type: "awaited",
   code: `$if[$get[channelcount]>$get[count];{execute:rolltranscript}]
   $let[finalchannel;$get[finalchannel] {selectMenuOptions:$sum[$get[count];1]. $advancedTextSplit[$getServerVar[mailtranscript];,;$sum[$get[count];2];-;1]:triggertranscript_$advancedTextSplit[$getServerVar[mailtranscript];,;$sum[$get[count];2];-;1]_$advancedTextSplit[$getServerVar[mailtranscript];,;$sum[$get[count];2];-;2]_$sum[$get[count];2]:$userTag[$advancedTextSplit[$getServerVar[mailtranscript];,;$sum[$get[count];2];-;2]]}]
   $onlyIf[$get[count]<=25;]
   $onlyIf[$get[channelcount]!=0;]
   $let[count;$sum[$get[count];1]]`
}