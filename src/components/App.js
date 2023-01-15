// create your App component here
import { useEffect, useState } from "react"
export default function App() 
{
    const [loading, setLoading] = useState(true)
    const [images, setImages] = useState()
    useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
      .then((response)=> response.json())
      .then((data)=>{
        setImages(data.message)
        console.log("data "+data.message)
        setLoading(false)
      })
    
      
    }, [])
    
    return (
        <div>
          {
            loading?"Loading...":<img src={images} alt="A Random Dog" />
          }
          
        </div>
    )
    
}
