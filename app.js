

let ball =document.querySelector(".ball")
const checkboxes =document.querySelectorAll(".checkball input")
let containerfluid= document.querySelector(".container-fluid")
checkboxes.forEach(item => {
    //console.log(item)
    item.addEventListener("change",(e)=> {
        // 2 den 1 e

         if (e.target.id==="vehicle1"  ) {
             //console.log(e.target.name)
             ball.style.left="4px"
             containerfluid.style.background="hsl(222, 26%, 31%)"
            
           
             return

         }
          // 1 den 2 e
         else if (e.target.id==="vehicle2"  ) {
            //console.log(e.target.name)
            ball.style.left="22px"

            containerfluid.style.background="hsl(0, 0%, 93%)"
           
            return

        }
         // 1 den 3 e
         else if (e.target.id==="vehicle3"  ) {
            //console.log(e.target.name)
            ball.style.left="40px"
            containerfluid.style.background=" hsl(268, 71%, 12%)"

           
            return

        }
     

    })

    //console.log(item)
})
let output=document.querySelector(".output")
let mystr=""
let k=0
let dotnum=0
let arith=0
let items =document.querySelectorAll(".item")
items.forEach(item => {
    item.addEventListener("click",(e)=> {
          
          if (e.target.className==="item") {
            if (output.textContent.slice(-1)==="+"){
                //console.log(output.textContent)
                k=parseInt(mystr)+parseInt(e.target.innerText)
                output.innerText=k
                mystr=k
                return
                //k+=0
            }
            if (output.textContent.slice(-1)==="-"){
                //console.log(output.textContent)
                k=parseInt(mystr)-parseInt(e.target.innerText)
                output.innerText=k
                mystr=k
                return
                //k+=0
            }
            if (output.textContent.slice(-1)==="*"){
                //console.log(output.textContent)
                k=parseInt(mystr)*parseInt(e.target.innerText)
                output.innerText=k
                mystr=k
                return
                //k+=0
            }
            if (output.textContent.slice(-1)==="/"){
                //console.log(output.textContent)
                k=parseInt(mystr)/parseInt(e.target.innerText)
                output.innerText=k
                mystr=k
                return
                //k+=0
            }
              mystr+=e.target.innerText
              
              output.innerText=mystr
              console.log(mystr)
              
          }
          else if (e.target.classList.contains("plus")&& (Number(output.textContent.slice(-1)) || output.textContent.slice(-1)==="0")){
             
            //  if (!arith) {
            //     k+=parseInt(mystr)  
            //  }
            //  else {
            //     k=parseInt(mystr)
            //  } 
            //k+=parseInt(mystr)
            output.innerText=mystr + "+"
              //arith+=1
              //mystr=""
              //k=parseInt(mystr)
            
            

          }
          else if (e.target.classList.contains("substract") && (Number(output.textContent.slice(-1)) || output.textContent.slice(-1)==="0")){
           
            // (!arith) ? k-=parseInt(mystr) : k=parseInt(mystr)
            // arith+=1
            // mystr=""
            //k=parseInt(mystr)
            output.innerText=mystr+"-"


        }
        else if (e.target.classList.contains("divide") && (Number(output.textContent.slice(-1)) || output.textContent.slice(-1)==="0")){
            // arith+=1
            // mystr=""
            // (!arith) ? k/=parseInt(mystr) : k=parseInt(mystr)
            //k=parseInt(mystr)
            output.innerText=mystr+"/"

        }
        else if (e.target.classList.contains("multiply") && (Number(output.textContent.slice(-1)) || output.textContent.slice(-1)==="0")){
            // arith+=1
            // mystr=""
            // (!arith) ? k*=parseInt(mystr) : k=parseInt(mystr)
            //k=parseInt(mystr)
            output.innerText=mystr+"*"

        }
        else if (e.target.classList.contains("del")){
             let output2=output.innerText.slice(0,-1)
             //k=parseInt(mystr)
            //(!arith) ? k*=parseInt(mystr) : k=parseInt(mystr)
            //k=parseInt(mystr)
            mystr=output2
            output.innerText=output2

        }
        else if (e.target.classList.contains("reset")){
            mystr=""
            k=0
            output.innerText=mystr
            //arith=0
        }
        else if (e.target.classList.contains("equal")){
            console.log(mystr,k)
            output.innerText=k
            //arith=0
        }
    })

})



