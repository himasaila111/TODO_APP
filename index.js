let task = document.querySelector(".textBox");
let taskList = document.querySelector(".taskList")

const addTask = ()=>{
    if(task.value == ''){
        alert('please add atleast one task')
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = task.value;
        taskList.appendChild(li)
        let span = document.createElement('span');
        span.innerHTML = "&#x2715";
        li.appendChild(span)
    }
    task.value = ''
    saveData();
}

taskList.addEventListener('click',(e)=>{
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked')
        saveData();
    }else if(e.target.tagName = 'SPAN'){
        e.target.parentElement.remove()
        saveData();
    }
},false)

const saveData=()=>{
    localStorage.setItem("data", taskList.innerHTML);
}

const getData=()=>{
    taskList.innerHTML = localStorage.getItem("data");
}

getData();