import {React, useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


//추후에 스타일드 컴포넌트로 커스텀하기
//onChange
function Montly(){
  const [mydate, setMydate] = useState(new Date());
  const onChange = date => {
    setMydate(date);
    console.log(mydate);
  }
  return (

    <div userdate={mydate}>
      <Calendar onChange={onChange} value={mydate} />
    </div>
  );
}
export default Montly;