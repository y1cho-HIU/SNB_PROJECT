import {React, useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Day from './Day';
import { Grid, Item } from '@mui/material';


function Montly(props){
    const [mydate, setMydate] = useState(new Date());
    const onChange = date => {
      setMydate(date);
      props.onChange(mydate);
    }
    return (
  
      <div userdate={mydate}>
        <Calendar onChange={onChange} value={mydate} />
      </div>
    );
  }
  //나중에 날짜 포맷 변경하기

function Feed(){
    const getDate = (_mydate) => {
        console.log("부모 컴포넌트가 "+_mydate+"라는 데이터를 전달받음")
    }

    return(
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Montly onChange={getDate}></Montly>
            </Grid>
            <Grid item xs={6}>
                <Day/>
            </Grid>
        </Grid>
    )
}

export default Feed;