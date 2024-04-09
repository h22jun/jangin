import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import './App.css';

function Event(){
    return(
      <div className='event-bg'>
        <h4>오늘의 이벤트</h4>
        <Outlet></Outlet>
  
      </div>
  
    )
  }

  export default Event;