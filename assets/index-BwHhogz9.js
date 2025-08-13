import{r as f,j as u}from"./index-7JCrVMyd.js";import{T as b}from"./ToolFileResult-Div6pbTm.js";import{T as w}from"./ToolContent-DrkA_-Xz.js";import{T as y}from"./ToolPdfInput-CYdTNe9U.js";import{G as v,p as $,g as E,J as C}from"./jszip.min-CEM5lcMP.js";import"./ContentPaste-CJSvfBhK.js";import"./grey-pattern-DMflWW5d.js";import"./ResultFooter-DAeFmDVK.js";import"./TextField-DeGHHacn.js";import"./BaseFileInput-CTIURbfW.js";import"./InputFooter-Cia2zmGJ.js";import"./lodash-jIFHsyXN.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";v.workerSrc=$;function D(n){return n.split(/\n{2,}|\r{2,}/g).map(e=>e.trim()).filter(e=>e.length>0).map(e=>`<p>${e.replace(/\n/g," ")}</p>`).join(`
`)}async function j(n){const e=await n.arrayBuffer(),l=await E({data:e}).promise,c=l.numPages,a=[];for(let o=1;o<=c;o++){const d=(await(await l.getPage(o)).getTextContent()).items.map(T=>T.str).join(`
`);a.push(d)}const i=new C;i.file("mimetype","application/epub+zip",{compression:"STORE"}),i.folder("META-INF").file("container.xml",`<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`);const r=i.folder("OEBPS"),p=n.name.replace(/\.pdf$/i,""),s=`<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" unique-identifier="bookid" version="2.0">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:title>${p}</dc:title>
    <dc:creator>Converted by omni-tools</dc:creator>
    <dc:identifier id="bookid">${Date.now()}</dc:identifier>
    <dc:language>en</dc:language>
  </metadata>
  <manifest>
    <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
    ${a.map((o,t)=>`<item id="chapter${t+1}" href="chapter${t+1}.xhtml" media-type="application/xhtml+xml"/>`).join(`
    `)}
  </manifest>
  <spine toc="ncx">
    ${a.map((o,t)=>`<itemref idref="chapter${t+1}"/>`).join(`
    `)}
  </spine>
</package>`;r.file("content.opf",s);const h=`<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head>
    <meta name="dtb:uid" content="${Date.now()}"/>
    <meta name="dtb:depth" content="1"/>
    <meta name="dtb:totalPageCount" content="0"/>
    <meta name="dtb:maxPageNumber" content="0"/>
  </head>
  <docTitle>
    <text>${p}</text>
  </docTitle>
  <navMap>
    ${a.map((o,t)=>`<navPoint id="navpoint-${t+1}" playOrder="${t+1}">
        <navLabel>
          <text>Page ${t+1}</text>
        </navLabel>
        <content src="chapter${t+1}.xhtml"/>
      </navPoint>`).join(`
    `)}
  </navMap>
</ncx>`;r.file("toc.ncx",h),a.forEach((o,t)=>{const x=D(o),d=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Page ${t+1}</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <style>
    body {
      font-family: serif;
      line-height: 1.6;
      margin: 1em;
    }
    p {
      margin-bottom: 1em;
      text-align: justify;
    }
  </style>
</head>
<body>
  <h1>Page ${t+1}</h1>
  ${x}
</body>
</html>`;r.file(`chapter${t+1}.xhtml`,d)});const P=await i.generateAsync({type:"arraybuffer"});return new File([P],n.name.replace(/\.pdf$/i,".epub"),{type:"application/epub+zip"})}function W({title:n}){const[e,m]=f.useState(null),[l,c]=f.useState(null),[a,i]=f.useState(!1),g=async(r,p)=>{if(p)try{i(!0),c(null);const s=await j(p);c(s)}catch(s){console.error("Failed to convert PDF to EPUB:",s)}finally{i(!1)}};return u.jsx(w,{title:n,input:e,setInput:m,initialValues:{},compute:g,inputComponent:u.jsx(y,{value:e,onChange:r=>m(r),accept:["application/pdf"],title:"Input PDF"}),getGroups:null,resultComponent:u.jsx(b,{title:"EPUB Output",value:l,extension:"epub",loading:a,loadingText:"Converting PDF to EPUB..."}),toolInfo:{title:"How to Use PDF to EPUB?",description:"Upload a PDF file and this tool will convert it into an EPUB format, suitable for most e-reader devices."}})}export{W as default};
