// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function header() {
    // Div(parent)
    const contain = document.querySelector('.header-container');
    
    
    
    const divElement = document.createElement('div');
    divElement.classList.add('header');
    contain.append(divElement);

    
    const spanDate = document.createElement('span');
    spanDate.classList.add('date');
    divElement.appendChild(spanDate);
   spanDate.textContent = 'APRIL 17, 2020';

    
    const h1Element = document.createElement('h1');
    h1Element.textContent = 'Lambda Times';
    divElement.appendChild(h1Element);

    const spanTemp = document.createElement('span');
    spanTemp.classList.add('temp');
    divElement.appendChild(spanTemp);
    spanTemp.textContent = '98º';


}

console.log(header());
