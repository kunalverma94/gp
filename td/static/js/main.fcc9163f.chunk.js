(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(11)},11:function(e,t,n){"use strict";n.r(t),n.d(t,"Time",function(){return f}),n.d(t,"Task",function(){return k}),n.d(t,"Todo",function(){return g});var a=n(9),r=n(6),o=n(1),i=n(2),s=n(4),c=n(3),l=n(5),u=n(0),m=n.n(u),d=n(8),v=n.n(d),f=(n(17),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={time:""},n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new Date;this.setState({time:t.toDateString()+" "+t.toLocaleTimeString()}),setInterval(function(){var t=new Date;e.setState({time:t.toDateString()+" "+t.toLocaleTimeString()})},1e3)}},{key:"render",value:function(){return m.a.createElement("div",{className:"borx time"},this.state.time)}}]),t}(u.Component)),k=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.item,t="task"+(e.done?" done":" undone");return m.a.createElement("div",{className:t,onClick:function(t){return e.togglework(e.index,t)}},m.a.createElement("div",{className:"work"}," ",e.work),m.a.createElement("div",{className:"remove",title:"remove this task",onClick:function(t){return e.remove(e.index,t)}}))}}]),t}(u.Component),g=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={task:[]},n.input=m.a.createRef(),n.togglework=function(e,t){if("remove"!=t.target.className){var a=Object(r.a)(n.state.task),o=a[e];o.done=!o.done,n.setState({task:a},function(e){localStorage.setItem("tds",JSON.stringify(n.state.task))})}},n.remove=function(e,t){var a=Object(r.a)(n.state.task);a.splice(e,1),n.setState({task:a},function(e){localStorage.setItem("tds",JSON.stringify(n.state.task))})},n.enter=function(e){console.log(n.input),"Enter"==e.key&&""!=e.target.value&&n.setState({task:n.state.task.concat({work:e.target.value,done:!1})},function(e){localStorage.setItem("tds",JSON.stringify(n.state.task)),n.input.current.value=""})},n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.tds;e?this.setState({task:JSON.parse(e)}):localStorage.setItem("tds",JSON.stringify([{work:"build Crome extension.",done:!0},{work:"upload Crome extension.",done:!0},{work:"Use Crome extension.",done:!1}]))}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"todo borx"},m.a.createElement("div",{className:"title"},m.a.createElement("h1",null,"Today's Goal :(",this.state.task.length,")")),m.a.createElement("div",{className:"list"},this.state.task.map(function(t,n){return m.a.createElement(k,{key:n,item:Object(a.a)({},t,{index:n,togglework:e.togglework,remove:e.remove})})})),m.a.createElement("div",{className:"add"},m.a.createElement("input",{type:"text",ref:this.input,onKeyPress:function(t){return e.enter(t)}})))}}]),t}(u.Component);v.a.render(m.a.createElement(function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"body"},m.a.createElement("div",{className:"bgg"}),m.a.createElement("div",{id:"container"},m.a.createElement(f,null),m.a.createElement(g,null))))},null),document.getElementById("root"))},17:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.fcc9163f.chunk.js.map