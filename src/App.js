import moment from "moment/moment";
import { useState } from "react";


function App() {
  const [from,setFrom] = useState('')
  const [fromTime,setFromTime] = useState('')
  const [duration,setDuration] = useState('')
  const [toDate,setToDate] = useState('')

  function calculate(e){
e.preventDefault()
 setToDate(moment(from,"YYYY-MM-DD").add(duration,'days').format('YYYY-MM-DD'))
  }


  return (
    <div className="App">
      <form className="main" onSubmit={calculate}>
        <div className="from_date">
          <label htmlFor="from">From : </label>
          <input type="date" id="from" onChange={(e)=>{setFrom(e.target.value)}} />
          <input type="time" onChange={(e)=>{setFromTime(e.target.value)}}/>
        </div>
        <div className="duration">
         Duration :  <input type="number" onChange={(e)=>setDuration(e.target.value)}/>
        </div>
        <div className="to_date">
          <label htmlFor="to">To : </label>
          <input type="date" id="to" value={toDate} />
          <input type="time" value={fromTime}/>
        </div>
        <div style={{textAlign:'center'}}>
        <button className="btn">Calculate</button>
        </div>
      </form>

    </div>
  );
}

export default App;
