(()=>{var q,d,l_,D_,H,r_,c_,j,s_,J,z,G,F_,N={},f_=[],M_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,K=Array.isArray;function x(e,_){for(var t in _)e[t]=_[t];return e}function Q(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function E(e,_,t){var n,i,r,s={};for(r in _)r=="key"?n=_[r]:r=="ref"?i=_[r]:s[r]=_[r];if(arguments.length>2&&(s.children=arguments.length>3?q.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)s[r]===void 0&&(s[r]=e.defaultProps[r]);return L(e,s,n,i,null)}function L(e,_,t,n,i){var r={type:e,props:_,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++l_,__i:-1,__u:0};return i==null&&d.vnode!=null&&d.vnode(r),r}function D(e){return e.children}function W(e,_){this.props=e,this.context=_}function P(e,_){if(_==null)return e.__?P(e.__,e.__i+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?P(e):null}function a_(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return a_(e)}}function o_(e){(!e.__d&&(e.__d=!0)&&H.push(e)&&!R.__r++||r_!==d.debounceRendering)&&((r_=d.debounceRendering)||c_)(R)}function R(){var e,_,t,n,i,r,s,l;for(H.sort(j);e=H.shift();)e.__d&&(_=H.length,n=void 0,r=(i=(t=e).__v).__e,s=[],l=[],t.__P&&((n=x({},i)).__v=i.__v+1,d.vnode&&d.vnode(n),X(t.__P,n,i,t.__n,t.__P.namespaceURI,32&i.__u?[r]:null,s,r??P(i),!!(32&i.__u),l),n.__v=i.__v,n.__.__k[n.__i]=n,d_(s,n,l),n.__e!=r&&a_(n)),H.length>_&&H.sort(j));R.__r=0}function p_(e,_,t,n,i,r,s,l,c,u,p){var o,a,f,g,k,b,h=n&&n.__k||f_,v=_.length;for(c=A_(t,_,h,c),o=0;o<v;o++)(f=t.__k[o])!=null&&(a=f.__i===-1?N:h[f.__i]||N,f.__i=o,b=X(e,f,a,i,r,s,l,c,u,p),g=f.__e,f.ref&&a.ref!=f.ref&&(a.ref&&Y(a.ref,null,f),p.push(f.ref,f.__c||g,f)),k==null&&g!=null&&(k=g),4&f.__u||a.__k===f.__k?c=h_(f,c,e):typeof f.type=="function"&&b!==void 0?c=b:g&&(c=g.nextSibling),f.__u&=-7);return t.__e=k,c}function A_(e,_,t,n){var i,r,s,l,c,u=_.length,p=t.length,o=p,a=0;for(e.__k=[],i=0;i<u;i++)(r=_[i])!=null&&typeof r!="boolean"&&typeof r!="function"?(l=i+a,(r=e.__k[i]=typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?L(null,r,null,null,null):K(r)?L(D,{children:r},null,null,null):r.constructor===void 0&&r.__b>0?L(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r).__=e,r.__b=e.__b+1,s=null,(c=r.__i=I_(r,t,l,o))!==-1&&(o--,(s=t[c])&&(s.__u|=2)),s==null||s.__v===null?(c==-1&&a--,typeof r.type!="function"&&(r.__u|=4)):c!==l&&(c==l-1?a--:c==l+1?a++:(c>l?a--:a++,r.__u|=4))):r=e.__k[i]=null;if(o)for(i=0;i<p;i++)(s=t[i])!=null&&!(2&s.__u)&&(s.__e==n&&(n=P(s)),v_(s,s));return n}function h_(e,_,t){var n,i;if(typeof e.type=="function"){for(n=e.__k,i=0;n&&i<n.length;i++)n[i]&&(n[i].__=e,_=h_(n[i],_,t));return _}e.__e!=_&&(_&&e.type&&!t.contains(_)&&(_=P(e)),t.insertBefore(e.__e,_||null),_=e.__e);do _=_&&_.nextSibling;while(_!=null&&_.nodeType===8);return _}function I_(e,_,t,n){var i=e.key,r=e.type,s=t-1,l=t+1,c=_[t];if(c===null||c&&i==c.key&&r===c.type&&!(2&c.__u))return t;if((typeof r!="function"||r===D||i)&&n>(c!=null&&!(2&c.__u)?1:0))for(;s>=0||l<_.length;){if(s>=0){if((c=_[s])&&!(2&c.__u)&&i==c.key&&r===c.type)return s;s--}if(l<_.length){if((c=_[l])&&!(2&c.__u)&&i==c.key&&r===c.type)return l;l++}}return-1}function i_(e,_,t){_[0]==="-"?e.setProperty(_,t??""):e[_]=t==null?"":typeof t!="number"||M_.test(_)?t:t+"px"}function I(e,_,t,n,i){var r;_:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(_ in n)t&&_ in t||i_(e.style,_,"");if(t)for(_ in t)n&&t[_]===n[_]||i_(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")r=_!==(_=_.replace(s_,"$1")),_=_.toLowerCase()in e||_==="onFocusOut"||_==="onFocusIn"?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+r]=t,t?n?t.u=n.u:(t.u=J,e.addEventListener(_,r?G:z,r)):e.removeEventListener(_,r?G:z,r);else{if(i=="http://www.w3.org/2000/svg")_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(_!="width"&&_!="height"&&_!="href"&&_!="list"&&_!="form"&&_!="tabIndex"&&_!="download"&&_!="rowSpan"&&_!="colSpan"&&_!="role"&&_!="popover"&&_ in e)try{e[_]=t??"";break _}catch{}typeof t=="function"||(t==null||t===!1&&_[4]!=="-"?e.removeAttribute(_):e.setAttribute(_,_=="popover"&&t==1?"":t))}}function u_(e){return function(_){if(this.l){var t=this.l[_.type+e];if(_.t==null)_.t=J++;else if(_.t<t.u)return;return t(d.event?d.event(_):_)}}}function X(e,_,t,n,i,r,s,l,c,u){var p,o,a,f,g,k,b,h,v,S,C,M,T,n_,A,$,O,w=_.type;if(_.constructor!==void 0)return null;128&t.__u&&(c=!!(32&t.__u),r=[l=_.__e=t.__e]),(p=d.__b)&&p(_);_:if(typeof w=="function")try{if(h=_.props,v="prototype"in w&&w.prototype.render,S=(p=w.contextType)&&n[p.__c],C=p?S?S.props.value:p.__:n,t.__c?b=(o=_.__c=t.__c).__=o.__E:(v?_.__c=o=new w(h,C):(_.__c=o=new W(h,C),o.constructor=w,o.render=W_),S&&S.sub(o),o.props=h,o.state||(o.state={}),o.context=C,o.__n=n,a=o.__d=!0,o.__h=[],o._sb=[]),v&&o.__s==null&&(o.__s=o.state),v&&w.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=x({},o.__s)),x(o.__s,w.getDerivedStateFromProps(h,o.__s))),f=o.props,g=o.state,o.__v=_,a)v&&w.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),v&&o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(v&&w.getDerivedStateFromProps==null&&h!==f&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(h,C),!o.__e&&(o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(h,o.__s,C)===!1||_.__v===t.__v)){for(_.__v!==t.__v&&(o.props=h,o.state=o.__s,o.__d=!1),_.__e=t.__e,_.__k=t.__k,_.__k.some(function(U){U&&(U.__=_)}),M=0;M<o._sb.length;M++)o.__h.push(o._sb[M]);o._sb=[],o.__h.length&&s.push(o);break _}o.componentWillUpdate!=null&&o.componentWillUpdate(h,o.__s,C),v&&o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(f,g,k)})}if(o.context=C,o.props=h,o.__P=e,o.__e=!1,T=d.__r,n_=0,v){for(o.state=o.__s,o.__d=!1,T&&T(_),p=o.render(o.props,o.state,o.context),A=0;A<o._sb.length;A++)o.__h.push(o._sb[A]);o._sb=[]}else do o.__d=!1,T&&T(_),p=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++n_<25);o.state=o.__s,o.getChildContext!=null&&(n=x(x({},n),o.getChildContext())),v&&!a&&o.getSnapshotBeforeUpdate!=null&&(k=o.getSnapshotBeforeUpdate(f,g)),l=p_(e,K($=p!=null&&p.type===D&&p.key==null?p.props.children:p)?$:[$],_,t,n,i,r,s,l,c,u),o.base=_.__e,_.__u&=-161,o.__h.length&&s.push(o),b&&(o.__E=o.__=null)}catch(U){if(_.__v=null,c||r!=null)if(U.then){for(_.__u|=c?160:128;l&&l.nodeType===8&&l.nextSibling;)l=l.nextSibling;r[r.indexOf(l)]=null,_.__e=l}else for(O=r.length;O--;)Q(r[O]);else _.__e=t.__e,_.__k=t.__k;d.__e(U,_,t)}else r==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):l=_.__e=L_(t.__e,_,t,n,i,r,s,c,u);return(p=d.diffed)&&p(_),128&_.__u?void 0:l}function d_(e,_,t){for(var n=0;n<t.length;n++)Y(t[n],t[++n],t[++n]);d.__c&&d.__c(_,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(r){r.call(i)})}catch(r){d.__e(r,i.__v)}})}function L_(e,_,t,n,i,r,s,l,c){var u,p,o,a,f,g,k,b=t.props,h=_.props,v=_.type;if(v==="svg"?i="http://www.w3.org/2000/svg":v==="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),r!=null){for(u=0;u<r.length;u++)if((f=r[u])&&"setAttribute"in f==!!v&&(v?f.localName===v:f.nodeType===3)){e=f,r[u]=null;break}}if(e==null){if(v===null)return document.createTextNode(h);e=document.createElementNS(i,v,h.is&&h),l&&(d.__m&&d.__m(_,r),l=!1),r=null}if(v===null)b===h||l&&e.data===h||(e.data=h);else{if(r=r&&q.call(e.childNodes),b=t.props||N,!l&&r!=null)for(b={},u=0;u<e.attributes.length;u++)b[(f=e.attributes[u]).name]=f.value;for(u in b)if(f=b[u],u!="children"){if(u=="dangerouslySetInnerHTML")o=f;else if(!(u in h)){if(u=="value"&&"defaultValue"in h||u=="checked"&&"defaultChecked"in h)continue;I(e,u,null,f,i)}}for(u in h)f=h[u],u=="children"?a=f:u=="dangerouslySetInnerHTML"?p=f:u=="value"?g=f:u=="checked"?k=f:l&&typeof f!="function"||b[u]===f||I(e,u,f,b[u],i);if(p)l||o&&(p.__html===o.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),_.__k=[];else if(o&&(e.innerHTML=""),p_(e,K(a)?a:[a],_,t,n,v==="foreignObject"?"http://www.w3.org/1999/xhtml":i,r,s,r?r[0]:t.__k&&P(t,0),l,c),r!=null)for(u=r.length;u--;)Q(r[u]);l||(u="value",v==="progress"&&g==null?e.removeAttribute("value"):g!==void 0&&(g!==e[u]||v==="progress"&&!g||v==="option"&&g!==b[u])&&I(e,u,g,b[u],i),u="checked",k!==void 0&&k!==e[u]&&I(e,u,k,b[u],i))}return e}function Y(e,_,t){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&_==null||(e.__u=e(_))}else e.current=_}catch(i){d.__e(i,t)}}function v_(e,_,t){var n,i;if(d.unmount&&d.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||Y(n,null,_)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(r){d.__e(r,_)}n.base=n.__P=null}if(n=e.__k)for(i=0;i<n.length;i++)n[i]&&v_(n[i],_,t||typeof e.type!="function");t||Q(e.__e),e.__c=e.__=e.__e=void 0}function W_(e,_,t){return this.constructor(e,t)}function m_(e,_,t){var n,i,r,s;_===document&&(_=document.documentElement),d.__&&d.__(e,_),i=(n=typeof t=="function")?null:t&&t.__k||_.__k,r=[],s=[],X(_,e=(!n&&t||_).__k=E(D,null,[e]),i||N,N,_.namespaceURI,!n&&t?[t]:i?null:_.firstChild?q.call(_.childNodes):null,r,!n&&t?t:i?i.__e:_.firstChild,n,s),d_(r,e,s)}q=f_.slice,d={__e:function(e,_,t,n){for(var i,r,s;_=_.__;)if((i=_.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(e)),s=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,n||{}),s=i.__d),s)return i.__E=i}catch(l){e=l}throw e}},l_=0,D_=function(e){return e!=null&&e.constructor==null},W.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof e=="function"&&(e=e(x({},t),this.props)),e&&x(t,e),e!=null&&this.__v&&(_&&this._sb.push(_),o_(this))},W.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),o_(this))},W.prototype.render=D,H=[],c_=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,j=function(e,_){return e.__v.__b-_.__v.__b},R.__r=0,s_=/(PointerCapture)$|Capture$/i,J=0,z=u_(!1),G=u_(!0),F_=0;var F,m,Z,y_,V=0,P_=[],y=d,g_=y.__b,b_=y.__r,k_=y.diffed,w_=y.__c,C_=y.unmount,x_=y.__;function e_(e,_){y.__h&&y.__h(m,e,V||_),V=0;var t=m.__H||(m.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function E_(e){return V=1,R_(U_,e)}function R_(e,_,t){var n=e_(F++,2);if(n.t=e,!n.__c&&(n.__=[t?t(_):U_(void 0,_),function(l){var c=n.__N?n.__N[0]:n.__[0],u=n.t(c,l);c!==u&&(n.__N=[u,n.__[1]],n.__c.setState({}))}],n.__c=m,!m.u)){var i=function(l,c,u){if(!n.__c.__H)return!0;var p=n.__c.__H.__.filter(function(a){return!!a.__c});if(p.every(function(a){return!a.__N}))return!r||r.call(this,l,c,u);var o=n.__c.props!==l;return p.forEach(function(a){if(a.__N){var f=a.__[0];a.__=a.__N,a.__N=void 0,f!==a.__[0]&&(o=!0)}}),r&&r.call(this,l,c,u)||o};m.u=!0;var r=m.shouldComponentUpdate,s=m.componentWillUpdate;m.componentWillUpdate=function(l,c,u){if(this.__e){var p=r;r=void 0,i(l,c,u),r=p}s&&s.call(this,l,c,u)},m.shouldComponentUpdate=i}return n.__N||n.__}function t_(e,_){var t=e_(F++,3);!y.__s&&T_(t.__H,_)&&(t.__=e,t.i=_,m.__H.__h.push(t))}function S_(e){return V=5,q_(function(){return{current:e}},[])}function q_(e,_){var t=e_(F++,7);return T_(t.__H,_)&&(t.__=e(),t.__H=_,t.__h=e),t.__}function B_(){for(var e;e=P_.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(B),e.__H.__h.forEach(__),e.__H.__h=[]}catch(_){e.__H.__h=[],y.__e(_,e.__v)}}y.__b=function(e){m=null,g_&&g_(e)},y.__=function(e,_){e&&_.__k&&_.__k.__m&&(e.__m=_.__k.__m),x_&&x_(e,_)},y.__r=function(e){b_&&b_(e),F=0;var _=(m=e.__c).__H;_&&(Z===m?(_.__h=[],m.__h=[],_.__.forEach(function(t){t.__N&&(t.__=t.__N),t.i=t.__N=void 0})):(_.__h.forEach(B),_.__h.forEach(__),_.__h=[],F=0)),Z=m},y.diffed=function(e){k_&&k_(e);var _=e.__c;_&&_.__H&&(_.__H.__h.length&&(P_.push(_)!==1&&y_===y.requestAnimationFrame||((y_=y.requestAnimationFrame)||V_)(B_)),_.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.i=void 0})),Z=m=null},y.__c=function(e,_){_.some(function(t){try{t.__h.forEach(B),t.__h=t.__h.filter(function(n){return!n.__||__(n)})}catch(n){_.some(function(i){i.__h&&(i.__h=[])}),_=[],y.__e(n,t.__v)}}),w_&&w_(e,_)},y.unmount=function(e){C_&&C_(e);var _,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(n){try{B(n)}catch(i){_=i}}),t.__H=void 0,_&&y.__e(_,t.__v))};var H_=typeof requestAnimationFrame=="function";function V_(e){var _,t=function(){clearTimeout(n),H_&&cancelAnimationFrame(_),setTimeout(e)},n=setTimeout(t,100);H_&&(_=requestAnimationFrame(t))}function B(e){var _=m,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),m=_}function __(e){var _=m;e.__c=e.__(),m=_}function T_(e,_){return!e||e.length!==_.length||_.some(function(t,n){return t!==e[n]})}function U_(e,_){return typeof _=="function"?_(e):_}function N_(){let e="https://placehold.co/500x500",_=new Image;return _.src=e,new Promise(t=>{_.onload=function(){t(_)}})}var $_=E(O_,null,"");m_($_,document.querySelector("#app"));function O_(e){let[_,t]=E_(null);t_(async()=>{let i=await N_();t(i)},[]),t_(()=>{n&&n.current&&n.current instanceof HTMLElement&&_!==null&&n.current.appendChild(_)},[_]);let n=S_();return E("div",null,[E("h1",null,"Hello world"),E("div",{ref:n},"")])}})();
//# sourceMappingURL=bundle.js.map
