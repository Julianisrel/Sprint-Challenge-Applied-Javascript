// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
// CREATE TAB FUNCTION 


function createTab(data) {
    // element variable 
    const tab = document.createElement('div');
    // created element class 
    tab.classList.add("tab")
    // input data 
    tab.textContent = data
    // retunrn the tab element 
    return tab
}


//  AXIOS call for a request 
axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(res => {
        // console.log(res.data.topics, 111111)
        
        const topics = document.querySelector(".topics")
        
        res.data.topics.forEach(elem => {
            topics.appendChild(createTab(elem))
        });
        // catch errors 
    }).catch(err => {
        console.log(err, 'you have failed')
    })