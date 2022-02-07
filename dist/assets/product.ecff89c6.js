import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as r,a as t,F as u,i as a,t as i,d as h}from"./vendor.edb13cca.js";const x={name:"week3product",data(){return{url:"https://vue3-course-api.hexschool.io/v2",apiPath:"week3-productlist",productsList:[],productInfo:{title:"",imageUrl:"",imagesUrl:[],category:"",description:"",price:0,origin_price:0,unit:""}}},mounted(){this.checkLogin()},methods:{login(){const o=this.emailValue,e=this.passwordValue,p={username:o,password:e};this.axios.post(`${this.url}/admin/signin`,p).then(l=>{console.log(l);const{token:s,expired:d}=l.data;document.cookie=`hexToken=${s};expires=${new Date(d)}`}).catch(l=>{console.dir(l)})},checkLogin(){console.log("checkLogin");const o=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.axios.defaults.headers.common.Authorization=o,this.axios.post(`${this.url}/api/user/check`).then(e=>{console.log(e),this.getProducts()}).catch(e=>{console.log(e),alert("\u72C0\u614B\u7570\u5E38"),this.$router.push("/week2/login")})},getProducts(){this.axios.get(`${this.url}/api/${this.apiPath}/admin/products`).then(o=>{console.log(o),this.productsList=o.data.products}).catch(o=>{console.log(o)})},getProductInfo(o){this.productInfo.title=o.title,this.productInfo.imageUrl=o.imageUrl,this.productInfo.category=o.category,this.productInfo.description=o.description,this.productInfo.content=o.content,this.productInfo.price=o.price,this.productInfo.origin_price=o.origin_price,this.productInfo.unit=o.unit,this.productInfo.imagesUrl=o.imagesUrl},addProducts(){this.axios.post(`${this.url}/api/${this.apiPath}/admin/product`).then(o=>{console.log(o)}).catch(o=>{console.log(o)})},delProduct(o){console.log(o),this.productsList=[],this.axios.delete(`${this.url}/api/${this.apiPath}/admin/product/${o}`).then(e=>{console.log(e),this.getProducts()}).catch(e=>{console.log(e)})}}},f={class:"flex flex-col justify-center items-center mx-auto"},m={class:"w-5/6 flex flex-col justify-center items-center"},b={class:""},k={class:"flex justify-between items-center mb-2"},w=t("div",null,null,-1),I=t("h2",{class:"text-2xl"},"\u7522\u54C1\u5217\u8868",-1),y={class:"border-4 border-gray-800 bg-white"},P=t("thead",{class:"border-b-4 border-gray-800"},[t("tr",null,[t("th",{width:"150"},"\u7522\u54C1\u540D\u7A31"),t("th",{width:"120"},"\u539F\u50F9"),t("th",{width:"120"},"\u552E\u50F9"),t("th",{width:"120"},"\u662F\u5426\u555F\u7528"),t("th",{width:"120"},"\u67E5\u770B\u7D30\u7BC0"),t("th",{width:"150"},"\u7DE8\u8F2F/\u522A\u9664")])],-1),L={width:"150"},U={width:"120"},C={width:"120"},j={width:"120"},V={key:0,class:"text-green-600"},$={key:1},v={width:"120"},B=["onClick"],T={width:"150"},D=["onClick"],F=["onClick"],N={class:"text-xl"},z=h(" \u76EE\u524D\u6709 "),A={class:"text-red-500"},E=h(" \u9805\u7522\u54C1 "),S={class:""},q=t("h2",null,"\u55AE\u4E00\u7522\u54C1\u7D30\u7BC0",-1),G={class:""},H=["src"],J={class:""},K={class:""},M={class:""},O={class:""},Q={class:""},R={class:"flex justify-center items-center"},W={class:"mx-2 text-xl text-red-500"},X={class:""},Y=["src"],Z={key:1,class:""};function tt(o,e,p,l,s,d){return n(),r("div",f,[t("div",m,[t("div",b,[t("div",k,[w,I,t("button",{class:"text-white text-xl bg-blue-500 p-2 rounded-xl",onClick:e[0]||(e[0]=(...c)=>d.addProducts&&d.addProducts(...c))}," \u5EFA\u7ACB\u65B0\u7522\u54C1 ")]),t("table",y,[P,t("tbody",null,[(n(!0),r(u,null,a(s.productsList,c=>(n(),r("tr",{key:c.id,class:"border-b border-gray-400 text-lg"},[t("td",L,i(c.title),1),t("td",U,i(c.origin_price),1),t("td",C,i(c.price),1),t("td",j,[c.is_enabled?(n(),r("span",V,"\u555F\u7528")):(n(),r("span",$,"\u672A\u555F\u7528"))]),t("td",v,[t("button",{onClick:_=>d.getProductInfo(c),type:"button",class:"text-blue-500"}," \u67E5\u770B\u7D30\u7BC0 ",8,B)]),t("td",T,[t("button",{onClick:_=>d.getProductInfo(c),type:"button",class:"text-white bg-blue-500 hover:bg-blue-700 p-2 mx-3 rounded-xl"}," \u7DE8\u8F2F ",8,D),t("button",{onClick:_=>d.delProduct(c.id),type:"button",class:"text-white bg-red-400 hover:bg-red-600 p-2 rounded-xl"}," \u522A\u9664 ",8,F)])]))),128))])]),t("p",N,[z,t("span",A,i(s.productsList.length),1),E])]),t("div",S,[q,s.productInfo.title?(n(),r(u,{key:0},[t("div",G,[t("img",{src:s.productInfo.imageUrl,class:"w-80 mx-auto",alt:"\u4E3B\u5716"},null,8,H),t("div",J,[t("h5",K,[h(i(s.productInfo.title)+" ",1),t("span",M,i(s.productInfo.category),1)]),t("p",O,"\u5546\u54C1\u63CF\u8FF0\uFF1A"+i(s.productInfo.description),1),t("p",Q,"\u5546\u54C1\u5167\u5BB9\uFF1A"+i(s.productInfo.content),1),t("div",R,[t("p",W," \u7279\u50F9:"+i(s.productInfo.price)+"\u5143 ",1),t("p",X,[t("del",null,i(s.productInfo.origin_price),1)]),h(" "+i(s.productInfo.unit)+" / \u5143 ",1)])])]),(n(!0),r(u,null,a(s.productInfo.imagesUrl,c=>(n(),r("img",{src:c,alt:"",class:"w-60 flex mx-auto m-1"},null,8,Y))),256))],64)):(n(),r("p",Z,"\u8ACB\u9078\u64C7\u4E00\u500B\u5546\u54C1\u67E5\u770B"))])])])}var et=g(x,[["render",tt]]);export{et as default};