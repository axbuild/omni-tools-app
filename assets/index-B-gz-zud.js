import{a as p,r as n,j as t}from"./index-7JCrVMyd.js";import{T as u}from"./ToolContent-DrkA_-Xz.js";import{T as c}from"./ToolCodeInput-BrtIQW2K.js";import{T as f}from"./ToolTextResult-BPpE0Rrg.js";import{m as d}from"./service-Ch0DOodt.js";import"./TextField-DeGHHacn.js";import"./ContentPaste-CJSvfBhK.js";import"./InputFooter-Cia2zmGJ.js";import"./ResultFooter-DAeFmDVK.js";const g={},x=[{title:"Minify a Simple JSON Object",description:"This example shows how to minify a simple JSON object by removing all unnecessary whitespace.",sampleText:`{
  "name": "John Doe",
  "age": 30,
  "city": "New York"
}`,sampleResult:'{"name":"John Doe","age":30,"city":"New York"}',sampleOptions:{}},{title:"Minify a Nested JSON Structure",description:"This example demonstrates minification of a complex nested JSON structure with arrays and objects.",sampleText:`{
  "users": [
    {
      "id": 1,
      "name": "Alice",
      "hobbies": ["reading", "gaming"]
    },
    {
      "id": 2,
      "name": "Bob",
      "hobbies": ["swimming", "coding"]
    }
  ]
}`,sampleResult:'{"users":[{"id":1,"name":"Alice","hobbies":["reading","gaming"]},{"id":2,"name":"Bob","hobbies":["swimming","coding"]}]}',sampleOptions:{}}];function C({title:a}){const{t:e}=p("json"),[i,o]=n.useState(""),[m,l]=n.useState(""),r=(b,s)=>{s&&l(d(s))};return t.jsx(u,{title:a,inputComponent:t.jsx(c,{title:e("minify.inputTitle"),value:i,onChange:o,language:"json"}),resultComponent:t.jsx(f,{title:e("minify.resultTitle"),value:m,extension:"json"}),initialValues:g,getGroups:null,toolInfo:{title:e("minify.toolInfo.title"),description:e("minify.toolInfo.description")},exampleCards:x,input:i,setInput:o,compute:r})}export{C as default};
