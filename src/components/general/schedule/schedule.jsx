import React, { Component } from 'react';
import './schedule.scss'
import ScheduleData from '../../../../dist/data/schedule.json'

class Schedule extends Component {
  state = {  }
  render() { 
    console.log(ScheduleData.schedule)
    const day = ScheduleData.schedule.map(v=>(
      <div key={v.pid} className="w-100 m-2 style"> 
      <div className='col-md-6 daywidth center ml-4 pt-1'>{v.day} </div>
      <div className='col-md-6 w-100 center daywidth float-right mr-4 pt-2'>{v.open} - {v.close}</div>
      </div>
    ))
    return ( 
    <>
      <div className='row'>{day}
      </div>
     </>
     );
  }
}
 
export default Schedule;