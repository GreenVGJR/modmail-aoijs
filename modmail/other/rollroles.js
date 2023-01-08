// modmail/command/modmail-close.js
module.exports = {
   name: "rollroles",
   type: "awaited",
   code: `$if[$get[rolecount]>$get[count];{execute:rollroles}]
   $let[finalroles;$get[finalroles] $checkContains[$get[cacherole];$findNumbers[$advancedTextSplit[$get[roles];,;$get[count]]]]]
   $let[count;$sum[$get[count];1]]`
}