
import "./footer.css";
import icon1 from "./images/footer/icons/icon-1.png";
import icon2 from "./images/footer/icons/icon-2.png";
import icon3 from "./images/footer/icons/icon-3.png";
import li0 from "./images/footer/insta/li-0.png"
import li1 from "./images/footer/insta/li-1.png";
import li2 from "./images/footer/insta/li-2.png";
import li3 from "./images/footer/insta/li-3.png";
import li4 from "./images/footer/insta/li-4.png";
import li5 from "./images/footer/insta/li-5.png";
import logofooter from "./images/footer/logo-footer.svg";
import pizzalar from './pizzalar.json';

export default function Footer() {

    const insta = [li0, li1, li2, li3, li4, li5];
    return (

        <footer className="footer">

            <div className="footer-top">
                <div className="footer-section">

                    <img src={logofooter} ></img>

                    <section id="contact">

                        <address>
                            <p>
                                <img src={icon1} alt="Adres" width="20" height="20" />
                                341 Londonderry Road, Istanbul Türkiye
                            </p>
                            <p>
                                <img src={icon3} alt="Telefon" width="20" height="20" />
                                <a href="">+90 216 123 45 67</a>
                            </p>
                            <p>
                                <img src={icon2} alt="E-posta" width="20" height="20" />
                                <a href="mailto:aciktim@teknolojikyemekler.com">aciktim@teknolojikyemekler.com</a>
                            </p>
                        </address>
                    </section>


                </div>
                <div className="footer-section">
                    <h2> Hot Menü</h2>

                    {pizzalar.map((item) => {
                        return <p key={item.id}>{item.name}</p>;
                    })}

                </div>
                <div className="footer-section">

                    <h2 >Instagram</h2>

                    <figure className="footer-insta">
                        {insta.map((icon, index) => (
                            <img key={index} src={icon} alt={`icon-${index}`} />
                        ))}
                    </figure>

                </div>




            </div>

            <hr />
            <p className="footer-bottom">© 2023 Teknolojik Yemekler.</p>
        </footer>
    )
}