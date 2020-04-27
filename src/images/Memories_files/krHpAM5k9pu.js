if (self.CavalryLogger) { CavalryLogger.start_js(["plBIg"]); }

__d("CometMapReportTypes",["fbt"],(function(a,b,c,d,e,f,g){"use strict";a={lineLabel:{hint:g._("Which road is incorrectly named? (optional)"),label:g._("Road Name"),title:g._("Report Problem With Road Name")},line:{hint:g._("Which road is incorrectly shaped? (optional)"),label:g._("Road Shape"),title:g._("Report Problem With Road Shape")},lineMissing:{hint:g._("Which road is missing? (optional)"),label:g._("Missing Road"),title:g._("Report Missing Road")},polygon:{hint:g._("Which building, park, or body of water is incorrect? (optional)"),label:g._("Shape or Name of Building, Park, or Body of Water"),title:g._("Report Problem With Shape or Name of Building, Park, or Body of Water")},border:{hint:g._("Which border is incorrectly drawn? (optional)"),label:g._("Country, State or City Border"),title:g._("Report Problem With Border")},administrative:{hint:g._("Which name is incorrect? (optional)"),label:g._("Country, State or City Name"),title:g._("Report Problem With Country, State or City Name")},other:{hint:g._("What's wrong with the map? (optional)"),label:g._("Other"),title:g._("Report Map Problem")}};e.exports=a}),null);
__d("GridInputLabel.react",["cx","invariant","Grid.react","React","prop-types","joinClasses"],(function(a,b,c,d,e,f,g,h){var i=b("Grid.react").GridItem,j=b("React"),k=0;function l(){return"js_grid_input_label_"+k++}a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){this.props.children.length===2||h(0,143);var a=this.props.children[0],c=this.props.children[1],d=a.type==="input";a=j.cloneElement(a,{className:b("joinClasses")(a.props.className,"uiGridInputLabelInput"+(d&&a.props.type==="radio"?" uiInputLabelRadio":"")+(d&&a.props.type==="checkbox"?" uiInputLabelCheckbox":"")),id:a.props.id||l()});c=j.cloneElement(c,{className:b("joinClasses")(c.props.className,"uiInputLabelLabel"),htmlFor:a.props.id});d="uiInputLabel clearfix"+(this.props.display==="inline"?" inlineBlock":"")+(d?" uiInputLabelLegacy":"");return j.jsx("div",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,d),children:j.jsxs(b("Grid.react"),{cols:2,children:[j.jsx(i,{children:a}),j.jsx(i,{children:c})]})}))};return c}(j.Component);a.propTypes={display:b("prop-types").oneOf(["block","inline"])};a.defaultProps={display:"block"};e.exports=a}),null);
__d("XUIRadioListItem.react",["cx","GridInputLabel.react","InputLabel.react","KeyStatus","React","VirtualCursorStatus","XUIRadioInput.react","joinClasses","prop-types"],(function(a,b,c,d,e,f,g){"use strict";var h=b("KeyStatus").isKeyDown,i=b("React"),j=b("VirtualCursorStatus").isVirtualCursorTriggered;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={showFocusRing:!1},c.$1=function(){c.setState({showFocusRing:!1})},c.$2=function(){(h()||j())&&c.setState({showFocusRing:!0})},c.$3=function(a){c.props.onSelect&&c.props.onSelect(c.props.value)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=this.props.selectedValue===this.props.value,c=!!this.props.disabled,d=this.props.centered?b("GridInputLabel.react"):b("InputLabel.react");return i.jsx("li",{"aria-checked":a,"aria-disabled":c,className:b("joinClasses")(this.props.className,this.state.showFocusRing?"":"_1az7"),onBlur:this.$1,onFocus:this.$2,onKeyDown:this.props.onKeyDown,ref:this.props.setupRadioRef,role:"radio",tabIndex:this.props.tabIndex,children:i.jsxs(d,{"aria-label":this.props["aria-label"],"data-hover":this.props["data-hover"],"data-testid":void 0,"data-tooltip-content":this.props["data-tooltip-content"],"data-tooltip-position":this.props["data-tooltip-position"],display:"inline",children:[i.jsx(b("XUIRadioInput.react"),{checked:a,disabled:c,name:this.props.name,onChange:this.$3,tabIndex:-1,value:this.props.value,labelDataTestID:this.props.inputLabelTestID}),i.jsx("label",{children:this.props.children})]})})};return c}(i.Component);a.defaultProps={centered:!1,disabled:!1};a.propTypes={centered:(c=b("prop-types")).bool,"data-testid":c.string,disabled:c.bool,inputLabelTestID:c.string,name:c.string,onKeyDown:c.func,onSelect:c.func,selectedValue:c.any,setupRadioRef:c.func,tabIndex:c.number,value:c.any};e.exports=a}),null);
__d("XUIRadioList.react",["Focus","React","RTLKeys","XUIRadioListItem.react"],(function(a,b,c,d,e,f){var g=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=new Map(),d.$2=new Map(),d.$4=function(a){return function(c){switch(c.keyCode){case b("RTLKeys").UP:case b("RTLKeys").getLeft():c.preventDefault();d.$3(a-1);break;case b("RTLKeys").DOWN:case b("RTLKeys").getRight():c.preventDefault();d.$3(a+1);break;case b("RTLKeys").SPACE:c.preventDefault();d.$3(a);break}}},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$3=function(a){a=a;a>=this.$1.size?a=0:a<0&&(a=this.$1.size-1);var c=this.$1.get(a);a=this.$2.get(a);if(!c||!a)return;c.props.disabled||a.getElementsByTagName("input")[0].click();b("Focus").set(a)};d.render=function(){var a=this,b=g.Children.map(this.props.children,function(a){return a?a.props.value:null}).some(function(b){return b===a.props.selectedValue}),c=g.Children.map(this.props.children,function(a,c){var d=this;return a===null?null:g.cloneElement(a,{name:this.props.name,onKeyDown:this.$4(c),onSelect:this.props.onValueChange,ref:function(a){d.$1.set(c,a)},selectedValue:this.props.selectedValue,setupRadioRef:function(a){d.$2.set(c,a)},tabIndex:this.props.selectedValue===a.props.value||!b&&c===0?0:-1})},this),d=this.props.selectedValue!==void 0&&!this.props.onValueChange;return g.jsx("ul",babelHelpers["extends"]({},this.props,{"aria-readonly":d,name:null,role:"radiogroup",children:c}))};return c}(g.Component);a.Item=b("XUIRadioListItem.react");e.exports=a}),null);
__d("FBTilesReportDialogItems.react",["React","XUIRadioList.react"],(function(a,b,c,d,e,f){"use strict";var g=b("React"),h=b("XUIRadioList.react").Item;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={selectedType:"other"},c.$1=function(a){c.setState({selectedType:a}),c.props.onSelected(a)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=this,c=[];Object.keys(this.props.types).forEach(function(b){c.push(g.jsx(h,{value:b,children:a.props.types[b].label},b))});return g.jsx(b("XUIRadioList.react"),{"data-testid":void 0,selectedValue:this.state.selectedType,onValueChange:this.$1,children:c})};return c}(g.Component);e.exports=a}),null);
__d("MapsReporterTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:MapsReporterLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:MapsReporterLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:MapsReporterLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setCategory=function(a){this.$1.category=a;return this};c.setMapURI=function(a){this.$1.map_uri=a;return this};c.setNelat=function(a){this.$1.nelat=a;return this};c.setNelon=function(a){this.$1.nelon=a;return this};c.setPassesGkMapsTileserviceOsmDefault=function(a){this.$1.passes_gk_maps_tileservice_osm_default=a;return this};c.setPassesGkOxygenMapNewStyle=function(a){this.$1.passes_gk_oxygen_map_new_style=a;return this};c.setStage=function(a){this.$1.stage=a;return this};c.setSwlat=function(a){this.$1.swlat=a;return this};c.setSwlon=function(a){this.$1.swlon=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setUserComment=function(a){this.$1.user_comment=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.setZoom=function(a){this.$1.zoom=a;return this};return a}();c={category:!0,map_uri:!0,nelat:!0,nelon:!0,passes_gk_maps_tileservice_osm_default:!0,passes_gk_oxygen_map_new_style:!0,stage:!0,swlat:!0,swlon:!0,time:!0,user_comment:!0,vc:!0,weight:!0,zoom:!0};e.exports=a}),null);
__d("XMapsAttributionTermsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/maps/attribution_terms/",{})}),null);
__d("FBMapInfoButton.react",["ix","cx","fbt","AdsTextInput.react","CometMapReportTypes","ContextualDialogArrow","FBTilesReportDialogItems.react","Image.react","Link.react","MapsReporterTypedLogger","PopoverMenu.react","React","ReactXUIMenu","SimpleXUIDialog","URI","XMapsAttributionTermsController","XUIDialogButton.react","XUIDialogCancelButton.react","XUIDialogCloseButton.react","asset","joinClasses"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=b("React"),l=(j||(j=b("URI"))).goURIOnNewWindow,m=b("ReactXUIMenu").Item;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={mapInfo:{mapUrl:null,mapBounds:null,zoom:null},selectedReportType:"other",reportedProblem:null},d.$1=function(){d.setState({mapInfo:d.props.fetchMapInfo()||{mapUrl:null,mapBounds:null,zoom:null}}),b("SimpleXUIDialog").showEx(k.jsx(b("FBTilesReportDialogItems.react"),{"data-testid":void 0,types:b("CometMapReportTypes"),onSelected:function(a){return d.setState({selectedReportType:a})}}),i._("Report a Map Problem With"),k.jsxs("div",{children:[k.jsx(b("XUIDialogCancelButton.react"),{}),k.jsx(b("XUIDialogButton.react"),{action:"cancel","data-testid":void 0,use:"confirm",label:i._("Continue"),onClick:d.$4})]}))},d.$4=function(){if(d.state.selectedReportType==null)return;var a=b("CometMapReportTypes")[d.state.selectedReportType];b("SimpleXUIDialog").showEx(k.jsx(b("AdsTextInput.react"),{"data-testid":void 0,multiline:!0,placeholder:a.hint,value:d.state.reportedProblem,onChange:function(a){return d.setState({reportedProblem:a})}}),a.title,k.jsxs("div",{children:[k.jsx(b("XUIDialogCancelButton.react"),{}),k.jsx(b("XUIDialogButton.react"),{action:"cancel","data-testid":void 0,use:"confirm",label:i._("Send"),onClick:d.$5})]}))},d.$5=function(){var a=new(b("MapsReporterTypedLogger"))().setStage("submit_comment").setCategory(d.state.selectedReportType).setUserComment(d.state.reportedProblem).setMapURI(d.state.mapInfo.mapUrl||""),c=d.state.mapInfo,e=c.mapBounds;c=c.zoom;e!=null&&c!=null&&a.setNelon(e.getEast()).setNelat(e.getNorth()).setSwlon(e.getWest()).setSwlat(e.getSouth()).setZoom(""+c).setPassesGkMapsTileserviceOsmDefault(!1).setPassesGkOxygenMapNewStyle(!1);a.log();b("SimpleXUIDialog").showEx(i._("Your feedback helps us make Facebook maps better for everyone."),i._("Thank you"),k.jsx(b("XUIDialogCloseButton.react"),{"data-testid":void 0,use:"confirm"}))},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=b("XMapsAttributionTermsController").getURIBuilder(),c=k.jsxs(b("ReactXUIMenu"),{"data-testid":void 0,className:"_8-hf",children:[k.jsx(m,{"data-testid":void 0,icon:k.jsx(b("Image.react"),{src:g("408431")}),onClick:this.$1,children:i._("Report a problem with the map")},"report"),k.jsx(m,{"data-testid":void 0,icon:k.jsx(b("Image.react"),{src:g("367566")}),onClick:function(){return l(a.getURI().setProtocol("https").setDomain("www.facebook.com"))},children:i._("Map data legal notices")},"map_data_legal_notices"),k.jsx(m,{"data-testid":void 0,icon:k.jsx(b("Image.react"),{src:g("487800")}),onClick:function(){return l("https://www.openstreetmap.org/copyright/")},children:"OpenStreetMap"},"osm_direct_attribution")]});return k.jsx(b("PopoverMenu.react"),{alignh:this.$2(),position:this.$3(),menu:c,layerBehaviors:[b("ContextualDialogArrow")],children:k.jsx(b("Link.react"),{"data-testid":void 0,ref:"termsButton","aria-haspopup":"menu",className:b("joinClasses")("_6vtv",this.props.className),children:k.jsx("div",{className:"_6vtw",children:k.jsx(b("Image.react"),{src:g("360713"),"aria-label":i._("Information")})})})})};d.$2=function(){var a;if(((a=this.props.popoverPosition)==null?void 0:a.horizontal)=="left")return"left";else return"right"};d.$3=function(){var a;if(((a=this.props.popoverPosition)==null?void 0:a.vertical)=="top")return"below";else return"above"};return c}(k.Component);e.exports=a}),null);
__d("FBTilesStaticInfoButton.react",["FBMapInfoButton.react","React"],(function(a,b,c,d,e,f){var g=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this;return g.jsx(b("FBMapInfoButton.react"),{className:this.props.className,fetchMapInfo:function(){return a.props.mapInfo},surface:this.props.surface})};return c}(g.Component);e.exports=a}),null);
__d("FDSRadioListContext",["React","uniqueID"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({direction:"vertical",selectedValue:"",size:"large",name:b("uniqueID")(),onSelect:function(a){}});e.exports=c}),null);
__d("FDSRadioList.react",["FDSPrivateFormLabel.react","FDSPrivateThemeContext.react","FDSPrivateThemeUtils","FDSRadioListContext","FDSText.react","FlexLayout.react","React","cxMargin","makeFDSStandardComponent","uniqueID"],(function(a,b,c,d,e,f){"use strict";var g=b("FlexLayout.react").flexLayout,h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=b("uniqueID")(),d.$2=b("uniqueID")(),d.$3=b("uniqueID")(),d.$4=function(a){a!==d.props.value&&d.props.onChange(a)},d.state={direction:d.props.direction,name:d.$1,onSelect:d.$4,selectedValue:d.props.value,size:d.props.size},c)||babelHelpers.assertThisInitialized(d)}c.getDerivedStateFromProps=function(a,b){var c=b.selectedValue!==a.value,d=b.size!==a.size,e=b.direction!==a.direction;return c||d||e?babelHelpers["extends"]({},b,{selectedValue:a.value,size:a.size,direction:a.direction}):null};var d=c.prototype;d.render=function(){var a=this,c=this.props,d=c.children,e=c.description,f=c.direction,i=c.label,j=c.labelIsHidden,k=c.popover;c=c.tooltipText;var l=b("FDSRadioListContext"),m=i!=null?h.jsx(b("FDSPrivateFormLabel.react"),{description:e,descriptionId:e!=null?this.$3:null,hasRequirementLabel:!1,inputId:this.$2,isRequired:!1,labelIsHidden:j,popover:k,title:i,tooltipText:c}):null;return h.jsx(b("FDSPrivateThemeContext.react").Consumer,{children:function(c){c=b("FDSPrivateThemeUtils").isGeo(c);var i;!c&&e!=null&&(i=h.jsx(b("FDSText.react"),{color:"secondary",display:"block",id:a.$3,margin:"_3-94",size:"body3",weight:"normal",children:e}));return h.jsxs("div",{children:[m,i,h.jsx("div",babelHelpers["extends"]({},g({direction:f}),{"aria-labelledby":m!=null?a.$2:void 0,"data-testid":a.props["data-testid"],role:"radiogroup",children:h.jsx(l.Provider,{value:a.state,children:d})}))]})}})};return c}(h.PureComponent);a.defaultProps={direction:"vertical",labelIsHidden:!1,size:"large"};e.exports=b("makeFDSStandardComponent")("FDSRadioList",a)}),null);
__d("FDSRadioListItem.react",["cx","FDSBaseRadioInput.react","FDSPrivateThemeContext.react","FDSPrivateThemeUtils","FDSRadioListContext","FDSText.react","FDSTooltip.react","FlexLayout.react","React","expectationViolation","makeFDSStandardComponent","stylex","useUniqueID"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("React");c=b("React");var j=c.useCallback,k=c.useContext;function a(a){var c=a.isDisabled;c=c===void 0?!1:c;var d=a.value;a=babelHelpers.objectWithoutPropertiesLoose(a,["isDisabled","value"]);var e=k(b("FDSRadioListContext")),f=e.direction,g=e.selectedValue,h=e.size,l=e.name,o=e.onSelect;e=d===g;g=b("useUniqueID")();var p=b("useUniqueID")();f=f==="horizontal";(l===void 0||l===null)&&b("expectationViolation")("FDSRadioListItem should only be used inside FDSRadioList");var q=b("useUniqueID")();l=l||q;q=j(function(){o(d)},[o,d]);e=i.jsx(b("FDSBaseRadioInput.react"),{checked:e,describedBy:p,htmlForInputId:g,isDisabled:c,name:l,onChange:q,size:h,value:d});c&&a.disabledMessage!=null&&(e=i.jsx(b("FDSTooltip.react"),{offset:8,tooltip:a.disabledMessage,children:e}));return i.jsxs("div",{className:"_7b3w"+(f?" _3-92":"")+(f?"":" _3-95"),"data-testid":a["data-testid"],children:[i.jsxs(b("FlexLayout.react"),{align:"center",className:"_7_ol",children:[e,i.jsx(n,{media:a.media})]}),i.jsx(b("FlexLayout.react"),{align:"center",children:i.jsx(m,{description:a.description,descriptionID:p,id:g,isDisabled:c,isLarge:h==="large",label:a.label})})]})}function l(a){return i.jsx("div",{"aria-hidden":"true",className:"nngj4jli aohvghnu",children:i.jsx(b("FDSText.react"),{color:a.isDisabled?"disabled":"secondary",id:a.descriptionID,size:a.isGeo?"small":"body3",weight:"normal",children:a.description})})}function m(a){var c=k(b("FDSPrivateThemeContext.react"));c=b("FDSPrivateThemeUtils").isGeo(c);var d=i.jsx("div",{className:(h||(h=b("stylex"))).dedupe({"line-height-1":"g2p1l37p"},a.isLarge?null:{"line-height-1":"n49e3qhd"}),children:i.jsx(b("FDSText.react"),{color:a.isDisabled?"disabled":"primary",size:c?"body1":"body2",weight:"normal",children:a.label})});return i.jsx("label",{className:"_7b3x"+(a.isDisabled?" _7prb":""),htmlFor:a.id,children:a.description!=null&&a.description!==""?i.jsxs(i.Fragment,{children:[d,i.jsx(l,{description:a.description,descriptionID:a.descriptionID,isDisabled:a.isDisabled,isGeo:c})]}):d})}function n(a){return a.media?i.jsx("div",{className:"twqmk5h1 hu05rctj",children:a.media}):null}e.exports=b("makeFDSStandardComponent")("FDSRadioListItem",a)}),null);
__d("PagesAboutSectionLogger",["Event","PagesEventObserver","Run"],(function(a,b,c,d,e,f){"use strict";a={registerLogEvent:function(a,c,d){var e=b("Event").listen(a,"click",function(){return b("PagesEventObserver").notify(c,d)});b("Run").onLeave(function(){e.remove()})}};e.exports=a}),null);
__d("PhotosConst",[],(function(a,b,c,d,e,f){a={VIEWER_PERMALINK:0,VIEWER_SNOWLIFT:6,VIEWER_VAULTBOX:8,VIEWER_SNOWFLAKE:14,VIEWER_COMPOSER:16,VIEWER_CAROUSEL:19,VIEWER_SPHERICAL:20,VIEWER_PERMALINK_STRING:"permalink",VIEWER_SNOWLIFT_STRING:"snowlift",VIEWER_VAULTBOX_STRING:"vaultbox",VIEWER_CAROUSEL_STRING:"carousel",BULK_EDITOR:3,BULK_EDITOR_REACT:15,EDITOR_MODAL:17,FLASH_UPLOADER:4,HTML5_UPLOADER:10,SIZE_NORMAL:"n",PIC_NORMAL_FBX_SIZE:180,ALBUM_NAME_MAXLEN:65};e.exports=a}),null);
__d("PhotosUtils",["Vector"],(function(a,b,c,d,e,f){function a(){}Object.assign(a,{getNearestBox:function(a,b){var c=Infinity,d=null;for(var e in a){var f=a[e];if(f.contains(b)){f=b.distanceTo(f.getCenter());f<c&&(c=f,d=e)}}return d},absoluteToNormalizedPosition:function(a,c){var d=b("Vector").getElementPosition(a);a=b("Vector").getElementDimensions(a);c=c.sub(d).mul(100/a.x,100/a.y);c.domain="pure";return c},normalizedToAbsolutePosition:function(a,c){var d=b("Vector").getElementPosition(a);a=b("Vector").getElementDimensions(a);c=c.mul(a.x/100,a.y/100).add(d);c.domain="document";return c},isFacebox:function(a){return a.match(/^face:/)},isTag:function(a){return a.match(/^tag:/)}});e.exports=a}),null);
__d("ReactComponentRenderer",["React","ReactDOM","warning"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a=function(){function a(a,b){this.klass=a,this.container=b,this.props={},this.component=null}var c=a.prototype;c.replaceProps=function(a,b){this.props={},this.setProps(a,b)};c.setProps=function(a,c){if(this.klass==null)return;Object.assign(this.props,a);a=g.createElement(this.klass,this.props);var d=this;b("ReactDOM").render(a,this.container,function(){d.component=this,c&&c.call(this)})};c.unmount=function(){b("ReactDOM").unmountComponentAtNode(this.container),this.klass=null};return a}();e.exports=a}),null);
__d("SphericalMediaConstants",[],(function(a,b,c,d,e,f){"use strict";a={COMP_PHOTO_EDIT_THUMB:"PhotoEditThumbanil",COMP_PHOTO_VIEWER:"PhotoViewer",EDIT_VIEWPORT_SIZE:{width:476,height:476},HALF_EQUIRECT_PARTIAL_LIMIT:85,HI_ALPHA_BG:{start:.2,end:.5},HI_ALPHA_ELEMENT:{start:.5,end:.85},HI_ALPHA_DURATION:400,HI_SIZE_NORMAL:{width:35,height:35,center_radius:2,background_radius:17.5,inner_radius:12,arc_radius:6.3,arc_stroke:5.3,inner_stroke:1,triangle:[2,2.5,5.2],rim_radius:16.8,rim_stroke:1.4},HI_SIZE_FULL:{width:50,height:50,center_radius:3,background_radius:25,inner_radius:17.14,arc_radius:9,arc_stroke:7.57,inner_stroke:1.5,triangle:[2.85,4.29,7.9],rim_radius:24,rim_stroke:2},HI_BLINK_ARC_RAD:Math.PI/6,HI_BLINK_DURATION:400,HI_FADE_OUT_DELAY:1e3,MOUSE_EXPOSURE:4e3,LOGGER_SURFACES:{newsfeed:"newsfeed",timeline:"timeline",fullpage:"photo_viewer",snowlift:"www_snowlift",composer:"composer",albumComposer:"album_composer",stories:"stories",other:"other"},LOGGER_SIGNIFICANT_MOVEMENT_DEGREE:30,LOGGER_SIGNIFICANT_MOVEMENT_MS:1e3,GYRO_SLIP_FACTOR:.15,RB_SPRING_FACTOR:25,RB_MAX_SPRING_DEGREE:15,RB_MAX_STRETCH_X_DEGREE:20,RB_MAX_STRETCH_Y_DEGREE:20,RB_FRICTION:.3,TILED_CUBE_FACES:{PLUS_X:2,MINUS_X:0,PLUS_Y:4,MINUS_Y:5,PLUS_Z:3,MINUS_Z:1},TILED_CUBE_TILE_CONTENT_SIZE:510,TILED_CUBE_TILE_PADDING_PIXELS:1,TAG:"tag",TAGGED_FACEBOX:"tagged_facebox",UNTAGGED_FACEBOX:"untagged_facebox",DEFAULT_SPATIAL_TAG_SIZE_DEGREE:10,DEFAULT_VOLUME:{MUTE:0,HIGH:.7}};e.exports=a}),null);
__d("XAdsAccountAdvertisingAccessController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/accountquality/advertising_access/",{callsite:{type:"Enum",enumType:0},id:{type:"FBID"}})}),null);