
import axios from 'axios'
import React, { useEffect } from 'react'

function AxiosTutorial() {
  const [userData,setdata]=useState([]);
    useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    console.log(response)
    setdata(response.data)
})
    },[])
  return (
    <div>AxiosTutorial
    {userData.map((data)=>{
      return(
        <div>{data.name}</div>
  )
    })}
    </div>
  )

}
export default AxiosTutorial