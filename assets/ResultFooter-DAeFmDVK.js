import{a4 as F,a5 as N,av as b,s as x,a6 as d,R as c,aw as $,r as E,a3 as U,_ as q,j as t,a7 as H,Y as B,i as K,k as T,a as V,S as W,h as S}from"./index-7JCrVMyd.js";import{d as G}from"./ContentPaste-CJSvfBhK.js";function L(r){return F("MuiCircularProgress",r)}N("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const O=["className","color","disableShrink","size","style","thickness","value","variant"];let f=r=>r,_,j,R,D;const a=44,Y=b(_||(_=f`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),Z=b(j||(j=f`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),A=r=>{const{classes:e,variant:s,color:o,disableShrink:n}=r,i={root:["root",s,`color${d(o)}`],svg:["svg"],circle:["circle",`circle${d(s)}`,n&&"circleDisableShrink"]};return B(i,L,e)},J=x("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.root,e[s.variant],e[`color${d(s.color)}`]]}})(({ownerState:r,theme:e})=>c({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&$(R||(R=f`
      animation: ${0} 1.4s linear infinite;
    `),Y)),Q=x("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),X=x("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:s}=r;return[e.circle,e[`circle${d(s.variant)}`],s.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>c({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&$(D||(D=f`
      animation: ${0} 1.4s ease-in-out infinite;
    `),Z)),or=E.forwardRef(function(e,s){const o=U({props:e,name:"MuiCircularProgress"}),{className:n,color:i="primary",disableShrink:w=!1,size:m=40,style:I,thickness:l=3.6,value:p=0,variant:k="indeterminate"}=o,z=q(o,O),u=c({},o,{color:i,disableShrink:w,size:m,thickness:l,value:p,variant:k}),v=A(u),h={},C={},y={};if(k==="determinate"){const P=2*Math.PI*((a-l)/2);h.strokeDasharray=P.toFixed(3),y["aria-valuenow"]=Math.round(p),h.strokeDashoffset=`${((100-p)/100*P).toFixed(3)}px`,C.transform="rotate(-90deg)"}return t.jsx(J,c({className:H(v.root,n),style:c({width:m,height:m},C,I),ownerState:u,ref:s,role:"progressbar"},y,z,{children:t.jsx(Q,{className:v.svg,ownerState:u,viewBox:`${a/2} ${a/2} ${a} ${a}`,children:t.jsx(X,{className:v.circle,style:h,ownerState:u,cx:a,cy:a,r:(a-l)/2,fill:"none",strokeWidth:l})})}))});var g={},rr=T;Object.defineProperty(g,"__esModule",{value:!0});var M=g.default=void 0,er=rr(K()),sr=t;M=g.default=(0,er.default)((0,sr.jsx)("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"}),"Download");function ir({handleDownload:r,handleCopy:e,disabled:s,hideCopy:o,downloadLabel:n}){const{t:i}=V();return t.jsxs(W,{mt:1,direction:"row",spacing:2,children:[t.jsx(S,{disabled:s,onClick:r,startIcon:t.jsx(M,{}),children:n||i("resultFooter.download")}),!o&&t.jsx(S,{disabled:s,onClick:e,startIcon:t.jsx(G,{}),children:i("resultFooter.copy")})]})}export{or as C,ir as R};
