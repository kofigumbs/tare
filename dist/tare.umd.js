(function(i,r){typeof exports=="object"&&typeof module!="undefined"?module.exports=r():typeof define=="function"&&define.amd?define(r):(i=typeof globalThis!="undefined"?globalThis:i||self,i.Tare=r())})(this,function(){"use strict";var t={defaultLayout:"position:absolute;top:0;left:0;width:100%;height:100%;",s:['<div style="position:relative;','"><div style="box-sizing:border-box;','"></div></div>'],fullHeight:"height:100%;",halfHeight:"height:50%;",v:["flex:1;text-align:center;","display:inline-block;"],character:['<div style="display:flex;flex-direction:row;flex:',';" data-tare-character="','">','<div style="display:flex;flex-direction:column;flex:1;">',"</div>","</div>"],html:['<div style="display:flex;flex-direction:row;" aria-label="','" data-tare>',"</div>"],expand:"flex:1;",square:"height:0;padding-bottom:100%;overflow:hidden;max-width:100%;",none:"",top:"border-top-style:solid;",left:"border-left-style:solid;",right:"border-right-style:solid;",bottom:"border-bottom-style:solid;",topLeftRadius:"border-top-left-radius:100%;",topRightRadius:"border-top-right-radius:100%;",bottomLeftRadius:"border-bottom-left-radius:100%;",bottomRightRadius:"border-bottom-right-radius:100%;",alignBottom:"top:unset;bottom:0;"},p={A:[[["s","square","top","left","topLeftRadius"],["s","expand","left"],["s","square","top","left"],["s","expand","left"]],[["s","square","top","right","topRightRadius"],["s","expand","right"],["s","square","top","right"],["s","expand","right"]]],B:[[["s","expand","top","left"],["s","expand","bottom","left"]],[["s","square","top","right","topRightRadius"],["s","expand","right"],["s","square","bottom","right","bottomRightRadius"],["s","square","top","right","topRightRadius"],["s","expand","right"],["s","square","bottom","right","bottomRightRadius"]]],C:[[["s","square","top","left","topLeftRadius"],["s","expand","left"],["s","square","bottom","left","bottomLeftRadius"]],[["s","square","top","right","topRightRadius"],["s","expand","none"],["s","square","bottom","right","bottomRightRadius"]]],D:[[["s","square","top","left"],["s","expand","bottom","left"]],[["s","square","top","right","topRightRadius"],["s","expand","right"],["s","square","bottom","right","bottomRightRadius"]]],E:[[["s","expand","top","left"],["s","expand","top","left"],["s","expand","bottom","left"]],[["s","expand","top"],["s","expand","none"],["s","expand","bottom"]]],F:[[["s","expand","top","left"],["s","expand","top","left"],["s","expand","left"]],[["s","expand","top"],["s","expand","none"]]],G:[[["s","square","top","left","topLeftRadius"],["s","expand","left"],["s","square","bottom","left","bottomLeftRadius"]],[["s","square","top","right","topRightRadius"],["s","expand","bottom"],["s","expand","right"],["s","square","bottom","right","bottomRightRadius"]]],H:[[["s","expand","bottom","left"],["s","expand","left"]],[["s","expand","bottom","right"],["s","expand","right"]]],I:[[["s","none","top"],["v","fullHeight"],["s","none","top","alignBottom"]]],J:[[["s","expand","none"],["s","square","bottom","left","bottomLeftRadius"]],[["s","square","top","right"],["s","expand","right"],["s","square","bottom","right","bottomRightRadius"]]],K:[[["s","expand","bottom","left"],["s","expand","left"]],[["s","expand","right"],["s","square","bottom","right","bottomRightRadius"],["s","square","top","right","topRightRadius"],["s","expand","right"]]],L:[[["s","expand","bottom","left"]],[["s","expand","bottom"]]],M:[[["s","square","top","left"],["s","expand","left"]],[["s","none","top"],["v","halfHeight"]],[["s","square","top","right","topRightRadius"],["s","expand","right"]]],N:[[["s","square","top","left"],["s","expand","left"]],[["s","square","top","right","topRightRadius"],["s","expand","right"]]],O:[[["s","square","top","left","topLeftRadius"],["s","expand","left"],["s","square","bottom","left","bottomLeftRadius"]],[["s","square","top","right","topRightRadius"],["s","expand","right"],["s","square","bottom","right","bottomRightRadius"]]],P:[[["s","square","top","left"],["s","expand","left"],["s","square","bottom","left"],["s","expand","left"]],[["s","square","top","right","topRightRadius"],["s","expand","right"],["s","square","bottom","right","bottomRightRadius"],["s","expand","none"]]],Q:[[["s","square","top","left","topLeftRadius"],["s","expand","left"],["s","square","bottom","left","bottomLeftRadius"]],[["s","square","top","right","topRightRadius"],["s","expand","right"],["s","expand","top","bottom","left","right"]]],R:[[["s","expand","top","left"]],[["s","square","top","right","topRightRadius"],["s","expand","right"],["s","square","bottom","right","bottomRightRadius"],["s","square","top","right","topRightRadius"],["s","expand","right"],["s","square","right"]]],S:[[["s","square","top","left","topLeftRadius"],["s","expand","left"],["s","square","top"],["s","expand","none"],["s","square","bottom","left","bottomLeftRadius"]],[["s","square","top","right","topRightRadius"],["s","expand","none"],["s","square","top","right","topRightRadius"],["s","expand","right"],["s","square","bottom","right","bottomRightRadius"]]],T:[[["s","expand","top"]],[["s","none","top"],["v","fullHeight"]],[["s","expand","top"]]],U:[[["s","expand","left"],["s","square","bottom","left","bottomLeftRadius"]],[["s","expand","right"],["s","square","bottom","right","bottomRightRadius"]]],V:[[["s","expand","left"],["s","square","bottom","left"]],[["s","expand","right"],["s","square","bottom","right","bottomRightRadius"]]],W:[[["s","expand","left"],["s","square","bottom","left"]],[["v","fullHeight"],["s","none","top","alignBottom"]],[["s","expand","right"],["s","square","bottom","right","bottomRightRadius"]]],X:[[["s","expand","left"],["s","square","bottom","left","bottomLeftRadius"],["s","square","top","left","topLeftRadius"],["s","expand","left"]],[["s","expand","right"],["s","square","bottom","right","bottomRightRadius"],["s","square","top","right","topRightRadius"],["s","expand","right"]]],Y:[[["s","expand","left"],["s","square","bottom","left","bottomLeftRadius"],["s","expand","none"]],[["s","expand","right"],["s","square","bottom","right"],["s","expand","right","bottom"]]],Z:[[["s","expand","top"],["s","square","top","left","topLeftRadius"],["s","expand","bottom","left"]],[["s","expand","top","right"],["s","square","bottom","right","bottomRightRadius"],["s","expand","bottom"]]]," ":[[["s","expand","none"]]],".":[[["s","expand","none"],["s","square","top","bottom","left","right","topLeftRadius","topRightRadius","bottomLeftRadius","bottomRightRadius"]]],"(":[[["s","square","top","left","topLeftRadius"],["s","expand","left"],["s","square","bottom","left","bottomLeftRadius"]]],")":[[["s","square","top","right","topRightRadius"],["s","expand","right"],["s","square","bottom","right","bottomRightRadius"]]],"-":[[["s","expand","bottom"],["s","expand","none"]]],_:[[["s","expand","bottom"]],[["s","expand","bottom"]]],",":[[["s","expand","none"],["s","square","bottom","right","bottomRightRadius"]]]};const a=(...o)=>o.join(""),n=(o,s,e=t.defaultLayout)=>a(t.s[0],o,t.s[1],e,s,t.s[2]),u=o=>n(t.v[0],t.right,a(t.v[1],o)),h=o=>o.map(([s,...e])=>{switch(s){case"s":return n(t[e[0]],e.slice(1).map(g=>t[g]).join(""));case"v":return u(t[e[0]]);default:throw new Error}}),d=new Map;for(let[o,s]of Object.entries(p))d.set(o,a(t.character[0],s.length,t.character[1],o,t.character[2],s.map(e=>a(t.character[3],h(e).join(""),t.character[4])).join(""),t.character[5]));var l={html:o=>a(t.html[0],o.replace('"',"&quot;"),t.html[1],Array.from(o.toUpperCase()).map(s=>d.get(s)).filter(s=>s).join(""),t.html[2])};return l});