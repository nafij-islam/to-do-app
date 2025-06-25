let name=document.querySelector('.name')
let caption=document.querySelector('.caption')
let postbtn=document.querySelector('.postbtn')
let allpost=document.querySelector('.allpost')
let updatebtn=document.querySelector('.updatebtn')
let error=document.querySelector('.error')
let nopost=document.querySelector('.nopost')

let storeIndex;  

let all=[]

/*
*post button start
*/
postbtn.addEventListener("click", function(){
    if(!(name.value && caption.value)){
        error.innerHTML="Name and Captiono Daw.!!"
    }else{
           all.push({
        name:name.value,
        caption:caption.value
    })
     allpost.innerHTML=""
     display()
     name.value=""
     caption.value=""
     error.innerHTML=""

    }
    if(all.length>0){
        nopost.innerHTML=""

    }
 
   
})

updatebtn.addEventListener('click',function(){
    
    
    all[storeIndex].name=name.value
    all[storeIndex].caption=caption.value
    allpost.innerHTML=""
    name.value=""
    caption.value=""
     updatebtn.style.display="none"
     postbtn.style.display="block"
    display()

    
})

function display(){
    all.map(item=>{
        allpost.innerHTML+=`<div class="card" style="width: 18rem;">
                           <div class="card-body">
                              <h5 class="card-title">${item.name}</h5>
                              <p class="card-text">${item.caption}</p>
                              <button class="edit">Edit</button>
                              <button  class="delete">Delete</button>
                           </div>
                       </div>`
})
            

            //Delete part
 
            let deletebtn=document.querySelectorAll(".delete")
            let convertDeleteBtn=Array.from(deletebtn)

            convertDeleteBtn.map((item,index)=>{
                item.addEventListener('click',function(){
                   all.splice(index,1)
                    allpost.innerHTML=""
                   display()
                })
            })
            
           
            //Edit part
            let edit=document.querySelectorAll('.edit')
            let convertEditBtn=Array.from(edit)
             convertEditBtn.map((item,index)=>{
                item.addEventListener('click',function(){
                   
                    updatebtn.style.display="block"
                    postbtn.style.display="none"
                   
                   
                    name.value=all[index].name
                    caption.value=all[index].caption

                    storeIndex=index
            
                })
             })

            
          

}

