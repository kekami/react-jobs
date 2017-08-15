var AddItemDialog=function(t){Dialog.call(this,t,{title:Strings.translateString("Add Item"),dynamicHeight:!1,closeButtonEnabled:!0,overlayDialog:!0,hideButtons:!0,additionalHeaderClasses:["icon"]})};AddItemDialog.prototype=Object.create(Dialog.prototype),AddItemDialog.prototype.constructor=AddItemDialog,AddItemDialog.prototype.addCard=function(t){var e=LPTools.createElement("div","col-3"),a=LPTools.createElement("button",t.classes?[].concat("addItemCard",t.classes):"addItemCard");return e.appendChild(a),t.icon&&a.appendChild(t.icon),a.appendChild(LPTools.createElement("span","addItemCardName",t.name)),t.parent.append(e),a},AddItemDialog.prototype.initialize=function(){Dialog.prototype.initialize.apply(this,arguments);var t=this,e=$("#addItemOptions"),a=$("#addItemCustomOptionsContainer").slideUp(),n=$("#addItemCustomOptions"),o=$("#addItemCustomOptionsLabel"),i={postSetup:function(){t.close()}};o.bind("click",function(){a.slideToggle(),o.toggleClass("open")}),bg.get("RecordTypeConfig").types.forEach(function(a){a.composite||t.addCard({parent:e,name:a.name,classes:a.id}).addEventListener("click",function(){switch(a.recordType){case"Account":dialogs.site.open(i);break;default:dialogs.note.open($.extend(i,{defaultData:{notetype:a.recordType,language:Note.prototype.isValidLanguage(navigator.language)?navigator.language:"en-US"}}))}})});var s=function(e){var a=t.addCard({parent:n,name:e.title,classes:"custom"}),o=LPTools.createElement("button","customTemplateDeleteButton");return o.appendChild(LPTools.createElement("i","fa fa-trash")),a.appendChild(o),a.addEventListener("click",function(){dialogs.note.open($.extend(i,{defaultData:{notetype:"Custom_"+e.id}}))}),o.addEventListener("click",function(t){t.stopPropagation(),dialogs.confirmation.open({title:Strings.translateString("Confirm Deletion"),text:[Strings.translateString("Are you sure you want to delete %1?",e.title),Strings.translateString("Any notes you created using this template will not be deleted.")],nextButtonText:Strings.translateString("Continue"),backButtonText:Strings.translateString(Strings.Vault.CANCEL),handler:function(){LPRequest.makeRequest(LPProxy.deleteCustomNoteTemplate,{params:{id:e.id},success:function(){var t=a.parentElement;t.parentElement.removeChild(t)},requestSuccessOptions:{closeDialog:!1}})}})}),a};LPProxy.getCustomNoteTemplates().forEach(s),Topics.get(Topics.SECURENOTE_TEMPLATE_ADDED).subscribe(function(t){var e=s(t);setTimeout(function(){e.focus()},0)});var d=this.addCard({parent:n.parent(),name:Strings.translateString("New custom item type"),icon:LPTools.createElement("i","fa fa-plus")});$(d).addClass("customTemplateAddButton").bind("click",function(){dialogs.customNoteTemplate.open()})};