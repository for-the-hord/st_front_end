(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8270"],{5450:function(o,a,r){r("a717"),new Vue({el:"#app",data:{mapHistory:[]},created(){this.getWorldJson(),this.mapHistory.push()},mounted(){},methods:{async getWorldJson(){let{data:o}=await axios.get("/world-map/map-json/word-china.json");this.worldMap("worldMap","china",o,6,[104,35])},worldMap(o,a,r,t,e){var s=echarts.init(document.getElementById(o));echarts.registerMap(a,r),s.off("click");var l=[],i={normal:{show:!0,color:"rgba(255,255,255,1)"},emphasis:{show:!0,color:"rgba(255,255,255,1)"}},n={normal:{borderColor:"rgba(147, 235, 248, 1)",borderWidth:1,areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"rgba(147, 235, 248, 0)"},{offset:1,color:"rgba(147, 235, 248, .2)"}],globalCoord:!1},shadowColor:"rgba(128, 217, 248, 1)",shadowOffsetX:-2,shadowOffsetY:2,shadowBlur:10},emphasis:{areaColor:"#389BB7",borderWidth:0}};chinaProvince.forEach((function(o,a){var r={name:o,label:i,itemStyle:n};l.push(r,{name:"南海诸岛",label:i,itemStyle:n})}));var p={areaColor:{x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#073684"},{offset:1,color:"#061E3D"}]},borderColor:"#215495",borderWidth:1},c={geo:{show:!0,map:a,nameMap:worldMapName,label:{normal:{color:"rgba(255,255,255,.3)",show:!0},emphasis:{color:"rgba(255,255,255,.3)",show:!0}},zoom:t,center:e,roam:!0,itemStyle:{normal:p,emphasis:p},regions:l}};s.setOption(c,!0),s.on("click",async o=>{let a="";var r=Object.keys(cityMap),t=r.some(a=>a==o.name);if(!t)return;this.mapHistory.push(o.name),a=o.name;let{data:e}=await axios.get(`/world-map/map-json/city-map/${cityMap[a]}.json`);this.worldMap("worldMap","city",e,null,null)})},async back(){if(this.mapHistory.pop(),this.mapHistory.length<1)this.getWorldJson();else{let o=this.mapHistory[this.mapHistory.length-1],{data:a}=await axios.get(`/world-map/map-json/city-map/${cityMap[o]}.json`);this.worldMap("worldMap","city",a,null,null)}}}})}}]);