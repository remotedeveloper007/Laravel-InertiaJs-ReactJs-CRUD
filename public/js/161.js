"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[161],{4267:(e,r,n)=>{n.d(r,{Z:()=>i});var a=n(7294),t=n(1636),l=n(5893);const s=function(){var e=(0,t.qt)().props,r=e.auth,n=(e.isLoggedIn,e.isGuest,window.location.pathname);return(0,l.jsx)("nav",{className:"navbar navbar-expand-md navbar-light bg-white shadow-sm",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(t.ZQ,{className:"navbar-brand",href:"/",children:"Laravel"}),(0,l.jsxs)("div",{className:"collapse navbar-collapse",id:"collapsibleNavId",children:[(0,l.jsxs)("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0",children:[(0,l.jsx)("li",{className:"/"==n?"nav-item active":"nav-item",children:(0,l.jsxs)(t.ZQ,{className:"nav-link",href:route("home"),children:["Home ",(0,l.jsx)("span",{className:"sr-only"})]})}),(0,l.jsx)("li",{className:n==route("users.index")?"nav-item active":"nav-item",children:(0,l.jsx)(t.ZQ,{className:"nav-link",href:route("users.index"),children:"Users"})})]}),(0,l.jsx)("ul",{className:"navbar-nav me-auto"}),(0,l.jsxs)("ul",{className:"navbar-nav ms-auto",children:[r.isGuest&&(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(t.ZQ,{className:"nav-link",href:route("login"),children:"Login"})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(t.ZQ,{className:"nav-link",href:route("register"),children:"Register"})})]}),r.user&&(0,l.jsxs)(a.Fragment,{children:[(0,l.jsxs)("li",{className:"nav-item dropdown",children:[(0,l.jsx)(t.ZQ,{id:"navbarDropdown",className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:r.user.name}),(0,l.jsx)("div",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"navbarDropdown",children:(0,l.jsx)(t.ZQ,{method:"post",className:"dropdown-item",href:route("logout"),as:"button",children:"Logout"})})]}),(0,l.jsxs)("li",{className:"nav-item dropdown",children:[(0,l.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Dropdown link"}),(0,l.jsxs)("ul",{className:"dropdown-menu",children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"dropdown-item",href:"#",children:"Action"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"dropdown-item",href:"#",children:"Another action"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{className:"dropdown-item",href:"#",children:"Something else here"})})]})]})]})]})]})]})})};const i=function(e){var r=e.title,n=e.children,t=e.create_url;return(0,a.useEffect)((function(){document.title=r})),(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)(s,{create:t}),(0,l.jsx)("main",{className:"container",children:n})]})}},1161:(e,r,n)=>{n.r(r),n.d(r,{default:()=>h});var a=n(7294),t=n(4267),l=n(9680),s=n(5893);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){d(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r,n){return(r=function(e){var r=function(e,r){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,r||"default");if("object"!==i(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===i(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function m(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,t,l,s,i=[],o=!0,c=!1;try{if(l=(n=n.call(e)).next,0===r){if(Object(n)!==n)return;o=!1}else for(;!(o=(a=l.call(n)).done)&&(i.push(a.value),i.length!==r);o=!0);}catch(e){c=!0,t=e}finally{try{if(!o&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw t}}return i}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return u(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,a=new Array(r);n<r;n++)a[n]=e[n];return a}const h=function(e){var r=e.id,n=e.name,i=e.email,o=e.errors,u=m((0,a.useState)({id:r,name:n,email:i}),2),h=u[0],f=u[1],p=function(e){e.persist();var r=e.target.id;f((function(n){return c(c({},n),{},d({},r,e.target.value))}))};return(0,s.jsx)(t.Z,{title:"Edit Users",children:(0,s.jsx)("div",{className:"container mt-4",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col-md-6 offset-md-3",children:(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("div",{className:"card-header",children:(0,s.jsx)("h5",{children:"Add User"})}),(0,s.jsx)("div",{className:"card-body",children:(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r=new FormData;r.append("id",h.id),r.append("name",h.name),r.append("email",h.email),r.append("_method","PUT"),l.Inertia.post("/users/"+h.id,r)},method:"put",encType:"multipart/form-data",children:[(0,s.jsxs)("div",{className:"form-group row",children:[(0,s.jsx)("label",{htmlFor:"name",className:"col-4 col-form-label",children:"Name"}),(0,s.jsxs)("div",{className:"col-md-8",children:[(0,s.jsx)("input",{type:"text",className:"form-control",id:"name",placeholder:"Name",value:h.name,onChange:p}),o.name&&(0,s.jsx)("div",{className:"text-danger",children:o.name})]})]}),(0,s.jsxs)("div",{className:"form-group row",children:[(0,s.jsx)("label",{htmlFor:"email",className:"col-4 col-form-label",children:"Email"}),(0,s.jsxs)("div",{className:"col-8",children:[(0,s.jsx)("input",{type:"email",className:"form-control",id:"email",placeholder:"Email",value:h.email,onChange:p}),o.email&&(0,s.jsx)("div",{className:"text-danger",children:o.email})]})]}),(0,s.jsx)("div",{className:"mb-3 row",children:(0,s.jsx)("div",{className:"offset-sm-4 col-sm-8",children:(0,s.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Update"})})})]})})]})})})})})}}}]);