if (self.CavalryLogger) { CavalryLogger.start_js(["qXRGe"]); }

__d("TransTaskDisabledLocToken.react",["cx","React","XUITokenizerToken.react"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return h.jsx(b("XUITokenizerToken.react"),babelHelpers["extends"]({},this.props,{highlighted:!0,onRemove:null,className:"_1bw9"}))};return c}(h.Component);e.exports=a}),null);
__d("MercuryThreadMetadataRawRenderer",["cx","fbt","CSS","DOM","Event","MercuryErrorInfo","MercuryStatusTemplates","TooltipData"],(function(a,b,c,d,e,f,g,h){a={renderRawParticipantList:function(a,c,d,e){var f={abbr_mode:!0,last_separator_uses_and:!0,names_renderer:!0};e=e||{};f=null;e.names_renderer?f=e.names_renderer(c):f=c.map(function(a){return a.name});c=null;f.length===0?!a?c=h._("New Message"):c=h._("No Participants"):f.length==1?c=f[0]:f.length==2?e.last_separator_uses_and?c=h._("{participant1} and {participant2}",[h._param("participant1",f[0]),h._param("participant2",f[1])]):c=h._("{participant1}, {participant2}",[h._param("participant1",f[0]),h._param("participant2",f[1])]):e.last_separator_uses_and?e.abbr_mode?c=h._("{participant1} and {others_link}",[h._param("participant1",f[0]),h._param("others_link",this.renderRawParticipantCount({render_subset:!0,count:d-1}))]):f.length==3?c=h._("{participant1}, {participant2} and {participant3}",[h._param("participant1",f[0]),h._param("participant2",f[1]),h._param("participant3",f[2])]):c=h._("{participant1}, {participant2} and {others_link}",[h._param("participant1",f[0]),h._param("participant2",f[1]),h._param("others_link",this.renderRawParticipantCount({render_subset:!0,count:d-2}))]):f.length==3?c=h._("{participant1}, {participant2}, {participant3}",[h._param("participant1",f[0]),h._param("participant2",f[1]),h._param("participant3",f[2])]):c=h._("{participant1}, {participant2}, {participant3}, {others_link}",[h._param("participant1",f[0]),h._param("participant2",f[1]),h._param("participant3",f[2]),h._param("others_link",this.renderRawParticipantCount({render_subset:!0,count:d-3}))]);Array.isArray(c)&&(c=b("DOM").create("span",{},c));return c},renderRawTitleWithUnreadCount:function(a,c){var d=a;c&&c>1&&(d=b("DOM").create("span",{},h._("{conversation_title} ({unread_count})",[h._param("conversation_title",a),h._param("unread_count",c)])));return d},renderRawParticipantCount:function(a){var b=a.render_subset;!b?b=a.count>1?h._({"*":"{num} people"},[h._param("num",a.count,[0])]):h._("1 person"):b=a.count>1?h._({"*":"{others_count} others"},[h._param("others_count",a.count,[0])]):h._("1 other");return b},renderShortNames:function(a){return a.length==1?[a[0].name]:a.map(function(a){return a.short_name})},renderStatusIndicator:function(a,b,c){var d;a==7?d=this.renderResendIndicator():a!==void 0&&a!=0&&a!=3&&a!=1&&(d=this.renderErrorIndicator(b,c));return d},renderResendIndicator:function(){return b("MercuryStatusTemplates")[":fb:mercury:resend-indicator"].render()},renderErrorIndicator:function(a,c){if(!a)return null;var d=b("MercuryStatusTemplates")[":fb:mercury:error-indicator"].render(),e=a.is_transient,f=b("MercuryErrorInfo").getMessage(a);e&&(b("MercuryErrorInfo").isConnectionError(a)?f=h._("{message} Check your internet connection and click to try again.",[h._param("message",f)]):f=h._("{message} Click to send again.",[h._param("message",f)]));b("TooltipData").set(d,f,"above","center");c&&e&&(b("Event").listen(d,"click",c),d.setAttribute("tabindex","0"),b("CSS").addClass(d,"_55q-"));return d},_cloneIfDOMElement:function(a){if(a&&a.cloneNode)return a.cloneNode();else return a}};e.exports=a}),null);
__d("ShareAttachmentSender.react",["cx","fbt","AsyncRequest","ChatSearchSource","Layout.react","MessengerBootloadedSecondarySearchLogger","MessengerSearchLoggerUtil","MessengerSecondarySearchFunnelConstants","MessengerSuggestedRecipients.react","MessengerSuggestedRecipientsUtil","MessengerSuggestedRecipientsWebGraphQLQuery","prop-types","React","SearchableTextInput.react","WorkGalahadSettings","gkx","OrderedFriendsList"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("Layout.react").Column,j=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(c){var d;d=a.call(this,c)||this;d.$5=function(a){a=a.target.value;if(typeof a==="string"&&typeof d.state.query==="string"){var c=d.state.query.length===0,e=a.length===1&&(d.state.query.charAt(0)!==a.charAt(0)||d.state.query.length>2);(c||e)&&d.props.maybeLogEvent("begin_search");b("MessengerBootloadedSecondarySearchLogger").logSearchEvent({name:b("MessengerSecondarySearchFunnelConstants").EVENTS.QUERY_CHANGED,query:a,loggingID:b("MessengerSecondarySearchFunnelConstants").LOGGING_IDS.BROADCAST});d.state.hasBegunSearch||b("MessengerBootloadedSecondarySearchLogger").logSearchEvent({name:b("MessengerSecondarySearchFunnelConstants").EVENTS.SOURCE_STARTED,query:a,source:b("MessengerSecondarySearchFunnelConstants").SOURCES.SHORT_PROFILES,loggingID:b("MessengerSecondarySearchFunnelConstants").LOGGING_IDS.BROADCAST});a.length>0&&b("MessengerBootloadedSecondarySearchLogger").logSearchEvent({name:b("MessengerSecondarySearchFunnelConstants").EVENTS.SOURCE_STARTED,query:a,source:b("MessengerSecondarySearchFunnelConstants").SOURCES.SERVER,loggingID:b("MessengerSecondarySearchFunnelConstants").LOGGING_IDS.BROADCAST})}d.setState({hasBegunSearch:!0,loading:!0,query:a})};d.$6=function(a){if(b("gkx")("678592")){var c=d.state.query?a:d.state.contactEntries,e=c.map(function(a){return{result_fbid:a.getUniqueID(),result_type:b("MessengerSearchLoggerUtil").getLoggingTypeFromMercuryType(a.getType()),data_source:c?b("MessengerSecondarySearchFunnelConstants").SOURCES.SERVER:b("MessengerSecondarySearchFunnelConstants").SOURCES.SHORT_PROFILES}});b("MessengerBootloadedSecondarySearchLogger").logSearchEvent({name:b("MessengerSecondarySearchFunnelConstants").EVENTS.IMPRESSIONS,query:d.state.query,entries:e,loggingID:b("MessengerSecondarySearchFunnelConstants").LOGGING_IDS.BROADCAST})}d.setState({entries:d.$7(a)})};d.$8=function(a){a===d.state.query&&d.setState({loading:!1})};d.$9=function(a){var c=new Map(d.state.selectedEntries);c.set(a.getUniqueID(),a);d.setState({selectedEntries:c});b("MessengerBootloadedSecondarySearchLogger").logSearchEvent({name:(c=b("MessengerSecondarySearchFunnelConstants")).EVENTS.RESULT_SELECTED,surface:c.SEARCH_SURFACES.BROADCAST,query:d.state.query,type:b("MessengerSearchLoggerUtil").getLoggingTypeFromMercuryType(a.getType()),id:a.getUniqueID(),loggingID:c.LOGGING_IDS.BROADCAST,selectionType:c.SELECTION_TYPES.DIRECT_SEND});d.props.onSelect&&d.props.onSelect(a)};d.$11=function(a){if(!Array.isArray(a)||a.length===0)return;a=a.filter(function(a){return!d.$2.has(a.getUniqueID())});if(b("gkx")("678592")){var c,e=a.map(function(a){return{result_fbid:a.getUniqueID(),result_type:b("MessengerSearchLoggerUtil").getLoggingTypeFromMercuryType(a.getType()),data_source:b("MessengerSecondarySearchFunnelConstants").SOURCES.SUGGESTED_RECIPIENTS}}),f=a.map(function(a){return a.getUniqueID()});b("MessengerBootloadedSecondarySearchLogger").logSearchEvent({name:(c=b("MessengerSecondarySearchFunnelConstants")).EVENTS.SOURCE_ENDED,query:"",source:c.SOURCES.SUGGESTED_RECIPIENTS,ids:f,numResults:f.length,status:c.SOURCE_STATUSES.FINISHED,loggingID:c.LOGGING_IDS.BROADCAST});b("MessengerBootloadedSecondarySearchLogger").logSearchEvent({name:c.EVENTS.IMPRESSIONS,query:"",entries:e,loggingID:c.LOGGING_IDS.BROADCAST})}d.setState({contactEntries:a,loading:!1})};d.$2=new Map();d.state={contactEntries:[],entries:[],groupEntries:[],loading:!0,recentEntries:[],selectedEntries:new Map(),sentEntries:new Map(),errorEntries:new Map(),query:"",hasBegunSearch:!1};b("WorkGalahadSettings").isGalahadEnabled&&b("OrderedFriendsList");return d}var d=c.prototype;d.componentWillUnmount=function(){this.$3&&this.$3.abandon()};d.UNSAFE_componentWillMount=function(){var a=this;this.$1=new(b("ChatSearchSource"))({queryRequests:[{uri:"/ajax/mercury/composer_query.php"}],searchType:b("MessengerSecondarySearchFunnelConstants").SEARCH_SURFACES.BROADCAST});var c=b("MessengerSuggestedRecipientsWebGraphQLQuery").getURI({broadcast_list_type:"WEB"});this.$3=new(b("AsyncRequest"))();this.$3.setURI(c).setHandler(function(b){a.$4(b),a.$3=null}).send()};d.UNSAFE_componentWillReceiveProps=function(a){var b=a.sentEntryID;a=a.errorEntryID;if(b&&b!==this.props.sentEntryID){var c=this.state,d=new Map(c.sentEntries),e=c.selectedEntries.get(b);e&&d.set(b,e);e=new Map(c.selectedEntries);e["delete"](b);this.setState({sentEntries:d,selectedEntries:e})}if(a&&a!==this.props.errorEntryID){c=this.state;b=new Map(c.errorEntries);d=c.selectedEntries.get(a);d&&b.set(a,d);e=new Map(c.selectedEntries);e["delete"](a);this.setState({selectedEntries:e,errorEntries:b})}};d.$10=function(){var a=this.state;return a.query?a.entries:this.state.contactEntries};d.$7=function(a){var b=this.state,c=[],d=[],e=[];a.forEach(function(a){var f=a.getUniqueID();b.sentEntries.has(f)?c.push(a):b.selectedEntries.has(f)?d.push(a):e.push(a)});return[].concat(c,d,e)};d.render=function(){var a=this.state,c=a.recentEntries;a=a.groupEntries;var d=h._("Search for people and groups");return j.jsx(b("Layout.react"),{children:j.jsxs(i,{className:"_5s0e _3nxg",children:[j.jsx("div",{className:"_2ph- _3tca",children:j.jsx(b("SearchableTextInput.react"),{className:"_5s0f autofocus",onChange:this.$5,onEntriesFound:this.$6,placeholder:d,queryString:this.state.query,searchSource:this.$1,searchSourceOptions:{onQueryFinished:this.$8},useDefaultValue:!0})}),j.jsx(b("MessengerSuggestedRecipients.react"),{isSearching:this.state.query.length>0,contactEntries:this.$10(),recentEntries:c,groupEntries:a,sentEntries:this.state.sentEntries,errorEntries:this.state.errorEntries,loading:this.state.loading,selectedEntries:this.state.selectedEntries,onSelect:this.$9,onUpdateDefaultEntries:this.$11,hideShareDialog:this.props.hideShareDialog,preSelected:this.props.preSelected,setSectionName:this.props.setSectionName})]})})};d.$4=function(a){var c=this;a=b("MessengerSuggestedRecipientsUtil").parseSuggestedRecipientResponse(a);var d=a.recentEntries;a=a.groupEntries;d.forEach(function(a){c.$2.set(a.getUniqueID(),a)});this.setState({recentEntries:d,groupEntries:a})};return c}(j.PureComponent);a.propTypes={sentEntryID:(c=b("prop-types")).string,shareType:c.string,onSelect:c.func.isRequired,hideShareDialog:c.func,preSelected:c.array,setSectionName:c.func,maybeLogEvent:c.func};a.defaultProps={shareType:"image"};e.exports=a}),null);
__d("GroupShareGroupAudienceActionTypes",["keyMirrorRecursive"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirrorRecursive")({SELECT_ACTOR:null,SELECT_GROUP:null,SET_ELIGIBLE_ACTORS:null,SET_ACTOR_LIST_LOADING_STATUS:null,SET_GROUP_QUERY:null},"GroupShareGroupAudienceActionTypes");e.exports=a}),null);
__d("GroupShareGroupAudienceAction",["AsyncRequest","GroupShareGroupAudienceActionTypes","PagesSharingDispatcher","XGroupsShareActorListController"],(function(a,b,c,d,e,f){"use strict";function a(a){b("PagesSharingDispatcher").dispatch({type:b("GroupShareGroupAudienceActionTypes").SET_ACTOR_LIST_LOADING_STATUS,isLoading:!0}),new(b("AsyncRequest"))().setURI(b("XGroupsShareActorListController").getURIBuilder().getURI()).setHandler(function(c){c=c.getPayload().actorIDs;b("PagesSharingDispatcher").dispatch({type:b("GroupShareGroupAudienceActionTypes").SET_ELIGIBLE_ACTORS,actorIDs:c});c.includes(a);c=c.includes(a)?a:c[0];g(c);b("PagesSharingDispatcher").dispatch({type:b("GroupShareGroupAudienceActionTypes").SET_ACTOR_LIST_LOADING_STATUS,isLoading:!1})}).send()}function c(a){b("PagesSharingDispatcher").dispatch({type:b("GroupShareGroupAudienceActionTypes").SELECT_GROUP_QUERY,groupSearchQuery:a})}function g(a){b("PagesSharingDispatcher").dispatch({type:b("GroupShareGroupAudienceActionTypes").SELECT_ACTOR,selectedActorID:a})}function d(a){b("PagesSharingDispatcher").dispatch({type:b("GroupShareGroupAudienceActionTypes").SELECT_GROUP,selectedEntry:a})}e.exports={initActorList:a,setGroupQuery:c,setSelectedActor:g,setSelectedGroup:d}}),null);
__d("GroupShareGroupAudienceStoreData",["immutable"],(function(a,b,c,d,e,f){"use strict";a=b("immutable").Record({actorIDs:[],groupSearchQuery:"",isActorSelectorLoading:!0,selectedActorID:"0",selectedEntry:null});c=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(a);e.exports=c}),null);
__d("GroupShareGroupAudienceStore",["FluxReduceStore","GroupShareGroupAudienceActionTypes","GroupShareGroupAudienceStoreData","PagesSharingDispatcher"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return new(b("GroupShareGroupAudienceStoreData"))()};d.reduce=function(a,c){switch(c.type){case b("GroupShareGroupAudienceActionTypes").SELECT_ACTOR:if(c.selectedActorID!=null)return a.set("selectedActorID",c.selectedActorID);break;case b("GroupShareGroupAudienceActionTypes").SELECT_GROUP:return a.set("selectedEntry",c.selectedEntry);case b("GroupShareGroupAudienceActionTypes").SELECT_GROUP_QUERY:if(c.groupSearchQuery!=null)return a.set("groupSearchQuery",c.groupSearchQuery);break;case b("GroupShareGroupAudienceActionTypes").SET_ELIGIBLE_ACTORS:if(c.actorIDs!=null)return a.set("actorIDs",c.actorIDs);break;case b("GroupShareGroupAudienceActionTypes").SET_ACTOR_LIST_LOADING_STATUS:if(c.isLoading!=null)return a.set("isActorSelectorLoading",c.isLoading);break}return a};return c}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("PagesSharingDispatcher"))}),null);
__d("GroupShareActorSelectorContainer.react",["ActorSelector.react","AdsFluxContainer","GroupShareGroupAudienceAction","GroupShareGroupAudienceStore","PagesSharingDispatcher","React"],(function(a,b,c,d,e,f){var g=b("GroupShareGroupAudienceAction").initActorList,h=b("GroupShareGroupAudienceAction").setSelectedActor,i=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={actorIDs:[],loading:!0,selectedActorID:c.props.defaultActorID},c.$1=function(a){a.value!=null&&h(a.value),c.props.onChange(a)},b)||babelHelpers.assertThisInitialized(c)}c.getStores=function(){return[b("GroupShareGroupAudienceStore")]};c.calculateState=function(){return{actorIDs:b("GroupShareGroupAudienceStore").getState().get("actorIDs"),loading:b("GroupShareGroupAudienceStore").getState().get("isActorSelectorLoading"),selectedActorID:b("GroupShareGroupAudienceStore").getState().get("selectedActorID")}};var d=c.prototype;d.componentDidMount=function(){b("PagesSharingDispatcher").explicitlyRegisterStores([b("GroupShareGroupAudienceStore")]),g(this.props.defaultActorID)};d.render=function(){return!this.state.actorIDs||!this.state.selectedActorID?i.jsx("div",{}):i.jsx("div",{children:i.jsx(b("ActorSelector.react"),{actorIDs:this.state.actorIDs,coverEnabled:!1,loading:this.state.loading,onChange:this.$1,showName:!0,ref:"selector",selectedActorID:this.state.selectedActorID,suppressed:!0})})};return c}(i.PureComponent);e.exports=b("AdsFluxContainer").create(a,{name:e.id})}),null);
__d("GroupShareGroupSelectorContainer.react",["ix","cx","fbt","AdsFluxContainer","Grid.react","GroupShareGroupAudienceAction","GroupShareGroupAudienceStore","Image.react","PagesSharingDispatcher","React","WebAsyncSearchSource","XUITypeahead.react","asset"],(function(a,b,c,d,e,f,g,h,i){var j=b("GroupShareGroupAudienceAction").setGroupQuery,k=b("GroupShareGroupAudienceAction").setSelectedGroup,l=b("React"),m=b("Grid.react").GridItem,n=i._("Group Name");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$2=function(a){j(a.getTitle()),k(a),c.props.onGroupChange(c.state.selectedActorID,a.getUniqueID())},b)||babelHelpers.assertThisInitialized(c)}c.getStores=function(){return[b("GroupShareGroupAudienceStore")]};c.calculateState=function(a){var c=a==null?void 0:a.selectedActorID,d=b("GroupShareGroupAudienceStore").getState().get("selectedActorID"),e=b("GroupShareGroupAudienceStore").getState().get("selectedEntry");a=a==null?void 0:a.searchSource;(a==null||d!==c)&&(j(""),k(null),a=new(b("WebAsyncSearchSource"))({bootstrapRequests:[{data:{filter:["group"],viewer:d},uri:"/ajax/typeahead/first_degree.php"}],getAllForEmptyQuery:!0}));return{query:b("GroupShareGroupAudienceStore").getState().get("groupSearchQuery"),searchSource:a,selectedActorID:d,selectedEntry:e}};var d=c.prototype;d.componentDidMount=function(){b("PagesSharingDispatcher").explicitlyRegisterStores([b("GroupShareGroupAudienceStore")])};d.$1=function(){j(""),k(null)};d.$3=function(a){j(a.target.value),k(null)};d.render=function(){return l.jsx("div",{className:"_863g"+(this.state.selectedEntry!=null?" _8603":""),children:l.jsxs(b("Grid.react"),{cols:3,children:[l.jsx(m,{children:i._("Group:")}),l.jsx(m,{className:"_8604",children:l.jsx(b("XUITypeahead.react"),{className:"_8605",onChange:this.$3,onClear:this.$1,onSelectAttempt:this.$2,placeholder:n,queryString:this.state.query,selectedEntry:this.state.selectedEntry,searchSource:this.state.searchSource,showPhoto:!0,tallInput:!0})}),l.jsx(m,{children:l.jsx(b("Image.react"),{src:g("585033")})})]})})};return c}(l.PureComponent);e.exports=b("AdsFluxContainer").create(a,{name:e.id})}),null);
__d("ShareDialogEventAudience.react",["cx","fbt","React","ReactComposerContextTypes","ShareDialogAudienceTypeahead.react","createReactClass_DEPRECATED","prop-types"],(function(a,b,c,d,e,f,g,h){var i=b("React");c=b("createReactClass_DEPRECATED")({displayName:"ShareDialogEventAudience",contextTypes:b("ReactComposerContextTypes"),propTypes:{defaultEventID:(a=b("prop-types")).string,searchSource:a.object.isRequired,onClear:a.func,onChange:a.func.isRequired,onSelect:a.func},getInitialState:function(){return{query:"",selectedEntry:null}},componentDidMount:function(){var a=this,b=this.props,c=b.defaultEventID,d=b.searchSource;c&&d.bootstrap(function(){var b=d.getAllEntriesMap()[c];b&&(a.setState({query:b.getTitle(),selectedEntry:b}),a._onEventChange(b))})},_onEventChange:function(a){this.props.onChange([a.getUniqueID()])},render:function(){var a=h._("Event:");return i.jsx("div",{children:i.jsx(b("ShareDialogAudienceTypeahead.react"),babelHelpers["extends"]({},this.props,{onChange:this._onEventChange,prefix:a,showPhoto:!0,name:"audience_event",inputID:"audience_event",className:"_18sr",placeholder:h._("Event Name"),selectedEntry:this.state.selectedEntry}))})}});e.exports=c}),null);
__d("ShareDialogFundraiserAudience.react",["cx","Image.react","React","XUISingleSelector.react"],(function(a,b,c,d,e,f,g){var h=b("React"),i=150;a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(b){var c;c=a.call(this,b)||this;c.state={selectedID:c.props.defaultFundraiserID||b.source[0].id};return c}var d=c.prototype;d.componentDidMount=function(){this.props.onChange([this.state.selectedID])};d.render=function(){var a=this;if(!this.props.source)return null;var c=this.props.source.map(function(a){return h.jsx(b("XUISingleSelector.react").Option,{value:a.id,icon:h.jsx(b("Image.react"),{src:a.pic,height:15,width:15}),children:a.name},a.id)});return h.jsx("div",{className:"_61uy",children:h.jsx(b("XUISingleSelector.react"),{inputID:"audience_fundraiser",maxheight:i,name:"audience_fundraiser",onChange:function(b){a.setState({selectedID:b.value},function(){a.props.onChange([a.state.selectedID])})},value:this.state.selectedID,children:c})})};return c}(h.Component);e.exports=a}),null);
__d("ShareDialogGroupAudienceV2.react",["cx","GroupShareActorSelectorContainer.react","GroupShareGroupSelectorContainer.react","React"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=function(a){c.props.onChange([{actorId:a.value}])},c.$2=function(a,b){c.props.onChange([{actorId:a,groupId:b}])},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){return h.jsxs("div",{className:"_8551",children:[h.jsx("div",{className:"_8552",children:h.jsx(b("GroupShareActorSelectorContainer.react"),{defaultActorID:this.props.defaultActorID,onChange:this.$1})}),h.jsx(b("GroupShareGroupSelectorContainer.react"),{onGroupChange:this.$2})]})};return c}(h.PureComponent);e.exports=a}),null);
__d("ShareDialogTypeaheadViewItem.react",["cx","BackgroundImage.react","CurrentUser","ImageBlock.react","ImmutableObject","MercuryThreadImage.react","React","TypeaheadViewItem","createReactClass_DEPRECATED","joinClasses"],(function(a,b,c,d,e,f,g){var h=b("React");a=b("createReactClass_DEPRECATED")({displayName:"ShareDialogTypeaheadViewItem",mixins:[b("TypeaheadViewItem").Mixin],propTypes:b("TypeaheadViewItem").propTypes,render:function(){var a=this.props.entry,c=this.props.splitSubtext?a.getSubtitle().split(" \xb7 ")[0]:a.getSubtitle();c=c?h.jsx("div",{className:"_599q",children:c}):null;var d=a.getAuxiliaryData();if(a.getPhoto())var e=h.jsx(b("BackgroundImage.react"),{width:32,height:32,backgroundSize:"cover",src:a.getPhoto()});else e=h.jsx(b("MercuryThreadImage.react"),{size:32,thread:new(b("ImmutableObject"))(d.thread),viewer:b("CurrentUser").getID()});d="_599m"+(c?"":" _5mne")+(this.props.highlighted?" _599n":"");d=b("joinClasses")(d,this.props.className);return h.jsx("li",{"aria-selected":this.props.highlighted,className:d,onMouseDown:this._onSelect,onMouseEnter:this._onHighlight,role:this.props.role,children:h.jsxs(b("ImageBlock.react"),{spacing:"medium",children:[e,h.jsxs("div",{children:[h.jsx("div",{className:"_599p",children:a.getTitle()}),c]})]})})}});e.exports=a}),null);
__d("ShareDialogTypeaheadView.react",["cx","React","ShareDialogTypeaheadViewItem.react","TypeaheadViewPropTypes","XUITypeaheadViewContainer.react"],(function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){return h.jsx(b("ShareDialogTypeaheadViewItem.react"),{entry:a,highlighted:a===d.props.highlightedEntry,onSelect:d.props.onSelect,onHighlight:d.props.onHighlight,onRenderHighlight:d.props.onRenderHighlight},a.getUniqueID())},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this.props.entries.length?"":"_599s";return h.jsx(b("XUITypeaheadViewContainer.react"),{className:a,id:this.props.controlleeID,role:this.props.role,children:this.props.entries.map(this.$1)})};return c}(h.Component);a.propTypes=b("TypeaheadViewPropTypes");a.defaultProps={role:"listbox"};e.exports=a}),null);
__d("ShareDialogMessageAudience.react",["cx","fbt","ChatSearchSource","Grid.react","MercuryConfig","MessengerTypeaheadUtils","React","prop-types","ShareAttachmentSender.react","ShareDialogTypeaheadView.react","TransTaskDisabledLocToken.react","XUITokenizer.react","XUITokenizerToken.react"],(function(a,b,c,d,e,f,g,h){var i=b("Grid.react").GridItem,j=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={entries:[]},d.$2=function(a,b){a=a.getUniqueID();d.props.onChange([a]);d.props.onPost(b)},d.$7=function(a){return d.state.entries.length?b("MessengerTypeaheadUtils").sortEntriesWithoutGroupsOrViewer(a,d.props.userId):b("MessengerTypeaheadUtils").sortEntriesWithoutPages(a)},d.$6=function(a){var b=a.getUniqueID(),c=d.state.entries,e=c.some(function(a){if(a.getUniqueID()===b)return!0});if(e)return;c.push(a);d.props.onChange(c.map(function(a){return a.getUniqueID()}));d.setState({entries:c})},d.$5=function(a){if(d.props.lockMessageTargets)return;var b=a.getUniqueID(),c=d.state.entries,e=c.some(function(a){if(a.getUniqueID()===b)return!0});e&&c.splice(c.indexOf(a),1);d.props.onChange(c.map(function(a){return a.getUniqueID()}));c.length===0&&d.props.onClear();d.setState({entries:c})},d.$4=function(){d.setState({entries:[]}),d.props.onClear&&d.props.onClear()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.UNSAFE_componentWillMount=function(){this.$1=new(b("ChatSearchSource"))({queryRequests:[{uri:"/ajax/mercury/composer_query.php"}]})};d.render=function(){if(b("MercuryConfig").MNNSS&&!this.props.isOldForwardFlow&&!this.props.lockMessageTargets)return j.jsx(b("ShareAttachmentSender.react"),{onSelect:this.$2,sentEntryID:this.props.sentEntryID,errorEntryID:this.props.errorEntryID,hideShareDialog:this.props.hideShareDialog,preSelected:this.state.entries,setSectionName:this.props.setSectionName,maybeLogEvent:this.props.maybeLogEvent});var a=this.$3();return j.jsxs(b("Grid.react"),{className:"_2qx6",cols:2,children:[j.jsx(i,{className:"_1ho1",children:j.jsx("span",{className:"_2qx7",children:h._("To:")})},"prefix"),j.jsx(i,{className:"_1xk6",children:j.jsx(b("XUITokenizer.react"),babelHelpers["extends"]({},this.props,{className:"_39y9 _42z0"+(a?" _39ya":""),placeholder:h._("Names"),name:"audience_message",inputID:"audience_message",value:this.state.entries,clearable:!this.props.lockMessageTargets,focusedOnInit:!this.props.lockMessageTargets,selectOnTab:!0,showEntriesOnFocus:!1,entries:this.state.entries,searchSource:this.$1,onClear:this.$4,onRemoveEntryAttempt:this.$5,onAddEntryAttempt:this.$6,disabled:a,presenter:{ViewRenderer:b("ShareDialogTypeaheadView.react"),TokenRenderer:this.props.lockMessageTargets?b("TransTaskDisabledLocToken.react"):b("XUITokenizerToken.react"),useLayer:!0,sortEntries:this.$7}}))},"suffix")]})};d.componentDidMount=function(){var a=this.props.messageTargets;if(a)for(var b=0;b<a.length;++b)a[b]&&this.$6(a[b])};d.$3=function(){if(this.props.lockMessageTargets)return!0;var a=this.state.entries;return a.length===1&&a[0].getType()==="thread"};return c}(j.Component);a.propTypes={userId:(c=b("prop-types")).string,messageTargets:c.array,lockMessageTargets:c.bool,isOldForwardFlow:c.bool,sentEntryID:c.string,errorEntryID:c.string,onClear:c.func,onChange:c.func,onPost:c.func,hideShareDialog:c.func,setSectionName:c.func,maybeLogEvent:c.func};e.exports=a}),null);
__d("ShareDialogPersonAudience.react",["cx","fbt","React","ShareDialogAudienceTypeahead.react","prop-types"],(function(a,b,c,d,e,f,g,h){var i=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=function(a){c.props.onChange([a.getUniqueID()])},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=h._("Friend:");return i.jsx(b("ShareDialogAudienceTypeahead.react"),babelHelpers["extends"]({},this.props,{prefix:a,searchSource:this.props.searchSource,className:"_4heg",name:"friendTarget",inputID:"friendTarget",clearable:!this.props.lockPersonTargets,focusedOnInit:!this.props.lockPersonTargets,placeholder:h._("Friend's Name"),onChange:this.$1}))};return c}(i.Component);a.propTypes={searchSource:(c=b("prop-types")).object.isRequired,userId:c.string,onClear:c.func,onChange:c.func.isRequired,onSelect:c.func,preselectedID:c.string,preselectedTitle:c.string,lockPersonTargets:c.bool};e.exports=a}),null);