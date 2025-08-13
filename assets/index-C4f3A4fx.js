import{r as d,j as a}from"./index-7JCrVMyd.js";import{T as R}from"./ToolTextInput-pMJPolT7.js";import{T as x}from"./ToolTextResult-BPpE0Rrg.js";import{S as f}from"./SimpleRadio-BbIGpl0h.js";import{C as h}from"./CheckboxWithDesc-Q6HObWmX.js";import{T as g}from"./ToolContent-DrkA_-Xz.js";import"./ContentPaste-CJSvfBhK.js";import"./InputFooter-Cia2zmGJ.js";import"./TextField-DeGHHacn.js";import"./ResultFooter-DAeFmDVK.js";import"./Radio-Clz2uSlr.js";import"./SwitchBase-CZaFkbti.js";import"./FormControlLabel-Bkvpm43S.js";import"./Checkbox-Sy-FfrtZ.js";function L(m,i){let n=m.split(`
`);i.newlines==="delete"&&(n=n.filter(e=>e.trim()!=="")),i.trimTextLines&&(n=n.map(e=>e.trim()));let s=[];if(i.mode==="all"){const e=new Set;s=n.filter(t=>e.has(t)?!1:(e.add(t),!0))}else if(i.mode==="consecutive")s=n.filter((e,t,l)=>t===0||e!==l[t-1]);else if(i.mode==="unique"){const e=new Map;n.forEach(t=>{e.set(t,(e.get(t)||0)+1)}),s=n.filter(t=>e.get(t)===1)}return i.sortLines&&s.sort(),i.newlines==="filter"||i.newlines==="preserve"&&(s=m.split(`
`).map(e=>e.trim()===""||s.includes(e)?e:"")),s.join(`
`)}const c={mode:"all",newlines:"filter",sortLines:!1,trimTextLines:!1},v=[{title:"Remove All Duplicate Lines",description:"If this option is selected, then all repeated lines across entire text are removed, starting from the second occurrence.",value:"all"},{title:"Remove Consecutive Duplicate Lines",description:"If this option is selected, then only consecutive repeated lines are removed.",value:"consecutive"},{title:"Leave Absolutely Unique Text Lines",description:"If this option is selected, then all lines that appear more than once are removed.",value:"unique"}],C=[{title:"Preserve All Newlines",description:"Leave all empty lines in the output.",value:"preserve"},{title:"Filter All Newlines",description:"Process newlines as regular lines.",value:"filter"},{title:"Delete All Newlines",description:"Before filtering uniques, remove all newlines.",value:"delete"}],T=[{title:"Remove Duplicate Items from List",description:"Removes duplicate items from a shopping list, keeping only the first occurrence of each item.",sampleText:`Apples
Bananas
Milk
Eggs
Bread
Milk
Cheese
Apples
Yogurt`,sampleResult:`Apples
Bananas
Milk
Eggs
Bread
Cheese
Yogurt`,sampleOptions:{...c,mode:"all",newlines:"filter",sortLines:!1,trimTextLines:!1}},{title:"Clean Consecutive Duplicates",description:"Removes consecutive duplicates from log entries, which often happen when a system repeatedly logs the same error.",sampleText:`[INFO] Application started
[ERROR] Connection failed
[ERROR] Connection failed
[ERROR] Connection failed
[INFO] Retrying connection
[ERROR] Authentication error
[ERROR] Authentication error
[INFO] Connection established`,sampleResult:`[INFO] Application started
[ERROR] Connection failed
[INFO] Retrying connection
[ERROR] Authentication error
[INFO] Connection established`,sampleOptions:{...c,mode:"consecutive",newlines:"filter",sortLines:!1,trimTextLines:!1}},{title:"Extract Unique Entries Only",description:"Filters a list to keep only entries that appear exactly once, removing any duplicated items entirely.",sampleText:`Red
Blue
Green
Blue
Yellow
Purple
Red
Orange`,sampleResult:`Green
Yellow
Purple
Orange`,sampleOptions:{...c,mode:"unique",newlines:"filter",sortLines:!1,trimTextLines:!1}},{title:"Sort and Clean Data",description:"Removes duplicate items from a list, trims whitespace, and sorts the results alphabetically.",sampleText:`  Apple
Banana
 Cherry
Apple
   Banana
Dragonfruit
 Elderberry `,sampleResult:`Apple
Banana
Cherry
Dragonfruit
Elderberry`,sampleOptions:{...c,mode:"all",newlines:"filter",sortLines:!0,trimTextLines:!0}}];function M({title:m}){const[i,n]=d.useState(""),[s,e]=d.useState(""),t=(l,p)=>{e(L(p,l))};return a.jsx(g,{title:m,input:i,inputComponent:a.jsx(R,{value:i,onChange:n}),resultComponent:a.jsx(x,{title:"Text without duplicates",value:s}),initialValues:c,getGroups:({values:l,updateField:p})=>[{title:"Operation Mode",component:v.map(({title:r,description:u,value:o})=>a.jsx(f,{checked:o===l.mode,title:r,description:u,onClick:()=>p("mode",o)},o))},{title:"Newlines, Tabs and Spaces",component:[...C.map(({title:r,description:u,value:o})=>a.jsx(f,{checked:o===l.newlines,title:r,description:u,onClick:()=>p("newlines",o)},o)),a.jsx(h,{checked:l.trimTextLines,title:"Trim Text Lines",description:"Before filtering uniques, remove tabs and spaces from the beginning and end of all lines.",onChange:r=>p("trimTextLines",r)},"trimTextLines")]},{title:"Sort Lines",component:[a.jsx(h,{checked:l.sortLines,title:"Sort the Output Lines",description:"After removing the duplicates, sort the unique lines.",onChange:r=>p("sortLines",r)},"sortLines")]}],compute:t,setInput:n,exampleCards:T})}export{M as default};
