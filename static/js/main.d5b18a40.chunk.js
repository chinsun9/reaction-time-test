(this["webpackJsonpreaction-time-test"]=this["webpackJsonpreaction-time-test"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(6),a=c.n(i),r=(c(12),c(2)),j=(c(13),c(0));var l=function(e){var t=e.setPage,c=Object(s.useCallback)((function(){t("start")}),[t]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"\ubc18\uc751\uc18d\ub3c4 \ud14c\uc2a4\ud2b8"}),Object(j.jsx)("button",{type:"button",onClick:c,children:"\ud14c\uc2a4\ud2b8 \uc2dc\uc791"})]})},u=c(7);var b=function(e){var t=e.setPage,c=e.setRootHistory,n=Object(s.useState)(!0),i=Object(r.a)(n,2),a=i[0],l=i[1],b=Object(s.useState)(0),d=Object(r.a)(b,2),o=d[0],h=d[1],O=Object(s.useState)(!0),x=Object(r.a)(O,2),m=x[0],f=x[1],v=Object(s.useState)([]),g=Object(r.a)(v,2),p=g[0],C=g[1],N=Object(s.useState)(0),k=Object(r.a)(N,2),T=k[0],S=k[1],w=Object(s.useCallback)((function(){if(f(!1),a)l(!1);else if(m){if(o+1>=5)return c(p),void t("result");C((function(e){var t=Object(u.a)(e);return t.push(Date.now()-T),t})),h((function(e){return e+1}))}else h((function(e){return e-1}))}),[p,m,a,t,c,o,T]),y=Object(s.useCallback)((function(){var e="start";return a?e:"".concat(e,m?" go":" wait")}),[m,a]),F=Object(s.useCallback)((function(){var e=function(){var e="\ud074\ub9ad",t="\ud074\ub9ad\ud574\uc8fc\uc138\uc694";return a?{h1Text:e="\uc2dc\uc791",pText:t}:m?{h1Text:e,pText:t}:{h1Text:e="\uc900\ube44",pText:t="\ucd08\ub85d\uc0c9\uc774 \ub418\uba74 \ud074\ub9ad\ud574\uc8fc\uc138\uc694"}}(),t=e.h1Text,c=e.pText;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:t}),Object(j.jsx)("p",{children:c})]})}),[m,a]);return Object(s.useEffect)((function(){var e=setTimeout((function(){f(!0)}),1500+1e3*(Math.random()-.5));return m&&S(Date.now()),function(){clearTimeout(e)}}),[m,o]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"label",children:[o,"/5"]}),Object(j.jsx)("progress",{id:"progress",max:"5",value:o}),Object(j.jsx)("div",{className:y(),"aria-hidden":!0,onClick:w,children:F()}),Object(j.jsx)("div",{className:"history",children:Object(j.jsx)("div",{className:"list",children:p.map((function(e,t){var c=e+t;return Object(j.jsxs)("div",{className:"item",children:[t+1,"\ubc88\uc9f8 \uc2dc\ub3c4: ",e,"ms"]},c)}))})})]})},d=[{time:100,title:"\uc0c1\uc704 1%",desc:"wow"},{time:200,title:"\uc0c1\uc704 5%",desc:"\uad73"},{time:400,title:"\uc0c1\uc704 50%",desc:"\ud3c9\ubc94"},{time:600,title:"\ud558\uc704 5%",desc:"\ub290\ub824.."},{time:800,title:"\ud558\uc704 1%",desc:"\ubc18\uc751\uc18d\ub3c4\uac00 \ub108\ubb34 \ub290\ub9bd\ub2c8\ub2e4. \ubd88\uac00\ub2a5\ud55c ..."}];var o=function(e){var t=e.setPage,c=e.history,n=Object(s.useState)(c.reduce((function(e,t){return e+t}),0)/c.length),i=Object(r.a)(n,1)[0],a=Object(s.useState)({title:"-",desc:"\uacc4\uc0b0\uc911..."}),l=Object(r.a)(a,2),u=l[0],b=l[1],o=Object(s.useCallback)((function(){t("main")}),[t]);return Object(s.useEffect)((function(){!function(){for(var e=0;e<d.length;e+=1){var t=d[e],c=t.time,s=t.title,n=t.desc;if(i<=c)return void b({title:s,desc:n})}var a=d[d.length-1],r=a.title,j=a.desc;b({title:r,desc:j})}()}),[i]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"share"}),Object(j.jsx)("h2",{children:"\ubc18\uc751\uc18d\ub3c4 \ud14c\uc2a4\ud2b8 \uacb0\uacfc"}),Object(j.jsxs)("div",{className:"result",children:[Object(j.jsx)("h1",{children:i}),Object(j.jsx)("span",{children:"ms"})]}),Object(j.jsxs)("div",{className:"msg",children:[Object(j.jsx)("p",{children:"\ub2f9\uc2e0\uc758 \ubc18\uc751\uc18d\ub3c4\ub294"}),Object(j.jsx)("p",{className:"rank",children:u.title}),Object(j.jsx)("p",{children:"\uc785\ub2c8\ub2e4."}),Object(j.jsx)("p",{className:"rank-msg",children:u.desc})]}),Object(j.jsx)("div",{className:"replay",children:Object(j.jsx)("button",{type:"button",onClick:o,children:"\ud14c\uc2a4\ud2b8 \ub2e4\uc2dc\ud558\uae30"})})]})};function h(){return Object(j.jsx)("div",{className:"sidetab",children:Object(j.jsx)("div",{className:"sideItem",children:Object(j.jsx)("a",{href:"https://github.com/chinsun9/reaction-time-test",target:"chinsun9 github",children:Object(j.jsx)("svg",{viewBox:"64 64 896 896",focusable:"false",className:"","data-icon":"github",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",children:Object(j.jsx)("path",{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"})})})})})}var O=function(){var e=Object(s.useState)("main"),t=Object(r.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)([]),a=Object(r.a)(i,2),u=a[0],d=a[1],O=Object(s.useCallback)((function(e){switch(e){case"main":return Object(j.jsx)(l,{setPage:n});case"start":return Object(j.jsx)(b,{setPage:n,setRootHistory:d});case"result":return Object(j.jsx)(o,{setPage:n,history:u});default:return"no"}}),[u]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"App",children:O(c)}),Object(j.jsx)(h,{})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),i(e),a(e)}))};a.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.d5b18a40.chunk.js.map