(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{429:function(t,e,i){"use strict";i.r(e);i(14);var s=i(9),o=i.n(s),a={data:()=>({api:"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",msgLoad:!1,anData:{},sentext:"先输入api再发送问题",animationData:{},showTow:!1,msgList:[{my:!1,msg:"你好我是openAI机器人,请问有什么问题可以帮助您?"}],msgContent:"",msg:""}),methods:{entapi(){this.sentext="api检测中",o.a.post("https://api.openai.com/v1/completions",{prompt:"你好呀",max_tokens:2048,model:"text-davinci-003"},{headers:{"content-type":"application/json",Authorization:"Bearer "+this.api}}).then(t=>{console.log("suss",t),this.msgLoad=!1,this.sentext="发送"}).catch(t=>{if(console.log("error",t),console.log(t.code),"ERR_BAD_REQUEST"==t.code)return this.sentext="apikey错误，检查确认后重新输入",this.msgLoad=!0,0})},sendMsg(){return""==this.msg?0:""==this.api?(this.sentext="请输入apikey再进行请求",0):(this.sentext="请求中",this.msgList.push({msg:this.msg,my:!0}),console.log(this.msg),this.msgContent+="YOU:"+this.msg+"\n",this.msgLoad=!0,this.msg="",void o.a.post("https://api.openai.com/v1/completions",{prompt:this.msgContent,max_tokens:2048,model:"text-davinci-003"},{headers:{"content-type":"application/json",Authorization:"Bearer "+this.api}}).then(t=>{console.log(t);let e=t.data.choices[0].text.replace("openai:","").replace("openai：","").replace(/^\n|\n$/g,"");console.log(e),this.msgList.push({msg:e,my:!1}),this.msgContent+=e+"\n",this.msgLoad=!1,this.sentext="发送"}).catch(t=>{console.log("error",t),console.log(t.code),this.sentext="请求失败,重新输入问题发送",this.msgLoad=!1}))}}},n=i(3),l=Object(n.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{display:"flex","flex-flow":"column",margin:"20px",height:"60vh"},attrs:{id:"app"}},[e("div",{staticStyle:{width:"100%",border:"1px solid #000"}},[e("div",{staticStyle:{height:"50vh",overflow:"auto"},attrs:{id:"okk"}},[t._l(t.msgList,(function(i,s){return e("div",{key:s,staticStyle:{width:"80%",height:"40px"}},[i.my?e("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"flex-end",height:"30px"}},[e("div",{staticStyle:{width:"400px",height:"50px"}},[e("div",{staticStyle:{"border-radius":"35px",height:"30px","background-color":"#3296fa33"}},[e("span",{staticStyle:{"word-break":"break-all",height:"30px"}},[t._v(t._s(i.msg))])])])]):t._e(),t._v(" "),i.my?t._e():e("div",{staticStyle:{display:"flex","flex-direction":"row","align-items":"flex-start"}},[e("div",{staticStyle:{width:"500px",height:"50px"}},[e("div",{staticStyle:{width:"500px",height:"30px","border-radius":"35px","background-color":"#f9f9f9"}},[e("span",{staticStyle:{"word-break":"break-all",height:"30px"}},[t._v(t._s(i.msg))])])])])])})),t._v(" "),e("div",{staticStyle:{height:"130px"}})],2)]),t._v(" "),e("div",{staticStyle:{position:"fixed",bottom:"0px",width:"100%",margin:"px auto"}},[e("div",{staticStyle:{"font-size":"55px",display:"flex","flex-direction":"row","justify-content":"space-around","align-items":"center",width:"40%"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],staticStyle:{width:"80%",height:"45px","border-radius":"50px","padding-left":"20px","margin-left":"10px","background-color":"#f0f0f0"},attrs:{type:"text","confirm-type":"search","placeholder-class":"my-neirong-sm",placeholder:"用一句简短的话描述您的问题,回车或者点击后面发送按钮"},domProps:{value:t.msg},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMsg.apply(null,arguments)},confirm:t.sendMsg,input:function(e){e.target.composing||(t.msg=e.target.value)}}}),t._v(" "),e("button",{staticStyle:{height:"45px",width:"20%",color:"#030303","border-radius":"2500px"},attrs:{disabled:t.msgLoad},on:{click:t.sendMsg}},[t._v("\n        "+t._s(t.sentext)+"\n      ")])])])])}),[],!1,null,null,null);e.default=l.exports}}]);