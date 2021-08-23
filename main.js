/*********************Question 1 and 2****************************/

let inputsOfForm = document.getElementsByClassName("formInputs");
let sendBtn = document.getElementById("sendInfo");

let ArrayOfPatient = [];

sendBtn.addEventListener("click",function(){
    let patient = {
        
       firstName: inputsOfForm[0].value,
       lastName: inputsOfForm[1].value,
       dateOfBith: inputsOfForm[2].value,
       id: Number(inputsOfForm[3].value), 
       city: inputsOfForm[4].value,
       dateOfCheck:` ${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`,
       hourOFCheck: new Date().getHours(),
    }
    console.log(patient);


    if(ArrayOfPatient.length == 0){

        ArrayOfPatient.push(patient);

    }else{

        for (let i = 0; i < ArrayOfPatient.length; i++) {

            if(patient.id == ArrayOfPatient[i].id){

                return "sorry This id is ocuppy"; 

            }else{ console.log(ArrayOfPatient.push(patient));

            }
        }
            
    }
    console.log(ArrayOfPatient);

    addToTable.innerHTML += `<tr> <td>${inputsOfForm[0].value}</td> <td>${inputsOfForm[1].value}</td> <td>${inputsOfForm[2].value}</td>  <td>${inputsOfForm[3].value}</td>  <td>${inputsOfForm[4].value}</td>  </tr>`

})
console.log(ArrayOfPatient);


/*********************Question 4****************************/

let divDisplay = document.getElementById("container");

divDisplay.innerHTML = `firstName: ${inputsOfForm[0].value}</br>
                       lastName: ${inputsOfForm[1].value}</br>
                       dateOfBith: ${inputsOfForm[2].value}</br>
                       id: ${Number(inputsOfForm[3].value)}</br> 
                       city: ${inputsOfForm[4].value}</br>
                       dateOfCheck:${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}</br>
                       hourOFCheck: ${new Date().getHours()}`


/*********************Question 5****************************/

let addToTable = document.getElementById("table");

/*********************Question 6****************************/

for (let i = 0; i < inputsOfForm.length; i++) {

    inputsOfForm[i].addEventListener("input",function(){
        inputsOfForm[i].value = inputsOfForm[i].value.toUpperCase(); 
    })
    
}

/*********************Question 7 ****************************/

let searchInput = document.getElementById("search");
let serchBtn = document.getElementById("serchBtn");
let resultOfSearch = document.getElementById("resultOfSearch");

serchBtn.addEventListener("click",function(){
   for (let i = 0; i < ArrayOfPatient.length; i++) {
       
        if(searchInput.value ==  ArrayOfPatient[i].firstName){

            resultOfSearch.innerHTML += `<div>${ArrayOfPatient[i].firstName} ${ArrayOfPatient[i].lastName} ${ArrayOfPatient[i].dateOfBith} ${ArrayOfPatient[i].id} ${ArrayOfPatient[i].city}</div>`; 
        }else{
            resultOfSearch.innerHTML += `<p>The Name ${searchInput.value}  Is Not On The List </p>`;
        }
       
   } 
})

/*********************Question 8****************************/

let searchInputId = document.getElementById("searchId");
let searchInputBtn = document.getElementById("serchBtnId");

searchInputBtn.addEventListener("click",function(){
    for (let i = 0; i < ArrayOfPatient.length; i++) {
        
         if(searchInputId.value ==  ArrayOfPatient[i].id){
 
            return resultOfSearch.innerHTML += `<div>${ArrayOfPatient[i].firstName} ${ArrayOfPatient[i].lastName} ${ArrayOfPatient[i].dateOfBith} ${ArrayOfPatient[i].id} ${ArrayOfPatient[i].city}</div>`; 
            
         }else{
             resultOfSearch.innerHTML += `<p>The id ${searchInputId.value}  Is Not On The List </p>`
         }
        
    } 
 })