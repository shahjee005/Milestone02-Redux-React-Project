if (self.CavalryLogger) { CavalryLogger.start_js(["cdpj8"]); }

__d("CometDialogContextBlue",["BaseModal.react","React","ReactDOM"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a,c,d){var e=document.body,f=document.createElement("div");e!=null&&e.appendChild(f);e=function(){d!=null&&d.apply(void 0,arguments),window.setTimeout(function(){b("ReactDOM").unmountComponentAtNode(f),f.remove()},0)};b("ReactDOM").render(g.jsx(b("BaseModal.react"),{children:g.jsx(a,babelHelpers["extends"]({},c,{onClose:e}))}),f)}c=g.createContext(a);e.exports=c}),null);
__d("ReactEventsContextMenu-dev.classic",["react"],(function(a,b,c,d,e,f){"use strict";var g}),null);
__d("ReactEventsContextMenu-prod.classic",["react"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react"),i=h.DEPRECATED_createResponder("ContextMenu",{targetEventTypes:"undefined"!==typeof window&&null!=window.PointerEvent?["contextmenu_active","pointerdown"]:["contextmenu_active","touchstart","mousedown"],getInitialState:function(){return{pointerType:""}},onEvent:function(a,b,c,d){var e=a.nativeEvent,f=a.pointerType;c.disabled||("contextmenu"===a.type?(f=c.onContextMenu,!1===c.preventDefault||e.defaultPrevented||e.preventDefault(),"function"===typeof f&&(e=a.nativeEvent,a=a.target,f=b.getTimeStamp(),b.dispatchEvent({altKey:e.altKey,buttons:null!=e.buttons?e.buttons:0,ctrlKey:e.ctrlKey,metaKey:e.metaKey,pageX:e.pageX,pageY:e.pageY,pointerType:d.pointerType,shiftKey:e.shiftKey,target:a,timeStamp:f,type:"contextmenu",x:e.clientX,y:e.clientY},c.onContextMenu,0)),d.pointerType=""):d.pointerType=f)}});f.ContextMenuResponder=i;f.useContextMenu=function(a){return h.DEPRECATED_useResponder(i,a)}}),null);
__d("ReactEventsContextMenu",["ReactEventsContextMenu-dev.classic","ReactEventsContextMenu-prod.classic"],(function(a,b,c,d,e,f){a=b("ReactEventsContextMenu-prod.classic");e.exports=a}),null);
__d("ReactEventsHover-dev.classic",["react"],(function(a,b,c,d,e,f){"use strict";var g}),null);
__d("ReactEventsHover-prod.classic",["react"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react");function i(a){return"function"===typeof a}function j(a,b,c,d){var e=null,f=null,g=null,h=null,i=null,j=null,k="";a&&(j=a.nativeEvent,k=a.pointerType,e=j.clientX,f=j.clientY,g=j.pageX,h=j.pageY,i=j.screenX,j=j.screenY);return{pointerType:k,target:d,type:c,timeStamp:b.getTimeStamp(),clientX:e,clientY:f,pageX:g,pageY:h,screenX:i,screenY:j,x:e,y:f}}function k(a,b,c,d){var e=d.hoverTarget;if(null!==a&&b.isTargetWithinResponderScope(a.nativeEvent.relatedTarget))return!1;d.isHovered=!0;if(!d.isActiveHovered){d.isActiveHovered=!0;var f=c.onHoverStart;i(f)&&(a=j(a,b,"hoverstart",e),b.dispatchEvent(a,f,1));c=c.onHoverChange;i(c)&&b.dispatchEvent(d.isActiveHovered,c,1)}return!0}function l(a,b,c,d){d=d.hoverTarget,c=c.onHoverMove,i(c)&&(a=j(a,b,"hovermove",d),b.dispatchEvent(a,c,1))}function m(a,b,c,d){var e=d.hoverTarget;if(null!==a&&b.isTargetWithinResponderScope(a.nativeEvent.relatedTarget))return!1;d.isHovered=!1;if(d.isActiveHovered){d.isActiveHovered=!1;var f=c.onHoverEnd;i(f)&&(a=j(a,b,"hoverend",e),b.dispatchEvent(a,f,1));c=c.onHoverChange;i(c)&&b.dispatchEvent(d.isActiveHovered,c,1);d.hoverTarget=null;d.isTouched=!1}return!0}function a(a,b,c){c.isHovered&&m(null,a,b,c)}var n=["pointerout","pointermove","pointercancel"];c={targetEventTypes:["pointerover"],getInitialState:function(){return{isActiveHovered:!1,isHovered:!1}},allowMultipleHostChildren:!1,allowEventHooks:!0,onRootEvent:function(a,b,c,d){var e=a.type;switch(e){case"pointermove":d.isHovered&&null!==d.hoverTarget&&l(a,b,c,d);break;case"pointercancel":case"pointerout":d.isHovered&&(m(a,b,c,d)||"pointercancel"===e)&&b.removeRootEventTypes(n)}},onEvent:function(a,b,c,d){var e=a.pointerType,f=a.type;if(c.disabled)d.isHovered&&(b.removeRootEventTypes(n),m(a,b,c,d));else switch(f){case"pointerover":d.isHovered||"touch"===e||(d.hoverTarget=b.getResponderNode(),k(a,b,c,d)&&b.addRootEventTypes(n))}},onUnmount:a};var o=["mousemove","mouseout"];d={targetEventTypes:["mouseover","mousemove","touchstart"],getInitialState:function(){return{isActiveHovered:!1,isHovered:!1,isTouched:!1,ignoreEmulatedMouseEvents:!1}},allowMultipleHostChildren:!1,allowEventHooks:!0,onRootEvent:function(a,b,c,d){switch(a.type){case"mousemove":d.isHovered&&null!==d.hoverTarget&&!d.ignoreEmulatedMouseEvents&&l(a,b,c,d);break;case"mouseout":d.isHovered&&m(a,b,c,d)&&b.removeRootEventTypes(o)}},onEvent:function(a,b,c,d){var e=a.type;if(c.disabled)d.isHovered&&(b.removeRootEventTypes(o),m(a,b,c,d),d.ignoreEmulatedMouseEvents=!1),d.isTouched=!1;else switch(e){case"mouseover":d.isHovered||d.ignoreEmulatedMouseEvents||(d.hoverTarget=b.getResponderNode(),k(a,b,c,d)&&b.addRootEventTypes(o));break;case"mousemove":d.isHovered||"mousemove"!==e||(d.ignoreEmulatedMouseEvents=!1,d.isTouched=!1);break;case"touchstart":d.isHovered||(d.isTouched=!0,d.ignoreEmulatedMouseEvents=!0)}},onUnmount:a};var p=h.DEPRECATED_createResponder("Hover","undefined"!==typeof window&&null!=window.PointerEvent?c:d);f.HoverResponder=p;f.useHover=function(a){return h.DEPRECATED_useResponder(p,a)}}),null);
__d("ReactEventsHover",["ReactEventsHover-dev.classic","ReactEventsHover-prod.classic"],(function(a,b,c,d,e,f){a=b("ReactEventsHover-prod.classic");e.exports=a}),null);
__d("ReactEventsPressLegacy-dev.classic",["react","warning"],(function(a,b,c,d,e,f){"use strict";var g}),null);
__d("ReactEventsPressLegacy-prod.classic",["react"],(function(a,b,c,d,e,f){"use strict";var g,h=g||b("react");a="undefined"!==typeof window&&void 0!==window.PointerEvent;var i="undefined"!==typeof window&&null!=window.navigator?/^Mac/.test(window.navigator.platform):!1,j={bottom:20,top:20,left:20,right:20},k=a?"pointerup_active pointermove pointercancel click keyup scroll blur".split(" "):"click keyup scroll mousemove touchmove touchcancel dragstart mouseup_active touchend blur".split(" ");function l(a){return"function"===typeof a}function m(a,b,c,d,e,f,g,h){a=a.getTimeStamp();var i=null,j=null,k=null,l=null,m=null,n=null,o=!1,p=!1,q=!1,r=!1,s;e&&(e=s=e.nativeEvent,o=e.altKey,p=e.ctrlKey,q=e.metaKey,r=e.shiftKey,f=f||s)&&(i=f.clientX,j=f.clientY,k=f.pageX,l=f.pageY,m=f.screenX,n=f.screenY);var t={altKey:o,buttons:h.buttons,clientX:i,clientY:j,ctrlKey:p,defaultPrevented:g,metaKey:q,pageX:k,pageY:l,pointerType:d,screenX:m,screenY:n,shiftKey:r,target:c,timeStamp:a,type:b,x:i,y:j,preventDefault:function(){h.shouldPreventClick=!0,s&&(t.defaultPrevented=!0,s.preventDefault())},stopPropagation:function(){}};return t}function n(a,b,c,d,e,f){a=m(c,e,d.pressTarget,d.pointerType,a,d.touchEvent,null!=a&&!0===a.nativeEvent.defaultPrevented||"press"===e&&d.shouldPreventClick,d),c.dispatchEvent(a,b,f)}function o(a,b,c,d){d.isPressed=!0;if(!d.isActivePressStart){d.isActivePressStart=!0;var e=a.nativeEvent,f=d.touchEvent||e;e=f.clientX;var g=f.clientY;f=d.isActivePressed;d.isActivePressed=!0;void 0!==e&&void 0!==g&&(d.activationPosition={x:e,y:g});e=c.onPressStart;l(e)&&n(a,e,b,d,"pressstart",0);f||(a=c.onPressChange,l(a)&&b.dispatchEvent(d.isActivePressed,a,0))}}function p(a,b,c,d){d.isActivePressStart=!1;d.isPressed=!1;if(d.isActivePressed){d.isActivePressed=!1;var e=c.onPressEnd;l(e)&&n(a,e,b,d,"pressend",0);a=c.onPressChange;l(a)&&b.dispatchEvent(d.isActivePressed,a,0)}d.responderRegionOnDeactivation=null}function q(a,b,c,d){d.touchEvent=null,d.isPressed&&(d.ignoreEmulatedMouseEvents=!1,p(a,b,c,d)),t(b,d)}function r(a){var b=a.key,c=a.target;a=c.tagName;c=c.isContentEditable;return("Enter"===b||" "===b||"Spacebar"===b)&&"INPUT"!==a&&"TEXTAREA"!==a&&!0!==c}function s(a,b,c){a=a.objectAssign({},j,c.pressRetentionOffset);var d=b.getBoundingClientRect();b=d.left;c=d.right;var e=d.bottom;d=d.top;a&&(null!=a.bottom&&(e+=a.bottom),null!=a.left&&(b-=a.left),null!=a.right&&(c+=a.right),null!=a.top&&(d-=a.top));return{bottom:e,top:d,left:b,right:c}}function t(a,b){b.addedRootEvents&&(b.addedRootEvents=!1,a.removeRootEventTypes(k))}function u(a,b){a=a.changedTouches;for(var c=0;c<a.length;c++){var d=a[c];if(d.identifier===b)return d}return null}function v(a,b,c,d){null==d.responderRegionOnDeactivation&&(d.responderRegionOnDeactivation=s(b,d.pressTarget,c));b=d.responderRegionOnActivation;c=d.responderRegionOnDeactivation;if(null!=b){var e=b.left,f=b.top,g=b.right,h=b.bottom;null!=c&&(e=Math.min(e,c.left),f=Math.min(f,c.top),g=Math.max(g,c.right),h=Math.max(h,c.bottom))}b=a.clientX;a=a.clientY;d.isPressWithinResponderRegion=null!=e&&null!=g&&null!=f&&null!=h&&null!==b&&null!==a&&b>=e&&b<=g&&a>=f&&a<=h}var w=h.DEPRECATED_createResponder("Press",{targetEventTypes:a?["keydown_active","pointerdown_active","click_active"]:["keydown_active","touchstart","mousedown_active","click_active"],getInitialState:function(){return{activationPosition:null,addedRootEvents:!1,buttons:0,isActivePressed:!1,isActivePressStart:!1,isPressed:!1,isPressWithinResponderRegion:!0,pointerType:"",pressTarget:null,responderRegionOnActivation:null,responderRegionOnDeactivation:null,ignoreEmulatedMouseEvents:!1,activePointerId:null,shouldPreventClick:!1,touchEvent:null}},onEvent:function(a,b,c,d){var e=a.pointerType,f=a.type;if(c.disabled)t(b,d),p(a,b,c,d),d.ignoreEmulatedMouseEvents=!1;else{var g=a.nativeEvent,h=d.isPressed;switch(f){case"pointerdown":case"keydown":case"mousedown":case"touchstart":if(h)r(g)&&" "===g.key&&g.preventDefault();else{var j="touchstart"===f,m="pointerdown"===f,q="keyboard"===e;h="mouse"===e;if("mousedown"!==f||!d.ignoreEmulatedMouseEvents){d.shouldPreventClick=!1;if(j)d.ignoreEmulatedMouseEvents=!0;else if(q)if(r(g)){f=g.altKey;q=g.ctrlKey;var u=g.metaKey,v=g.shiftKey;!1===c.preventDefault||v||u||q||f||(g.preventDefault(),d.shouldPreventClick=!0)}else break;d.pointerType=e;e=d.pressTarget=b.getResponderNode();if(m)d.activePointerId=g.pointerId;else if(j){j=g.targetTouches;j=0<j.length?j[0]:null;if(null===j)break;d.touchEvent=j;d.activePointerId=j.identifier}2===g.buttons||4<g.buttons||i&&h&&g.ctrlKey||(null!==e&&9!==e.nodeType&&(d.responderRegionOnActivation=s(b,e,c)),d.responderRegionOnDeactivation=null,d.isPressWithinResponderRegion=!0,d.buttons=g.buttons,1===g.button&&(d.buttons=4),o(a,b,c,d),d.addedRootEvents||(d.addedRootEvents=!0,b.addRootEventTypes(k)))}}break;case"click":d.shouldPreventClick&&g.preventDefault(),h=c.onPress,(e=l(h))&&(e=0===g.mozInputSource&&g.isTrusted?!0:0===g.detail&&0===g.screenX&&0===g.screenY&&0===g.clientX&&0===g.clientY),e&&(d.pointerType="keyboard",d.pressTarget=b.getResponderNode(),!1!==c.preventDefault&&g.preventDefault(),n(a,h,b,d,"press",0))}}},onRootEvent:function(a,b,c,d){var e=a.pointerType,f=a.type,g=a.target,h=a.nativeEvent,i=d.isPressed,j=d.activePointerId,k=d.pointerType;switch(f){case"pointermove":case"mousemove":case"touchmove":if(k!==e)break;if("pointermove"===f&&j!==h.pointerId)break;else if("touchmove"===f){var m=u(h,j);if(null===m)break;d.touchEvent=m}var s=d.pressTarget;null!==s&&null!==s&&9!==s.nodeType&&("mouse"===e&&b.isTargetWithinNode(g,s)?d.isPressWithinResponderRegion=!0:v(m||h,b,c,d));d.isPressWithinResponderRegion?i?(c=c.onPressMove,l(c)&&n(a,c,b,d,"pressmove",1)):o(a,b,c,d):p(a,b,c,d);break;case"pointerup":case"keyup":case"mouseup":case"touchend":if(i){if(i=d.buttons,m=!1,"pointerup"!==f||j===h.pointerId){if("touchend"===f){s=u(h,j);if(null===s)break;g=d.touchEvent=s;g=b.getActiveDocument().elementFromPoint(g.clientX,g.clientY)}else if("keyup"===f){if(!r(h))break;m=!0;t(b,d)}else 4===i&&t(b,d);if(null!==g&&b.isTargetWithinResponder(g)&&b.isTargetWithinHostComponent(g,"a")){f=h.altKey;j=h.ctrlKey;k=h.metaKey;var w=h.shiftKey;!1===c.preventDefault||w||k||j||f||(d.shouldPreventClick=!0)}f=d.pressTarget;p(a,b,c,d);j=c.onPress;null!==f&&l(j)&&(m||null===f||null===g||null===f||9===f.nodeType||("mouse"===e&&b.isTargetWithinNode(g,f)?d.isPressWithinResponderRegion=!0:v(s||h,b,c,d)),d.isPressWithinResponderRegion&&4!==i&&n(a,j,b,d,"press",0));d.touchEvent=null}}else"mouseup"===f&&(d.ignoreEmulatedMouseEvents=!1);break;case"click":"keyboard"!==k&&t(b,d);break;case"scroll":if("mouse"===k)break;e=d.pressTarget;h=h.target;g=b.getActiveDocument();null===e||h!==g&&!b.isTargetWithinNode(e,h)||q(a,b,c,d);break;case"pointercancel":case"touchcancel":case"dragstart":q(a,b,c,d);break;case"blur":i&&g===d.pressTarget&&q(a,b,c,d)}},onUnmount:function(a,b,c){c.isPressed&&(t(a,c),p(null,a,b,c))}});f.PressResponder=w;f.usePress=function(a){return h.DEPRECATED_useResponder(w,a)}}),null);
__d("ReactEventsPressLegacy",["ReactEventsPressLegacy-dev.classic","ReactEventsPressLegacy-prod.classic"],(function(a,b,c,d,e,f){a=b("ReactEventsPressLegacy-prod.classic");e.exports=a}),null);
__d("Pressability",["ReactEventsContextMenu","ReactEventsFocus","ReactEventsHover","ReactEventsPressLegacy"],(function(a,b,c,d,e,f){"use strict";var g=b("ReactEventsContextMenu").useContextMenu,h=b("ReactEventsFocus").useFocus,i=b("ReactEventsHover").useHover,j=b("ReactEventsPressLegacy").usePress;function a(a){var b=a.disabled,c=a.onBlur,d=a.onContextMenu,e=a.onFocus,f=a.onFocusChange,k=a.onFocusVisibleChange,l=a.onHoverChange,m=a.onHoverEnd,n=a.onHoverMove,o=a.onHoverStart,p=a.onPress,q=a.onPressChange,r=a.onPressEnd,s=a.onPressMove,t=a.onPressStart,u=a.preventContextMenu;a=a.preventDefault;p=j({disabled:b,onPress:p,onPressChange:q,onPressEnd:r,onPressMove:s,onPressStart:t,preventDefault:a});q=i({disabled:b,onHoverChange:l,onHoverEnd:m,onHoverMove:n,onHoverStart:o,preventDefault:a});r=h({disabled:b,onBlur:c,onFocus:e,onFocusChange:f,onFocusVisibleChange:k,preventDefault:a});s=g({disabled:b,onContextMenu:d,preventDefault:u||!1});return[p,q,r,s]}e.exports={usePressability:a}}),null);
__d("Pressable.react",["Pressability","React","joinClasses","recoverableViolation","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("Pressability").usePressability,i=b("React");c=b("React");var j=c.useCallback,k=c.useState,l={article:"article",banner:"header",complementary:"aside",contentinfo:"footer",figure:"figure",form:"form",heading:"h1",label:"label",link:"a",list:"ul",listitem:"li",main:"main",navigation:"nav",none:"div",region:"section"};function m(a,b){var c="div";if(a==="menuitem"&&b!=null&&b.url!=null)c="a";else if(a!=null){b=l[a];b!=null&&(c=b)}return c}function a(a){var c=k(!1),d=c[0];c=c[1];var e=k(!1),f=e[0];e=e[1];var l=k(!1),p=l[0];l=l[1];var q=k(!1),r=q[0];q=q[1];var s=a.accessibilityLabel,t=a.accessibilityRelationship,u=a.accessibilityRole,v=a.accessibilityState,w=a.accessibilityValue,x=a.children,y=a.className_DEPRECATED,z=a.disabled,A=a.focusable,B=a.forwardedRef,C=a.link,D=a.nativeID,E=a.onBlur,F=a.onContextMenu,G=a.onFocus,H=a.onFocusChange,I=a.onFocusVisibleChange,J=a.onHoverChange,K=a.onHoverEnd,L=a.onHoverMove,M=a.onHoverStart,N=a.onPress,O=a.onPressChange,P=a.onPressEnd,Q=a.onPressMove,R=a.onPressStart,S=a.preventContextMenu,T=a.preventDefault,U=a.style,V=a.testID;V=a.testOnly_state;var W=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["accessibilityLabel","accessibilityRelationship","accessibilityRole","accessibilityState","accessibilityValue","children","className_DEPRECATED","disabled","focusable","forwardedRef","link","nativeID","onBlur","onContextMenu","onFocus","onFocusChange","onFocusVisibleChange","onHoverChange","onHoverEnd","onHoverMove","onHoverStart","onPress","onPressChange","onPressEnd","onPressMove","onPressStart","preventContextMenu","preventDefault","style","testID","testOnly_state","xstyle"]);var X=m(u,C);z=z===!0||(v==null?void 0:v.disabled)===!0;var Y=v==null?void 0:v.hidden,Z=X==="a"&&z!==!0;f={disabled:z===!0||(V==null?void 0:V.disabled)===!0||!1,focusVisible:f||(V==null?void 0:V.focusVisible)===!0,focused:d||(V==null?void 0:V.focused)===!0,hovered:p||(V==null?void 0:V.hovered)===!0,pressed:r||(V==null?void 0:V.pressed)===!0};d=typeof x==="function"?x(f):x;p=typeof y==="function"?y(f):y;r=typeof U==="function"?U(f):U;V=typeof W==="function"?W(f):W;x=h({disabled:z,onBlur:E,onContextMenu:F,onFocus:G,onFocusChange:n(c,H),onFocusVisibleChange:n(e,I),onHoverChange:n(l,J),onHoverEnd:K,onHoverMove:L,onHoverStart:M,onPress:N,onPressChange:n(q,O),onPressEnd:P,onPressMove:Q,onPressStart:R,preventContextMenu:S,preventDefault:T==null?!0:T});y=j(function(a){typeof B==="function"?B(a):B!=null&&(B.current=a)},[B]);U=-1;z!==!0&&Y!==!0&&(A!==!1&&(U=0));return i.jsx(X,babelHelpers["extends"]({},a,{"aria-activedescendant":t==null?void 0:t.activedescendant,"aria-busy":v==null?void 0:v.busy,"aria-checked":v==null?void 0:v.checked,"aria-controls":t==null?void 0:t.controls,"aria-current":t==null?void 0:t.current,"aria-describedby":t==null?void 0:t.describedby,"aria-details":t==null?void 0:t.details,"aria-disabled":z===!0?z:void 0,"aria-expanded":v==null?void 0:v.expanded,"aria-haspopup":t==null?void 0:t.haspopup,"aria-hidden":Y,"aria-label":s,"aria-labelledby":t==null?void 0:t.labelledby,"aria-modal":v==null?void 0:v.modal,"aria-orientation":v==null?void 0:v.orientation,"aria-owns":t==null?void 0:t.owns,"aria-pressed":v==null?void 0:v.pressed,"aria-readonly":v==null?void 0:v.readonly,"aria-required":v==null?void 0:v.required,"aria-selected":v==null?void 0:v.selected,"aria-valuemax":w==null?void 0:w.max,"aria-valuemin":w==null?void 0:w.min,"aria-valuenow":w==null?void 0:w.now,"aria-valuetext":w==null?void 0:w.text,children:d,className:b("joinClasses")((g||(g=b("stylex")))(o.root,f.disabled&&o.disabled,!f.focusVisible&&o.focusNotVisible,V),p),"data-testid":void 0,DEPRECATED_flareListeners:x,href:Z?C==null?void 0:C.url:void 0,id:D,ref:y,rel:Z?C==null?void 0:C.rel:void 0,role:u==="none"?"presentation":u,style:r,tabIndex:U,target:Z?C==null?void 0:C.target:void 0}))}function n(a,b){return function(c){a(c),b&&b(c)}}var o={disabled:{cursor:"rj84mg9z"},focusNotVisible:{outline:"lzcic4wl"},root:{WebkitTapHighlightColor:"oajrlxb2",alignItems:"gs1a9yip",backgroundColor:"g5ia77u1",borderTopColor:"mtkw9kbi",borderEndColor:"tlpljxtp",borderBottomColor:"qensuy8j",borderStartColor:"ppp5ayq2",borderTopStyle:"goun2846",borderEndStyle:"ccm00jje",borderBottomStyle:"s44p3ltw",borderStartStyle:"mk2mc5f4",borderTopWidth:"rt8b4zig",borderEndWidth:"n8ej3o3l",borderBottomWidth:"agehan2d",borderStartWidth:"sk4xxmp2",boxSizing:"rq0escxv",cursor:"nhd2j8a9",display:"j83agx80",flexBasis:"mg4g778l",flexDirection:"cbu4d94t",flexShrink:"pfnyh3mw",listStyle:"p7hjln8o",marginTop:"kvgmc6g5",marginEnd:"cxmmr5t8",marginBottom:"oygrvhab",marginStart:"hcukyx3x",minHeight:"tgvbjcpo",minWidth:"hpfvmrgz",paddingTop:"jb3vyjys",paddingEnd:"rz4wbd8a",paddingBottom:"qt6c0cv9",paddingStart:"a8nywdso",position:"l9j0dhe7",textAlign:"i1ao9s8h",textDecoration:"esuyzwwr",touchAction:"f1sip0of",zIndex:"du4w35lb"}};e.exports=a}),null);
__d("PressableText.react",["Pressability","React","joinClasses","recoverableViolation","stylex"],(function(a,b,c,d,e,f){"use strict";var g,h=b("Pressability").usePressability,i=b("React");c=b("React");var j=c.useCallback,k=c.useState,l={article:"article",banner:"header",complementary:"aside",contentinfo:"footer",figure:"figure",form:"form",heading:"h1",label:"label",link:"a",list:"ul",listitem:"li",main:"main",navigation:"nav",none:"div",region:"section"};function m(a,b){var c="div";if(a==="menuitem"&&b!=null&&b.url!=null)c="a";else if(a!=null){b=l[a];b!=null&&(c=b)}return c}function a(a){var c=k(!1),d=c[0];c=c[1];var e=k(!1),f=e[0];e=e[1];var l=k(!1),p=l[0];l=l[1];var q=k(!1),r=q[0];q=q[1];var s=a.accessibilityLabel,t=a.accessibilityRelationship,u=a.accessibilityRole,v=a.accessibilityState,w=a.children,x=a.className_DEPRECATED,y=a.direction,z=a.disabled,A=a.focusable,B=a.forwardedRef,C=a.link,D=a.nativeID,E=a.onBlur,F=a.onContextMenu,G=a.onFocus,H=a.onFocusChange,I=a.onFocusVisibleChange,J=a.onHoverChange,K=a.onHoverEnd,L=a.onHoverMove,M=a.onHoverStart,N=a.onPress,O=a.onPressChange,P=a.onPressEnd,Q=a.onPressMove,R=a.onPressStart,aa=a.preventContextMenu,S=a.preventDefault,ba=a.selectable,T=a.style,U=a.testID;U=a.testOnly_state;var V=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["accessibilityLabel","accessibilityRelationship","accessibilityRole","accessibilityState","children","className_DEPRECATED","direction","disabled","focusable","forwardedRef","link","nativeID","onBlur","onContextMenu","onFocus","onFocusChange","onFocusVisibleChange","onHoverChange","onHoverEnd","onHoverMove","onHoverStart","onPress","onPressChange","onPressEnd","onPressMove","onPressStart","preventContextMenu","preventDefault","selectable","style","testID","testOnly_state","xstyle"]);var W=m(u,C);z=z===!0||(v==null?void 0:v.disabled)===!0;var X=v==null?void 0:v.hidden,Y=W==="a"&&z!==!0;f={disabled:z===!0||(U==null?void 0:U.disabled)===!0||!1,focusVisible:f||(U==null?void 0:U.focusVisible)===!0,focused:d||(U==null?void 0:U.focused)===!0,hovered:p||(U==null?void 0:U.hovered)===!0,pressed:r||(U==null?void 0:U.pressed)===!0};d=typeof w==="function"?w(f):w;p=typeof x==="function"?x(f):x;r=typeof T==="function"?T(f):T;U=typeof V==="function"?V(f):V;w=h({disabled:z,onBlur:E,onContextMenu:F,onFocus:G,onFocusChange:n(c,H),onFocusVisibleChange:n(e,I),onHoverChange:n(l,J),onHoverEnd:K,onHoverMove:L,onHoverStart:M,onPress:N,onPressChange:n(q,O),onPressEnd:P,onPressMove:Q,onPressStart:R,preventContextMenu:aa,preventDefault:S==null?!0:S});var Z;switch(y){case"none":break;default:y!=null&&(Z=y);break}x=j(function(a){typeof B==="function"?B(a):B!=null&&(B.current=a)},[B]);var $;T=W==="a"||u==="button";T?z===!0||X===!0||A===!1?$=-1:$=0:z!==!0&&X!==!0&&A!==!1&&u!=="none"&&($=0);V=C==null?void 0:C.download;E=(V===!0||typeof V==="string")&&Y;return i.jsx(W,babelHelpers["extends"]({},a,{"aria-activedescendant":t==null?void 0:t.activedescendant,"aria-busy":v==null?void 0:v.busy,"aria-checked":v==null?void 0:v.checked,"aria-controls":t==null?void 0:t.controls,"aria-current":t==null?void 0:t.current,"aria-describedby":t==null?void 0:t.describedby,"aria-details":t==null?void 0:t.details,"aria-disabled":z===!0?z:void 0,"aria-expanded":v==null?void 0:v.expanded,"aria-haspopup":t==null?void 0:t.haspopup,"aria-hidden":X,"aria-invalid":v==null?void 0:v.invalid,"aria-label":s,"aria-labelledby":t==null?void 0:t.labelledby,"aria-owns":t==null?void 0:t.owns,"aria-pressed":v==null?void 0:v.pressed,"aria-readonly":v==null?void 0:v.readonly,"aria-required":v==null?void 0:v.required,"aria-selected":v==null?void 0:v.selected,children:d,className:b("joinClasses")((g||(g=b("stylex")))(o.root,ba===!1&&o.notSelectable,f.disabled&&o.disabled,!f.focusVisible&&o.focusNotVisible,U),p),"data-testid":void 0,DEPRECATED_flareListeners:w,dir:Z,download:E?V:void 0,href:Y?C==null?void 0:C.url:void 0,id:D,ref:x,rel:Y?C==null?void 0:C.rel:void 0,role:u==="none"?"presentation":u,style:r,tabIndex:$,target:Y?C==null?void 0:C.target:void 0}))}function n(a,b){return function(c){a(c),b&&b(c)}}var o={disabled:{cursor:"rj84mg9z"},focusNotVisible:{outline:"lzcic4wl"},notSelectable:{userSelect:"abiwlrkh"},root:{WebkitTapHighlightColor:"oajrlxb2",backgroundColor:"g5ia77u1",borderTop:"qu0x051f",borderEnd:"esr5mh6w",borderBottom:"e9989ue4",borderStart:"r7d6kgcz",boxSizing:"rq0escxv",cursor:"nhd2j8a9",display:"nc684nl6",listStyle:"p7hjln8o",marginTop:"kvgmc6g5",marginEnd:"cxmmr5t8",marginBottom:"oygrvhab",marginStart:"hcukyx3x",paddingTop:"jb3vyjys",paddingEnd:"rz4wbd8a",paddingBottom:"qt6c0cv9",paddingStart:"a8nywdso",textAlign:"i1ao9s8h",textDecoration:"esuyzwwr",touchAction:"f1sip0of"}};e.exports=a}),null);
__d("CometFeedClickEventsLoggerContext",["React","emptyFunction"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(b("emptyFunction"));e.exports=c}),null);
__d("CometFeedLoggingExtraFieldsContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({});e.exports=c}),null);
__d("getAbsoluteUrl",["URI"],(function(a,b,c,d,e,f){"use strict";var g;function a(a){return a===null||a===void 0||a.trim()==="#"?a:new(g||(g=b("URI")))(a).getQualifiedURI().toString()}e.exports=a}),null);
__d("useStoryClickEventLogger",["CometFeedClickEventsLoggerContext","CometFeedLoggingExtraFieldsContext","CometTrackingCodeContext","CometTrackingNodesContext","React","getAbsoluteUrl"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useCallback,h=c.useContext;function a(){var a=h(b("CometFeedClickEventsLoggerContext")),c=h(b("CometTrackingNodesContext")),d=h(b("CometTrackingCodeContext")),e=d.encrypted_tracking[0],f=h(b("CometFeedLoggingExtraFieldsContext"));return g(function(d,g,h,i){h=b("getAbsoluteUrl")(h);a(d,c,e,g,h,f,i)},[a,c,e,f])}e.exports=a}),null);
__d("useExperimentalFeedTracking",["requireDeferred","React","useStoryClickEventLogger","uuid"],(function(a,b,c,d,e,f){"use strict";var g=b("requireDeferred")("Banzai");c=b("React");var h=c.useEffect,i=c.useMemo,j=c.useRef,k=0;function a(a,c){var d=j(null),e=b("useStoryClickEventLogger")();h(function(){var a=d.current;function f(a){var d=a.buttons,f=a.timeStamp;a=a.type;if(f===k)return;if(a==="mousedown"&&d!==1&&d!==2)return;var h=a==="contextmenu"?2:d===4?1:0;k=f;var i=b("uuid")();g.loadImmediately(function(a){var b=babelHelpers["extends"]({},a.VITAL,{signal:!0});a.post("comet_metrics:click_audit",{click_type:h===1?"middle_click":h===2?"right_click":"",client_trace_id:i,href:c,ts:f},b)});e(f,h,c,i)}a&&(a.addEventListener("click",f),a.addEventListener("contextmenu",f),a.removeEventListener("mousedown",f));return function(){a&&(a.removeEventListener("click",f),a.removeEventListener("contextmenu",f),a.removeEventListener("mousedown",f))}},[d,c,e]);return i(function(){return a?function(b){typeof a==="function"?a(b):a.current=b,d.current=b}:d},[a])}e.exports=a}),null);
__d("useFeedPressEventHandler",["requireDeferred","React","gkx","useStoryClickEventLogger","uuid"],(function(a,b,c,d,e,f){"use strict";var g=b("requireDeferred")("Banzai");c=b("React");var h=c.useCallback;function a(a,c){var d=b("useStoryClickEventLogger")();return h(function(e){a&&a(e);var f=e.buttons,h=e.timeStamp;e=e.type;if(e==="press"||e==="contextmenu"||e==="pressstart"&&f===4){var i=e==="contextmenu"?2:f===4?1:0,j=b("uuid")();b("gkx")("1245813")&&g.loadImmediately(function(a){var b=babelHelpers["extends"]({},a.VITAL,{signal:!0});a.post("comet_metrics:click_audit",{click_type:i===1?"middle_click":i===2?"right_click":"",client_trace_id:j,href:c,ts:h},b)});d(h,i,c,j)}},[a,d,c])}e.exports=a}),null);
__d("BaseButton.react",["BaseButtonPopoverContext","Pressable.react","PressableText.react","React","gkx","useExperimentalFeedTracking","useFeedPressEventHandler"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useContext;function a(a,c){var d=a["aria-activedescendant"],e=a["aria-checked"],f=a["aria-controls"],i=a["aria-describedby"],j=a["aria-expanded"],k=a["aria-haspopup"],l=a["aria-hidden"],m=a["aria-invalid"],n=a["aria-label"],o=a["aria-labelledby"],p=a["aria-pressed"],q=a.children,r=a.className_DEPRECATED,s=a.disabled;s=s===void 0?!1:s;var t=a.display;t=t===void 0?"inline":t;var u=a.focusable,v=a.id,w=a.label,x=a.onBlur,y=a.onClick,z=a.onContextMenu,A=a.onFocus,B=a.onFocusChange,C=a.onFocusVisibleChange,D=a.onHoverChange,E=a.onHoverEnd,F=a.onHoverStart,G=a.onPressChange,H=a.onPressEnd,I=a.onPressStart,J=a.role,K=a.preventContextMenu,L=a.style,M=a.suppressHydrationWarning,N=a.testid,O=a.testOnly_pressed;O=O===void 0?!1:O;a=a.xstyle;J=J==="presentation"?"none":J;var P=c,Q=y,R=I,S=z;b("gkx")("1115188")?P=b("useExperimentalFeedTracking")(c):(Q=b("useFeedPressEventHandler")(y),R=b("useFeedPressEventHandler")(I),S=b("useFeedPressEventHandler")(z));c=h(b("BaseButtonPopoverContext"));I={accessibilityLabel:(y=n)!=null?y:w,accessibilityRelationship:{activedescendant:d,controls:f,describedby:i,haspopup:c!=null&&k==null?c.haspopup:k,labelledby:o},accessibilityState:{checked:e,disabled:s,expanded:c!=null&&j==null?c.expanded:j,hidden:l,invalid:m,pressed:p},className_DEPRECATED:r,disabled:s,focusable:u,forwardedRef:P,nativeID:v,onBlur:x,onContextMenu:S,onFocus:A,onFocusChange:B,onFocusVisibleChange:C,onHoverChange:D,onHoverEnd:E,onHoverStart:F,onPress:Q,onPressChange:G,onPressEnd:H,onPressStart:R,preventContextMenu:K,style:L,testID:N,testOnly_state:{disabled:!1,focusVisible:!1,focused:!1,hovered:!1,pressed:O},xstyle:a};if(t==="block"){z=J==="menuitem"||J==="none"||J==="gridcell"||J==="switch"||J==="combobox"||J==="checkbox"||J==="radio"?J:"button";return g.jsx(b("Pressable.react"),babelHelpers["extends"]({},I,{accessibilityRole:z,children:q}))}else{n=J==="menuitem"||J==="menuitemcheckbox"||J==="menuitemradio"||J==="option"||J==="none"?J:"button";return g.jsx(b("PressableText.react"),babelHelpers["extends"]({},I,{accessibilityRole:n,direction:"none",suppressHydrationWarning:M,children:q}))}}e.exports=g.forwardRef(a)}),null);
__d("BaseLinkEndpointModifierContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext([]);e.exports=c}),null);
__d("BaseNestedPressableHack_DO_NOT_USE.react",["React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useEffect,i=c.useState;function a(a){a=a.children;var b=i(!1),c=b[0],d=b[1];h(function(){return d(!0)},[]);b=c?null:{height:0,width:0};return g.jsx("object",babelHelpers["extends"]({},b,{type:"nested/pressable",children:a}))}e.exports=a}),null);
__d("CometClickIDParameterUtils",["ConstUriUtils","isCdnURI","isClickIDBlacklistSVDomainURI","isFacebookSVDomainURI","isFacebookURI","isFbDotComURI"],(function(a,b,c,d,e,f){"use strict";var g="fbclid";c="doubleclick.net";var h=(d={},d[c]=[{extractor:function(a){a=a.getQueryString();return a!=null&&a.startsWith("http")?b("ConstUriUtils").getUri(a):null},injector:function(a,b,c){b=b.addQueryParam(g,c);if(b!=null){c=a.replaceQueryParams(b.getQueryParams());if(c!=null)return c}return a}}],d);function i(a){return a.getOrigin()!=="://"}function j(a){var b=Object.keys(h).filter(function(b){return a.getDomain().endsWith(b)});b=b[0]||null;b=b!=null?h[b]:null;if(b==null)return null;b=b.map(function(b){var c=b.extractor(a);return c==null?null:{injector:b.injector,uri:c}}).filter(function(a){return a!=null});return b[0]||null}function k(a){var c=b("isClickIDBlacklistSVDomainURI")(a);if(c)return!0;c=j(a);return c!=null?k(c.uri):!1}function l(a){return!b("isFacebookURI")(a)&&!b("isFacebookSVDomainURI")(a)&&!b("isCdnURI")(a)&&!b("isFbDotComURI")(a)&&i(a)&&["http","https"].includes(a.getProtocol())&&!k(a)}function m(a,b){var c=j(a);if(c!=null)return c.injector(a,c.uri,b);c=a.addQueryParam(g,b);return c!=null?c:a}function a(a,b){return l(a)?m(a,b):a}e.exports={appendClickIDQueryParam:a}}),null);
__d("CometLynxGeneration",["ConstUriUtils","LinkshimHandlerConfig"],(function(a,b,c,d,e,f){"use strict";var g=b("ConstUriUtils").getUri("/l.php");g!=null&&(g=g.setDomain(b("LinkshimHandlerConfig").linkshim_host));var h={getLynxURIProtocol:function(a){return b("LinkshimHandlerConfig").always_use_https?"https":a.getProtocol()==="http"?"http":"https"},getShimURI:function(){return g},getShimmedHref:function(a,b,c){var d=h.getLynxURIProtocol(a),e=h.getShimURI();e!=null&&(e=e.addQueryParams(new Map([["u",a.toString()],["h",b]])));e!=null&&(e=e.setProtocol(d));b=c==null?void 0:c.trackingNodes;d=c==null?void 0:c.callbacks;b&&b.length&&e!=null&&(e=e.addQueryParam("__tn__",b.join("")));d&&d.length&&e!=null&&(e=e.addQueryParam("c",d));return e!=null?e:a}};e.exports=h}),null);
__d("CometLinkShimUtils",["CometClickIDParameterUtils","CometLynxGeneration","ConstUriUtils","LinkshimHandlerConfig","Random","isFacebookURI","isLinkshimURI","killswitch"],(function(a,b,c,d,e,f){"use strict";var g=/^(#|\/\w)/;function h(a){if(g.test(a.toString()))return!1;var c=a.getProtocol();return(c==="http"||c==="https")&&!b("isFacebookURI")(a)}var i=new RegExp("^(l|lm|h)\\..*$","i");function j(a){if(b("killswitch")("LINK_UPGRADE_UNSHIMMED_JS"))return null;if(a.getProtocol()!=="http")return null;if(!b("isFacebookURI")(a))return null;return i.test(a.getDomain())?null:a.setProtocol("https")}var k={href:"#",shimmed:!1};function a(a,c,d){if(a==null||a==="#")return k;a=b("ConstUriUtils").getUri(a);if(a==null)return k;var e=b("LinkshimHandlerConfig").link_react_default_hash;if(b("isLinkshimURI")(a)){var f=a.getQueryParams(),g=f.get("u");f=f.get("h");g=b("ConstUriUtils").getUri(String(g));g!=null&&(a=g,e=String(f))}g=b("LinkshimHandlerConfig").click_ids;if(!b("killswitch")("LINKSHIM_ADD_CLICK_ID_PARAM")&&g!=null&&g.length>0){f=Math.floor(b("Random").random()*g.length);g=g[f];a=b("CometClickIDParameterUtils").appendClickIDQueryParam(a,g)}f=j(a);f!=null&&(a=f);if(h(a)){g=b("CometLynxGeneration").getShimmedHref(a,e,{callbacks:c,trackingNodes:d});return{href:g.toString(),shimmed:!0}}else return{href:a.toString(),shimmed:!1}}e.exports={getLinkShimInfo:a,use_rel_no_opener:b("LinkshimHandlerConfig").use_rel_no_opener}}),null);
__d("CometProductAttributionContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=null;e.exports=a.createContext(c)}),null);
__d("useCometErrorProject",["CometErrorProjectContext","React"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useContext;function a(){return g(b("CometErrorProjectContext"))}e.exports=a}),null);
__d("BaseLink.react",["BaseLinkEndpointModifierContext","BaseLinkNestedPressableContext","BaseNestedPressableHack_DO_NOT_USE.react","CometLinkShimUtils","CometProductAttributionContext","CometTrackingCodeContext","CometTrackingNodesContext","ConstUriUtils","JSScheduler","JSTracing","Pressable.react","PressableText.react","React","RecoverableViolationWithComponentStack.react","clearTimeout","gkx","isCometRouterUrl","isFacebookURI","mergeRefs","recoverableViolation","setTimeout","useCometErrorProject","useCometRoute","useCometRouterDispatcher","useCurrentRoute","useExperimentalFeedTracking","useFeedPressEventHandler"],(function(a,b,c,d,e,f){"use strict";var aa=b("JSScheduler").scheduleSpeculativeCallback,g=b("React");c=b("React");var h=c.useContext,ba=c.useEffect,i=c.useMemo,j=c.useRef,ca=100;function k(a,c){return c==null?null:a.reduce(function(a,c){c=c(a);if(!b("isCometRouterUrl")(c)){b("recoverableViolation")("Endpoint modifier returned a non-router URL, ignoring.","comet_infra");return a}return c},c)}function l(a,c,d){if(a!=null&&a!=="#"&&(d.length||c.length)){var e=b("ConstUriUtils").getUri(a);if(e!=null){if(!b("isFacebookURI")(e))return a;d.length&&(e=e.addQueryParam("__cft__",d));c.length&&e!=null&&(e=e.addQueryParam("__tn__",c.join("")));return e!=null?e.toString():a}}return a}function m(a){a=a.children;return g.jsx(b("BaseLinkNestedPressableContext").Provider,{value:!0,children:a})}function a(a,c){var d=a["aria-activedescendant"],e=a["aria-checked"],f=a["aria-controls"],n=a["aria-current"],o=a["aria-describedby"],da=a["aria-expanded"],p=a["aria-haspopup"],ea=a["aria-hidden"],fa=a["aria-invalid"],q=a["aria-label"],r=a["aria-labelledby"],s=a["aria-owns"],t=a.children,ga=a.className_DEPRECATED,u=a.disabled,v=a.display;v=v===void 0?"inline":v;var w=a.download,ha=a.focusable,x=a.href,ia=a.id,y=a.label,ja=a.onBlur,z=a.onClick,A=a.onContextMenu,ka=a.onFocus,la=a.onFocusChange,ma=a.onFocusVisibleChange,na=a.onHoverChange,B=a.onHoverEnd,oa=a.onHoverStart,pa=a.onNavigate,qa=a.onPressChange,ra=a.onPressEnd,C=a.onPressStart,sa=a.passthroughProps,ta=a.preload,ua=a.preventContextMenu,va=a.preventLocalNavigation,wa=a.productAttribution,D=a.rel,xa=a.replace,E=a.role,F=a.routeTarget,ya=a.style,za=a.suppressHydrationWarning,G=a.target,Aa=a.testid,H=a.testOnly_pressed;H=H===void 0?!1:H;var Ba=a.traceParams;a=a.xstyle;var I=b("useCometRouterDispatcher")(),J=j(null),K=h(b("BaseLinkEndpointModifierContext")),L=j(null),M=j(null),N=j(null),O=h(b("CometTrackingNodesContext")),P=h(b("CometTrackingCodeContext")),Ca=P.click_tracking_linkshim_cb,Q=P.encrypted_click_tracking,Da=h(b("CometProductAttributionContext")),Ea=x!=null&&b("isCometRouterUrl")(x),R=i(function(){var a=Ea?l(k(K,x),O,Q):null;return a},[Q,Ea,K,x,O]),S=b("useCometRoute")(R),Fa=w===!0||typeof w==="string";P=i(function(){if(Fa)return{href:x,isRouterLink:!1,shimmed:!1};if(R!=null){var a=S&&S.canonicalUrl!=null?l(k(K,S.canonicalUrl),O,Q):R;return{href:a,isRouterLink:!0,shimmed:!1}}a=b("CometLinkShimUtils").getLinkShimInfo(x,Ca,O);var c=a.shimmed?a.href:l(a.href,O,Q);return{href:c,isRouterLink:!1,shimmed:a.shimmed}},[Ca,Q,Fa,K,x,S,R,O]);var T=P.isRouterLink,U=P.href;P=P.shimmed;var V=!1,W=!1,X=G;if(P){V=!0;X=(G=X)!=null?G:"_blank";W=!!b("CometLinkShimUtils").use_rel_no_opener&&X==="_blank"}P=D;V&&(P==null||P.indexOf("nofollow")<0)&&(P=P!=null?P+" nofollow":"nofollow");W&&(P==null||P.indexOf("noopener")<0)&&(P=P!=null?P+" noopener":"noopener");ba(function(){T&&I!=null&&ta===!0&&U!=null&&b("JSTracing").clear(function(){I.preloadRoute(U,F),L.current=U})},[I,U,T,ta,F]);G=h(b("BaseLinkNestedPressableContext"));D=y!=null?y:q;V=E==="presentation"?"none":E;var Y=c,Z=z,$=C;W=A;b("gkx")("1115188")?Y=b("useExperimentalFeedTracking")(c,U):(Z=b("useFeedPressEventHandler")(z,U),$=b("useFeedPressEventHandler")(C,U),W=b("useFeedPressEventHandler")(A,U));y=i(function(){return b("mergeRefs")(Y,J)},[Y,J]);q=function(a){$&&$(a),I&&T&&U!=null&&(M.current=I.prerenderRoute(U,{passthroughProps:sa,replace:xa,target:F,traceParams:Ba}))};E=function(a){Z&&Z(a);if(!T)return;var c=X==null||X==="_self",d=!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey);va!==!0&&c&&d&&(I?U!=null&&(I.go(U,{eventTimestamp:a.timeStamp,linkRef:J,onNavigate:pa,passthroughProps:sa,productAttributionUpdateProps:{fromLink:wa,linkContext:Da},replace:xa,target:F,traceParams:Ba}),M.current=null):b("gkx")("708253")&&b("recoverableViolation")("A comet router link must exist in a CometRouterProvider to be clicked","comet_infra"))};c=function(a){oa&&oa(a);if(!T)return;U!=null&&L.current!==U&&b("JSTracing").clear(function(){aa(function(){I!=null&&(N.current=b("setTimeout")(function(){L.current=U,I.prefetchRouteDefinition(U,!0,F),N.current=null},ca))})})};z=function(a){B&&B(a);b("clearTimeout")(N.current);N.current=null;var c=M.current;c&&(b("JSScheduler").next(function(){c.cancel()}),M.current=null)};C=T&&X!=="_blank"&&I!=null;D={accessibilityLabel:D,accessibilityRelationship:{activedescendant:d,controls:f,current:n,describedby:o,haspopup:p,labelledby:r,owns:s},accessibilityState:{checked:e,disabled:u,expanded:da,hidden:ea,invalid:fa},className_DEPRECATED:ga,disabled:u,focusable:ha,forwardedRef:y,link:{download:w,rel:P,target:X,url:(A=U)!=null?A:"#"},nativeID:ia,onBlur:ja,onContextMenu:W,onFocus:ka,onFocusChange:la,onFocusVisibleChange:ma,onHoverChange:na,onHoverEnd:z,onHoverStart:c,onPress:E,onPressChange:qa,onPressEnd:ra,onPressStart:q,preventContextMenu:ua,preventDefault:C,style:ya,testID:Aa,testOnly_state:{disabled:!1,focusVisible:!1,focused:!1,hovered:!1,pressed:H},xstyle:a};if(v==="block"){d=V==="button"||V==="menuitem"||V==="none"||V==="switch"||V==="checkbox"||V==="article"||V==="radio"?V:"link";f=g.jsx(b("Pressable.react"),babelHelpers["extends"]({},D,{accessibilityRole:d,children:g.jsx(m,{children:t})}))}else{n=V==="button"||V==="menuitem"||V==="menuitemradio"||V==="none"?V:"link";f=g.jsx(b("PressableText.react"),babelHelpers["extends"]({},D,{accessibilityRole:n,direction:"none",suppressHydrationWarning:za,children:g.jsx(m,{children:t})}))}o=!1;p=b("useCurrentRoute")();r=b("useCometErrorProject")();p!=null&&F==="content"&&((p.__type!=="tab"||p.isCometRootContainer!==!0)&&(o=!0));return g.jsxs(g.Fragment,{children:[o&&g.jsx(b("RecoverableViolationWithComponentStack.react"),{errorMessage:"A link with target=content was rendered in a non-tab-container",projectName:(s=r)!=null?s:"comet_infra"}),G?g.jsx(b("BaseNestedPressableHack_DO_NOT_USE.react"),{children:f}):f]})}e.exports=g.forwardRef(a)}),null);
__d("useCometPrerendererFallback",["emptyFunction"],(function(a,b,c,d,e,f){"use strict";a=function(a,c,d,e,f){return[{isVisible:c,shouldPrerender:!1},a=b("emptyFunction"),a,a,a]};e.exports=a}),null);