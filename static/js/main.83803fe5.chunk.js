(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{21:function(e,t,r){},22:function(e,t,r){},43:function(e,t,r){"use strict";r.r(t);var c=r(2),a=r.n(c),n=r(14),s=r.n(n),l=(r(21),r(22),r(5)),i=r.n(l),o=r(15),u=r(3),d=r(16),b=r.n(d),j=r(0);var h=function(e){return Object(j.jsx)("h1",{children:e.heading})};var x=function(e){var t=e.urlToImage,r=e.source,c=e.author,a=e.title,n=e.publishedAt,s=e.url;return Object(j.jsx)("div",{children:Object(j.jsxs)("table",{className:"table-fixed",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{className:"w-1/2 px-4 py-2 bg-gray-300 border",children:"Image"}),Object(j.jsx)("th",{className:"w-1/4 px-4 py-2 bg-gray-300 border",children:"Source"}),Object(j.jsx)("th",{className:"w-1/4 px-4 py-2 bg-gray-300 border",children:"Author, Title, Date, & URL"})]})}),Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"border px-4 py-2",children:Object(j.jsx)("img",{className:"object-contain",src:t,alt:"Article"})}),Object(j.jsx)("td",{className:"border px-4 py-2 text-center",children:r}),Object(j.jsxs)("td",{className:"border px-4 py-2 text-left leading-loose",children:[c,", ",a,", ",n,", ",Object(j.jsx)("a",{className:"bg-gray-500 px-2 py-2 rounded-lg text-xs p-0",href:s,children:"Link to article"})]})]})})]})})};var p=function(e){for(var t=e.resultsPerPage,r=e.totalResults,c=e.paginate,a=[],n=1;n<=Math.ceil(r/t);n++)a.push(n);return Object(j.jsx)("div",{className:"py-2",children:Object(j.jsx)("ul",{className:"flex pl-0 rounded list-none flex-wrap",children:a.map((function(e){return Object(j.jsx)("li",{className:"first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid  border-blueGray-500 bg-white text-blueGray-500",children:Object(j.jsx)("a",{onClick:function(){return c(e)},href:"!#",children:e})},e)}))})})};var f=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),r=t[0],a=t[1],n=Object(c.useState)([]),s=Object(u.a)(n,2),l=s[0],d=s[1],f=Object(c.useState)(1),g=Object(u.a)(f,2),O=g[0],m=g[1],v=Object(c.useState)(10),y=Object(u.a)(v,1)[0],w="".concat("f35624aec8ad4c3a9fc7ce77ebfd7239");Object(c.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://newsapi.org/v2/everything?q=".concat(r,"&apiKey=").concat(w,"&pageSize=100"));case 2:t=e.sent,d(t.data.articles),console.log(t.data.articles);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]);var N=O*y,S=N-y,T=l.slice(S,N);return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"text-3xl font-extrabold text-center p-10 bg-gray-600 text-white",children:Object(j.jsx)(h,{className:"sm:max-w-xl",heading:"News Search"})}),Object(j.jsx)("input",{className:"w-full rounded ml-1 flex border-black border p-2 mb-10",value:r,placeholder:"Type to search",onChange:function(e){return a(e.target.value)}}),Object(j.jsx)("div",{children:T.map((function(e){var t=e.urlToImage,r=e.source,c=e.author,a=e.title,n=e.publishedAt,s=e.url;return Object(j.jsx)(x,{urlToImage:t,source:r.name,author:c,title:a,publishedAt:n,url:s})}))}),Object(j.jsx)("div",{children:Object(j.jsx)(p,{resultsPerPage:y,totalResults:l.length,paginate:function(e){return m(e)}})})]})};var g=function(){return Object(j.jsx)(f,{})},O=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,44)).then((function(t){var r=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,s=t.getTTFB;r(e),c(e),a(e),n(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),O()}},[[43,1,2]]]);
//# sourceMappingURL=main.83803fe5.chunk.js.map