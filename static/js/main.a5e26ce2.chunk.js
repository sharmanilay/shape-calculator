(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,a,t){},117:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(32),s=t.n(r),c=(t(61),t(10)),i=t(11),h=t(13),o=t(12),u=t(14),d=t(124),m=function(e){function a(){return Object(c.a)(this,a),Object(h.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement(d.a,{fluid:!0,className:"head navbar"},l.a.createElement(d.a.Header,null,l.a.createElement(d.a.Brand,null,l.a.createElement("h2",null,l.a.createElement("a",{className:"brand",href:"/"},"Shape Calculator"))))))}}]),a}(n.Component),p=t(7),g=t(127),b=t(119),E=t(126),v=t(97),O=t(120),f=t(121),j=t(122),C=t(123),k=function(e){function a(){return Object(c.a)(this,a),Object(h.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"side-content"},l.a.createElement("h2",null,"Welcome to Shape Calculator"),l.a.createElement("h4",null,"Shape Calculator is an interactive web application. To the right you will \ufb01nd the 3 step application. Follow the instructions in each step. Clicking cancel will take you back to step 1. Enjoy!"),l.a.createElement("p",null,"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."),l.a.createElement("p",null,"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas."))}}]),a}(n.Component),N=t(118),S=t(125),y=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(h.a)(this,Object(o.a)(a).call(this,e))).state={length:0,breadth:0,area:0,validated:!1},t.handleLengthChange=t.handleLengthChange.bind(Object(p.a)(Object(p.a)(t))),t.handleBreadthChange=t.handleBreadthChange.bind(Object(p.a)(Object(p.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(Object(p.a)(t))),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"getValidationState",value:function(){var e=this.state.length,a=this.state.breadth;return isNaN(e)||isNaN(a)?"error":"success"}},{key:"getLengthValidation",value:function(){var e=this.state.length;return isNaN(e)?"error":"success"}},{key:"getBreadthValidation",value:function(){var e=this.state.breadth;return isNaN(e)?"error":"success"}},{key:"handleLengthChange",value:function(e){var a=this.state.breadth*e.target.value;this.setState({length:e.target.value,area:a})}},{key:"handleBreadthChange",value:function(e){var a=this.state.length*e.target.value;this.setState({breadth:e.target.value,area:a})}},{key:"handleSubmit",value:function(){if("success"===this.getValidationState()){var e=this.state.area,a=" length of ".concat(this.state.length," and length of ").concat(this.state.breadth,". Below is your result:");this.props.carea(e,a)}}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(g.a,{controlId:"formBasicText",validationState:this.getLengthValidation()},l.a.createElement(N.a,null,"Length"),l.a.createElement(S.a,{type:"text",value:this.state.length,placeholder:"Enter Length",onChange:this.handleLengthChange}),l.a.createElement(S.a.Feedback,null)),l.a.createElement(g.a,{controlId:"breadth",validationState:this.getBreadthValidation()},l.a.createElement(N.a,null,"Breadth"),l.a.createElement(S.a,{type:"text",value:this.state.breadth,placeholder:"Enter text",onChange:this.handleBreadthChange}),l.a.createElement(S.a.Feedback,null)),l.a.createElement(E.a,{className:"ani",onClick:this.handleSubmit},"Go to step 3"),l.a.createElement(E.a,{className:"ani",onClick:this.props.cancel},"Cancel"))}}]),a}(n.Component),A=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(h.a)(this,Object(o.a)(a).call(this,e))).state={diameter:0,area:0},t.handleRadiusChange=t.handleRadiusChange.bind(Object(p.a)(Object(p.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(Object(p.a)(t))),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"getValidationState",value:function(){var e=this.state.diameter;return isNaN(e)?"error":"success"}},{key:"handleRadiusChange",value:function(e){var a=e.target.value,t=Math.PI*a*a;t/=4,this.setState({diameter:e.target.value,area:t})}},{key:"handleSubmit",value:function(){if("success"===this.getValidationState()){var e=this.state.area,a="a diameter of ".concat(this.state.diameter,". Below is your result:");this.props.carea(e,a)}}},{key:"render",value:function(){return l.a.createElement(g.a,{controlId:"formBasicText",validationState:this.getValidationState()},l.a.createElement(N.a,null,"Diameter"),l.a.createElement(S.a,{type:"text",value:this.state.diameter,placeholder:"Enter Diameter",onChange:this.handleRadiusChange}),l.a.createElement(S.a.Feedback,null),l.a.createElement(E.a,{className:"ani",onClick:this.handleSubmit},"Go to step 3"),l.a.createElement(E.a,{className:"ani",onClick:this.props.cancel},"Cancel"))}}]),a}(n.Component),B=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(h.a)(this,Object(o.a)(a).call(this,e))).state={length:0,area:0},t.handleLengthChange=t.handleLengthChange.bind(Object(p.a)(Object(p.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(Object(p.a)(t))),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"getValidationState",value:function(){var e=this.state.length;return isNaN(e)?"error":"success"}},{key:"handleLengthChange",value:function(e){var a=e.target.value,t=a*a;this.setState({length:e.target.value,area:t})}},{key:"handleSubmit",value:function(){if("success"===this.getValidationState()){var e=this.state.area,a=" length of ".concat(this.state.length,". Below is your result:");this.props.carea(e,a)}}},{key:"render",value:function(){return l.a.createElement(g.a,{controlId:"formBasicText",validationState:this.getValidationState()},l.a.createElement(N.a,null,"Length"),l.a.createElement(S.a,{type:"text",value:this.state.length,placeholder:"Enter text",onChange:this.handleLengthChange}),l.a.createElement(S.a.Feedback,null),l.a.createElement(E.a,{className:"ani",onClick:this.handleSubmit},"Go to step 3"),l.a.createElement(E.a,{className:"ani",onClick:this.props.cancel},"Cancel"))}}]),a}(n.Component),x=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(h.a)(this,Object(o.a)(a).call(this,e))).state={length:0,breadth:0,area:0},t.handleLengthChange=t.handleLengthChange.bind(Object(p.a)(Object(p.a)(t))),t.handleBreadthChange=t.handleBreadthChange.bind(Object(p.a)(Object(p.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(Object(p.a)(t))),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"handleLengthChange",value:function(e){var a=Math.PI*this.state.breadth*e.target.value;this.setState({length:e.target.value,area:a})}},{key:"handleBreadthChange",value:function(e){var a=Math.PI*this.state.length*e.target.value;this.setState({breadth:e.target.value,area:a})}},{key:"getValidationState",value:function(){var e=this.state.length,a=this.state.breadth;return isNaN(e)||isNaN(a)?"error":"success"}},{key:"getLengthValidation",value:function(){var e=this.state.length;return isNaN(e)?"error":"success"}},{key:"getBreadthValidation",value:function(){var e=this.state.breadth;return isNaN(e)?"error":"success"}},{key:"handleSubmit",value:function(){if("success"===this.getValidationState()){var e=this.state.area,a=" x-axis of ".concat(this.state.length," and y-axis of ").concat(this.state.breadth,". Below is your result:");console.log(e),this.props.carea(e,a)}}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(g.a,{controlId:"formBasicText",validationState:this.getLengthValidation()},l.a.createElement(N.a,null,"X-axis"),l.a.createElement(S.a,{type:"text",value:this.state.length,placeholder:"Enter Length",onChange:this.handleLengthChange}),l.a.createElement(S.a.Feedback,null)),l.a.createElement(g.a,{controlId:"breadth",validationState:this.getBreadthValidation()},l.a.createElement(N.a,null,"Y-axis"),l.a.createElement(S.a,{type:"text",value:this.state.breadth,placeholder:"Enter text",onChange:this.handleBreadthChange}),l.a.createElement(S.a.Feedback,null)),l.a.createElement(E.a,{className:"ani",onClick:this.handleSubmit},"Go to step 3"),l.a.createElement(E.a,{className:"ani",onClick:this.props.cancel},"Cancel"))}}]),a}(n.Component),L=t(54),R=t.n(L),I=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(h.a)(this,Object(o.a)(a).call(this,e))).state={step:1,shape:"Rectangle",area:0,showText:""},t.step1=t.step1.bind(Object(p.a)(Object(p.a)(t))),t.step2=t.step2.bind(Object(p.a)(Object(p.a)(t))),t.step3=t.step3.bind(Object(p.a)(Object(p.a)(t))),t.shapeVariables=t.shapeVariables.bind(Object(p.a)(Object(p.a)(t))),t.handleOptionChange=t.handleOptionChange.bind(Object(p.a)(Object(p.a)(t))),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"step1",value:function(){this.setState({step:1})}},{key:"step2",value:function(){this.setState({step:2})}},{key:"step3",value:function(e){var a=e;console.log(e),this.setState({area:a}),console.log(this.state.area)}},{key:"shapeVariables",value:function(){var e,a=this;return"Rectangle"===this.state.shape?e=l.a.createElement(y,{cancel:this.step1,carea:function(e,t){a.setState({step:3,area:e,text:t})}}):"Circle"===this.state.shape?e=l.a.createElement(A,{cancel:this.step1,carea:function(e,t){a.setState({step:3,area:e,text:t})}}):"Square"===this.state.shape?e=l.a.createElement(B,{cancel:this.step1,carea:function(e,t){a.setState({step:3,area:e,text:t})}}):"Ellipse"===this.state.shape&&(e=l.a.createElement(x,{cancel:this.step1,carea:function(e,t){a.setState({step:3,area:e,text:t})}})),e}},{key:"handleOptionChange",value:function(e){console.log(e.target),this.setState({shape:e.target.value})}},{key:"render",value:function(){var e,a=this.state.step;return 1===a?e=l.a.createElement(g.a,null,l.a.createElement("h3",null,"Step 1: Select Your Shape"),l.a.createElement("p",null,'Please select the shape that you would like to calculate the area of and press the button "Go to step 2"'),l.a.createElement(b.a,{className:"radio-group",value:"Rectangle",onChange:this.handleOptionChange,checked:"Rectangle"===this.state.shape,name:"radioGroup"},"Rectangle")," ",l.a.createElement(b.a,{className:"radio-group",value:"Circle",onChange:this.handleOptionChange,checked:"Circle"===this.state.shape,name:"radioGroup"},"Circle")," ",l.a.createElement(b.a,{className:"radio-group",value:"Square",onChange:this.handleOptionChange,checked:"Square"===this.state.shape,name:"radioGroup"},"Square"),l.a.createElement(b.a,{className:"radio-group",value:"Ellipse",onChange:this.handleOptionChange,checked:"Ellipse"===this.state.shape,name:"radioGroup"},"Ellipse")," ",l.a.createElement(E.a,{className:"ani",onClick:this.step2},"Go to step ",this.state.step+1),l.a.createElement(E.a,{className:"ani",onClick:this.step1},"Cancel")):2===a?e=l.a.createElement(g.a,null,l.a.createElement("h3",null,"Step 2: Insert your values"),l.a.createElement("p",null,"You have selected a ",l.a.createElement("b",null,this.state.shape.toLowerCase()),". Please enter the variables required."),l.a.createElement(this.shapeVariables,null)):3===a&&(e=l.a.createElement(g.a,null,l.a.createElement("h3",null,"Step 3: Calculated area"),l.a.createElement("p",null,"You have calculated the area of a ",l.a.createElement("b",null,this.state.shape)," with",this.state.text),l.a.createElement("p",{className:"result"},"The area is ",this.state.area),l.a.createElement(E.a,{className:"ani",onClick:this.step1},"Start Over "))),l.a.createElement(v.a,{className:"main-div ",fluid:!0},l.a.createElement(O.a,null,l.a.createElement(f.a,{xs:12,md:6},l.a.createElement(k,null)),l.a.createElement(f.a,{xs:10,md:4},l.a.createElement("div",{className:"main-form"},l.a.createElement("div",{className:"form-wrapper"},l.a.createElement(j.a,{className:"form"},e)))),l.a.createElement(f.a,{xs:2,md:2},l.a.createElement(C.a,{src:R.a,alt:"ad"}))))}}]),a}(n.Component),G=function(e){function a(){return Object(c.a)(this,a),Object(h.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",null,l.a.createElement(v.a,{fluid:"true"},l.a.createElement(O.a,null,l.a.createElement(f.a,{className:"footer-brand",xs:12,md:6},l.a.createElement("h2",null,"Bombayworks")))))}}]),a}(n.Component),w=(t(114),function(e){function a(){return Object(c.a)(this,a),Object(h.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App container-fluid"},l.a.createElement(m,null),l.a.createElement(I,null),l.a.createElement(G,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},54:function(e,a){e.exports="data:image/png;base64,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"},55:function(e,a,t){e.exports=t(117)},61:function(e,a,t){}},[[55,2,1]]]);
//# sourceMappingURL=main.a5e26ce2.chunk.js.map