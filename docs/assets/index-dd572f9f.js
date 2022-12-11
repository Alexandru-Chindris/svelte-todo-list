(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function K(){}function me(e){return e()}function ce(){return Object.create(null)}function W(e){e.forEach(me)}function ge(e){return typeof e=="function"}function le(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ke(e){return Object.keys(e).length===0}function o(e,t){e.appendChild(t)}function G(e,t,n){e.insertBefore(t,n||null)}function q(e){e.parentNode&&e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function F(e){return document.createTextNode(e)}function L(){return F(" ")}function H(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function we(e){return function(t){return t.preventDefault(),e.call(this,t)}}function r(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function $e(e){return Array.from(e.childNodes)}function X(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function de(e,t){e.value=t??""}function z(e,t,n){e.classList[n?"add":"remove"](t)}let ie;function Q(e){ie=e}const J=[],x=[],U=[],ee=[],Ce=Promise.resolve();let te=!1;function Te(){te||(te=!0,Ce.then(be))}function ne(e){U.push(e)}function Se(e){ee.push(e)}const Z=new Set;let R=0;function be(){const e=ie;do{for(;R<J.length;){const t=J[R];R++,Q(t),Ae(t.$$)}for(Q(null),J.length=0,R=0;x.length;)x.pop()();for(let t=0;t<U.length;t+=1){const n=U[t];Z.has(n)||(Z.add(n),n())}U.length=0}while(J.length);for(;ee.length;)ee.pop()();te=!1,Z.clear(),Q(e)}function Ae(e){if(e.fragment!==null){e.update(),W(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ne)}}const V=new Set;let Ee;function Y(e,t){e&&e.i&&(V.delete(e),e.i(t))}function ye(e,t,n,l){if(e&&e.o){if(V.has(e))return;V.add(e),Ee.c.push(()=>{V.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function Le(e,t){e.d(1),t.delete(e.key)}function Ne(e,t,n,l,i,s,u,m,T,a,c,p){let y=e.length,k=s.length,g=y;const w={};for(;g--;)w[e[g].key]=g;const d=[],v=new Map,_=new Map;for(g=k;g--;){const b=p(i,s,g),S=n(b);let A=u.get(S);A?l&&A.p(b,t):(A=a(S,b),A.c()),v.set(S,d[g]=A),S in w&&_.set(S,Math.abs(g-w[S]))}const O=new Set,N=new Set;function $(b){Y(b,1),b.m(m,c),u.set(b.key,b),c=b.first,k--}for(;y&&k;){const b=d[k-1],S=e[y-1],A=b.key,C=S.key;b===S?(c=b.first,y--,k--):v.has(C)?!u.has(A)||O.has(A)?$(b):N.has(C)?y--:_.get(A)>_.get(C)?(N.add(A),$(b)):(O.add(C),y--):(T(S,u),y--)}for(;y--;){const b=e[y];v.has(b.key)||T(b,u)}for(;k;)$(d[k-1]);return d}function Me(e,t,n,l){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,l===void 0&&n(e.$$.ctx[i]))}function ve(e){e&&e.c()}function oe(e,t,n,l){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),l||ne(()=>{const u=e.$$.on_mount.map(me).filter(ge);e.$$.on_destroy?e.$$.on_destroy.push(...u):W(u),e.$$.on_mount=[]}),s.forEach(ne)}function se(e,t){const n=e.$$;n.fragment!==null&&(W(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Oe(e,t){e.$$.dirty[0]===-1&&(J.push(e),Te(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function re(e,t,n,l,i,s,u,m=[-1]){const T=ie;Q(e);const a=e.$$={fragment:null,ctx:[],props:s,update:K,not_equal:i,bound:ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(T?T.$$.context:[])),callbacks:ce(),dirty:m,skip_bound:!1,root:t.target||T.$$.root};u&&u(a.root);let c=!1;if(a.ctx=n?n(e,t.props||{},(p,y,...k)=>{const g=k.length?k[0]:y;return a.ctx&&i(a.ctx[p],a.ctx[p]=g)&&(!a.skip_bound&&a.bound[p]&&a.bound[p](g),c&&Oe(e,p)),y}):[],a.update(),c=!0,W(a.before_update),a.fragment=l?l(a.ctx):!1,t.target){if(t.hydrate){const p=$e(t.target);a.fragment&&a.fragment.l(p),p.forEach(q)}else a.fragment&&a.fragment.c();t.intro&&Y(e.$$.fragment),oe(e,t.target,t.anchor,t.customElement),be()}Q(T)}class ue{$destroy(){se(this,1),this.$destroy=K}$on(t,n){if(!ge(n))return K;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(t){this.$$set&&!ke(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function je(e){let t,n,l,i,s,u,m,T,a,c,p,y,k,g,w,d,v,_,O,N,$,b,S,A,C,j;return{c(){t=h("div"),n=h("button"),l=h("span"),l.textContent="Show",i=L(),s=h("span"),s.textContent="All",u=L(),m=h("span"),m.textContent="tasks",a=L(),c=h("button"),p=h("span"),p.textContent="Show",y=L(),k=h("span"),k.textContent="Active",g=L(),w=h("span"),w.textContent="tasks",v=L(),_=h("button"),O=h("span"),O.textContent="Show",N=L(),$=h("span"),$.textContent="Completed",b=L(),S=h("span"),S.textContent="tasks",r(l,"class","visually-hidden"),r(m,"class","visually-hidden"),r(n,"class","btn toggle-btn"),r(n,"aria-pressed",T=e[0]==="all"),z(n,"btn__primary",e[0]==="all"),r(p,"class","visually-hidden"),r(w,"class","visually-hidden"),r(c,"class","btn toggle-btn"),r(c,"aria-pressed",d=e[0]==="active"),z(c,"btn__primary",e[0]==="active"),r(O,"class","visually-hidden"),r(S,"class","visually-hidden"),r(_,"class","btn toggle-btn"),r(_,"aria-pressed",A=e[0]==="completed"),z(_,"btn__primary",e[0]==="completed"),r(t,"class","filters btn-group stack-exception")},m(P,B){G(P,t,B),o(t,n),o(n,l),o(n,i),o(n,s),o(n,u),o(n,m),o(t,a),o(t,c),o(c,p),o(c,y),o(c,k),o(c,g),o(c,w),o(t,v),o(t,_),o(_,O),o(_,N),o(_,$),o(_,b),o(_,S),C||(j=[H(n,"click",e[1]),H(c,"click",e[2]),H(_,"click",e[3])],C=!0)},p(P,[B]){B&1&&T!==(T=P[0]==="all")&&r(n,"aria-pressed",T),B&1&&z(n,"btn__primary",P[0]==="all"),B&1&&d!==(d=P[0]==="active")&&r(c,"aria-pressed",d),B&1&&z(c,"btn__primary",P[0]==="active"),B&1&&A!==(A=P[0]==="completed")&&r(_,"aria-pressed",A),B&1&&z(_,"btn__primary",P[0]==="completed")},i:K,o:K,d(P){P&&q(t),C=!1,W(j)}}}function Pe(e,t,n){let{filter:l="all"}=t;const i=()=>n(0,l="all"),s=()=>n(0,l="active"),u=()=>n(0,l="completed");return e.$$set=m=>{"filter"in m&&n(0,l=m.filter)},[l,i,s,u]}class Be extends ue{constructor(t){super(),re(this,t,Pe,je,le,{filter:0})}}function pe(e,t,n){const l=e.slice();return l[13]=t[n],l[14]=t,l[15]=n,l}function _e(e){let t;return{c(){t=h("li"),t.textContent="Nothing to do here!"},m(n,l){G(n,t,l)},p:K,d(n){n&&q(t)}}}function he(e,t){let n,l,i,s,u,m,T,a,c=t[13].name+"",p,y,k,g,w,d,v,_=t[13].name+"",O,N,$,b;function S(){return t[10](t[13],t[14],t[15])}function A(){return t[11](t[13])}return{key:e,first:null,c(){n=h("li"),l=h("div"),i=h("div"),s=h("input"),T=L(),a=h("label"),p=F(c),k=L(),g=h("div"),w=h("button"),d=F(`Delete 
            `),v=h("span"),O=F(_),N=L(),r(s,"type","checkbox"),r(s,"id",u="todo-"+t[13].id),s.checked=m=t[13].completed,r(a,"for",y="todo-"+t[13].id),r(a,"class","todo-label"),r(i,"class","c-cb"),r(v,"class","visually-hidden"),r(w,"type","button"),r(w,"class","btn btn__danger"),r(g,"class","btn-group"),r(l,"class","stack-small"),r(n,"class","todo"),this.first=n},m(C,j){G(C,n,j),o(n,l),o(l,i),o(i,s),o(i,T),o(i,a),o(a,p),o(l,k),o(l,g),o(g,w),o(w,d),o(w,v),o(v,O),o(n,N),$||(b=[H(s,"click",S),H(w,"click",A)],$=!0)},p(C,j){t=C,j&25&&u!==(u="todo-"+t[13].id)&&r(s,"id",u),j&25&&m!==(m=t[13].completed)&&(s.checked=m),j&25&&c!==(c=t[13].name+"")&&X(p,c),j&25&&y!==(y="todo-"+t[13].id)&&r(a,"for",y),j&25&&_!==(_=t[13].name+"")&&X(O,_)},d(C){C&&q(n),$=!1,W(b)}}}function De(e){let t,n,l,i,s,u,m,T,a,c,p,y,k,g,w,d,v,_,O,N,$=[],b=new Map,S,A,C,j,P;function B(f){e[9](f)}let ae={};e[3]!==void 0&&(ae.filter=e[3]),p=new Be({props:ae}),x.push(()=>Me(p,"filter",B,e[3]));let I=e[4](e[3],e[0]);const fe=f=>f[13].id;for(let f=0;f<I.length;f+=1){let E=pe(e,I,f),D=fe(E);b.set(D,$[f]=he(D,E))}let M=null;return I.length||(M=_e()),{c(){t=h("h1"),t.textContent="Svelte to-do list",n=L(),l=h("div"),i=h("form"),s=h("h2"),s.innerHTML='<label for="todo-0" class="label__lg">What needs to be done?</label>',u=L(),m=h("input"),T=L(),a=h("button"),a.textContent="Add",c=L(),ve(p.$$.fragment),k=L(),g=h("h2"),w=F(e[5]),d=F(" out of "),v=F(e[1]),_=F(" items completed"),O=L(),N=h("ul");for(let f=0;f<$.length;f+=1)$[f].c();M&&M.c(),S=L(),A=h("hr"),r(s,"class","label-wrapper"),r(m,"type","text"),r(m,"id","todo-0"),r(m,"autocomplete","off"),r(m,"class","input input__lg"),r(a,"type","submit"),r(a,"class","btn btn__primary btn__lg"),r(g,"id","list-heading"),r(N,"class","todo-list stack-large"),r(N,"aria-labelledby","list-heading"),r(l,"class","todoapp stack-large")},m(f,E){G(f,t,E),G(f,n,E),G(f,l,E),o(l,i),o(i,s),o(i,u),o(i,m),de(m,e[2]),o(i,T),o(i,a),o(l,c),oe(p,l,null),o(l,k),o(l,g),o(g,w),o(g,d),o(g,v),o(g,_),o(l,O),o(l,N);for(let D=0;D<$.length;D+=1)$[D].m(N,null);M&&M.m(N,null),o(l,S),o(l,A),C=!0,j||(P=[H(m,"input",e[8]),H(i,"submit",we(e[7]))],j=!0)},p(f,[E]){E&4&&m.value!==f[2]&&de(m,f[2]);const D={};!y&&E&8&&(y=!0,D.filter=f[3],Se(()=>y=!1)),p.$set(D),(!C||E&32)&&X(w,f[5]),(!C||E&2)&&X(v,f[1]),E&89&&(I=f[4](f[3],f[0]),$=Ne($,E,fe,1,f,I,b,N,Le,he,null,pe),!I.length&&M?M.p(f,E):I.length?M&&(M.d(1),M=null):(M=_e(),M.c(),M.m(N,null)))},i(f){C||(Y(p.$$.fragment,f),C=!0)},o(f){ye(p.$$.fragment,f),C=!1},d(f){f&&q(t),f&&q(n),f&&q(l),se(p);for(let E=0;E<$.length;E+=1)$[E].d();M&&M.d(),j=!1,W(P)}}}function Fe(e,t,n){let l,i,s="",{todos:u=[]}=t;function m(d){n(0,u=u.filter(v=>v.id!==d.id))}function T(){n(0,u=[...u,{id:a,name:s,completed:!1}]),n(2,s="")}let a,c="all";const p=(d,v)=>d==="active"?v.filter(_=>!_.completed):d==="completed"?v.filter(_=>_.completed):v;function y(){s=this.value,n(2,s)}function k(d){c=d,n(3,c)}const g=(d,v,_)=>n(4,v[_].completed=!d.completed,p,n(3,c),n(0,u)),w=d=>m(d);return e.$$set=d=>{"todos"in d&&n(0,u=d.todos)},e.$$.update=()=>{e.$$.dirty&1&&n(1,l=u.length),e.$$.dirty&1&&n(5,i=u.filter(d=>d.completed).length),e.$$.dirty&3&&(l===0?a=1:a=Math.max(...u.map(d=>d.id))+1)},[u,l,s,c,p,i,m,T,y,k,g,w]}class Ie extends ue{constructor(t){super(),re(this,t,Fe,De,le,{todos:0})}}function qe(e){let t,n;return t=new Ie({props:{todos:e[0]}}),{c(){ve(t.$$.fragment)},m(l,i){oe(t,l,i),n=!0},p:K,i(l){n||(Y(t.$$.fragment,l),n=!0)},o(l){ye(t.$$.fragment,l),n=!1},d(l){se(t,l)}}}function He(e){return[[]]}class Ke extends ue{constructor(t){super(),re(this,t,He,qe,le,{})}}new Ke({target:document.body});
