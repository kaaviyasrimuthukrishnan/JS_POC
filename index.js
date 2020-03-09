arr=[];
let id=1;
curr_val =null;
const name1=document.getElementById("name");
const mail1=document.getElementById("email");
const btn=document.getElementById("cu-action");
const tab=document.getElementById("todo-body");
const edit1 = document.getElementById("edit-action");
function output()
 {
    console.log(curr_val);
     if(curr_val)
     {
         arr = arr.map(arr1=>{
             if(curr_val===arr1.id)
             {
             arr1.name=name1.value;
             arr1.mail=email.value;
         }
         return arr1;
        });
         update_val(null,'ADD')
     }
     else {
    details={};
    details.id = id++;
    details.name=name1.value;
    details.email=mail1.value;
    arr.push(details);
     }
     display();
}
function display()
{
    rows="";
    arr.forEach(details => {const tr=`<tr>
        <td>${details.id}</td>
        <td>${details.name}</td>
        <td>${details.email}</td>
        <td>
        <button class="btn btn-primary btn-md px-4" onclick="updVal(${details.id})">edit</button>
        <button class="btn btn-primary btn-md px-4" onclick="delVal(${details.id})">delete</button>
        </td>
        </tr>`;
        rows+=tr;
    });
    tab.innerHTML = rows;
    reset();
}
function reset() {
   name1.value="";
   email.value="";
}
function update_val(num, text) {
    curr_val = num;
    btn.innerHTML=text;
    console.log(text);
}
function delVal(temp) {
    arr = arr.filter(arr=>arr.id!=temp);
    display();
}
function updVal(temp) {
    let arr2 = arr.find(arr1=>arr1.id===temp);
    name1.value=arr2.name;
    mail1.value=arr2.email;
    update_val(arr2.id,'UPDATE')
}
document.getElementById("cu-action").addEventListener("click",output);



