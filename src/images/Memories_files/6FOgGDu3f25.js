if (self.CavalryLogger) { CavalryLogger.start_js(["QG0Xl"]); }

__d("ComposedEntityMutabilityToName",[],(function(a,b,c,d,e,f){e.exports={0:"MUTABLE",1:"IMMUTABLE",2:"SEGMENTED"}}),null);
__d("ComposedEntityTypeToName",[],(function(a,b,c,d,e,f){e.exports={0:"MENTION",1:"LINK",2:"IMAGE",3:"VIDEO",4:"EMOTICON",5:"TOKEN",6:"HASHTAG",7:"IMPLICIT_LINK",8:"EMBED",9:"EMOJI",10:"MATH",11:"HIGHLIGHT",12:"DELIGHT",13:"TEMPLATE_VARIABLE",14:"ASSISTANT_TYPEAHEAD"}}),null);
__d("MessengerMuteUtils.bs",["fbt","formatDate","DateStrings"],(function(a,b,c,d,e,f,g){"use strict";function a(a){if(a>0)if(a<86401)return;else{var c=new Date(a*1e3).getDay(),d=c===new Date().getDay(),e=c===new Date().getDay()+1;if(e)return g._("Off until {time} tomorrow",[g._param("time",b("formatDate")(a,"g:ia"))]);else if(d)return g._("Off until {time}",[g._param("time",b("formatDate")(a,"g:ia"))]);else return g._("Off until {time} {weekday name}",[g._param("time",b("formatDate")(a,"g:ia")),g._param("weekday name",b("DateStrings").getWeekdayName(c))])}else if(a===-1)return g._("Off indefinitely");else return}function c(a,b){if(a)if(b)return g._("Unmute notifications");else return g._("Mute notifications");else if(b)return g._("Unmute conversation");else return g._("Mute conversation")}f.mutedUntilLabel=a;f.muteActionLabel=c}),null);
__d("ComposedEntityMutability",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({MUTABLE:0,IMMUTABLE:1,SEGMENTED:2})}),null);
__d("MessengerConstants",[],(function(a,b,c,d,e,f){"use strict";a={NEW_THREAD_KEY:"new",BROWSER_EXTENSIONS_DIALOG_DIMENSIONS:{HEIGHT:604,WIDTH:405}};e.exports=a}),null);
__d("MessengerEditorStateManager",["CacheStorage","ComposedEntityMutability","ComposedEntityMutabilityToName","ComposedEntityTypeToName","CurrentUser","DraftEntityInstance","EditorState","FBLogger","LogHistory","MessengerConstants","SelectionState","decodeBlocks","encodeBlocks","mapObject"],(function(a,b,c,d,e,f){"use strict";var g,h=b("ComposedEntityMutability").IMMUTABLE,i=b("LogHistory").getInstance("messenger_editor_state_manager"),j=new(b("CacheStorage"))("localstorage","msgdraft:"),k=new(b("CacheStorage"))("memory"),l=!1,m;a={get:function(a){if(a==null)return this._getEmptyEditorState();if(a===b("MessengerConstants").NEW_THREAD_KEY)return m||this._getEmptyEditorState();var c=j.get(this._getKey(a),!1);l&&(c?(k.set(a,c),j.remove(this._getKey(a))):c=k.get(a,!1));if(!c)return this._getEmptyEditorState();a=c.encodedBlocks;var d=(g||(g=b("mapObject")))(a.entityMap,function(a,c){return new(b("DraftEntityInstance"))({type:b("ComposedEntityTypeToName")[a.type],mutability:b("ComposedEntityMutabilityToName")[h],data:a.data})});a=b("decodeBlocks")(a.blocks,d);d=b("EditorState").createWithContent(a);return b("EditorState").acceptSelection(d,new(b("SelectionState"))(c.selection))},set:function(a,c){if(a===b("MessengerConstants").NEW_THREAD_KEY){m=c;return}var d=b("encodeBlocks")(c.getCurrentContent());c=c.getSelection();var e=c.toJS(),f=l?k:j;f=f.set(this._getKey(a),{encodedBlocks:d,selection:e});f||(this._logWriteError(a),this._switchToMemoryStore(a,d,c))},_getKey:function(a){return b("CurrentUser").getID()+":"+a},_logWriteError:function(a){var c=j.getLastSetExceptionMessage(),d=j.getStorageKeyCount();b("FBLogger")("messenger_dot_com").warn("Fail to write to MessengerEditorState %s  %s",c,d);i.debug("set_editor_state_fail",JSON.stringify({threadID:a,error:c,keysCount:d}))},_switchToMemoryStore:function(a,c,d){if(!l){b("FBLogger")("messenger_dot_com").warn("Switching to MemoryStorage");i.debug("Switching to memoryStorage");l=!0;d=d.toJS();k.set(a,{encodedBlocks:c,selection:d})}},_getEmptyEditorState:function(){var a=b("EditorState").createEmpty();return b("EditorState").forceSelection(a,a.getSelection())}};e.exports=a}),null);
__d("DebouncedMentionsTextEditor.react",["AbstractMentionsTextEditor.react","clearImmediate","debounce","setImmediate"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c){var d;d=a.call(this,c)||this;d.__maybeSearch=function(){var a=d.props.editorState,c=a.getSelection();if(c.getHasFocus()&&c.isCollapsed()){var e=a.getCurrentContent();a=d.props;var f=a.mentionsSource,g=a.assistantTypeaheadSource;(f||g)&&(d.$DebouncedMentionsTextEditor1&&b("clearImmediate")(d.$DebouncedMentionsTextEditor1),d.$DebouncedMentionsTextEditor1=b("setImmediate")(function(){f&&f.search(e,c,d.__onShowMentions),g&&g.search(e,c,d.__onShowMentions)}))}};d.__debouncedSearch=b("debounce")(d.__maybeSearch,50);return d}var d=c.prototype;d.componentDidUpdate=function(a){this.props.editorState!==a.editorState&&this.__debouncedSearch()};d.componentWillUnmount=function(){this.$DebouncedMentionsTextEditor1&&b("clearImmediate")(this.$DebouncedMentionsTextEditor1),a.prototype.componentWillUnmount.call(this)};return c}(b("AbstractMentionsTextEditor.react"));e.exports=a}),null);
__d("MessengerContextualDialog.react",["cx","AccessibleLayer","ContextualLayerAutoFlipHorizontal","ContextualLayerUpdateOnScroll","LayerHideOnEscape","ReactAbstractContextualDialog","ReactLayer"],(function(a,b,c,d,e,f,g){"use strict";a=12;c=b("ReactLayer").createClass(b("ReactAbstractContextualDialog").createSpec({addedBehaviors:[b("ContextualLayerAutoFlipHorizontal"),b("ContextualLayerUpdateOnScroll"),b("LayerHideOnEscape"),b("AccessibleLayer")],displayName:"MessengerContextualDialog",shouldSetARIAProperties:!1,theme:{wrapperClassName:"_1r_9",arrowDimensions:{offset:a,length:16}}}));e.exports=c}),null);
__d("MessengerPopoverMenu.react",["cx","ContextualDialogArrow","ContextualLayerAutoFlip","ContextualLayerUpdateOnScroll","PopoverMenu.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.showPopover=function(){this.refs.menu&&this.refs.menu.showPopover()};d.render=function(){var a=this.props,c=a.children,d=a.className,e=a.isOpen;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","className","isOpen"]);c=h.Children.only(c);return h.jsx(b("PopoverMenu.react"),babelHelpers["extends"]({className:b("joinClasses")(d,!a.disableArrowKeyActivation||e?"_150g":""),enableActivationOnEnter:!0,layerBehaviors:[b("ContextualLayerAutoFlip"),b("ContextualLayerUpdateOnScroll"),b("ContextualDialogArrow")]},a,{ref:"menu",children:c}))};return c}(h.PureComponent);e.exports=a}),null);
__d("MessengerRadioButtonReact.bs",["cx","React","bs_caml_option","XUIRadioInput.react"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");function a(a){var c={checked:a.checked,className:"__rm",disabled:a.disabled,name:a.name,onChange:a.onChange,value:a.value};a=b("bs_caml_option").undefined_to_opt(a.id);a!==void 0&&(c.id=b("bs_caml_option").valFromOption(a));return h.createElement(b("XUIRadioInput.react"),c)}f.make=a}),null);
__d("MessengerRadioList.react",["invariant","InputLabel_DEPRECATED.react","InputLabelLabel_DEPRECATED.react","MessengerRadioButtonReact.bs","React","prop-types"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=function(a){a.target instanceof HTMLInputElement||g(0,761),c.props.onSelect&&c.props.onSelect(c.props.value)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){return h.jsx("li",{className:this.props.className,children:h.jsxs(b("InputLabel_DEPRECATED.react"),{display:"inline",children:[h.jsx(b("MessengerRadioButtonReact.bs").make,{checked:this.props.selectedValue===this.props.value,disabled:!!this.props.disabled,name:this.props.name,onChange:this.$1,value:this.props.value}),h.jsx(b("InputLabelLabel_DEPRECATED.react"),{children:this.props.children})]})})};return c}(h.Component);a.propTypes={disabled:(c=b("prop-types")).bool,name:c.string,onSelect:c.func,selectedValue:c.any,value:c.any};d=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.render=function(){var a=h.Children.map(this.props.children,function(a){return h.cloneElement(a,{name:this.props.name,onSelect:this.props.onValueChange,selectedValue:this.props.selectedValue})},this);return h.jsx("ul",babelHelpers["extends"]({},this.props,{name:null,children:a}))};return b}(h.Component);d.propTypes={name:c.string,onValueChange:c.func,selectedValue:c.any};d.Item=a;e.exports=d}),null);
__d("MercuryThreadTimestampReact.re",["MercuryThreadTimestampReact.bs"],(function(a,b,c,d,e,f){(function(a){return null});a=b("MercuryThreadTimestampReact.bs").make;f.make=a}),null);
__d("MessengerAddIconSVGReact.bs",["React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var b=a.label,c=a.className;a=a.customColor;return g.jsx("div",{children:g.jsxs("svg",{children:[g.jsx("title",{children:b}),g.jsx("path",{clipRule:"evenodd",d:"M16,0 V32 M0,16 H32",fill:"none",fillRule:"evenodd",stroke:a,strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2"})],viewBox:"-8 -8 48 48"}),className:c})}c=a;d=a;f.make=c;f.jsComponent=d}),null);
__d("MessengerContextualDialogReact.bs",["bs_curry","ReasonReact.bs","bs_js_null_undefined","MessengerContextualDialog.react"],(function(a,b,c,d,e,f){"use strict";function g(a){if(a!==void 0)switch(a){case 0:return"center";case 1:return"left";case 2:return"right"}}function a(a,c,d,e,f,h,i,j,k){if(d!==void 0){var l=d;d=function(a){return b("bs_js_null_undefined").fromOption(b("bs_curry")._1(l,0))}}else d=function(a){return};return b("ReasonReact.bs").wrapJsForReason(b("MessengerContextualDialog.react"),{alignment:b("bs_js_null_undefined").fromOption(g(a)),className:b("bs_js_null_undefined").fromOption(c),contextRef:d,offsetY:b("bs_js_null_undefined").fromOption(f),onBlur:b("bs_js_null_undefined").fromOption(e),onToggle:h,shown:b("bs_js_null_undefined").fromOption(i),width:b("bs_js_null_undefined").fromOption(j)},k)}f.stringOfAlignment=g;f.make=a}),null);
__d("MessengerDeliveryReceipt.bs",["bs_belt_Option","bs_belt_MapString"],(function(a,b,c,d,e,f){"use strict";function a(a,c){return b("bs_belt_Option").getWithDefault(b("bs_belt_MapString").get(a,c),0)}c=b("bs_belt_Option").getWithDefault;f.$pipe$question=c;f.getDeliveryTimeOfThread=a}),null);
__d("MessengerDialogs.re",["bs_curry","MessengerDialogs.bs"],(function(a,b,c,d,e,f){a=b("MessengerDialogs.bs").showDialog;f.showDialog=a;c=function(a,c){a=b("bs_curry")._2(b("MessengerDialogs.bs").removeDialog,a.dialog,c);return a};f.removeDialog=c;d=b("MessengerDialogs.bs").removeAllDialogs;f.removeAllDialogs=d}),null);
__d("MessengerThreadListLoggerUtil",["MessagingTag","QuickPerformanceLogger"],(function(a,b,c,d,e,f){"use strict";var g=new Map(),h=1;function i(a,c){return!a||!a.includes(b("MessagingTag").INBOX.toUpperCase())?null:c==null?25296905:25296906}function j(a,b,c){return[].concat(a||[],[b,c]).filter(Boolean).join("_")}function a(a,c,d){var e=i(a,c);if(!e)return;b("QuickPerformanceLogger").markerStart(e,h);g.set(j(a,c,d),h);h++}function c(a,c,d,e){var f=i(a,c);if(!f)return;a=j(a,c,d);c=g.get(a);c!=null&&(b("QuickPerformanceLogger").markerEnd(f,e,c),g["delete"](a))}e.exports={markerStart:a,markerEnd:c}}),null);
__d("MessengerThreadlistWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"3570968522975190"};b.getQueryID=function(){return"903882416717983"};return b}(b("WebGraphQLQueryBase"))}),null);
__d("MessengerGraphQLThreadlistFetcher.bs",["Promise","Utils.bs","gkx","bs_js_dict","BanzaiODS","bs_caml_array","WebGraphQL","bs_caml_format","bs_caml_option","CurrentUser","MercuryServerRequestsConfig","MessengerThreadListLoggerUtil","ChatReliabilityInstrumentation","MessengerServerPayloadTransformer.bs","MessengerThreadlistWebGraphQLQuery"],(function(a,b,c,d,e,f){"use strict";function g(a){b("MessengerThreadListLoggerUtil").markerStart(a.tags,a.timestamp,a.limit);return new(b("MessengerThreadlistWebGraphQLQuery"))({limit:a.limit,before:a.timestamp,tags:a.tags,isWorkUser:b("CurrentUser").isWorkUser(),includeDeliveryReceipts:a.includeDeliveryReceipts,includeSeqID:a.includeSeqID,onlyPinnedThreads:a.onlyPinnedThreads,is_work_teamwork_not_putting_muted_in_unreads:b("gkx")("1105011")})}function h(a,c,d,e){var f=[],g=[],h={},i=[],j={},k={contents:void 0},l={contents:0},m=[];e.forEach(function(e,n){n=b("bs_caml_array").caml_array_get(c,n);var o=b("Utils.bs").optionBoolToBool(b("bs_caml_option").nullable_to_opt(n.onlyPinnedThreads)),p=[],q=[],r=[],s=e.viewer.pending_threads;s==null||(l.contents=s.unseen_count);e.viewer.message_threads.nodes.forEach(function(c){if(c==null)return 0;else{var e=b("MessengerServerPayloadTransformer.bs").transformThread(a,c,d),g=b("MessengerServerPayloadTransformer.bs").transformParticipants(c);g.forEach(function(a){j[a.fbid]=a;return 0});var k;if(e.is_canonical){g=e.other_user_fbid;g==null?k=null:(p.push(g),k=g)}else{g=e.thread_fbid;g==null?k=null:(q.push(g),k=g)}r.push(e.thread_id);f.push(e);if(!(k==null)){g=b("MessengerServerPayloadTransformer.bs").transformReadReceipts(a,c);g!==void 0&&(h[k]=b("bs_caml_option").valFromOption(g))}if(!(k==null)){g=b("MessengerServerPayloadTransformer.bs").transformDeliveryReceipts(c);if(g.length!==0){c=g[0];e.is_canonical?i.push({other_user_fbid:k,thread_fbid:null,time:b("bs_caml_format").caml_float_of_string(c.timestamp_precise)}):i.push({other_user_fbid:null,thread_fbid:k,time:b("bs_caml_format").caml_float_of_string(c.timestamp_precise)})}}if(!(k==null)&&o){m.push(k);return 0}else return 0}});s=e.viewer.message_threads.sync_sequence_id;s==null||(k.contents=b("bs_caml_format").caml_int_of_string(s));if(o)return 0;else{e=n.timestamp;g.push({folder:n.folder,other_user_fbids:p,thread_fbids:q,thread_ids:r,filter:n.filter,limit:e==null?n.limit:n.limit-1|0});return 0}});return{threads:f,ordered_threadlists:g,pending_folder_unseen_count:l.contents,roger:h,delivery_receipts:i,participants:b("bs_js_dict").values(j),sequence_id:k.contents,pinned_thread_ids:m}}function i(a,c){a.forEach(function(a){b("MessengerThreadListLoggerUtil").markerEnd(a.tags,a.timestamp,a.limit,c);return 0});return 0}function a(a,c,d,e){var f=c.map(g);return b("Promise").all(b("WebGraphQL").execAll(f,{actorID:d?a:null,batchName:"MessengerGraphQLThreadlistFetcher",msgrRegion:b("MercuryServerRequestsConfig").msgrRegion,allowCrossPageTransition:!0}))["catch"](function(a){b("BanzaiODS").bumpEntityKey(2966,"messenger_webgraphql",e+".failure");i(c,"FAIL");b("ChatReliabilityInstrumentation").logERROR("fetch_thread_list_fail");return b("Promise").reject(a)}).then(function(f){b("BanzaiODS").bumpEntityKey(2966,"messenger_webgraphql",e+".success");i(c,"SUCCESS");return h(a,c,d,f)})}f._getQuery=g;f.transform=h;f.markerEnd=i;f.fetchAll=a}),null);
__d("MessengerParticipants.re",["bs_curry","MessengerParticipants.bs"],(function(a,b,c,d,e,f){a=function(a,c){a=b("bs_curry")._2(b("MessengerParticipants.bs").get,a,c);return a};f.get=a;c=b("MessengerParticipants.bs").getNow;f.getNow=c;d=function(a,c){a=b("bs_curry")._2(b("MessengerParticipants.bs").getMulti,a,c);return a};f.getMulti=d;e=function(a,c){a=b("bs_curry")._2(b("MessengerParticipants.bs").getMultiEager,a,c);return a};f.getMultiEager=e;a=function(a,c){a=b("bs_curry")._2(b("MessengerParticipants.bs").getMultiEagerMap,a,c);return a};f.getMultiEagerMap=a;c=b("MessengerParticipants.bs").removeCallback;f.removeCallback=c}),null);
__d("MessengerSignals.re",["MessengerSignals.bs"],(function(a,b,c,d,e,f){a=b("MessengerSignals.bs").resize;f.resize=a}),null);
__d("MessengerThreadImageReact.re",["MessengerThreadImageReact.bs"],(function(a,b,c,d,e,f){a=b("MessengerThreadImageReact.bs").jsComponent;f.jsComponent=a}),null);
__d("MercuryShareAttachmentSnippet.react",["MercuryShareStyleMap","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("MercuryShareStyleMap").getStyleFactory(this.props.attachment);if(a&&a.factory&&!!a.factory.getSnippetComponent){var c=a.factory.getSnippetComponent();return g.jsx(c,babelHelpers["extends"]({},this.props,{attachment:a.attachment}))}return null};return c}(g.Component);e.exports=a}),null);
__d("MercuryAttachmentSnippet.react",["cx","fbt","ix","EmoticonsList","Image.react","MercuryAttachment","MercuryAttachmentSnippetRenderer","MercuryAttachmentSnippetType","MercuryIDs","MercuryShareAttachmentSnippet.react","MessengerParticipants.re","MessengerTextWithEmoticons.react","React","joinClasses"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React");c=b("React");var k=c.useEffect,l=c.useState;function a(a){var c=a.thread;a=a.viewer;var d=c.snippet_sender,e=l(function(){return d!=null?b("MessengerParticipants.re").getNow(d):null}),f=e[0],g=e[1],n=c.snippet_attachments,o=m(d,a);k(function(){if(d==null)return;var a=b("MessengerParticipants.re").get(d,function(a){return g(a)});return function(){a&&b("MessengerParticipants.re").removeCallback(a)}},[c,a,f,d]);e=C();a=b("MercuryAttachmentSnippetRenderer").getAttachmentSnippetType(n);switch(a){case b("MercuryAttachmentSnippetType").PHOTO:return p(e);case b("MercuryAttachmentSnippetType").GIF:return r(e);case b("MercuryAttachmentSnippetType").VIDEO:return s(e);case b("MercuryAttachmentSnippetType").AUDIO_CLIP:return t(e);case b("MercuryAttachmentSnippetType").LIKE_STICKER:return v(e);case b("MercuryAttachmentSnippetType").STICKER:return w(e);case b("MercuryAttachmentSnippetType").SHARE:return x(e);case b("MercuryAttachmentSnippetType").GIFT:return y(e);case b("MercuryAttachmentSnippetType").FILE:return q(e);case b("MercuryAttachmentSnippetType").ERROR:return B(e);case b("MercuryAttachmentSnippetType").THIRDPARTYSTICKER:return u(e);default:return z(e)}function p(a){return A(b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").PHOTO,o,a,n))}function q(a){return A(b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").FILE,o,a,n))}function r(a){return A(b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").GIF,o,a,n))}function s(a){return A(b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").VIDEO,o,a))}function t(a){return A(b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").AUDIO_CLIP,o,a))}function u(a){return j.jsx("span",{children:b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").THIRDPARTYSTICKER,o,a)})}function v(a){var d=j.jsx(b("MessengerTextWithEmoticons.react"),{renderEmoticons:!0,text:b("EmoticonsList").symbols.like});if(o)return j.jsx("span",{children:h._("You: {conversation_snippet}",[h._param("conversation_snippet",d)])});else return c.is_canonical?j.jsx("span",{children:h._("{conversation_snippet}",[h._param("conversation_snippet",d)])}):j.jsx("span",{children:h._("{sender name}: {conversation_snippet}",[h._param("sender name",a),h._param("conversation_snippet",d)])})}function w(a){return j.jsx("span",{children:b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").STICKER,o,a)})}function x(a){return n[0].share?j.jsx(b("MercuryShareAttachmentSnippet.react"),{attachment:n[0].share,senderName:a,isViewerSender:o}):A(b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").SHARE,o,a))}function y(a){return j.jsx("span",{children:b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").GIFT,o,a)})}function z(a){return j.jsx("span",{children:n.filter(function(a){return a.attach_type==="file"||a.attach_type==="photo"||a.attach_type==="video"}).map(function(a,b){return A(a.name,a.icon_type,b)})})}function A(a,c,d){c=b("MercuryAttachment").getAttachIconClass(c||n[0].icon_type);c=b("joinClasses")(c,"uiIconText _3l6h");return j.jsxs("span",{children:[j.jsx("span",{className:c,children:j.jsx(b("Image.react"),{src:i("86988")})}),a]},d)}function B(a){a=b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").ERROR,o,a);return A(a)}function C(){if(d==null||o)return null;var a=b("MessengerParticipants.re").getNow(d);if(!a)return null;var e=b("MercuryIDs").getUserIDFromParticipantID(d);e=c.custom_nickname&&c.custom_nickname[e];e&&(e=j.jsx(b("MessengerTextWithEmoticons.react"),{renderEmoticons:!0,renderEmoji:!0,text:e}));return e?e:a.short_name}}function m(a,c){return!!(a!=null&&b("MercuryIDs").getParticipantIDFromUserID(c)==a)}e.exports=a}),null);
__d("AdPageMessageTypeEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({AD_ADMIN_TEXT:"ad_admin_text",AD_TEXT:"ad_text",AD_BUBBLE:"ad_bubble"})}),null);
__d("MNAdsLogMessageUtils",["AdPageMessageTypeEnum","MercuryConfig","MessagingTag"],(function(a,b,c,d,e,f){"use strict";var g=b("MercuryConfig").LOG_INTERVAL_MS||6e4;a=function(){function a(){this.$1={}}var c=a.prototype;c.isLoggedWithinInterval=function(a){return this.$1[a]&&this.$1[a]-Date.now()<g?!0:!1};c.setLoggingTime=function(a){this.$1[a]=Date.now()};c.logAdsThreadListImpression=function(a){switch(a.folder){case b("MessagingTag").INBOX:this.logWithThreadMetaData(a,"messenger_ads_message_seen_inbox");break;case b("MessagingTag").PENDING:this.logWithThreadMetaData(a,"messenger_ads_message_seen_request");break;default:return}};c.logWithThreadMetaData=function(a,c){if(a.last_message_type!==b("AdPageMessageTypeEnum").NON_AD)return};return a}();e.exports=new a()}),null);
__d("MercuryThreadSnippet.react",["cx","fbt","MercuryAttachmentSnippet.react","MercuryIDs","MessengerTextWithEmoticons.react","MNAdsLogMessageUtils","React","immutable","prop-types"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.shouldComponentUpdate=function(a){return this.props.shouldRenderYou!==a.shouldRenderYou||this.props.thread!==a.thread||this.props.viewer!==a.viewer||this.props.className!==a.className||!b("immutable").is(a.participants,this.props.participants)};d.render=function(){return i.jsxs("span",{className:this.props.className,children:[this.$1(),this.$2()]})};d.$1=function(){return!this.props.thread.snippet||!j(this.props.thread)?null:i.jsx("span",{className:"_j0r"})};d.$2=function(){var a,c,d=this.props.thread,e=b("MercuryIDs").getParticipantIDFromUserID(this.props.viewer),f=d.snippet?d.snippet.toString():null,g=this.props.shouldRenderYou;if(d.snippetCount!=null)return h._({"*":"{number} results","_1":"1 result"},[h._plural(d.snippetCount,"number")]);c=(c=d)!=null?(c=c.snippet_attachments)!=null?(c=c[0])!=null?c.share:c:c:c;a=(a=c)!=null?(a=a.style_list)!=null?a[0]:a:a;c=(c=c)!=null?c.title:c;if((a==="instant_games_leaderboard_update"||a==="instant_games_custom_update")&&c)return c;a=m(d);if(a&&a.length>0&&a[0].attach_type!=="share"||!d.snippet_sender)return this.$3(f);if(k(d))return i.jsx(b("MercuryAttachmentSnippet.react"),{thread:d,viewer:this.props.viewer});c=this.$3(f);if(d.last_message_admin_text_type!=null||d.last_message_unsendability_status==="deny_tombstone_message")return c;b("MNAdsLogMessageUtils").logAdsThreadListImpression(d);a=l(d);if(a)return h._("{name}: {conversation_snippet}",[h._param("name",a),h._param("conversation_snippet",c)]);if(d.snippet_sender===e)return!g?c:h._("You: {conversation_snippet}",[h._param("conversation_snippet",c)]);if(b("MercuryIDs").isCanonical(d.thread_id)&&!this.props.shouldAlwaysRenderSender)return c;f=this.props.participants.get(d.snippet_sender);if(!f)return c;a=f.short_name||f.name;if(d){e=d.custom_nickname?d.custom_nickname:null;g=b("MercuryIDs").getUserIDFromParticipantID(f.id);e&&g&&e[g]&&(a=i.jsx(b("MessengerTextWithEmoticons.react"),{renderEmoticons:!0,renderEmoji:!0,text:e[g]}))}return!a?c:h._("{name}: {conversation_snippet}",[h._param("name",a),h._param("conversation_snippet",c)])};d.$3=function(a){if(a&&a.startsWith("?OTR"))return h._("[encrypted message]");var c=this.props.thread;if(j(c))return i.jsx(b("MercuryAttachmentSnippet.react"),{thread:c,viewer:this.props.viewer});return a?i.jsx(b("MessengerTextWithEmoticons.react"),{renderEmoticons:!0,renderEmoji:!0,text:a}):null};return c}(i.Component);a.propTypes={participants:(c=b("prop-types")).instanceOf(b("immutable").Map).isRequired,shouldAlwaysRenderSender:c.bool,shouldRenderYou:c.bool,thread:c.object.isRequired,viewer:c.string.isRequired};function j(a){a=m(a);return!!(a&&a.length>0&&!(a[0].attach_type==="share"&&(!a[0].share||a[0].share.subattachments.length===0)))}function k(a){var b;a=m(a);return a&&a.length===1&&a[0].attach_type==="share"&&((b=a[0].share)==null?void 0:b.style_list)!=null&&(a[0].share.style_list.indexOf("message_location")>=0||a[0].share.style_list.indexOf("message_live_location")>=0)}function l(a){var b=m(a);return a&&b&&b[0]&&b[0].share&&b[0].share.target&&b[0].share.target.genie_name?b[0].share.target.genie_name:null}function m(a){return a.snippet_attachments===void 0?[]:a.snippet_attachments}e.exports=a}),null);
__d("MercuryMessageStore",["CurrentUser","LogHistory","MercuryAPIArgsSource","MercuryThreadInformer","MercuryThreadlistConstants","MessengerState.bs","SubscriptionsHandler","mixInEventEmitter","setImmediate"],(function(a,b,c,d,e,f){"use strict";var g=b("LogHistory").getInstance("mercury_message_store");a=function(){function a(a,c,d){var e=this;this.$5=a;this.$1=d||b("CurrentUser").getID();this.$2=1;this.$3=c||b("MercuryThreadlistConstants").RECENT_MESSAGES_LIMIT;this.$6=d?b("MercuryThreadInformer").getForFBID(d):b("MercuryThreadInformer").get();this.$4=new(b("SubscriptionsHandler"))();this.$4.addSubscriptions(this.$6.subscribe("messages-received",function(a,b){return e.$7(b)}),this.$6.subscribe("messages-updated",function(a,b){return b[e.$5]&&e.$8(b[e.$5])}),this.$6.subscribe("messages-deleted",function(a,b){return b[e.$5]&&e.$9(b[e.$5])}),this.$6.subscribe("messages-reordered",function(a,b){return b[e.$5]&&e.$10()}),this.$6.subscribe("thread-invalidated",function(a,b){return b[e.$5]&&e.$11()}));a=this.$12();g.debug("constructed",JSON.stringify({threadID:this.$5,messageCount:a}));a<this.$3?this.$13():b("setImmediate")(function(){e.$10()})}var c=a.prototype;c.destroy=function(){this.$4&&this.$4.release(),g.debug("destroyed",JSON.stringify({threadID:this.$5}))};c.subscribe=function(a){return this.addRetroactiveListener("updated",a)};c.fetchMoreMessages=function(){if(this.hasFetchedAll())return!1;this.$13();return!0};c.hasFetchedAll=function(){return b("MessengerState.bs").hasLoadedAllMessages(this.$1,this.$5)||b("MessengerState.bs").isNewEmptyLocalThread(this.$1,this.$5)};c.$12=function(){return b("MessengerState.bs").getCurrentlyLoadedMessages(this.$1,this.$5).length};c.$13=function(){var a=this,c=this.$3;b("MessengerState.bs").getThreadMessagesRange(this.$1,this.$5,this.$12(),c,this.$14.bind(this),null,b("MercuryAPIArgsSource").MERCURY);this.$2<10&&(this.$2+=1);b("MessengerState.bs").hasLoadedNMessages(this.$1,this.$5,c+this.$12())&&b("setImmediate")(function(){a.$10()})};c.$14=function(b){g.debug("fetch_messages",JSON.stringify({threadID:this.$5,fetchedMessagesCount:b&&b.length||0,messageCount:this.$12()})),b&&!b.length&&!this.$12()&&this.$15(a.THREAD_IS_EMPTY)};c.$7=function(b){var c=[];b=b[this.$5];b&&b.length&&(c=c.concat(b.filter(function(a){return!!a})));c.length&&this.$15(a.MESSAGES_RECEIVED)};c.$8=function(b){this.$15(a.MESSAGES_CHANGED)};c.$9=function(b){this.$15(a.MESSAGES_DELETED,b)};c.$10=function(){this.$15(a.MESSAGES_REORDERED)};c.$11=function(){this.$2=1,this.$13()};c.$15=function(a,c){var d=b("MessengerState.bs").getCurrentlyLoadedMessages(this.$1,this.$5);this.releaseHeldEventType("updated");this.emitAndHold("updated",{messages:d,deletedMessages:c,eventType:a})};return a}();Object.assign(a,{MESSAGES_FETCHED:"fetched",MESSAGES_CHANGED:"changed",MESSAGES_RECEIVED:"received",MESSAGES_REORDERED:"reordered",MESSAGES_DELETED:"deleted",THREAD_IS_EMPTY:"thread-is-empty"});b("mixInEventEmitter")(a,{updated:!0});e.exports=a}),null);
__d("MNCommerceDialogStateActions",["MessengerDispatcher","MNCommerceActionTypes"],(function(a,b,c,d,e,f){"use strict";a={showDialog:function(a,c){b("MessengerDispatcher").dispatch({type:b("MNCommerceActionTypes").DIALOG.SHOW,dialogContainer:a,state:c})},hideDialog:function(){b("MessengerDispatcher").dispatch({type:b("MNCommerceActionTypes").DIALOG.HIDE})}};e.exports=a}),null);
__d("useAjaxifiedOnClick__DEPRECATED",["requireCond","Parent","cr:1213883","React","ReactFlareEventUtils","URI","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";var g;c=b("React");var h=c.useCallback,i=b("ReactFlareEventUtils").createFromReactFlareEvent;function a(a,c){return h(function(d){if(a==null||c==null)return;if(b("cr:1213883")==null){b("recoverableViolation")("useAjaxifiedOnClick__DEPRECATED is not supported in Gemini!","work_comet_core");return}var e=(g||(g=b("URI"))).normalize(a),f=d.type==="press"?i(d):d.nativeEvent;d.type!=="press"&&d.persist();d=f.target||f.srcElement;var h=b("Parent").byTag(d,"A")||d;b("cr:1213883").primerHandleAjaxify(f,h,d,e,c)},[a,c])}e.exports=a}),null);