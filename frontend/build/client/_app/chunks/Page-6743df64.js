import{S as O,i as q,s as F,e as p,t as $,c as b,a as z,h as x,d as g,b as c,g as T,J as y,j as ee,F as V,k as C,m as H,Q as L,G as J,H as Q,I as U,r as k,p as w,f as W,O as te,n as K,R as ne,x as A,y as I,z as B,C as M,T as le,o as ie,q as se}from"./index-7d638eff.js";function X(a){let e,t,s,n;return{c(){e=p("h2"),t=p("span"),s=$(a[1]),this.h()},l(l){e=b(l,"H2",{class:!0});var r=z(e);t=b(r,"SPAN",{class:!0});var o=z(t);s=x(o,a[1]),o.forEach(g),r.forEach(g),this.h()},h(){c(t,"class","svelte-i1xj0v"),c(e,"class",n="section-heading "+a[4]+" svelte-i1xj0v")},m(l,r){T(l,e,r),y(e,t),y(t,s)},p(l,r){r&2&&ee(s,l[1]),r&16&&n!==(n="section-heading "+l[4]+" svelte-i1xj0v")&&c(e,"class",n)},d(l){l&&g(e)}}}function ae(a){let e,t,s,n,l,r,o,i=a[1]&&X(a);const _=a[8].default,u=V(_,a,a[7],null);return{c(){e=p("section"),t=p("div"),i&&i.c(),s=C(),n=p("div"),u&&u.c(),this.h()},l(f){e=b(f,"SECTION",{id:!0,class:!0});var m=z(e);t=b(m,"DIV",{class:!0});var j=z(t);i&&i.l(j),s=H(j),n=b(j,"DIV",{class:!0});var S=z(n);u&&u.l(S),S.forEach(g),j.forEach(g),m.forEach(g),this.h()},h(){c(n,"class",l="section-body spacing-"+a[6]+" svelte-i1xj0v"),c(t,"class","section-contents svelte-i1xj0v"),c(e,"id",a[0]),c(e,"class",r="bg-"+a[2]+" top-border-"+a[3]+" svelte-i1xj0v"),L(e,"simple",a[5]),L(e,"no-heading",!a[1])},m(f,m){T(f,e,m),y(e,t),i&&i.m(t,null),y(t,s),y(t,n),u&&u.m(n,null),o=!0},p(f,[m]){f[1]?i?i.p(f,m):(i=X(f),i.c(),i.m(t,s)):i&&(i.d(1),i=null),u&&u.p&&(!o||m&128)&&J(u,_,f,f[7],o?U(_,f[7],m,null):Q(f[7]),null),(!o||m&64&&l!==(l="section-body spacing-"+f[6]+" svelte-i1xj0v"))&&c(n,"class",l),(!o||m&1)&&c(e,"id",f[0]),(!o||m&12&&r!==(r="bg-"+f[2]+" top-border-"+f[3]+" svelte-i1xj0v"))&&c(e,"class",r),m&44&&L(e,"simple",f[5]),m&14&&L(e,"no-heading",!f[1])},i(f){o||(k(u,f),o=!0)},o(f){w(u,f),o=!1},d(f){f&&g(e),i&&i.d(),u&&u.d(f)}}}function re(a,e,t){let{$$slots:s={},$$scope:n}=e,{id:l=""}=e,{heading:r=""}=e,{bg:o="none"}=e,{topBorder:i="none"}=e,{headingColor:_="black"}=e,{simple:u=!1}=e,{spacing:f="normal"}=e;return a.$$set=m=>{"id"in m&&t(0,l=m.id),"heading"in m&&t(1,r=m.heading),"bg"in m&&t(2,o=m.bg),"topBorder"in m&&t(3,i=m.topBorder),"headingColor"in m&&t(4,_=m.headingColor),"simple"in m&&t(5,u=m.simple),"spacing"in m&&t(6,f=m.spacing),"$$scope"in m&&t(7,n=m.$$scope)},[l,r,o,i,_,u,f,n,s]}class Ee extends O{constructor(e){super(),q(this,e,re,ae,F,{id:0,heading:1,bg:2,topBorder:3,headingColor:4,simple:5,spacing:6})}}function oe(a){let e,t,s,n;return{c(){e=p("button"),this.h()},l(l){e=b(l,"BUTTON",{class:!0,style:!0,title:!0});var r=z(e);r.forEach(g),this.h()},h(){c(e,"class",t=a[0]+" "+a[1]+" svelte-2j1as8"),W(e,"--color",a[3]),c(e,"title",a[2])},m(l,r){T(l,e,r),s||(n=te(e,"click",a[4]),s=!0)},p(l,[r]){r&3&&t!==(t=l[0]+" "+l[1]+" svelte-2j1as8")&&c(e,"class",t),r&8&&W(e,"--color",l[3]),r&4&&c(e,"title",l[2])},i:K,o:K,d(l){l&&g(e),s=!1,n()}}}function ue(a,e,t){let{type:s}=e,{size:n=""}=e,{title:l}=e,{color:r="white"}=e;function o(i){ne.call(this,a,i)}return a.$$set=i=>{"type"in i&&t(0,s=i.type),"size"in i&&t(1,n=i.size),"title"in i&&t(2,l=i.title),"color"in i&&t(3,r=i.color)},[s,n,l,r,o]}class fe extends O{constructor(e){super(),q(this,e,ue,oe,F,{type:0,size:1,title:2,color:3})}}function ce(a){let e,t,s;return t=new fe({props:{type:a[0],size:a[1],color:a[2]}}),{c(){e=p("a"),A(t.$$.fragment),this.h()},l(n){e=b(n,"A",{title:!0,href:!0});var l=z(e);I(t.$$.fragment,l),l.forEach(g),this.h()},h(){c(e,"title",a[3]),c(e,"href",a[4])},m(n,l){T(n,e,l),B(t,e,null),s=!0},p(n,[l]){const r={};l&1&&(r.type=n[0]),l&2&&(r.size=n[1]),l&4&&(r.color=n[2]),t.$set(r),(!s||l&8)&&c(e,"title",n[3]),(!s||l&16)&&c(e,"href",n[4])},i(n){s||(k(t.$$.fragment,n),s=!0)},o(n){w(t.$$.fragment,n),s=!1},d(n){n&&g(e),M(t)}}}function me(a,e,t){let{type:s}=e,{size:n}=e,{color:l}=e,r="",o="";switch(s){case"logo":r="Home",o="/";break;case"twitter":r="Twitter",o="https://twitter.com/gracieart";break;case"youtube":r="YouTube",o="https://youtube.com/graciebell";break;case"soundcloud":r="SoundCloud",o="https://soundcloud.com/gracieart";break;case"github":r="GitHub",o="https://github.com/gracieart";break}return a.$$set=i=>{"type"in i&&t(0,s=i.type),"size"in i&&t(1,n=i.size),"color"in i&&t(2,l=i.color)},[s,n,l,r,o]}class D extends O{constructor(e){super(),q(this,e,me,ce,F,{type:0,size:1,color:2})}}function he(a){let e,t,s,n,l,r,o,i,_;return t=new D({props:{type:"twitter",color:P}}),n=new D({props:{type:"youtube",color:P}}),r=new D({props:{type:"soundcloud",color:P}}),i=new D({props:{type:"github",color:P}}),{c(){e=p("footer"),A(t.$$.fragment),s=C(),A(n.$$.fragment),l=C(),A(r.$$.fragment),o=C(),A(i.$$.fragment),this.h()},l(u){e=b(u,"FOOTER",{class:!0});var f=z(e);I(t.$$.fragment,f),s=H(f),I(n.$$.fragment,f),l=H(f),I(r.$$.fragment,f),o=H(f),I(i.$$.fragment,f),f.forEach(g),this.h()},h(){c(e,"class","svelte-1kxjoq3")},m(u,f){T(u,e,f),B(t,e,null),y(e,s),B(n,e,null),y(e,l),B(r,e,null),y(e,o),B(i,e,null),_=!0},p:K,i(u){_||(k(t.$$.fragment,u),k(n.$$.fragment,u),k(r.$$.fragment,u),k(i.$$.fragment,u),_=!0)},o(u){w(t.$$.fragment,u),w(n.$$.fragment,u),w(r.$$.fragment,u),w(i.$$.fragment,u),_=!1},d(u){u&&g(e),M(t),M(n),M(r),M(i)}}}let P="white";class ge extends O{constructor(e){super(),q(this,e,null,he,F,{})}}function _e(a){let e,t,s,n,l;t=new D({props:{type:"logo",size:"medium",color:"white"}});const r=a[1].default,o=V(r,a,a[0],null);return{c(){e=p("header"),A(t.$$.fragment),s=C(),n=p("h1"),o&&o.c(),this.h()},l(i){e=b(i,"HEADER",{class:!0});var _=z(e);I(t.$$.fragment,_),s=H(_),n=b(_,"H1",{class:!0});var u=z(n);o&&o.l(u),u.forEach(g),_.forEach(g),this.h()},h(){c(n,"class","svelte-1c95d3m"),c(e,"class","svelte-1c95d3m")},m(i,_){T(i,e,_),B(t,e,null),y(e,s),y(e,n),o&&o.m(n,null),l=!0},p(i,[_]){o&&o.p&&(!l||_&1)&&J(o,r,i,i[0],l?U(r,i[0],_,null):Q(i[0]),null)},i(i){l||(k(t.$$.fragment,i),k(o,i),l=!0)},o(i){w(t.$$.fragment,i),w(o,i),l=!1},d(i){i&&g(e),M(t),o&&o.d(i)}}}function de(a,e,t){let{$$slots:s={},$$scope:n}=e;return a.$$set=l=>{"$$scope"in l&&t(0,n=l.$$scope)},[n,s]}class ve extends O{constructor(e){super(),q(this,e,de,_e,F,{})}}function Z(a){let e,t;return e=new ve({props:{$$slots:{default:[pe]},$$scope:{ctx:a}}}),{c(){A(e.$$.fragment)},l(s){I(e.$$.fragment,s)},m(s,n){B(e,s,n),t=!0},p(s,n){const l={};n&9&&(l.$$scope={dirty:n,ctx:s}),e.$set(l)},i(s){t||(k(e.$$.fragment,s),t=!0)},o(s){w(e.$$.fragment,s),t=!1},d(s){M(e,s)}}}function pe(a){let e;return{c(){e=$(a[0])},l(t){e=x(t,a[0])},m(t,s){T(t,e,s)},p(t,s){s&1&&ee(e,t[0])},d(t){t&&g(e)}}}function be(a){let e,t,s,n,l,r,o,i,_,u,f,m,j,S,N,G;document.title=e=(a[0]?a[0]+" | ":"")+"Gracie Bell";let v=a[1]&&Z(a);const R=a[2].default,E=V(R,a,a[3],null);return N=new ge({}),{c(){t=p("meta"),s=p("meta"),n=p("meta"),l=p("meta"),r=p("meta"),o=p("meta"),i=p("meta"),_=p("link"),u=p("link"),f=C(),v&&v.c(),m=C(),j=p("main"),E&&E.c(),S=C(),A(N.$$.fragment),this.h()},l(h){const d=le('[data-svelte="svelte-1vhvi7o"]',document.head);t=b(d,"META",{name:!0,content:!0}),s=b(d,"META",{name:!0,content:!0}),n=b(d,"META",{property:!0,content:!0}),l=b(d,"META",{property:!0,content:!0}),r=b(d,"META",{property:!0,content:!0}),o=b(d,"META",{property:!0,content:!0}),i=b(d,"META",{property:!0,content:!0}),_=b(d,"LINK",{rel:!0,type:!0,href:!0}),u=b(d,"LINK",{rel:!0,type:!0,href:!0}),d.forEach(g),f=H(h),v&&v.l(h),m=H(h),j=b(h,"MAIN",{});var Y=z(j);E&&E.l(Y),Y.forEach(g),S=H(h),I(N.$$.fragment,h),this.h()},h(){c(t,"name","description"),c(t,"content","Multimedia artist specializing in graphic design, illustration, coding, video editing, and music composition"),c(s,"name","author"),c(s,"content","Gracie Bell"),c(n,"property","og:image"),c(n,"content","/images/gbell_social_image.jpg"),c(l,"property","og:image:width"),c(l,"content","1000"),c(r,"property","og:image:height"),c(r,"content","500"),c(o,"property","og:image:type"),c(o,"content","image/jpg"),c(i,"property","twitter:card"),c(i,"content","summary_large_image"),c(_,"rel","alternate icon"),c(_,"type","image/png"),c(_,"href","/images/favicons/favicon.png"),c(u,"rel","icon"),c(u,"type","image/svg"),c(u,"href","/images/favicons/favicon.svg")},m(h,d){y(document.head,t),y(document.head,s),y(document.head,n),y(document.head,l),y(document.head,r),y(document.head,o),y(document.head,i),y(document.head,_),y(document.head,u),T(h,f,d),v&&v.m(h,d),T(h,m,d),T(h,j,d),E&&E.m(j,null),T(h,S,d),B(N,h,d),G=!0},p(h,[d]){(!G||d&1)&&e!==(e=(h[0]?h[0]+" | ":"")+"Gracie Bell")&&(document.title=e),h[1]?v?(v.p(h,d),d&2&&k(v,1)):(v=Z(h),v.c(),k(v,1),v.m(m.parentNode,m)):v&&(ie(),w(v,1,1,()=>{v=null}),se()),E&&E.p&&(!G||d&8)&&J(E,R,h,h[3],G?U(R,h[3],d,null):Q(h[3]),null)},i(h){G||(k(v),k(E,h),k(N.$$.fragment,h),G=!0)},o(h){w(v),w(E,h),w(N.$$.fragment,h),G=!1},d(h){g(t),g(s),g(n),g(l),g(r),g(o),g(i),g(_),g(u),h&&g(f),v&&v.d(h),h&&g(m),h&&g(j),E&&E.d(h),h&&g(S),M(N,h)}}}function ye(a,e,t){let{$$slots:s={},$$scope:n}=e,{title:l=""}=e,{header:r=!0}=e;return a.$$set=o=>{"title"in o&&t(0,l=o.title),"header"in o&&t(1,r=o.header),"$$scope"in o&&t(3,n=o.$$scope)},[l,r,s,n]}class we extends O{constructor(e){super(),q(this,e,ye,be,F,{title:0,header:1})}}export{fe as I,we as P,Ee as S};
