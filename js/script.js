const doc = document;

const userForm = doc.forms.userForm;
const fields = userForm.fields.elements;
const btn = doc.querySelector('.form-btn');
const sendText = doc.createElement('p');

console.log(fields.length);

btn.onclick = function(elements) {
  elements.preventDefault();
  let isValid = true;
  let sumValue = 0;

  for(let item of fields) {
    const value = item.value;
    const name = item.name;
    const label = item.closest('label');
    let warning = label.querySelector('p');

    if (!value) {
      item.className = 'red';  
      console.log(`field [${name}] is not valid`);
      isValid = false;
      sumValue = sumValue + 0;
      
      warning.className = 'red-text';
      warning.innerHTML = 'Please enter information.';
    } else {
      item.classList.remove('red');
      sumValue = sumValue + 1;

      if (warning) {
        warning.innerHTML = '';
      }
    }
  }
  
  if(sumValue === fields.length) {
    console.log('Send');
    sendText.innerHTML = 'Your information has been sent!';
    const sirchText = userForm.querySelector('.send-text')

    if (!sirchText) {
      sendText.className = 'send-text';
      userForm.append(sendText);
    }

    userForm.reset();
  } else {
    sendText.innerHTML = '';
  }
}












// userForm.onsubmit = function(e) {
//   e.preventDefault();

//   for(let item of fields) {
//     const value = item.value;
//     const name = item.name;

//     if (!value) {
//       item.className = 'red';

//       const warn = doc.createElement('p');
//       warn.className = 'red-text';
//       warn.innerHTML = 'Please enter information.';
//       item.append(warn);

//       console.log(`field [${name}] is not valid`);
//     } else {
//       item.classList.remove('red');
//     }

//     btn.onclick = function() {
//       console.log('Send');
  
//       const sendText = doc.createElement('p');
//       sendText.innerHTML = 'Your information has been sent!';
//       userForm.append(sendText);

//       userForm.reset();
//     }
//   }
// }

