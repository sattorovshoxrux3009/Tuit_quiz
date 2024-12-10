import { useEffect, useState } from "react"
import "./Navbar.scss"
import left from "../../img/x-solid(1).svg"
import logo from "../../img/logo.png"
import hero from "../../img/quvonchbek.jpg"

function Navbar({setOnQuiz,onQuiz}) {
    const [time,settime]=useState('')
    const [day,setday]=useState('')
    const months=[
        "Yanvar",
        "Fevral",
        "Mart",
        "Aprel",
        "May",
        "Iyun",
        "Iyul",
        "Avgust",
        "Sentyabr",
        "Oktyabr",
        "Noyabr",
        "Dekabr"
    ]
    setInterval(() => {
        const date=new Date();
        const year=date.getFullYear();
        const month=months[date.getMonth()];
        const day=date.getDate();
        const hour=date.getHours()<10 ? '0'+date.getHours(): date.getHours();
        const minute=date.getMinutes()<10 ? '0'+date.getMinutes(): date.getMinutes();
        const second=date.getSeconds()<10 ? '0'+date.getSeconds(): date.getSeconds();
        settime(`${hour}:${minute}:${second}`);
        setday(`${day}-${month}, ${year}`);
    }, 1000);
    console.log()
  return (
    <div className="navbar">
        <div className="container">
            <img src={logo} alt="" className="logo" />
            <span>
                <h2>{time}</h2>
                <h4>{day}</h4>
            </span>
            {onQuiz && <img src={left} className="left" onClick={()=>{setOnQuiz(false)}} alt="" />}
            {!onQuiz && <img className="hero " src={hero}></img>}
        </div>
    </div>
  )
}

export default Navbar