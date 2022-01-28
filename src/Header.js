import moment from "moment";
import './header.css';
import React, {useEffect,useState} from 'react';
function Header(){
    
    let curDate= moment().format("DD-MM-YYYY")
    let curTime=moment().format("hh:mm:ss")
    const [time, setTime] = useState(moment().format("hh:mm:ss"));

    useEffect(() => {
    const interval = setInterval(() => setTime(moment().format("hh:mm:ss")), 1000);
    return () => {
        clearInterval(interval);
    };
    }, []);
    
    return(
        <div>
            <div className="navBar">
                <div className="date">{curDate} ToDo List</div>
                <div className="time">{time}</div>
            </div>
        </div>
    );
}
export default Header;