_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{ODXe:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(i){a=!0,c=i}finally{try{r||null==s.return||s.return()}finally{if(a)throw c}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var c,o=a(n("q1tI")),s=n("elyg"),i=n("nOHt"),l=new Map,u=window.IntersectionObserver,f={};var d=function(e,t){var n=c||(u?c=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function p(e,t,n,r){(0,s.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var j=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),a=n&&n.pathname||"/",c=o.default.useMemo((function(){var t=(0,s.resolveHref)(a,e.href,!0),n=r(t,2),c=n[0],o=n[1];return{href:c,as:e.as?(0,s.resolveHref)(a,e.as):o||c}}),[a,e.href,e.as]),l=c.href,j=c.as,h=e.children,b=e.replace,m=e.shallow,v=e.scroll,y=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var x=o.Children.only(h),O=x&&"object"===typeof x&&x.ref,g=o.default.useRef(),w={ref:o.default.useCallback((function(e){(g.current&&(g.current(),g.current=void 0),t&&u&&e&&e.tagName&&(0,s.isLocalURL)(l))&&(f[l+"%"+j]||(g.current=d(e,(function(){p(n,l,j,{locale:"undefined"!==typeof y?y:n&&n.locale})}))));O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[t,O,l,j,n,y]),onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,c,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:c,locale:i}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,l,j,b,m,v,y)}};return t&&(w.onMouseEnter=function(e){(0,s.isLocalURL)(l)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),p(n,l,j,{priority:!0}))}),(e.passHref||"a"===x.type&&!("href"in x.props))&&(w.href=(0,s.addBasePath)((0,s.addLocale)(j,"undefined"!==typeof y?y:n&&n.locale,n&&n.defaultLocale))),o.default.cloneElement(x,w)};t.default=j},grO0:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/coming-soon",function(){return n("w/X4")}])},"w/X4":function(e,t,n){"use strict";n.r(t);var r=n("ODXe"),a=n("nKUr"),c=n("q1tI"),o=n.n(c),s=n("YFqc"),i=n.n(s);t.default=function(){var e=o.a.useState(""),t=Object(r.a)(e,2),n=t[0],c=t[1],s=o.a.useState(""),l=Object(r.a)(s,2),u=l[0],f=l[1],d=o.a.useState(""),p=Object(r.a)(d,2),j=p[0],h=p[1],b=o.a.useState(""),m=Object(r.a)(b,2),v=m[0],y=m[1];o.a.useEffect((function(){var e=setInterval((function(){x()}),1e3);return function(){return clearInterval(e)}}),[]);var x=function(){var e=new Date("August 23, 2022 17:00:00 PDT"),t=Date.parse(e)/1e3,n=new Date,r=t-Date.parse(n)/1e3,a=Math.floor(r/86400),o=Math.floor((r-86400*a)/3600),s=Math.floor((r-86400*a-3600*o)/60),i=Math.floor(r-86400*a-3600*o-60*s);o<"10"&&(o="0"+o),s<"10"&&(s="0"+s),i<"10"&&(i="0"+i),c(a),f(o),h(s),y(i)};return Object(a.jsx)("div",{className:"coming-soon-area",children:Object(a.jsx)("div",{className:"d-table",children:Object(a.jsx)("div",{className:"d-table-cell",children:Object(a.jsxs)("div",{className:"coming-soon-content",children:[Object(a.jsx)(i.a,{href:"/",children:Object(a.jsx)("a",{className:"logo",children:Object(a.jsx)("img",{src:"/images/logo.png",alt:"image"})})}),Object(a.jsx)("h2",{children:"We Are Launching Soon"}),Object(a.jsxs)("div",{id:"timer",className:"flex-wrap d-flex justify-content-center",children:[Object(a.jsxs)("div",{id:"days",className:"align-items-center flex-column d-flex justify-content-center",children:[n," ",Object(a.jsx)("span",{children:"Days"})]}),Object(a.jsxs)("div",{id:"hours",className:"align-items-center flex-column d-flex justify-content-center",children:[u," ",Object(a.jsx)("span",{children:"Hours"})]}),Object(a.jsxs)("div",{id:"minutes",className:"align-items-center flex-column d-flex justify-content-center",children:[j," ",Object(a.jsx)("span",{children:"Minutes"})]}),Object(a.jsxs)("div",{id:"seconds",className:"align-items-center flex-column d-flex justify-content-center",children:[v," ",Object(a.jsx)("span",{children:"Seconds"})]})]}),Object(a.jsxs)("form",{className:"newsletter-form","data-toggle":"validator",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"email",className:"input-newsletter",placeholder:"Enter your email",name:"EMAIL",required:!0}),Object(a.jsx)("span",{className:"label-title",children:Object(a.jsx)("i",{className:"bx bx-envelope"})})]}),Object(a.jsxs)("button",{type:"submit",className:"default-btn",children:[Object(a.jsx)("i",{className:"flaticon-user"})," Subscribe ",Object(a.jsx)("span",{})]}),Object(a.jsx)("p",{children:"If you would like to be notified when your app is live, Please subscribe to our mailing list."})]})]})})})})}}},[["grO0",0,2,1]]]);