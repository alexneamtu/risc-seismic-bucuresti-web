(this["webpackJsonprisc-seismic-bucuresti-web"]=this["webpackJsonprisc-seismic-bucuresti-web"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.4612253a.svg"},function(e,t,a){e.exports=a.p+"static/media/search.c93e3592.svg"},,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(3),c=a.n(r),s=(a(17),a(1)),l=a(4),u=a(5),m=a(6),o=a(10),d=a(7),h=a(11),p=(a(18),a(8)),E=a.n(p),f=a(9),b=a.n(f),g=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={address:"",addressNumber:"",items:[],initial:!0,error:!1},a.handleOnChange=function(e){a.setState(Object(l.a)({},a.state,Object(s.a)({},e.target.name,e.target.value)))},a.handleSearch=function(e){e.preventDefault();var t=a.state.address.normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim().split(/[^\w-]|_/),n=t.pop(),i=t.join(" ");/\d/.test(n)&&(i+=" ".concat(n),n=""),a.makeApiCall(i,n)},a.makeApiCall=function(e,t){var n=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL||"https://static.17.155.217.95.clients.your-server.de",i="".concat(n,"/routes?address=").concat(e,"&number=").concat(t);fetch(i).then((function(e){return a.setState({initial:!1}),e.json()})).then((function(e){a.setState({items:e})})).catch((function(){a.setState({error:!0})}))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.addrInput.focus()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"main"},i.a.createElement("img",{src:E.a,className:"logo",alt:"logo"}),i.a.createElement("h1",{className:"title"},"Cautare rapida risc seismic Bucuresti"),i.a.createElement("p",null,"Pentru orice problema creati un tichet ",i.a.createElement("a",{href:"https://github.com/alexneamtu/risc-seismic-bucuresti-web/issues"},"aici")),i.a.createElement("br",null),i.a.createElement("form",{className:"search-form",onSubmit:this.handleSearch},i.a.createElement("input",{ref:function(t){e.addrInput=t},name:"address",type:"text",placeholder:"Ex: Regina Elisabeta 28",onChange:function(t){return e.handleOnChange(t)},value:this.state.address,required:!0}),i.a.createElement("button",{onClick:this.handleSearch,disabled:!this.state.address},"Cauta"),i.a.createElement("img",{src:b.a,alt:"Search Icon",className:"icon"})),i.a.createElement("div",{id:"no-results"},this.state.initial||this.state.items.length?"":"Cladirea nu se afla pe lista de risc seismic."),i.a.createElement("div",{id:"error"},this.state.error?"A aparut o problema. Incercati din nou.":""),this.state.items.length>0&&i.a.createElement("div",{id:"items-container"},this.state.items.map((function(e,t){return i.a.createElement("div",{className:"single-item",key:t},i.a.createElement("h3",null,e.street_type," ",e.address,", ",e.addressNumber),i.a.createElement("p",{className:"spaced"},"Incadrare: ",e.buildingRatings[0].seismicRating),i.a.createElement("ul",null,i.a.createElement("li",null,"Actualizare: ",new Intl.DateTimeFormat("ro-RO",{year:"numeric",month:"long",day:"2-digit"}).format(new Date(e.updatedAt))),i.a.createElement("li",null,"Sector: ",e.district),i.a.createElement("li",null,"Numar apartamente: ",e.apartmentNumber),i.a.createElement("li",null,"Regim inaltime: ",e.heightRegime),i.a.createElement("li",null,"An constructie: ",e.yearOfConstruction),i.a.createElement("li",null,"An expertiza: ",e.yearOfExpertise),i.a.createElement("li",null,"Expertizat de: ",e.expertName),i.a.createElement("li",null,"Suprafata: ",e.surfaceSize),e.comments&&i.a.createElement("li",null,"Comentarii: ",e.comments)))}))))}}]),t}(n.Component);c.a.render(i.a.createElement(g,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.58bccb58.chunk.js.map