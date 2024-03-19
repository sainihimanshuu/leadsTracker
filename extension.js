//const: cannot change the value

// addEventListner() and onClick
// innerHTML and createElement()

// to improve performance remember DOM manipulation comes with a cost

//template strings: can break into multiple lines

//localStorage.clear() localStorage.setItem(key, value) localStorage.getItem(key) **key and value must be strings
//JSON.stringify() and JSON.parse()

//truthy and falsy values
//null -> how you as a dev signalize emptiness
//undefined -> how JS signalizes emptiness

//arguments vs parameters : TAKE YOUR ARGUMENTS OUTSIDE

//API: Application Programming Interface

let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads){
    let listItems = "" // for better performance
    for (let i=0; i<leads.length; i++){
        // listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a href="${leads[i]}" target="_blank">
                    ${leads[i]}
                </a>
            </li>
        `
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)    
    }
    ulEl.innerHTML = listItems 
}

inputBtn.addEventListner("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads)
})

deleteEl.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

tabBtn.addEventListener("click", function() {
    //grab the url of the current tab  (google chrome extension get current tab)
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // since only one tab should be active and in the current window at once
        // the return variable should only have one entry
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads) 
      })
})




