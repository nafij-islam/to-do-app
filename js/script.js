let name=document.querySelector('.name')
let caption=document.querySelector('.caption')
let postbtn=document.querySelector('.postbtn')
let allpost=document.querySelector('.allpost')

let all=[]




postbtn.addEventListener("click", function(){
    all.push({
        name:name.value,
        caption:caption.value
    })
     display()
   
})

function display(){
    all.map(item=>{
        allpost.innerHTML+=`<div class="card" style="width: 18rem;">
                           <div class="card-body">
                              <h5 class="card-title">${item.name}</h5>
                              <p class="card-text">${item.caption}</p>
                              <button>Edit</button>
                              <button>Delete</button>
                           </div>
                       </div>`
})

}

