 module.exports = [{
 type: "interaction",
 prototype: "button",
 code: `$interactionEdit[;{newEmbed:{author:Modmail} {color:$getVar[mailcolorembed]} {field:Category:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailmaincategoryid]==];true;none];false;#$channelName[$replaceText[$replaceText[$checkCondition[$getServerVar[mailmaincategoryid]==];true;$channelID];false;$getServerVar[mailmaincategoryid]]]]\`:no}
 {field:Status:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatus]==0];true;❌];false;✅]\`:yes} {field:Transcript:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatustranscript]==0];true;❌];false;✅]\`:yes}
 {field:Type Create:\`$getServerVar[mailtypecreate]\`:yes}} {newEmbed:
 {field:Record Data:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusrecorddata]==0];true;❌];false;✅]\`:yes} {field:DM Open:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusdm]==0];true;❌];false;✅]\`:yes} {field:Allow Send Message:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatussend]==0];true;❌];false;✅]\`:yes} {field:Ping Roles:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusroles]==0];true;❌];false;✅]\`:yes} {field:Keep Modmail Channel:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusdelete]==0];true;❌];false;✅]\`:yes}
 {color:$getVar[mailcolorembed]} {timestamp}};{actionRow:{button:Status:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatus]==0];true;2];false;3]:mailstatus_$authorID:no} {button:Transcript:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatustranscript]==0];true;2];false;3]:mailtranscript_$authorID:no} {button:Disable:4:maildisable_$authorID:no:✖} {button:More:1:mailadvanceoptions_$authorID:no:🔼}} {actionRow:{button:Record Data:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusrecorddata]==0];true;2];false;3]:mailrecord_$authorID:no} {button:DM Open:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusdm]==0];true;2];false;3]:maildmopen_$authorID:no} {button:Allow Send Message:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatussend]==0];true;2];false;3]:mailsendmessage_$authorID:no}} {actionRow:{button:Ping Roles:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusroles]==0];true;2];false;3]:mailpingroles_$authorID:no} {button:Keep Modmail Channel:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusdelete]==0];true;2];false;3]:mailkeepchannel_$authorID:no}} {actionRow:{selectMenu:modmailmenu:Type Create:1:1:no: {selectMenuOptions:UserID:modmailmenu_userid_$authorID:#$cropText[$authorID;18]} {selectMenuOptions:Timestamp:modmailmenu_timestamp_$authorID:#$cropText[$dateStamp;18]} {selectMenuOptions:Name:modmailmenu_name_$authorID:#$cropText[$username[$authorID];18]} {selectMenuOptions:Discriminator:modmailmenu_discriminator_$authorID:#$discriminator[$authorID]} {selectMenuOptions:Custom:modmailmenu_custom_$authorID:type1-type2}}}]
 $setServerVar[$get[variable];$replaceText[$replaceText[$checkCondition[$getServerVar[$get[variable]]==0];true;1];false;0]]
 $let[variable;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$get[data];mailtranscript;mailstatustranscript];mailrecord;mailstatusrecorddata];maildmopen;mailstatusdm];mailsendmessage;mailstatussend];mailpingroles;mailstatusroles];mailkeepchannel;mailstatusdelete]]
 $interactionDeferUpdate
 $if[$checkCondition[$getServerVar[mailstatusdelete]==0]-$checkCondition[$get[data]==mailkeepchannel]==true-true;{execute:keepmodmailcategoryid}]
 $onlyIf[$checkCondition[$get[data]==mailrecord]-$fileExists[$getVar[mailrecorddatapath]]!=true-false;{
    "content": "There's no file \`$advancedTextSplit[$getVar[mailrecorddatapath];/;3]\` on \`database\` folder. \`./database/???\`",
    "ephemeral": true,
    "options": {
       "interaction": true
    }
 }]
 $onlyIf[$getServerVar[mailmessage]!=;{
    "content": "$getVar[mailerroroptionmessage]",
    "ephemeral": true,
    "options": {
       "interaction": true
    }
 }]
 $onlyIf[$getServerVar[mailmaincategoryid]!=;{
    "content": "$getVar[mailerrorcategorymessage]",
    "ephemeral": true,
    "options": {
       "interaction": true
    }
 }]
 $onlyIf[$checkContains[$get[data];mailstatus;mailtranscript;mailrecord;maildmopen;mailsendmessage;mailpingroles;mailkeepchannel]==true;]
 $let[data;$advancedTextSplit[$interactionData[customId];_;1]]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]
 $suppressErrors`
},
{
 type: "interaction",
 prototype: "button",
 code: `$interactionEdit[;{newEmbed:{author:Modmail} {color:$getVar[mailcolorembed]} {field:Category:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailmaincategoryid]==];true;none];false;#$channelName[$replaceText[$replaceText[$checkCondition[$getServerVar[mailmaincategoryid]==];true;$channelID];false;$getServerVar[mailmaincategoryid]]]]\`:no}
 {field:Status:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatus]==0];true;❌];false;✅]\`:yes} {field:Transcript:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatustranscript]==0];true;❌];false;✅]\`:yes}
 {field:Type Create:\`$getServerVar[mailtypecreate]\`:yes}} {newEmbed:
 {field:Record Data:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusrecorddata]==0];true;❌];false;✅]\`:yes} {field:DM Open:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusdm]==0];true;❌];false;✅]\`:yes} {field:Allow Send Message:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatussend]==0];true;❌];false;✅]\`:yes} {field:Ping Roles:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusroles]==0];true;❌];false;✅]\`:yes} {field:Keep Modmail Channel:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusdelete]==0];true;❌];false;✅]\`:yes}
 {color:$getVar[mailcolorembed]} {timestamp}};{actionRow:{button:Status:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatus]==0];true;2];false;3]:mailstatus_$authorID:no} {button:Transcript:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatustranscript]==0];true;2];false;3]:mailtranscript_$authorID:no} {button:Disable:4:maildisable_$authorID:no:✖} {button:More:1:mailadvanceoptions_$authorID:no:🔼}} {actionRow:{button:Record Data:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusrecorddata]==0];true;2];false;3]:mailrecord_$authorID:no} {button:DM Open:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusdm]==0];true;2];false;3]:maildmopen_$authorID:no} {button:Allow Send Message:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatussend]==0];true;2];false;3]:mailsendmessage_$authorID:no}} {actionRow:{button:Ping Roles:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusroles]==0];true;2];false;3]:mailpingroles_$authorID:no} {button:Keep Modmail Channel:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusdelete]==0];true;2];false;3]:mailkeepchannel_$authorID:no}} {actionRow:{selectMenu:modmailmenu:Type Create:1:1:no: {selectMenuOptions:UserID:modmailmenu_userid_$authorID:#$cropText[$authorID;18]} {selectMenuOptions:Timestamp:modmailmenu_timestamp_$authorID:#$cropText[$dateStamp;18]} {selectMenuOptions:Name:modmailmenu_name_$authorID:#$cropText[$username[$authorID];18]} {selectMenuOptions:Discriminator:modmailmenu_discriminator_$authorID:#$discriminator[$authorID]} {selectMenuOptions:Custom:modmailmenu_custom_$authorID:type1-type2}}}]
 $setServerVar[mailstatusdelete;0]
 $setServerVar[mailstatusroles;0]
 $setServerVar[mailstatus;0]
 $setServerVar[mailstatussend;0]
 $setServerVar[mailstatusdm;0]
 $setServerVar[mailstatusrecorddata;0]
 $setServerVar[mailstatustranscript;0]
 $interactionDeferUpdate
 $onlyIf[$fileExists[$getVar[mailrecorddatapath]]!=false;{
    "content": "$getVar[mailerroroptionmessage]\\nError: There's no file \`$advancedTextSplit[$getVar[mailrecorddatapath];/;3]\` on \`database\` folder. \`./database/???\`",
    "ephemeral": true,
    "options": {
       "interaction": true
    }
 }]
 $onlyIf[$checkCondition[$getServerVar[mailstatus]$getServerVar[mailstatussend]$getServerVar[mailstatusdm]$getServerVar[mailstatusrecorddata]$getServerVar[mailstatustranscript]==00000]==false;{
    "content": "Already disable!",
    "ephemeral": true,
    "options": {
       "interaction": true
    }
 }]
 $onlyIf[$getServerVar[mailmaincategoryid]!=;{
    "content": "$getVar[mailerrorcategorymessage]",
    "ephemeral": true,
    "options": {
       "interaction": true
    }
 }]
 
 $onlyIf[$get[data]==maildisable;]
 $let[data;$advancedTextSplit[$interactionData[customId];_;1]]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]
 $suppressErrors`
},
{
 name: "modmailmenu",
 type: "interaction",
 prototype: "selectMenu",
 code: `$interactionEdit[;{newEmbed:{author:Modmail} {color:$getVar[mailcolorembed]} {field:Category:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailmaincategoryid]==];true;none];false;#$channelName[$replaceText[$replaceText[$checkCondition[$getServerVar[mailmaincategoryid]==];true;$channelID];false;$getServerVar[mailmaincategoryid]]]]\`:no}
 {field:Status:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatus]==0];true;❌];false;✅]\`:yes} {field:Transcript:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatustranscript]==0];true;❌];false;✅]\`:yes}
 {field:Type Create:\`$getServerVar[mailtypecreate]\`:yes}} {newEmbed:
 {field:Record Data:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusrecorddata]==0];true;❌];false;✅]\`:yes} {field:DM Open:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusdm]==0];true;❌];false;✅]\`:yes} {field:Allow Send Message:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatussend]==0];true;❌];false;✅]\`:yes} {field:Ping Roles:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusroles]==0];true;❌];false;✅]\`:yes} {field:Keep Modmail Channel:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusdelete]==0];true;❌];false;✅]\`:yes}
 {color:$getVar[mailcolorembed]} {timestamp}};{actionRow:{button:Status:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatus]==0];true;2];false;3]:mailstatus_$authorID:no} {button:Transcript:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatustranscript]==0];true;2];false;3]:mailtranscript_$authorID:no} {button:Disable:4:maildisable_$authorID:no:✖} {button:More:1:mailadvanceoptions_$authorID:no:🔼}} {actionRow:{button:Record Data:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusrecorddata]==0];true;2];false;3]:mailrecord_$authorID:no} {button:DM Open:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusdm]==0];true;2];false;3]:maildmopen_$authorID:no} {button:Allow Send Message:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatussend]==0];true;2];false;3]:mailsendmessage_$authorID:no}} {actionRow:{button:Ping Roles:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusroles]==0];true;2];false;3]:mailpingroles_$authorID:no} {button:Keep Modmail Channel:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusdelete]==0];true;2];false;3]:mailkeepchannel_$authorID:no}} {actionRow:{selectMenu:modmailmenu:Type Create:1:1:no: {selectMenuOptions:UserID:modmailmenu_userid_$authorID:#$cropText[$authorID;18]} {selectMenuOptions:Timestamp:modmailmenu_timestamp_$authorID:#$cropText[$dateStamp;18]} {selectMenuOptions:Name:modmailmenu_name_$authorID:#$cropText[$username[$authorID];18]} {selectMenuOptions:Discriminator:modmailmenu_discriminator_$authorID:#$discriminator[$authorID]} {selectMenuOptions:Custom:modmailmenu_custom_$authorID:type1-type2}}}]
 $setServerVar[mailtypecreate;$advancedTextSplit[$interactionData[values[0]];_;2]]
 $interactionDeferUpdate
 $onlyIf[$advancedTextSplit[$interactionData[values[0]];_;2]!=custom;{
    "embeds": "{newEmbed:{author:Modmail} {field:Type Create:\`$replaceText[$replaceText[$checkCondition[$get[check1]==];true;type1];false;$get[check1]]$replaceText[$replaceText[$checkCondition[$get[check2]==];true;];false;-$get[check2]]\`} {color:$getVar[mailcolorembed]} {timestamp}}",
    "components": "{actionRow:{button:Cancel:4:secondresetmodmail_$authorID:no}} {actionRow:{selectMenu:firstselectmailmenu:Type 1:1:1:no:{selectMenuOptions:UserID:modmailmenu_userid_$authorID:#$cropText[$authorID;18]} {selectMenuOptions:Timestamp:modmailmenu_timestamp_$authorID:#$cropText[$dateStamp;18]} {selectMenuOptions:Name:modmailmenu_name_$authorID:#$cropText[$username[$authorID];18]} {selectMenuOptions:Discriminator:modmailmenu_discriminator_$authorID:#$discriminator[$authorID]}}} {actionRow:{selectMenu:secondselectmailmenu:Type 2:1:1:no:{selectMenuOptions:Remove:modmailmenu_remove_$authorID} {selectMenuOptions:UserID:modmailmenu_userid_$authorID:#$cropText[$authorID;18]} {selectMenuOptions:Timestamp:modmailmenu_timestamp_$authorID:#$cropText[$dateStamp;18]} {selectMenuOptions:Name:modmailmenu_name_$authorID:#$cropText[$username[$authorID];18]} {selectMenuOptions:Discriminator:modmailmenu_discriminator_$authorID:#$discriminator[$authorID]}}}",
    "options": {
       "interaction": true
    }
 }]
 $let[check2;$advancedTextSplit[$get[varitype];-;2]]
 $let[check1;$advancedTextSplit[$get[varitype];-;1]]
 $let[varitype;$getServerVar[mailtypecreate]]
 $onlyIf[$getServerVar[mailmaincategoryid]!=;{
    "content": "$getVar[mailerrorcategorymessage]",
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
 $onlyIf[$advancedTextSplit[$interactionData[values[0]];_;3]==$interactionData[author.id];]
 $suppressErrors`
},
{
   name: "keepmodmailcategoryid",
   type: "interaction",
   prototype: "modal",
   code: `$interactionEdit[;{newEmbed:{author:Modmail} {color:$getVar[mailcolorembed]} {field:Category:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailmaincategoryid]==];true;none];false;#$channelName[$replaceText[$replaceText[$checkCondition[$getServerVar[mailmaincategoryid]==];true;$channelID];false;$getServerVar[mailmaincategoryid]]]]\`:no}
   {field:Status:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatus]==0];true;❌];false;✅]\`:yes} {field:Transcript:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatustranscript]==0];true;❌];false;✅]\`:yes}
   {field:Type Create:\`$getServerVar[mailtypecreate]\`:yes}} {newEmbed:
   {field:Record Data:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusrecorddata]==0];true;❌];false;✅]\`:yes} {field:DM Open:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusdm]==0];true;❌];false;✅]\`:yes} {field:Allow Send Message:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatussend]==0];true;❌];false;✅]\`:yes} {field:Ping Roles:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusroles]==0];true;❌];false;✅]\`:yes} {field:Keep Modmail Channel:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusdelete]==0];true;❌];false;✅]\`:yes}
   {color:$getVar[mailcolorembed]} {timestamp}};{actionRow:{button:Status:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatus]==0];true;2];false;3]:mailstatus_$authorID:no} {button:Transcript:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatustranscript]==0];true;2];false;3]:mailtranscript_$authorID:no} {button:Disable:4:maildisable_$authorID:no:✖} {button:More:1:mailadvanceoptions_$authorID:no:🔼}} {actionRow:{button:Record Data:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusrecorddata]==0];true;2];false;3]:mailrecord_$authorID:no} {button:DM Open:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusdm]==0];true;2];false;3]:maildmopen_$authorID:no} {button:Allow Send Message:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatussend]==0];true;2];false;3]:mailsendmessage_$authorID:no}} {actionRow:{button:Ping Roles:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusroles]==0];true;2];false;3]:mailpingroles_$authorID:no} {button:Keep Modmail Channel:$replaceText[$replaceText[$checkCondition[$getServerVar[mailstatusdelete]==0];true;2];false;3]:mailkeepchannel_$authorID:no}} {actionRow:{selectMenu:modmailmenu:Type Create:1:1:no: {selectMenuOptions:UserID:modmailmenu_userid_$authorID:#$cropText[$authorID;18]} {selectMenuOptions:Timestamp:modmailmenu_timestamp_$authorID:#$cropText[$dateStamp;18]} {selectMenuOptions:Name:modmailmenu_name_$authorID:#$cropText[$username[$authorID];18]} {selectMenuOptions:Discriminator:modmailmenu_discriminator_$authorID:#$discriminator[$authorID]} {selectMenuOptions:Custom:modmailmenu_custom_$authorID:type1-type2}}}]
   $setServerVar[mailkeepcategoryid;$textInputValue[id]]
   $setServerVar[mailstatusdelete;1]
 $interactionDeferUpdate
 $onlyIf[$textInputValue[id]!=$getServerVar[mailmaincategoryid];{
   "content": "Already use!",
   "ephemeral": true,
   "options": {
      "interaction": true
   }
}]
 $onlyIf[$hasPermsInChannel[$textInputValue[id];$clientID;managechannel]!=false;{
   "content": "Missing Permission, **Manage Channels** - <@$clientID> <#$textInputValue[id]>",
   "ephemeral": true,
   "options": {
      "interaction": true
   }
}]
$onlyIf[$channelType[$textInputValue[id]]==category;{
   "content": "$getVar[mailerrorcategorymessage]",
   "ephemeral": true,
   "options": {
      "interaction": true
   }
}]
$onlyIf[$channelExists[$textInputValue[id]]!=false;{
   "content": "$getVar[mailerrorcategorymessage]",
   "ephemeral": true,
   "options": {
      "interaction": true
   }
}]
$onlyIf[$getServerVar[mailmaincategoryid]!=;{
   "content": "$getVar[mailerrorcategorymessage]",
   "ephemeral": true,
   "options": {
      "interaction": true
   }
}]
$onlyIf[$isNumber[$textInputValue[id]]!=false;]
$onlyIf[$hasPerms[$guildID;$interactionData[author.id];manageserver]!=false;{
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
 code: `$interactionFollowUp[;{newEmbed:{author:Information} {field:Status:Disable / Enable Modmail:no} {field:Transcript:Record conversations user, including \`message, attachment, time sent\`:no} {field:Type Create:Type create Modmail channel:no} {field:Record Data:Record history Modmail made, then save on Database:no} {field:DM Open:User can DM bot and create modmail channel (if status enabled):no} {field:Allow Send Message:If enable, moderator's don't need execute command \`modmail-answer\` to answer modmail:no} {field:Ping Roles:Ping Roles when there's new modmail:no} {field:Keep Modmail Channel:Keep modmail from \`modmail-close\`:no} {color:$getVar[mailcolorembed]}}  {newEmbed:{field:Target Server:$getGlobalUserVar[mailmainserverid;$clientID]:yes} {field:Target Category:$getServerVar[mailmaincategoryid] - <#$getServerVar[mailmaincategoryid]>:yes} {field:Record Data Path:\`$getVar[mailrecorddatapath]\`:yes} {color:$getVar[mailcolorembed]}} {newEmbed:{field:List Commands:\`\`\`\n- modmail-setup //Create Modmail\n- modmail-options //Options Modmail\n- modmail-reset //Reset Modmail\n\n- modmail-transcript //Transcript Logs\n\n- modmail-answer //Answer the Modmail (if "allow send message" feature disabled)\n- modmail-close //Close the Modmail\n\`\`\`:no} {color:$getVar[mailcolorembed]}} {newEmbed:{field:Welcome Message:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailmessage]==];true;(empty)];false;$cropText[$getServerVar[mailmessage];1024]]\`:yes} {field:Whitelist Roles:$replaceText[$replaceText[$checkCondition[$charCount[$getServerVar[mailroles]]<9];true;(empty)];false;$getServerVar[mailroles]]:yes} {footer:No Preview Embed} {color:$getVar[mailcolorembed]} {timestamp}};{actionRow:{button:Cancel:4:secondresetmodmail_$authorID:no}} {actionRow:{button:Edit Message:1:editstartmodal_$authorID:no} {button:Add/Remove Role:3:editrolesmodal_$authorID}}]
 $interactionDefer
 $onlyIf[$getServerVar[mailmaincategoryid]!=;{
    "content": "$getVar[mailerrorcategorymessage]",
    "ephemeral": true,
    "options": {
       "interaction": true
    }
 }]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==mailadvanceoptions;]`
},
{
   name: "keepmodmailcategoryid",
   type: "awaited",
   code: `$interactionModal[Second Category ID;keepmodmailcategoryid;{actionRow:{textInput:Category ID:2:id:yes:Required to move channels to second category.:18:19$nonEscape[$replaceText[$replaceText[$checkCondition[$getServerVar[mailkeepcategoryid]==];true;];false;:$getServerVar[mailkeepcategoryid]]]}}]`
},
{
   type: "interaction",
   prototype: "button",
   code: `$if[$advancedTextSplit[$interactionData[customId];_;1]==editrolesmodal;{execute:starteditroles};]
   $if[$advancedTextSplit[$interactionData[customId];_;1]==editstartmodal;{execute:starteditmessage};]
   $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]`
},
{
   name: "starteditmessage",
   type: "awaited",
   code: `$interactionModal[Options;anotherfinalstartmodal;{actionRow:{textInput:Welcome Message:2:startmodal-message:yes:Message:1:2000:$getServerVar[mailmessage]}}]
   $onlyIf[$getServerVar[mailmaincategoryid]!=;{
      "content": "$getVar[mailerroroptionmessage]",
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
   name: "starteditroles",
   type: "awaited",
   code: `$interactionModal[Options;anotheraddingrolesmodal;{actionRow:{textInput:Role Name/ID:1:addingrolesmodal-setup:yes:Role Name/ID - Max. 15 Roles:1:100}}]
   $onlyIf[$getServerVar[mailmaincategoryid]!=;{
      "content": "$getVar[mailerroroptionmessage]",
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
   name: "anotherfinalstartmodal",
   type: "interaction",
   prototype: "modal",
   code: `$interactionEdit[;{newEmbed:{author:Information} {field:Status:Disable / Enable Modmail:no} {field:Transcript:Record conversations user, including \`message, attachment, time sent\`:no} {field:Type Create:Type create Modmail channel:no} {field:Record Data:Record history Modmail made, then save on Database:no} {field:DM Open:User can DM bot and create modmail channel (if status enabled):no} {field:Allow Send Message:If enable, moderator's don't need execute command \`modmail-answer\` to answer modmail:no} {field:Ping Roles:Ping Roles when there's new modmail:no} {field:Keep Modmail Channel:Keep modmail from \`modmail-close\`:no} {color:$getVar[mailcolorembed]}}  {newEmbed:{field:Target Server:$getGlobalUserVar[mailmainserverid;$clientID]:yes} {field:Target Category:$getServerVar[mailmaincategoryid] - <#$getServerVar[mailmaincategoryid]>:yes} {field:Record Data Path:\`$getVar[mailrecorddatapath]\`:yes} {color:$getVar[mailcolorembed]}} {newEmbed:{field:List Commands:\`\`\`\n- modmail-setup //Create Modmail\n- modmail-options //Options Modmail\n- modmail-reset //Reset Modmail\n\n- modmail-transcript //Transcript Logs\n\n- modmail-answer //Answer the Modmail (if "allow send message" feature disabled)\n- modmail-close //Close the Modmail\n\`\`\`:no} {color:$getVar[mailcolorembed]}} {newEmbed:{field:Welcome Message:\`$replaceText[$replaceText[$checkCondition[$get[message]==];true;(empty)];false;$cropText[$get[message];1024]]\`:yes} {field:Whitelist Roles:$replaceText[$replaceText[$checkCondition[$charCount[$getServerVar[mailroles]]<9];true;(empty)];false;$getServerVar[mailroles]]:yes} {footer:No Preview Embed} {color:$getVar[mailcolorembed]} {timestamp}};{actionRow:{button:Cancel:4:secondresetmodmail_$authorID:no}} {actionRow:{button:Edit Message:1:editstartmodal_$authorID:no} {button:Add/Remove Role:3:editrolesmodal_$authorID}}]
   $setServerVar[mailmessage;$get[message]]
   $let[message;$textInputValue[startmodal-message]]
   $interactionDeferUpdate
   $onlyIf[$getServerVar[mailmaincategoryid]!=;{
      "content": "$getVar[mailerroroptionmessage]",
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
   name: "anotheraddingrolesmodal",
   type: "interaction",
   prototype: "modal",
   code: `$interactionEdit[;{newEmbed:{author:Information} {field:Status:Disable / Enable Modmail:no} {field:Transcript:Record conversations user, including \`message, attachment, time sent\`:no} {field:Type Create:Type create Modmail channel:no} {field:Record Data:Record history Modmail made, then save on Database:no} {field:DM Open:User can DM bot and create modmail channel (if status enabled):no} {field:Allow Send Message:If enable, moderator's don't need execute command \`modmail-answer\` to answer modmail:no} {field:Ping Roles:Ping Roles when there's new modmail:no} {field:Keep Modmail Channel:Keep modmail from \`modmail-close\`:no} {color:$getVar[mailcolorembed]}}  {newEmbed:{field:Target Server:$getGlobalUserVar[mailmainserverid;$clientID]:yes} {field:Target Category:$getServerVar[mailmaincategoryid] - <#$getServerVar[mailmaincategoryid]>:yes} {field:Record Data Path:\`$getVar[mailrecorddatapath]\`:yes} {color:$getVar[mailcolorembed]}} {newEmbed:{field:List Commands:\`\`\`\n- modmail-setup //Create Modmail\n- modmail-options //Options Modmail\n- modmail-reset //Reset Modmail\n\n- modmail-transcript //Transcript Logs\n\n- modmail-answer //Answer the Modmail (if "allow send message" feature disabled)\n- modmail-close //Close the Modmail\n\`\`\`:no} {color:$getVar[mailcolorembed]}} {newEmbed:{field:Welcome Message:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailmessage]==];true;(empty)];false;$cropText[$getServerVar[mailmessage];1024]]\`:yes} {field:Whitelist Roles:$replaceText[$replaceText[$checkCondition[$charCount[$get[finalrole]]<9];true;(empty)];false;$get[finalrole]]:yes} {footer:No Preview Embed} {color:$getVar[mailcolorembed]} {timestamp}};{actionRow:{button:Cancel:4:secondresetmodmail_$authorID:no}} {actionRow:{button:Edit Message:1:editstartmodal_$authorID:no} {button:Add/Remove Role:3:editrolesmodal_$authorID}}]
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
   $if[$isNumber[$textInputValue[addingrolesmodal-setup]]==true;;{execute:anotherawaitaddingrolesmodal-false}]
   $onlyIf[$checkContains[$textInputValue[addingrolesmodal-setup];$guildID]!=true;]
   $onlyIf[$getServerVar[mailmaincategoryid]!=;{
      "content": "$getVar[mailerroroptionmessage]",
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
   name: "anotherawaitaddingrolesmodal-false",
   type: "awaited",
   code: `$interactionEdit[;{newEmbed:{description:<@$clientID> found $replaceText[$replaceText[$checkCondition[$advancedTextSplit[$get[role];2.;2]==];true;];false;some] Roles that contain name \`$textInputValue[addingrolesmodal-setup]\`.} {color:$getVar[mailcolorembed]} {timestamp}};{actionRow:{selectMenu:anotherfinaladdingroles:List Roles:1:1:$nonEscape[{selectMenuOptions:1. $get[cacherole]} $get[secondfinal]]}}]
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
      "content": "$getVar[mailerroroptionmessage]",
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
   name: "anotherfinaladdingroles",
   type: "interaction",
   prototype: "selectMenu",
   code: `$interactionEdit[;{newEmbed:{author:Information} {field:Status:Disable / Enable Modmail:no} {field:Transcript:Record conversations user, including \`message, attachment, time sent\`:no} {field:Type Create:Type create Modmail channel:no} {field:Record Data:Record history Modmail made, then save on Database:no} {field:DM Open:User can DM bot and create modmail channel (if status enabled):no} {field:Allow Send Message:If enable, moderator's don't need execute command \`modmail-answer\` to answer modmail:no} {field:Ping Roles:Ping Roles when there's new modmail:no} {field:Keep Modmail Channel:Keep modmail from \`modmail-close\`:no} {color:$getVar[mailcolorembed]}}  {newEmbed:{field:Target Server:$getGlobalUserVar[mailmainserverid;$clientID]:yes} {field:Target Category:$getServerVar[mailmaincategoryid] - <#$getServerVar[mailmaincategoryid]>:yes} {field:Record Data Path:\`$getVar[mailrecorddatapath]\`:yes} {color:$getVar[mailcolorembed]}} {newEmbed:{field:List Commands:\`\`\`\n- modmail-setup //Create Modmail\n- modmail-options //Options Modmail\n- modmail-reset //Reset Modmail\n\n- modmail-transcript //Transcript Logs\n\n- modmail-answer //Answer the Modmail (if "allow send message" feature disabled)\n- modmail-close //Close the Modmail\n\`\`\`:no} {color:$getVar[mailcolorembed]}} {newEmbed:{field:Welcome Message:\`$replaceText[$replaceText[$checkCondition[$getServerVar[mailmessage]==];true;(empty)];false;$cropText[$getServerVar[mailmessage];1024]]\`:yes} {field:Whitelist Roles:$replaceText[$replaceText[$checkCondition[$charCount[$get[finalrole]]<9];true;(empty)];false;$get[finalrole]]:yes} {footer:No Preview Embed} {color:$getVar[mailcolorembed]} {timestamp}};{actionRow:{button:Cancel:4:secondresetmodmail_$authorID:no}} {actionRow:{button:Edit Message:1:editstartmodal_$authorID:no} {button:Add/Remove Role:3:editrolesmodal_$authorID}}]
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
      "content": "$getVar[mailerroroptionmessage]",
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
 name: "firstselectmailmenu",
 type: "interaction",
 prototype: "selectMenu",
 code: `$interactionEdit[;{newEmbed:{author:Modmail} {field:Type Create:\`$get[final]\`} {color:$getVar[mailcolorembed]} {timestamp}};{actionRow:{button:Cancel:4:secondresetmodmail_$authorID:no}} {actionRow:{selectMenu:firstselectmailmenu:Type 1:1:1:no:{selectMenuOptions:UserID:modmailmenu_userid_$authorID:#$cropText[$authorID;18]} {selectMenuOptions:Timestamp:modmailmenu_timestamp_$authorID:#$cropText[$dateStamp;18]} {selectMenuOptions:Name:modmailmenu_name_$authorID:#$cropText[$username[$authorID];18]} {selectMenuOptions:Discriminator:modmailmenu_discriminator_$authorID:#$discriminator[$authorID]}}} {actionRow:{selectMenu:secondselectmailmenu:Type 2:1:1:no:{selectMenuOptions:Remove:modmailmenu_remove_$authorID} {selectMenuOptions:UserID:modmailmenu_userid_$authorID:#$cropText[$authorID;18]} {selectMenuOptions:Timestamp:modmailmenu_timestamp_$authorID:#$cropText[$dateStamp;18]} {selectMenuOptions:Name:modmailmenu_name_$authorID:#$cropText[$username[$authorID];18]} {selectMenuOptions:Discriminator:modmailmenu_discriminator_$authorID:#$discriminator[$authorID]}}}]
 $setServerVar[mailtypecreate;$get[final]]
 $let[final;$advancedTextSplit[$interactionData[values[0]];_;2]$replaceText[$replaceText[$checkCondition[$get[check2]==];true;];false;-$get[check2]]]
 $let[check2;$advancedTextSplit[$get[varitype];-;2]]
 $let[check1;$advancedTextSplit[$get[varitype];-;1]]
 $let[varitype;$getServerVar[mailtypecreate]]
 $interactionDeferUpdate
 $onlyIf[$getServerVar[mailmaincategoryid]!=;{
    "content": "$getVar[mailerrorcategorymessage]",
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
 $onlyIf[$advancedTextSplit[$interactionData[values[0]];_;3]==$interactionData[author.id];]
 $suppressErrors`
},
{
 name: "secondselectmailmenu",
 type: "interaction",
 prototype: "selectMenu",
 code: `$interactionEdit[;{newEmbed:{author:Modmail} {field:Type Create:\`$get[final]\`} {color:$getVar[mailcolorembed]} {timestamp}};{actionRow:{button:Cancel:4:secondresetmodmail_$authorID:no}} {actionRow:{selectMenu:firstselectmailmenu:Type 1:1:1:no:{selectMenuOptions:UserID:modmailmenu_userid_$authorID:#$cropText[$authorID;18]} {selectMenuOptions:Timestamp:modmailmenu_timestamp_$authorID:#$cropText[$dateStamp;18]} {selectMenuOptions:Name:modmailmenu_name_$authorID:#$cropText[$username[$authorID];18]} {selectMenuOptions:Discriminator:modmailmenu_discriminator_$authorID:#$discriminator[$authorID]}}} {actionRow:{selectMenu:secondselectmailmenu:Type 2:1:1:no:{selectMenuOptions:Remove:modmailmenu_remove_$authorID}  {selectMenuOptions:UserID:modmailmenu_userid_$authorID:#$cropText[$authorID;18]} {selectMenuOptions:Timestamp:modmailmenu_timestamp_$authorID:#$cropText[$dateStamp;18]} {selectMenuOptions:Name:modmailmenu_name_$authorID:#$cropText[$username[$authorID];18]} {selectMenuOptions:Discriminator:modmailmenu_discriminator_$authorID:#$discriminator[$authorID]}}}]
 $setServerVar[mailtypecreate;$get[final]]
 $let[final;$get[check1]$replaceText[$replaceText[$checkCondition[$advancedTextSplit[$interactionData[values[0]];_;2]==remove];true;];false;-$advancedTextSplit[$interactionData[values[0]];_;2]]]
 $let[check2;$advancedTextSplit[$get[varitype];-;2]]
 $let[check1;$advancedTextSplit[$get[varitype];-;1]]
 $let[varitype;$getServerVar[mailtypecreate]]
 $interactionDeferUpdate
 $onlyIf[$getServerVar[mailmaincategoryid]!=;{
    "content": "$getVar[mailerrorcategorymessage]",
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
 $onlyIf[$advancedTextSplit[$interactionData[values[0]];_;3]==$interactionData[author.id];]
 $suppressErrors`
}]