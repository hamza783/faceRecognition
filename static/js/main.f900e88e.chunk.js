(this.webpackJsonpfacerecognition=this.webpackJsonpfacerecognition||[]).push([[0],{303:function(e,t,a){},304:function(e,t,a){},306:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(42),r=a.n(c),i=(a(96),a(84)),l=a(85),A=a(90),s=a(89),m=function(){return o.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},o.a.createElement("p",{className:"f3 link dim black underline pa3 pointer"},"Sign Out"))},u=a(86),h=a.n(u),p=a(87),g=a.n(p),E=(a(97),function(){return o.a.createElement("div",{className:"ma4 mt0"},o.a.createElement(h.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150}},o.a.createElement("div",{className:"Tilt-inner pa2"},o.a.createElement("img",{style:{paddingTop:"5px"},alt:"Logo",src:g.a}))))}),d=(a(98),function(e){var t=e.onInputChange,a=e.onSubmit;return o.a.createElement("div",null,o.a.createElement("p",{className:"f3 white"},"This app will detect faces in your picture"),o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"form center br3 shadow-5 pa4"},o.a.createElement("input",{className:"f4 w-80",type:"text",placeholder:"Enter url here",onChange:t}),o.a.createElement("button",{className:"f4 w-20 link grow white bg-purple",onClick:a},"Detect"))))}),f=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"white f3"},"Hamza, your current rank is "),o.a.createElement("div",{className:"white f1"},"#1"))},b=a(88),v=a.n(b),w=a(43),y=a.n(w),M=(a(303),function(e){var t=e.url,a=e.box;return o.a.createElement("div",{className:"center ma"},o.a.createElement("div",{className:"absolute mt2"},o.a.createElement("img",{id:"inputImage",src:t,alt:"",width:"500px",height:"auto"}),o.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),T=(a(304),new y.a.App({apiKey:"3f309dd9f74144cba75d737790a70adb"})),x={particles:{number:{value:100}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}},B=function(e){Object(A.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).onInputChange=function(t){e.setState({input:t.target.value})},e.onSubmit=function(){e.setState({imageUrl:e.state.input}),T.models.predict(y.a.FACE_DETECT_MODEL,e.state.input).then((function(t){return e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[1].region_info.bounding_box;console.log("data: "),console.log(e);var a=document.getElementById("inputImage"),n=Number(a.width),o=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*o,bottomRow:o-t.bottom_row*o,rightCol:n-t.right_col*n}},e.displayFaceBox=function(t){console.log(t),e.setState({box:t})},e.state={input:"",imageUrl:"",box:{}},e}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(v.a,{className:"particles",params:x}),o.a.createElement(m,null),o.a.createElement(E,null),o.a.createElement(f,null),o.a.createElement(d,{onInputChange:this.onInputChange,onSubmit:this.onSubmit}),o.a.createElement(M,{url:this.state.imageUrl,box:this.state.box}))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(305);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},87:function(e,t){e.exports="data:image/png;base64,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"},91:function(e,t,a){e.exports=a(306)},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.f900e88e.chunk.js.map