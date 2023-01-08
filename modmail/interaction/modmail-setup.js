module.exports = [{
   type: "interaction",
   prototype: "button",
   code: `$interactionModal[Category ID;finalstartmodal;{actionRow:{textInput:Default Category:1:startmodal-category:yes:Category ID:18:19:$replaceText[$replaceText[$checkCondition[$channelCategoryID[$channelID]==];true;Category ID Here..];false;$channelCategoryID[$channelID]]}}]
   $onlyIf[$getServerVar[mailmaincategoryid]==;{
      "content": "Cannot process this action.",
      "ephemeral": true,
      "options": {
         "interaction": true
      }
   }]
   $onlyPerms[manageserver;{
      "content": "Missing Permission, **Manage Server** - User",
      "ephemeral": true,
      "options": {
         "interaction": true
      }
   }]
   
   $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]
   $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==startmodal;]
   $suppressErrors`
},
{
   name: "finalstartmodal",
   type: "interaction",
   prototype: "modal",
   code: `$setServerVar[mailmaincategoryid;$textInputValue[startmodal-category]]
   $interactionEdit[;{newEmbed:{author:Welcome Message} {description:This will send a message when user DM yet} {field:Support Embed with following#COLON#:\n\`\`\`js\n#RIGHT_BRACKET#newEmbed#COLON#<functions>#LEFT_BRACKET# //Index Embed (max. 5 index)\n\n//Functions\n#RIGHT_BRACKET#color#COLON#<hex/int/name>#LEFT_BRACKET#\n#RIGHT_BRACKET#author#COLON#<text>#LEFT_BRACKET#\n#RIGHT_BRACKET#title#COLON#<text>#LEFT_BRACKET#\n#RIGHT_BRACKET#description#COLON#<text>#LEFT_BRACKET#\n#RIGHT_BRACKET#footer#COLON#<text>#LEFT_BRACKET#\n#RIGHT_BRACKET#field#COLON#<name>#COLON#<text>#COLON#(inline?)#LEFT_BRACKET#\n#RIGHT_BRACKET#image#COLON#<url>#LEFT_BRACKET#\n#RIGHT_BRACKET#thumbnail#COLON#<url>#LEFT_BRACKET#\n#RIGHT_BRACKET#timestamp#COLON#(ms timestamp)#LEFT_BRACKET# //Timestamp on Footer\n\n<> :: Require\n() :: Optional\n?  :: yes/no\n\n Example#COLON#\n #RIGHT_BRACKET#newEmbed#COLON##RIGHT_BRACKET#title#COLON#Hai#LEFT_BRACKET# #RIGHT_BRACKET#description#COLON#Our moderators will be response as possible.#LEFT_BRACKET# #RIGHT_BRACKET#color#COLON#a09fff#LEFT_BRACKET# #RIGHT_BRACKET#timestamp#LEFT_BRACKET##LEFT_BRACKET#\n\`\`\`} {color:$getVar[mailcolorembed]}} {newEmbed:{title:Setup} {footer:1 / 3} {field:CategoryID:$textInputValue[startmodal-category]\n\`$channelName[$textInputValue[startmodal-category]]\`:no} {field:Welcome Message - Support Embed:$cropText[$get[message];1024]:no} {color:$getVar[mailcolorembed]}};{actionRow:{button:Create:1:createmodal_$authorID:yes}} {actionRow:{button:Edit Message:3:secondstartmodal_$authorID:no}}]
   $let[message;$replaceText[$replaceText[$checkCondition[$getServerVar[mailmessage]==];true;(empty)];false;\`$getServerVar[mailmessage]\`]]
   $interactionDeferUpdate
   $onlyIf[$hasPermsInChannel[$textInputValue[startmodal-category];$clientID;managechannel]!=false;{
      "content": "Missing Permission, **Manage Channels** - <@$clientID> <#$textInputValue[startmodal-category]>",
      "ephemeral": true,
      "options": {
         "interaction": true
      }
   }]
   $onlyIf[$channelType[$textInputValue[startmodal-category]]==category;{
      "content": "Category not found.",
      "ephemeral": true,
      "options": {
         "interaction": true
      }
   }]
   $onlyIf[$channelExists[$textInputValue[startmodal-category]]!=false;{
      "content": "Category not found.",
      "ephemeral": true,
      "options": {
         "interaction": true
      }
   }]
   $onlyIf[$isNumber[$textInputValue[startmodal-category]]!=false;]
   $onlyPerms[manageserver;{
      "content": "Missing Permission, **Manage Server** - User",
      "ephemeral": true,
      "options": {
         "interaction": true
      }
   }]`
},
{
   name: "secondfinalstartmodal",
   type: "interaction",
   prototype: "modal",
   code: `$setServerVar[mailmessage;$get[intermessage]]
   $interactionEdit[;{newEmbed:{author:Welcome Message} {description:This will send a message when user DM yet} {field:Support Embed with following#COLON#:\n\`\`\`js\n#RIGHT_BRACKET#newEmbed#COLON#<functions>#LEFT_BRACKET# //Index Embed (max. 5 index)\n\n//Functions\n#RIGHT_BRACKET#color#COLON#<hex/int/name>#LEFT_BRACKET#\n#RIGHT_BRACKET#author#COLON#<text>#LEFT_BRACKET#\n#RIGHT_BRACKET#title#COLON#<text>#LEFT_BRACKET#\n#RIGHT_BRACKET#description#COLON#<text>#LEFT_BRACKET#\n#RIGHT_BRACKET#footer#COLON#<text>#LEFT_BRACKET#\n#RIGHT_BRACKET#field#COLON#<name>#COLON#<text>#COLON#(inline?)#LEFT_BRACKET#\n#RIGHT_BRACKET#image#COLON#<url>#LEFT_BRACKET#\n#RIGHT_BRACKET#thumbnail#COLON#<url>#LEFT_BRACKET#\n#RIGHT_BRACKET#timestamp#COLON#(ms timestamp)#LEFT_BRACKET# //Timestamp on Footer\n\n<> :: Require\n() :: Optional\n?  :: yes/no\n\n Example#COLON#\n #RIGHT_BRACKET#newEmbed#COLON##RIGHT_BRACKET#title#COLON#Hai#LEFT_BRACKET# #RIGHT_BRACKET#description#COLON#Our moderators will be response as possible.#LEFT_BRACKET# #RIGHT_BRACKET#color#COLON#a09fff#LEFT_BRACKET# #RIGHT_BRACKET#timestamp#LEFT_BRACKET##LEFT_BRACKET#\n\`\`\`} {color:$getVar[mailcolorembed]}} {newEmbed:{title:Setup} {footer:2 / 3} {field:CategoryID:$getServerVar[mailmaincategoryid]\n\`$channelName[$getServerVar[mailmaincategoryid]]\`:no} {field:Welcome Message - Support Embed:$cropText[$get[message];1024]:no} {color:$getVar[mailcolorembed]}} $nonEscape[$replaceText[$replaceText[$checkCondition[$get[condition]==true-true-true-true-true];true;$get[intermessage]];false;]];{actionRow:{button:Create:1:createmodal_$authorID:no}} {actionRow:{button:Edit Message:3:secondstartmodal_$authorID:no}}]
   $let[message;$replaceText[$replaceText[$checkCondition[$get[condition]==true-true-true-true-true];true;Preview on second Embed.];false;$get[intermessage]]]
   $onlyIf[$advancedTextSplit[$get[intermessage];{newEmbed:;7]==;{
      "content": "Max. 5 Index Embeds.",
      "reply": {
         "messageReference": "$interactionData[message.id]"
      },
      "allowedMentions": {
         "mentionUser": false
      }
   }]
   $let[condition;$checkContains[$get[intermessage];newEmbed]-$checkContains[$get[intermessage];{]-$checkContains[$get[intermessage];}]-$checkContains[$get[intermessage];:]-$checkContains[$get[intermessage];author;title;color;footer;description;thumbnail;field;image;timestamp]]
   $let[intermessage;$textInputValue[startmodal-message]]
   $interactionDeferUpdate
   $onlyIf[$getServerVar[mailmaincategoryid]!=;{
      "content": "Cannot process this action.",
      "ephemeral": true,
      "options": {
         "interaction": true
      }
   }]
   $onlyPerms[manageserver;{
      "content": "Missing Permission, **Manage Server** - User",
      "ephemeral": true,
      "options": {
         "interaction": true
      }
   }]`
},
{
   type: "interaction",
   prototype: "button",
   code: `$interactionModal[Setup;secondfinalstartmodal;{actionRow:{textInput:Welcome Message:2:startmodal-message:yes:Message:1:2000}}]
   $onlyIf[$getServerVar[mailmaincategoryid]!=;{
      "content": "Cannot process this action.",
      "ephemeral": true,
      "options": {
         "interaction": true
      }
   }]
   $onlyPerms[manageserver;{
      "content": "Missing Permission, **Manage Server** - User",
      "ephemeral": true,
      "options": {
         "interaction": true
      }
   }]
   
   $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]
   $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==secondstartmodal;]
   $suppressErrors`
},
{
   type: "interaction",
   prototype: "button",
   code: `$interactionEdit[;{newEmbed:{title:Setup} {footer:3 / 3 | Max. 15 Roles} {field:Whitelist Roles:$replaceText[$replaceText[$checkCondition[$charCount[$getServerVar[mailroles]]<9];true;(empty)];false;$getServerVar[mailroles]]} {color:$getVar[mailcolorembed]};{actionRow:{button:Skip:1:createfinalmodal_$authorID}} {actionRow:{button:Add/Remove Role:2:addrolesmodal_$authorID}}]
   $onlyIf[$checkContains[$userPerms[$clientID;, ;$guildID];managechannel;viewchannel;sendmessage;managemessages;embedlinks;attachfiles;readmessagehistory;externalemojis]==true;{ 
      "content": "<@$authorID>, Missing some Permissions - <@$clientID> :: \`View Channel, Send Message, Manage Channels, Manage Messages, Attach Files, Embed Links, Read Message History, External Emojis\`",
      "reply": {
         "messageReference": "$interactionData[message.id]"
      },
      "allowedMentions": {
         "mentionUser": false
      }
   }]
   $interactionEdit[Creating Modmail..]
   $interactionDeferUpdate
   $onlyIf[$getServerVar[mailmaincategoryid]!=;{
      "content": "Cannot process this action.",
      "ephemeral": true,
      "options": {
         "interaction": true
      }
   }]
   $onlyPerms[manageserver;{
      "content": "Missing Permission, **Manage Server** - User",
      "ephemeral": true,
      "options": {
         "interaction": true
      }
   }]
   $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]
   $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==createmodal;]`
},
{
   type: "interaction",
   prototype: "button",
   code: `$interactionModal[Roles;addingrolesmodal;{actionRow:{textInput:Role Name/ID:1:addingrolesmodal-setup:yes:Role Name/ID:1:100}}]
   $onlyIf[$getServerVar[mailmaincategoryid]!=;{
      "content": "Cannot process this action.",
      "ephemeral": true,
      "options": {
         "interaction": true
      }
   }]
   $onlyPerms[manageserver;{
      "content": "Missing Permission, **Manage Server** - User",
      "ephemeral": true,
      "options": {
         "interaction": true
      }
   }]
   $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]
   $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==addrolesmodal;]`
},
{
   name: "addingrolesmodal",
   type: "interaction",
   prototype: "modal",
   code: `$interactionEdit[;{newEmbed:{title:Setup} {footer:3 / 3 | Max. 15 Roles} {field:Whitelist Roles:$replaceText[$replaceText[$checkCondition[$get[finalrole]==];true;(empty)];false;$get[finalrole]]} {color:$getVar[mailcolorembed]};{actionRow:{button:$replaceText[$replaceText[$checkContains[$get[finalrole];<@&];true;Create];false;Skip]:1:createfinalmodal_$authorID}} {actionRow:{button:Add/Remove Role:2:addrolesmodal_$authorID}}]
   $setServerVar[mailroles;$get[finalrole]]
   $onlyIf[$advancedTextSplit[$get[finalrole];<@&;17]==;{
      "content": "Max. 15 Roles.",
      "reply": {
         "messageReference": "$interactionData[message.id]"
      }
   }]
   $let[finalrole;$replaceText[$replaceText[$checkCondition[$charCount[$get[semifinalrole]]<9];true;];false;$get[semifinalrole]]]
   $let[semifinalrole;$replaceText[$replaceText[$checkContains[$getServerVar[mailroles];$textInputValue[addingrolesmodal-setup]];true;$replaceText[$getServerVar[mailroles];<@&$textInputValue[addingrolesmodal-setup]>;]];false;$get[role]]]
   $let[role; $getServerVar[mailroles] <@&$textInputValue[addingrolesmodal-setup]>]
   $interactionDeferUpdate
   $onlyIf[$roleExists[$textInputValue[addingrolesmodal-setup]]!=false;{
      "content": "Role \`$textInputValue[addingrolesmodal-setup]\` not exists.",
      "options": {
         "interaction": true
      }
   }]
   $onlyIf[$isNumber[$textInputValue[addingrolesmodal-setup]]!=false;]
   $if[$isNumber[$textInputValue[addingrolesmodal-setup]]==true;;{execute:awaitaddingrolesmodal-false}]
   $onlyIf[$checkContains[$textInputValue[addingrolesmodal-setup];$guildID]!=true;]
   $onlyIf[$getServerVar[mailmaincategoryid]!=;{
      "content": "Cannot process this action.",
      "ephemeral": true,
      "options": {
         "interaction": true
      }
   }]
   $onlyIf[$hasPerms[$guildID;$interactionData[author.id];manageserver]!=false;{
      "content": "Missing Permission, **Manage Server** - User",
      "ephemeral": true,
      "options": {
         "interaction": true
      }
   }]`
},
{
   name: "awaitaddingrolesmodal-false",
   type: "awaited",
   code: `$interactionEdit[;{newEmbed:{description:<@$clientID> found $replaceText[$replaceText[$checkCondition[$advancedTextSplit[$get[role];2.;2]==];true;];false;some] Roles that contain name \`$textInputValue[addingrolesmodal-setup]\`.} {color:$getVar[mailcolorembed]} {timestamp}};{actionRow:{selectMenu:finaladdingroles:List Roles:1:1:$nonEscape[{selectMenuOptions:1. $get[cacherole]} $get[secondfinal]]}}]
   $let[cacherole;$findRoles[$textInputValue[addingrolesmodal-setup];1;includes;{name}:triggerroles_1_$interactionData[author.id]:{id}]]
$let[secondfinal;$filterMessage[$get[final];
]]
     $let[final;$replaceText[$get[role];replaceselectmenutoggle;{selectMenuOptions:]]
     
     $interactionDeferUpdate
     $onlyIf[$get[role]!=;{
      "content": "Role \`$textInputValue[addingrolesmodal-setup]\` not exists.",
      "options": {
         "interaction": true
      }
     }]
     $onlyIf[$checkContains[$get[role];$guildID]!=true;]
     $let[role;$findRoles[$textInputValue[addingrolesmodal-setup];25;includes;replaceselectmenutoggle{position}. {name}:triggerroles_{id}_$interactionData[author.id]:{id}}]]
     $onlyIf[$getServerVar[mailmaincategoryid]!=;{
      "content": "Cannot process this action.",
      "ephemeral": true,
      "options": {
         "interaction": true
      }
   }]
   $onlyIf[$hasPerms[$guildID;$interactionData[author.id];manageserver]!=false;{
      "content": "Missing Permission, **Manage Server** - User",
      "ephemeral": true,
      "options": {
         "interaction": true
      }
   }]`
},
{
   name: "finaladdingroles",
   type: "interaction",
   prototype: "selectMenu",
   code: `$interactionEdit[;{newEmbed:{title:Setup} {footer:3 / 3 | Max. 15 Roles} {field:Whitelist Roles:$replaceText[$replaceText[$checkCondition[$get[finalrole]==];true;(empty)];false;$get[finalrole]]} {color:$getVar[mailcolorembed]};{actionRow:{button:$replaceText[$replaceText[$checkContains[$get[finalrole];<@&];true;Create];false;Skip]:1:createfinalmodal_$authorID}} {actionRow:{button:Add/Remove Role:2:addrolesmodal_$authorID}}]
   $setServerVar[mailroles;$get[finalrole]]
   $onlyIf[$advancedTextSplit[$get[finalrole];<@&;17]==;{
      "content": "Max. 15 Roles.",
      "reply": {
         "messageReference": "$interactionData[message.id]"
      }
   }]
   $let[finalrole;$replaceText[$replaceText[$checkCondition[$charCount[$get[semifinalrole]]<9];true;];false;$get[semifinalrole]]]
   $let[semifinalrole;$replaceText[$replaceText[$checkContains[$getServerVar[mailroles];$advancedTextSplit[$interactionData[values[0]];_;2]];true;$replaceText[$getServerVar[mailroles];<@&$advancedTextSplit[$interactionData[values[0]];_;2]>;]];false;$get[role]]]
   $let[role; $getServerVar[mailroles] <@&$advancedTextSplit[$interactionData[values[0]];_;2]>]
   $interactionDeferUpdate
   $onlyIf[$roleExists[$advancedTextSplit[$interactionData[values[0]];_;2]]!=false;{
      "content": "Role \`$advancedTextSplit[$interactionData[values[0]];_;2]\` not exists.",
      "options": {
         "interaction": true
      }
   }]
   $onlyIf[$advancedTextSplit[$interactionData[values[0]];_;3]==$interactionData[author.id];]
   $onlyIf[$advancedTextSplit[$interactionData[values[0]];_;1]==triggerroles;]
   $onlyIf[$getServerVar[mailmaincategoryid]!=;{
      "content": "Cannot process this action.",
      "ephemeral": true,
      "options": {
         "interaction": true
      }
   }]
   $onlyPerms[manageserver;{
      "content": "Missing Permission, **Manage Server** - User",
      "ephemeral": true,
      "options": {
         "interaction": true
      }
   }]`
},
{
   type: "interaction",
   prototype: "button",
   code: `$interactionEdit[Successful created.
Use \`modmail-options\` to see option or edit previously settings.
\`\`\`
- modmail-answer | Answer the Modmail //if "allow send message" feature disabled
- modmail-close  | Close the Modmail
\`\`\`]
$setServerVar[mailtypecreate;$getServerVar[mailtypecreate]]
$setServerVar[mailstatusrecorddata;0]
$setServerVar[mailstatustranscript;0]
$setServerVar[mailstatusdelete;0]
$setServerVar[mailstatusroles;1]
$setServerVar[mailstatussend;1]
$setServerVar[mailstatusdm;1]
$setServerVar[mailstatus;1]
   $onlyIf[$checkContains[$userPerms[$clientID;, ;$guildID];managechannel;viewchannel;sendmessage;managemessages;embedlinks;attachfiles;readmessagehistory;externalemojis]==true;{ 
      "content": "<@$authorID>, Missing some Permissions - <@$clientID> :: \`View Channel, Send Message, Manage Channels, Manage Messages, Attach Files, Embed Links, Read Message History, External Emojis\`",
      "options": {
         "interaction": true
      }
   }]
   $interactionEdit[Creating Modmail..]
   $interactionDeferUpdate
   $onlyIf[$getServerVar[mailmaincategoryid]!=;{
      "content": "Cannot process this action.",
      "ephemeral": true,
      "options": {
         "interaction": true
      }
   }]
   $onlyPerms[manageserver;{
      "content": "Missing Permission, **Manage Server** - User",
      "ephemeral": true,
      "options": {
         "interaction": true
      }
   }]
   $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]
   $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==createfinalmodal;]`
}]