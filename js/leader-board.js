
document.getElementById('players').style.color = 'white';
document.getElementById('blogs').style.color = 'white';
document.getElementById('courses').style.color = 'white';
document.getElementById('more-course').style.color = 'white';

document.getElementById('players-section').style.backgroundColor = 'rgba(0,0,150,0.3)';
document.getElementById('players-section').style.padding = '20px';
document.getElementById('players-section').style.borderRadius = '5px';

document.getElementById('blog-section').style.backgroundColor = 'rgba(0,0,150,0.3)';
document.getElementById('blog-section').style.padding = '20px';
document.getElementById('blog-section').style.borderRadius = '5px';

document.getElementById('course-section').style.backgroundColor = 'rgba(0,0,150,0.3)';
document.getElementById('course-section').style.padding = '20px';
document.getElementById('course-section').style.borderRadius = '5px';

///////////////////////////////////////////////

document.getElementById('add-list-item').addEventListener('click',function(){
   const li = document.createElement('li');
   li.innerText ='HTML'
   li.classList.add('item');
   const parent = document.getElementById('item-parent');
   parent.appendChild(li);
})

/////////////////////////////////////


/* function getCountedNumber(number){
   const inputField = document.getElementById('input-field');
   
   for(let i=0; i<=5; i++){
      let getNumber = inputField[i];
   }
} */

document.getElementById('check-button').addEventListener('click',function(){
   const inputField = document.getElementById('input-field');
   const getNumber = parseInt(inputField.value);
   const number = getNumber + 1;
   inputField.value = number
   if(inputField.value == 5){
     const btn = document.getElementById('check-button');
     btn.disabled = true;
     btn.style.opacity = '50%'
   }
})




































