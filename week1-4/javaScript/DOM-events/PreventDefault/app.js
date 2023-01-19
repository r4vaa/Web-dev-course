const shelterForm = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');

shelterForm.addEventListener('submit',function(e){
      e.preventDefault();
      const catNames =  input.value;
      const newLi = document.createElement('li');
      newLi.innerText = catNames;
      list.append(newLi);
      input.value = '';
      
})