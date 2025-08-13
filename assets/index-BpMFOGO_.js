import{r as p,j as n,B as h}from"./index-7JCrVMyd.js";import{T as d}from"./ToolContent-DrkA_-Xz.js";import{T as g}from"./ToolTextInput-pMJPolT7.js";import{T as w}from"./ToolTextResult-BPpE0Rrg.js";import{S as C}from"./SelectWithDesc-C9uboz12.js";import{T as f}from"./TextFieldWithDesc-D98LnRRi.js";import"./TextField-DeGHHacn.js";import"./ContentPaste-CJSvfBhK.js";import"./InputFooter-Cia2zmGJ.js";import"./ResultFooter-DAeFmDVK.js";function x(a,r){const o=[];for(let s=0;s<a.length;s++){const l=a[s];for(let i=0;i<r;i++)o[i]||(o[i]=[]),o[i][s]=l[i]}return o}function b(a,r,o,s){if(!a)return"";const l=a.split(`
`).map(e=>e.split(",")).filter(e=>e.length>0&&!e[0].trim().startsWith(s)),i=Math.max(...l.map(e=>e.length));for(let e=0;e<l.length;e++)for(let t=0;t<i;t++)l[e][t]||(l[e][t]=r?"":o);return x(l,i).join(`
`)}const v={emptyValuesFilling:!1,customFiller:"x",commentCharacter:"//"},y=[{title:"Convert CSV Rows to Columns",description:'In this example, we transform the input CSV file with a single horizontal row of six values "a,b,c,d,e,f" into a vertical column. The program takes this row, rotates it 90 degrees, and outputs it as a column with each CSV value on a new line. This operation can also be viewed as converting a 6-dimensional row vector into a 6-dimensional column vector.',sampleText:"a,b,c,d,e,f",sampleResult:`a
b
c
d
e
f`,sampleOptions:{emptyValuesFilling:!0,customFiller:"1",commentCharacter:"#"}},{title:"Rows to Columns Transformation",description:"In this example, we load a CSV file containing coffee varieties and their origins. The file is quite messy, with numerous empty lines and comments, and it is hard to work with. To clean up the file, we specify the comment pattern // in the options, and the program automatically removes the comment lines from the input. Also, the empty lines are automatically removed. Once the file is cleaned up, we transform the five clean rows into five columns, each having a height of two fields.",sampleText:`Variety,Origin
Arabica,Ethiopia

Robusta,Africa
Liberica,Philippines

Mocha,Yemen
//green tea`,sampleResult:`Variety,Arabica,Robusta,Liberica,Mocha
Origin,Ethiopia,Africa,Philippines,Yemen`,sampleOptions:{emptyValuesFilling:!0,customFiller:"1",commentCharacter:"//"}},{title:"Fill Missing Data",description:'In this example, we swap rows and columns in CSV data about team sports, the equipment used, and the number of players. The input has 5 rows and 3 columns and once rows and columns have been swapped, the output has 3 rows and 5 columns. Also notice that in the last data record, for the "Baseball" game, the number of players is missing. To create a fully-filled CSV, we use a custom message "NA", specified in the options, and fill the missing CSV field with this value.',sampleText:`Sport,Equipment,Players
Basketball,Ball,5
Football,Ball,11
Soccer,Ball,11
Baseball,Bat & Ball`,sampleResult:`Sport,Basketball,Football,Soccer,Baseball
Equipment,Ball,Ball,Ball,Bat & Ball
Players,5,11,11,NA`,sampleOptions:{emptyValuesFilling:!1,customFiller:"NA",commentCharacter:"#"}}];function I({title:a,longDescription:r}){const[o,s]=p.useState(""),[l,i]=p.useState(""),u=(t,m)=>{i(b(m,t.emptyValuesFilling,t.customFiller,t.commentCharacter))},e=({values:t,updateField:m})=>[{title:"Fix incomplete data",component:n.jsxs(h,{children:[n.jsx(C,{selected:t.emptyValuesFilling,options:[{label:"Fill With Empty Values",value:!0},{label:"Fill With Customs Values",value:!1}],onChange:c=>m("emptyValuesFilling",c),description:"If the input CSV file is incomplete (missing values), then add empty fields or custom symbols to records to make a well-formed CSV?"}),!t.emptyValuesFilling&&n.jsx(f,{value:t.customFiller,onOwnChange:c=>m("customFiller",c),description:'Use this custom value to fill in missing fields. (Works only with "Custom Values" mode above.)'})]})},{title:"Lines with comments",component:n.jsx(h,{children:n.jsx(f,{value:t.commentCharacter,onOwnChange:c=>m("commentCharacter",c),description:"Enter the symbol indicating the start of a comment line. (These lines are removed during conversion.)"})})}];return n.jsx(d,{title:a,input:o,inputComponent:n.jsx(g,{value:o,onChange:s}),resultComponent:n.jsx(w,{value:l}),initialValues:v,getGroups:e,setInput:s,compute:u,toolInfo:{title:`What is a ${a}?`,description:r},exampleCards:y})}export{I as default};
