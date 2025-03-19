import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)

  const [finalSeconds, setFinalSeconds] = useState(0)
  const [finalMinutes, setFinalMinutes] = useState(0)
  const [finalHours, setFinalHours] = useState(0)


  useEffect(() => {
    const interval = setInterval(() => {
       if (finalSeconds > 0) {
        setFinalSeconds(prev => prev - 1)
       } else if (finalMinutes > 0){
        setFinalSeconds(59)
        setFinalMinutes(prev => prev - 1)
       } else if (finalHours > 0)  {
        setFinalHours(prev => prev - 1)
        setFinalMinutes(59)
       }

      
    }, 1000
    ) 
    return () => clearInterval(interval)}, [finalSeconds, finalMinutes, finalHours]
  )


  return (
    <>
      <div className='container'>
        <div>
          <div>
            Hours: 
            <input type='number' onChange={(e) => {setHours(e.target.value)}}></input>
          </div>
          
          <div>
            Minutes: 
            <input type='number' onChange={(e) => {setMinutes(e.target.value)}}></input>
          </div>

          <div>
            Seconds: 
            <input type='number' onChange={(e) => {setSeconds(e.target.value)}}></input>
          </div>

          <button onClick={() => {
            setFinalHours(hours)
            setFinalMinutes(minutes)
            setFinalSeconds(seconds)
          }}>Set Timer</button>
        </div>
        <p className='timer'>{finalHours + ':' + finalMinutes + ":" + finalSeconds}</p>
      </div>
    </>
  )
}

export default App
