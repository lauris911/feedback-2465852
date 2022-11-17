import { useState } from "react"


const FeedbackItem = () =>{
    //Estados: presistente informacionn a traves del ciclo de vida
    //de un unico componente 

    const [rating,setRating ] = useState(2)
    const[text, setText] = useState("Mejorar curso,mejorar recursos")
    
    const addNota = ()=>{
      setRating((prev)=>{
        return prev + 1
      })
    }
    const RestNota = ()=>{
        setRating((prev)=>{
          return prev - 1
        })
      }
    return(
        <div className="card">
               <div className="num-display">
                { rating }
               </div>
               <div className="text-dispaly">
                     { text }
               </div>
                <button onClick={addNota} className="btn">
                  sumar nota
               </button>

               <button onClick={RestNota} className="btn">
                  restar nota
               </button>
        </div>
    )

 
}

export default FeedbackItem