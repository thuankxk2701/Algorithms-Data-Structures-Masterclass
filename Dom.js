//HTML DOM

// total 3 component;

/**
 *  1. Element :ID,Class,Tag,Css selector,HTML Collection;
 *  2.Attribute;
 *  3.Text
 *
 *
 *
 *
 *
 */

/*
console.log(document);
document.write("hello");

let headingNode = document.getElementById("heading");

let headingNode = document.getElementsByClassName("heading");

let headingNode = document.getElementsByTagName("h1");


let headingNode = document.querySelector(".heading");

let headingNode = document.querySelectorAll(".heading"); // NodeList giong Array
let headingNode = document.querySelectorAll(".heading"); // NodeList giong Array

console.log(headingNode);

let checkboxNodes= document.querySelectorAll("input");

for(let i = 0; i<checkboxNodes.length; i++){
    if(checkboxNodes[i].getAttribute('type')=='checkbox'){
        if(checkboxNodes[i].getAttribute('value')==1){
          var checkbox1Element=checkboxNodes[i];
        }
   
        if(checkboxNodes[i].getAttribute('checked')!==null&& !(checkboxNodes[i].getAttribute('disabled')!==null)){
           
           var checkboxCheckedAndNotDisabled=checkboxNodes[i];
        }
        if(!(checkboxNodes[i].getAttribute('checked')!==null)&& (checkboxNodes[i].getAttribute('disabled')!==null)){
           var checkboxDisabledAndNotChecked=checkboxNodes[i];
        }
        if(checkboxNodes[i].getAttribute('checked')!==null&& (checkboxNodes[i].getAttribute('disabled')!==null)){
            var checkboxCheckedAndDisabled=checkboxNodes[i];
         }

    }
}


let listItems1=document.querySelectorAll('ul');
console.log(listItems1[0]);

let nodeA=document.querySelectorAll('a');
let nodeDiv=document.querySelector('div');
for (let i=0; i<nodeA.length; i++){
  if(i===0){
      var f8LinkElement=nodeA[i];
      var f8ShortLink=f8LinkElement.getAttribute('href');
  }
  if(i===1) {
      nodeA[i].href=f8ShortLink;
  }
}
nodeDiv.setAttribute('data-url',f8ShortLink)

       
let nodeDivClassBox=document.querySelector('.box');
nodeDivClassBox.textContent='Học lập trình tại F8';
let nodeDiv=document.querySelector('div:last-child');

nodeDiv.textContent='Thao tác với DOM qua bài tập tại F8';

 */


