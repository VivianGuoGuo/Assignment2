const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');
//const todoButton=document.getElementsByClassName('button1')


function newTodo() {
var checkbox = document.createElement('input');
var childList = document.createElement("li");
var liText = document.createElement('input');
var delelte=document.createElement('button1');
//var todoButton=document.getElementsByClassName('button1');
 delelte.appendChild(document.createTextNode('Delete'));
 childList.classList.add(classNames.TODO_ITEM);
 delelte.classList.add(classNames.TODO_DELETE);
 checkbox.classList.add (classNames.TODO_CHECKBOX);
 liText.classList.add(classNames.TODO_TEXT);

  checkbox.type = "checkbox";
  //checkbox.value = 1;
  liText.type="text";
  delelte.type='delete';

  childList.appendChild(checkbox);
  childList.appendChild(liText);
  childList.appendChild(delelte);
  // childList.appendChild(item);
  list.appendChild(childList);



//get input text
  liText.addEventListener('click' , function(){
    var todoPrompt=prompt("What is your to do ?");
    liText.value=todoPrompt;

  });

// unchecked count increment text
  var uncheckedText=parseInt(uncheckedCountSpan.innerHTML)+1;
  uncheckedCountSpan.innerHTML=uncheckedText;


  //unchecked count increment & decrement depend on if checkbox is clicked or not
checkbox.addEventListener( 'click', function(){
if (checkbox.checked){
  var decrText=parseInt(uncheckedCountSpan.innerHTML)-1;
  uncheckedCountSpan.innerHTML=decrText;
}
if(checkbox.checked===false){
var before=uncheckedCountSpan.innerHTML
var incres=parseInt(before)+1;
uncheckedCountSpan.innerHTML=incres;
}

});


// Item count increment text
var itemText=parseInt(itemCountSpan.innerHTML)+1;
itemCountSpan.innerHTML=itemText;

 //delelte button
  delelte.addEventListener('click',function(e){
   // console.log(e.target);
    e.target.parentNode.remove();
   
    if(true){
      var decrText1=parseInt(uncheckedCountSpan.innerHTML)-1;
      var decrText=parseInt(itemCountSpan.innerHTML)-1;
      itemCountSpan.innerHTML=decrText;
   uncheckedCountSpan.innerHTML=decrText1;
    }
   
    if((true) && (checkbox.checked===true))
    {
      var before1=uncheckedCountSpan.innerHTML
var incres1=parseInt(before1)+1;
uncheckedCountSpan.innerHTML=incres1;
console.log(uncheckedCountSpan.innerHTML);
    }
   

  });
  





}




 
