
let myLeads=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const deleteBtn=document.getElementById("delete-btn")
const tabBtn=document.getElementById("tab-btn")
const ulEl=document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

function render(myLeads){
    let listItems=""
    for(let i=0;i<myLeads.length;i++){
        listItems+=`
            <li>
                <a href="${myLeads[i]}" target="_blank">
                    ${myLeads[i]}
                </a>
            </l1>
        `
    }

    ulEl.innerHTML=listItems
}

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value=""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    console.log(myLeads)
    render(myLeads)
})

deleteBtn.addEventListener("click", function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads)) 
      })
      render(myLeads)
})

