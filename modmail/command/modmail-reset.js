module.exports = {
   name: "modmail-reset",
   code: `$editMessage[$get[id];Reseted.]
   $setServerVar[mailtypecreate;$getVar[mailtypecreate]]
   $setServerVar[mailstatus;0]
   $setServerVar[mailstatussend;0]
   $setServerVar[mailstatusdm;0]
   $setServerVar[mailstatusrecorddata;0]
   $setServerVar[mailstatustranscript;0]
   $setGlobalUserVar[mailmainserverid;;$clientID]
   $setServerVar[mailroles;]
   $setServerVar[mailmessage;]
   $setServerVar[mailkeepcategoryid;]
   $setServerVar[mailmaincategoryid;]
   $let[id;$sendMessage[...;yes]]
   $onlyIf[$getServerVar[mailmaincategoryid]$getServerVar[mailmessage]!=;Already reset!]
   $onlyPerms[manageserver;Missing Permission, **Manage Server** - User]`
}