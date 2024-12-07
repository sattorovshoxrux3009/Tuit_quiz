import "./Footer.scss"
import github from "../../img/github.svg"
import phone from "../../img/phone.svg"
import email from "../../img/email.svg"
import telegram from "../../img/telegram.svg"

function Footer() {
  return (
    <div className="footer">
        <div className="container">
            <span>
                <p>Toshkent Axborot Texnologiyalari Universiteti</p>
                <h4>Baxronov Quvonchbek tomonidan yaratildi</h4>
            </span>
            <div>
                <a href="https://github.com/QuvonchbekBaxronov" target="_blank"><img src={github} alt="" /></a>
                <a href="https://t.me/baxronov2" target="_blank"><img src={telegram} alt="" /></a>
                <a href="tel:998944338848" target="_blank"><img src={phone} alt="" /></a>
                <a href="mailto: baxronovquvonchbek11@gmail.com" ><img src={email} alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer