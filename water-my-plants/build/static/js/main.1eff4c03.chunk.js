(this["webpackJsonpwater-my-plants"]=this["webpackJsonpwater-my-plants"]||[]).push([[0],{232:function(e,n,t){},242:function(e,n,t){},243:function(e,n,t){"use strict";t.r(n);var c=t(2),a=t(0),r=t(23),s=t.n(r),i=t(11),o=t(15),l=t(10),j=t(7),d=t(106),b=function(e){var n=e.component,t=Object(d.a)(e,["component"]);return Object(c.jsx)(l.b,Object(j.a)(Object(j.a)({},t),{},{render:function(e){return window.localStorage.getItem("token")?Object(c.jsx)(n,Object(j.a)({},e)):Object(c.jsx)(l.a,{to:"/login"})}}))},u=t(12),p=t(13),h=t(42),O=t.n(h),x=function(){var e=window.localStorage.getItem("token");return O.a.create({headers:{Authorization:e},baseURL:"https://plant-tender.herokuapp.com/"})};function m(){var e=Object(u.a)(["\n  color: #000;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n\n  h1 {\n    font-family: 'Merienda', cursive;\n    font-size: 80px;\n    color: darkorange;\n    text-shadow: 0 0 0.1em black;\n  }\n"]);return m=function(){return e},e}var f=p.a.header(m());var g=function(){return Object(c.jsx)(f,{children:Object(c.jsx)("h1",{children:Object(c.jsx)(o.b,{to:"/",children:"Water My Plant"})})})};function v(){var e=Object(u.a)(["\n  font-size: 3.2rem;\n  font-weight: bold;\n  text-align: center;\n  padding: 2rem;\n  :hover {\n    color: #90ee90;\n  }\n"]);return v=function(){return e},e}function w(){var e=Object(u.a)(["\n  width: 100%;\n  form {\n    width: 100%;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    padding: 1.15em;\n    box-shadow: 0px 0px 5px 5px #010101aa;\n    background-color: white;\n    border-radius: 10px;\n    width: 30%;\n    margin: 0 35% 0 35%;\n    background: rgba(255, 165, 0, 0.73);\n    color: white;\n    font-family: 'Merienda', cursive;\n    text-shadow: 3px 3px 5px black;\n  }\n\n  img {\n    width: 250px;\n    border-radius: 50%;\n  }\n"]);return w=function(){return e},e}function y(){var e=Object(u.a)(["\n  border: none;\n  background-color: #227744;\n  margin: 0.5em;\n  padding: 0.5em 1em;\n  border: 2px solid black;\n  border-radius: 5px;\n  color: white;\n  font-size: 25px;\n  max-width: 100%;\n\n  :hover {\n    opacity: 80%;\n  }\n"]);return y=function(){return e},e}function k(){var e=Object(u.a)(["\n  width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  flex-flow: column nowrap;\n  margin-bottom: 0.5em;\n\n  input,\n  select {\n    padding: 5px;\n    margin-top: 0.5em;\n    margin-bottom: 0.5em;\n    border-radius: 5px;\n    border: 1px solid rgb(0, 0, 0);\n  }\n"]);return k=function(){return e},e}var S=p.a.div(k()),C=p.a.button(y()),N=p.a.div(w());p.a.h1(v());function P(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  // border: 3px solid black;\n  // background: rgba(255, 165, 0, 0.73);\n\n  .box-container {\n    width: 33rem;\n    min-height: 25rem;\n    box-shadow: 0 0 0.8rem 0.2rem rgba(0, 0, 0, 0.8);\n    border-radius: 5px;\n    position: relative;\n    z-index: 1;\n    background: inherit;\n    overflow: hidden;\n    padding: 1em;\n  }\n\n  .box-container:before {\n    content: '';\n    background: inherit;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    box-shadow: inset 0 0 0 200px rgba(255, 165, 0, 0.6);\n    backdrop-filter: blur(0.1em);\n    filter: blur(5px);\n  }\n\n  .box-container .inside {\n    padding-bottom: 2em;\n    height: 100%;\n    width: 100%;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n\n    position: absolute;\n    top: 1.5rem;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n\n  p,\n  button {\n    font-size: 20px;\n    font-weight: bold;\n    color: black;\n    text-shadow: 0px 1px 1px rgba(255, 255, 255, 1);\n    font-family: 'Merienda', cursive;\n  }\n\n  button {\n    color: white;\n    text-shadow: 0px 1px 1px rgba(0, 0, 0, 1);\n  }\n"]);return P=function(){return e},e}var I=p.a.main(P());var L=function(){return Object(a.useEffect)((function(){null!==window.localStorage.getItem("token")&&x().get("/api/auth/users").then((function(e){console.log(e)}))}),[]),Object(c.jsxs)("div",{className:"homePage",children:[Object(c.jsx)(g,{}),Object(c.jsx)(I,{children:Object(c.jsx)("div",{className:"box-container",children:Object(c.jsxs)("div",{className:"inside",children:[Object(c.jsxs)("p",{children:["Can't remember when or how ",Object(c.jsx)("br",{}),"often to water your plants?"]}),Object(c.jsx)("p",{children:"Become a member today of our exclusive App!"}),Object(c.jsx)(o.b,{to:"/join",children:Object(c.jsx)(C,{children:"Join"})}),Object(c.jsx)("p",{children:"Already a Member?"}),Object(c.jsxs)("div",{children:[Object(c.jsx)(o.b,{to:"/login",children:Object(c.jsx)(C,{children:"Login"})}),Object(c.jsx)(o.b,{to:"/join",children:Object(c.jsx)(C,{children:"Join"})})]})]})})})]})},_=t(20),E=t(9),M="LOG_ON",A="LOG_OFF",U="IS_FETCHING_USER",D="FETCHING_SUCCESS_UPDATE_USER",F="FETCHING_SUCCESS_UPDATE_PLANTS",T="TOGGLE_MODAL",z="PLANT_FORM_INFO",G=function(){return{type:M}},R=function(){return{type:U}},q=function(e,n){e(R()),x().get("/api/users").then((function(t){var c=t.data.find((function(e){return e.username===n}));c&&e({type:D,payload:c})}))},J=function(e,n){e(R()),x().get("/api/users/".concat(n,"/plants")).then((function(n){var t;e((t=n.data,{type:F,payload:t}))}))},B=function(e){window.localStorage.removeItem("token"),e({type:A})},H=function(){return{type:T}},W=function(e){return{type:z,payload:e}};function V(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .loginForm {\n    flex-basis: 100%;\n  }\n"]);return V=function(){return e},e}var Q=p.a.div(V()),$=function(e){var n=Object(a.useState)({username:"",password:""}),t=Object(E.a)(n,2),r=t[0],s=t[1],o=Object(l.g)(),d=Object(i.b)(),b=function(e){e.preventDefault(),x().post("/api/auth/login",r).then((function(e){d(G()),window.localStorage.setItem("token",e.data.token),q(d,r.username),o.push("/plants")})).catch((function(e){return console.log(e.response)}))},u=function(e){s(Object(j.a)(Object(j.a)({},r),{},Object(_.a)({},e.target.name,e.target.value)))};return Object(c.jsxs)("div",{className:"homePage",children:[Object(c.jsx)(g,{}),Object(c.jsx)(Q,{children:Object(c.jsx)(N,{className:"loginForm",children:Object(c.jsxs)("form",{onSubmit:b,children:[Object(c.jsx)("h2",{children:"Log In"}),Object(c.jsxs)(S,{children:[Object(c.jsx)("label",{htmlFor:"loginUsername",children:"Username"}),Object(c.jsx)("input",{type:"text",name:"username",id:"loginUsername",placeholder:"Username",value:e.username,onChange:u})]}),Object(c.jsxs)(S,{children:[Object(c.jsx)("label",{htmlFor:"loginPassword",children:"Password"}),Object(c.jsx)("input",{type:"password",name:"password",id:"loginPassword",placeholder:"Password",value:e.password,onChange:u})]}),Object(c.jsx)(C,{onClick:b,children:"LOGIN"})]})})})]})},K=t(31),X=t.p+"static/media/waterplants.ea5c35a7.jpg";function Y(){var e=Object(a.useState)({username:"",phone:"",password:""}),n=Object(E.a)(e,2),t=n[0],r=n[1],s=Object(a.useState)({username:"",phone:"",password:""}),o=Object(E.a)(s,2),d=o[0],b=o[1],u=Object(a.useState)(!1),p=Object(E.a)(u,2),h=p[0],O=p[1],m=Object(l.g)(),f=Object(i.b)(),v=K.a().shape({username:K.c().trim().required("A username is required.").min(4,"Username must be at lease 4 characters long").max(20,"Username cannot exceed 20 characters"),phone:K.c().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid"),password:K.c().trim().required("A username is required.").min(6,"Username must be at lease 6 characters long").max(12,"Password cannot exceed 20 characters")});Object(a.useEffect)((function(){v.isValid(t).then((function(e){O(!e)}))}),[t]);var w=function(e){var n=Object(j.a)(Object(j.a)({},t),{},Object(_.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value));!function(e){K.b(v,e.target.name).validate(e.target.value).then((function(){b(Object(j.a)(Object(j.a)({},d),{},Object(_.a)({},e.target.name,"")))})).catch((function(n){b(Object(j.a)(Object(j.a)({},d),{},Object(_.a)({},e.target.name,n.errors[0])))}))}(e),r(n)};return Object(c.jsxs)("div",{children:[Object(c.jsx)(g,{}),Object(c.jsx)("section",{className:"form-container",children:Object(c.jsx)(N,{children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x().post("https://plant-tender.herokuapp.com/api/auth/register",t).then((function(e){console.log(e)})).catch((function(e){return console.log(e.response)})),x().post("https://plant-tender.herokuapp.com/api/auth/login",{username:t.username,password:t.password}).then((function(e){window.localStorage.setItem("token",e.data.token),f(G()),q(f,t.username),r({username:"",phone:"",password:""}),m.push("/plants")}))},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Water My Plants"}),Object(c.jsx)("img",{src:X,alt:"registerImage"})]}),Object(c.jsxs)("div",{className:"user-name",children:[Object(c.jsx)("h3",{children:"Enter your Username"}),Object(c.jsx)(S,{children:Object(c.jsx)("label",{htmlFor:"name",children:Object(c.jsx)("input",{type:"text",name:"username",placeholder:"Username",id:"username",value:t.username,onChange:w})})}),Object(c.jsx)("p",{children:d.username})]}),Object(c.jsxs)("div",{className:"user-number",children:[Object(c.jsx)("h3",{children:"Enter your Phonenumber"}),Object(c.jsx)(S,{children:Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"text",name:"phone",placeholder:"xxx-xxx-xxxx",id:"phone",value:t.phone,onChange:w})})}),Object(c.jsx)("p",{children:d.phone})]}),Object(c.jsxs)("div",{className:"user-password",children:[Object(c.jsx)("h3",{children:"Enter a Password"}),Object(c.jsx)(S,{children:Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"text",name:"password",placeholder:"password",id:"password",value:t.password,onChange:w})})}),Object(c.jsx)("p",{children:d.password})]}),Object(c.jsx)("button",{disabled:h,type:"submitBtn",children:"Register"})]})})})]})}t(232);var Z=t(248),ee=t(249),ne=t(250),te=t(251),ce=t(252),ae=t(259),re=t(253),se=t(254),ie=t(255),oe=t(256),le=t(257),je=t(258),de=t(6),be=t.n(de),ue=t(17),pe={name:"test",species:"test",schedule:"test"},he=function(e){var n=e.plants,t=e.updatePlants;console.log("This is plants",n);var r=Object(a.useState)(!1),s=Object(E.a)(r,2),i=s[0],o=s[1],d=Object(a.useState)(pe),b=Object(E.a)(d,2),u=b[0],p=b[1],h=Object(l.g)();return Object(c.jsxs)("div",{className:"plants-wrap",children:[Object(c.jsx)("p",{children:"These are the Plants"}),Object(c.jsx)("ul",{children:n.length>0&&n.map((function(e){return Object(c.jsx)("li",{onClick:function(){return function(e){o(!0),p(e.plantList)}(e)},children:Object(c.jsx)("span",{children:Object(c.jsx)("span",{className:"delete",onClick:function(n){n.stopPropagation(),function(e){x().delete("/api/plants/".concat(e.id)).then((function(e){console.log("This is delete plant",e.data),h.push("/plants/reload")})).catch((function(e){return console.log(e.response)}))}(e)}})})},e.name)}))}),i&&Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x().put("/api/plants/".concat(u.id),u).then((function(e){console.log("This is saveEdit",e.data),o(!1),t([].concat(Object(ue.a)(n),[e.data])),h.push("/plants/reload")})).catch((function(e){return console.log(e.response)}))},children:[Object(c.jsx)("legend",{children:"edit plant"}),Object(c.jsxs)("label",{children:["plant name:",Object(c.jsx)("input",{onChange:function(e){return p(Object(j.a)(Object(j.a)({},u),{},{name:e.target.value}))},value:u.name})]}),Object(c.jsxs)("label",{children:["species:",Object(c.jsx)("input",{onChange:function(e){return p(Object(j.a)(Object(j.a)({},u),{},{species:e.target.value}))},value:u.species})]}),Object(c.jsxs)("label",{children:["schedule:",Object(c.jsx)("input",{onChange:function(e){return p(Object(j.a)(Object(j.a)({},u),{},{schedule:e.target.value}))},value:u.schedule})]})]})]})},Oe=function(){var e=Object(a.useState)([]),n=Object(E.a)(e,2),t=n[0],r=n[1],s=Object(i.c)((function(e){var n;return null===(n=e.user.userData)||void 0===n?void 0:n.id})),o=Object(i.c)((function(e){return e.plants.plantList})),l=Object(i.b)();return Object(a.useEffect)((function(){s&&J(l,s),r(o)}),[s]),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(he,{plants:t,updatePlants:r})})},xe=t(245),me=t(246),fe=t(247),ge=[{id:1,common_name:"Aloe Vera",image_url:"https://www.houseplantsexpert.com/assets/images/aloe-vera-plant-1.jpg"},{id:2,common_name:"Spider Plant",image_url:"https://www.houseplantsexpert.com/image-files/spiderplant_2.jpg"},{id:3,common_name:"Peace Lily",image_url:"https://www.houseplantsexpert.com/image-files/peace-lily.jpg"}];function ve(){var e=Object(u.a)(["\n  height: 100%;\n\n  .listContainer {\n    display: flex;\n    flex-direction: column;\n    align-item: center;\n    justify-content: space-around;\n    width: 100%;\n    height: 100%;\n\n    .plantListContainer {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      flex-direction: column;\n\n      .listChild {\n        width: 100%;\n        padding: 1em;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n\n        p {\n          font-size: 2rem;\n        }\n      }\n    }\n    nav.pagination {\n      margin: 0 auto;\n    }\n  }\n"]);return ve=function(){return e},e}var we=p.a.div(ve()),ye=function(){return Object(c.jsx)(we,{children:Object(c.jsx)(ke,{})})},ke=function(){var e=Object(a.useState)([]),n=Object(E.a)(e,2),t=n[0],r=n[1],s=Object(a.useState)([]),o=Object(E.a)(s,2),l=(o[0],o[1],Object(i.b)());return Object(a.useMemo)((function(){r(ge)}),[]),Object(c.jsxs)("div",{className:"listContainer",children:[Object(c.jsx)("h2",{children:"Plant List"}),Object(c.jsx)("div",{className:"plantListContainer",children:t.filter((function(e,n){return n<5})).map((function(e,n){return Object(c.jsxs)("div",{className:"listChild",children:[Object(c.jsx)("img",{src:e.image_url,style:{width:"100px",height:"100px"},alt:e.common_name+"_pic"}),Object(c.jsx)("p",{children:e.common_name}),Object(c.jsx)(C,{onClick:function(){l(W(e.common_name)),l(H())},children:"Quick Add"})]})}))}),Object(c.jsxs)(xe.a,{className:"pagination",children:[Object(c.jsx)(me.a,{children:Object(c.jsx)(fe.a,{first:!0,href:"#"})}),Object(c.jsx)(me.a,{children:Object(c.jsx)(fe.a,{previous:!0,href:"#"})}),Object(c.jsx)(me.a,{children:Object(c.jsx)(fe.a,{href:"#",children:"1"})}),Object(c.jsx)(me.a,{children:Object(c.jsx)(fe.a,{href:"#",children:"2"})}),Object(c.jsx)(me.a,{children:Object(c.jsx)(fe.a,{href:"#",children:"3"})}),Object(c.jsx)(me.a,{children:Object(c.jsx)(fe.a,{href:"#",children:"4"})}),Object(c.jsx)(me.a,{children:Object(c.jsx)(fe.a,{href:"#",children:"5"})}),Object(c.jsx)(me.a,{children:Object(c.jsx)(fe.a,{next:!0,href:"#"})}),Object(c.jsx)(me.a,{children:Object(c.jsx)(fe.a,{last:!0,href:"#"})})]})]})},Se=t.p+"static/media/plant.6adedc65.svg";function Ce(){var e=Object(u.a)(["\n  background-color: #f0f0f0;\n  border-radius: 5px;\n  padding: 1em;\n  height: 95%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-between;\n  align-items: center;\n  margin-right: 1em;\n  box-shadow: 0 0 5px black;\n\n  .user--icon {\n    padding: 1em;\n    margin-bottom: 5px;\n    box-shadow: 0 0 5px black;\n    border-radius: 50px;\n    background-color: #499e3c;\n    width: 60px;\n    height: 60px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .user--logout-btn {\n    border: 0;\n    padding: 0.5em;\n    border-radius: 5px;\n    color: white;\n    background-color: #bc0003;\n    font-weight: 600;\n  }\n\n  .user--addPlant {\n    border: 1px solid black;\n    padding: 0.25em;\n\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    justify-content: space-evenly;\n\n    img {\n      height: 25px;\n    }\n\n    p {\n      margin: 0;\n      padding: 0;\n    }\n  }\n"]);return Ce=function(){return e},e}function Ne(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  padding: 1em 2em;\n  height: 100vh;\n  width: 100vw;\n\n  .userDashboard {\n    background-color: #f0f0f0;\n    border-radius: 5px;\n    height: 95%;\n    flex: 1;\n    box-shadow: 0 0 5px black;\n\n    .nav-link {\n      cursor: pointer;\n    }\n  }\n"]);return Ne=function(){return e},e}var Pe=p.a.div(Ne()),Ie=p.a.nav(Ce()),Le=function(e){var n=e.dispatch,t=Object(i.c)((function(e){return e.plants.plantModalInfo.species})),r=Object(a.useState)({Name:"",Species:"",Days:1}),s=Object(E.a)(r,2),o=s[0],l=s[1],d=Object(i.c)((function(e){return e.user.userData.id})),b=Object(i.c)((function(e){return e.plants.plantModalIsOpen}));Object(a.useEffect)((function(){l(Object(j.a)(Object(j.a)({},o),{},{Species:t}))}),[]),console.log(t);var u=function(e){e.preventDefault(),function(e,n,t){e(R()),O.a.post("https://plant-tender.herokuapp.com/api/users/".concat(n,"/plants"),t),J(e,n)}(n,d,o),n(W(""))};return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(ae.a,{isOpen:b,toggle:function(){return n(H())},className:"addPlantModal",children:[Object(c.jsx)(re.a,{toggle:function(){return n(H())},children:"Add A Plant"}),Object(c.jsx)(se.a,{children:Object(c.jsxs)(N,{onSubmit:function(e){return u(e)},children:[Object(c.jsx)(S,{children:Object(c.jsxs)(ie.a,{for:"nickname",children:["Plant Name",Object(c.jsx)(je.a.Control,{type:"text",id:"nickname"})]})}),Object(c.jsx)(S,{children:Object(c.jsxs)(ie.a,{for:"species",children:["Plant Species",Object(c.jsx)(je.a.Control,{type:"text",id:"species"})]})}),Object(c.jsx)(S,{children:Object(c.jsxs)(ie.a,{for:"species",children:["Days to Water",Object(c.jsxs)(je.a.Control,{as:"select",custom:!0,children:[Object(c.jsx)("option",{children:"1"}),Object(c.jsx)("option",{children:"2"}),Object(c.jsx)("option",{children:"3"}),Object(c.jsx)("option",{children:"4"}),Object(c.jsx)("option",{children:"5"}),Object(c.jsx)("option",{children:"6"}),Object(c.jsx)("option",{children:"7"})]})]})})]})}),Object(c.jsx)(oe.a,{children:Object(c.jsx)(le.a,{color:"primary",onClick:u,children:"Add Plant"})})]})})},_e=function(e){var n=e.username,t=e.dispatch,a=e.history;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(Ie,{children:[Object(c.jsxs)("div",{className:"user--wrapper",children:[Object(c.jsx)("div",{className:"user--icon",children:n&&n.slice(0,1).toUpperCase()}),Object(c.jsx)("div",{className:"user--username",children:n}),Object(c.jsxs)("div",{className:"user--addPlant",onClick:function(e){return t(H())},children:[Object(c.jsx)("img",{src:Se,alt:""}),Object(c.jsx)("p",{children:"Add Plant"})]})]}),Object(c.jsx)("button",{className:"user--logout-btn",onClick:function(e){B(t),a.push("/")},children:"Logout"})]})})},Ee=function(){var e=Object(i.c)((function(e){return e.user.userData})),n=Object(i.c)((function(e){return e.user!=={}})),t=Object(a.useState)("1"),r=Object(E.a)(t,2),s=r[0],o=r[1],j=Object(a.useState)(!1),d=Object(E.a)(j,2),b=d[0],u=(d[1],Object(i.b)()),p=Object(l.g)(),h=function(e){s!==e&&o(e)};return console.log(e),Object(c.jsx)(Pe,{children:n&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(Le,{isOpen:b,dispatch:u}),Object(c.jsx)(_e,{username:e.username,dispatch:u,history:p}),Object(c.jsxs)("div",{className:"userDashboard",children:[Object(c.jsxs)(Z.a,{tabs:!0,children:[Object(c.jsx)(ee.a,{children:Object(c.jsx)(ne.a,{className:be()({active:"1"===s}),onClick:function(){h("1")},children:"My Plants"})}),Object(c.jsx)(ee.a,{children:Object(c.jsx)(ne.a,{className:be()({active:"2"===s}),onClick:function(){h("2")},children:"Plant List"})})]}),Object(c.jsxs)(te.a,{activeTab:s,children:[Object(c.jsx)(ce.a,{tabId:"1",children:Object(c.jsx)(Oe,{})}),Object(c.jsx)(ce.a,{tabId:"2",children:Object(c.jsx)(ye,{})})]})]})]})})};var Me=function(){var e=Object(i.c)((function(e){return e.user.isLoggedIn}));return console.log(e),Object(c.jsx)(o.a,{children:Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(l.d,{children:[Object(c.jsx)(b,{exact:!0,path:"/plants",component:Ee}),Object(c.jsx)(l.b,{path:"/login",component:$}),Object(c.jsx)(l.b,{path:"/join",component:Y}),Object(c.jsx)(l.b,{exact:!0,path:"/",component:L})]})})})},Ae=t(28),Ue=t(105),De={plantModalIsOpen:!1,plantList:{},plantModalInfo:{species:""}};var Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case F:return Object(j.a)(Object(j.a)({},e),{},{plantList:n.payload});case T:return Object(j.a)(Object(j.a)({},e),{},{plantModalIsOpen:!e.plantModalIsOpen});case z:return Object(j.a)(Object(j.a)({},e),{},{plantModalInfo:{species:n.payload}});default:return e}},Te={isLoggedIn:null!==window.localStorage.token,isLoading:!1,userData:{}};var ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case M:return Object(j.a)(Object(j.a)({},e),{},{isLoggedIn:!0});case A:return Object(j.a)(Object(j.a)({},e),{},{isLoggedIn:!1});case U:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!0});case D:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,userData:n.payload});default:return e}},Ge=Object(Ae.c)({user:ze,plants:Fe}),Re=Object(Ae.d)(Ge,Object(Ae.a)(Ue.a));t(241),t(242);s.a.render(Object(c.jsx)(i.a,{store:Re,children:Object(c.jsx)(o.a,{children:Object(c.jsx)(Me,{})})}),document.getElementById("root"))}},[[243,1,2]]]);
//# sourceMappingURL=main.1eff4c03.chunk.js.map