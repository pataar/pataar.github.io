(self.webpackChunk=self.webpackChunk||[]).push([[817],{3723:function(e,t,a){"use strict";a.d(t,{G:function(){return I},L:function(){return p},M:function(){return x},P:function(){return b},_:function(){return o},a:function(){return i},b:function(){return c},g:function(){return d},h:function(){return l}});var r=a(7294),n=(a(2369),a(5697)),s=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,s,o,l){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],g=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=o(e,u);return r.createElement(r.Fragment,null,r.createElement(g,i({},a)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:l}=e,c=o(e,m);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:s}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=o(e,h);const l=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,i({},s,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),c):c};var v;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],b=function(e){let{fallback:t}=e,a=o(e,w);return t?r.createElement(y,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};b.displayName="Placeholder",b.propTypes={fallback:n.string,sources:null==(v=y.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(y,i({},e)),r.createElement("noscript",null,r.createElement(y,i({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=y.propTypes;const E=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:s().object.isRequired,alt:E},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],k=new Set;let N,S;const T=function(e){let{as:t="div",image:n,style:s,backgroundColor:c,className:d,class:u,onStartLoad:g,onLoad:p,onError:m}=e,h=o(e,C);const{width:f,height:y,layout:v}=n,w=function(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(f,y,v),{style:b,className:x}=w,E=o(w,j),L=(0,r.useRef)(),T=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);u&&(d=u);const I=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,f,y);return(0,r.useEffect)((()=>{N||(N=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return S=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void k.add(T);if(S&&k.has(T))return;let t,r;return N.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;L.current&&(L.current.innerHTML=a(i({isLoading:!0,isLoaded:k.has(T),image:n},h)),k.has(T)||(t=requestAnimationFrame((()=>{L.current&&(r=o(L.current,T,k,s,g,p,m))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{k.has(T)&&S&&(L.current.innerHTML=S(i({isLoading:k.has(T),isLoaded:k.has(T),image:n},h)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},E,{style:i({},b,s,{backgroundColor:c}),className:x+(d?" "+d:""),ref:L,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},I=(0,r.memo)((function(e){return e.image?(0,r.createElement)(T,e):null}));I.propTypes=L,I.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],_=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),q={src:s().string.isRequired,alt:E,width:_,height:_,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!A.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(z=I,function(e){let{src:t,__imageData:a,__error:n}=e,s=o(e,O);return n&&console.warn(n),a?r.createElement(z,i({image:a},s)):(console.warn("Image not loaded",t),null)});var z;R.displayName="StaticImage",R.propTypes=q},2369:function(e){"use strict";const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const s=e[n];t&&/[a-zA-Z]/.test(s)&&s.toUpperCase()===s?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(s)&&s.toLowerCase()===s?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=s.toLowerCase()===s&&s.toUpperCase()!==s,r=a,a=s.toUpperCase()===s&&s.toLowerCase()!==s)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},7428:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var r=a(1082),n=a(9027),s=a(3723),i=a(7352),o=a(9917),l=a(5893);function c(e){const t=e.data.markdownRemark;return(0,l.jsxs)(i.Z,{children:[(0,l.jsx)(o.Z,{title:t.frontmatter.title,description:t.excerpt}),(0,l.jsx)("div",{className:"clearfix post-content-box",children:(0,l.jsx)("article",{className:"article-page",children:(0,l.jsxs)("div",{className:"page-content",children:[t.frontmatter.img&&(0,l.jsx)("div",{className:"page-cover-image",children:(0,l.jsx)("figure",{children:(0,l.jsx)(s.G,{image:t.frontmatter.img.childImageSharp.gatsbyImageData,className:"page-image",alt:""},t.frontmatter.img.childImageSharp.gatsbyImageData.src)})}),(0,l.jsxs)("div",{className:"wrap-content",children:[(0,l.jsxs)("header",{className:"header-page",children:[(0,l.jsx)("h1",{className:"page-title",children:t.frontmatter.title}),(0,l.jsx)("div",{className:"page-date",children:(0,l.jsx)("span",{children:t.frontmatter.date})})]}),(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:t.html}}),(0,l.jsx)("div",{className:"page-footer",children:(0,l.jsx)("div",{className:"page-tag",children:t.frontmatter.tags&&t.frontmatter.tags.map((e=>(0,l.jsx)("span",{children:(0,l.jsxs)(r.Link,{className:"tag",to:"/tags/"+(0,n.slugify)(e)+"/",children:["# ",e]})},e)))})})]})]})})})]})}},9027:function(e){e.exports={slugify:e=>{e=(e=e.replace(/^\s+|\s+$/g,"")).toLowerCase();const t="àáäâèéëêìíïîòóöôùúüûñç·/_,:;";for(let a=0,r=t.length;a<r;a++)e=e.replace(new RegExp(t.charAt(a),"g"),"aaaaeeeeiiiioooouuuunc------".charAt(a));return e=e.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-template-jsx-deaabc9f5a644999f467.js.map