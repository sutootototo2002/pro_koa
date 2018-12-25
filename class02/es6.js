// 1、let 块级作用域 const 常量  
// 2、方法的简写、属性的简写
//let a = 123; //同var
const b = '314169';
if(true){
    var a = 123;
}
console.log(a);
//b = 3;
console.log(b);

var name = 'suxiaoyan';
var package = {
    name,
    run(){
        console.log(`${this.name}正在跑步！`);
    }
}
console.log(package.name);
package.run();

//箭头函数

setTimeout(function(){
    console.log('执行')
}, 1000);

setTimeout(() => {
    //this 指向上下文
}, 2000);

function getData(callback){
    setTimeout(function(){
        var name = '张三';
        callback(name);

        
    }, 1000);
}

getData(function(data){
    console.log(data+'1111')
})
//promise1 
var p = new Promise(function(resolve,reject){
    setTimeout(function(){
        var name = '张三';
        if(Math.random()<0.7){
            resolve(name);
        }else{
            reject('失败');
        }
    }, 1000);
})

p.then((data)=>{
    console.log(data);
})

//promise2
function data1(resolve,reject){
    setTimeout(function(){
        var name = '苏晓燕';
        if(Math.random()<0.7){
            resolve(name);
        }else{
            reject('失败');
        }
    }, 1000);
}

var p1 = new Promise(data1);

p1.then((data)=>{
    console.log(data);
})

