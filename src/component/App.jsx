import React from 'react'

function App() {
    const[count,setCount] = React.useState(0)
  return (<div style={{display:"flex",flexDirection:"column"}}>
      <div style={{fontSize:"30px"}}>{count}</div>
       <button onClick={()=>setCount(count =>count+=1)} style={{fontSize:"30px"}}>+</button>
  </div>
  )
}

export default App