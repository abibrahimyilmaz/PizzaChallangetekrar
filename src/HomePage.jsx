import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import banner from './images/home-banner.png';
import "./homepage.css";
import { useEffect, useRef, useState } from "react";
import pizzalar from "./pizzalar.json";
export default function HomePage() {

    const history = useHistory();
    const handleClick = () => {
        history.push("/orderpage");



    }

    const [visibleCount, setVisibleCount] = useState(0);

    const items = [
        { icon: "./public/icons/1.svg", label: "YENİ! Kore" },
        { icon: "./public/icons/2.svg", label: "Pizza" },
        { icon: "./public/icons/3.svg", label: "Burger" },
        { icon: "./public/icons/4.svg", label: "Kızartmalar" },
        { icon: "./public/icons/5.svg", label: "Fast food" },
        { icon: "./public/icons/6.svg", label: "Gazlı İçecek" },

    ];

    useEffect(() => {
        let timer;
        if (visibleCount < items.length) {
            timer = setTimeout(() => {
                setVisibleCount((prev) => prev + 1);
            }, 500);
        } else {
            // Tüm elemanlar çıktıktan sonra bekle ve baştan başlat
            timer = setTimeout(() => {
                setVisibleCount(0);
            }, 2000); // 2 saniye bekle
        }

        return () => clearTimeout(timer);
    }, [visibleCount]);


    const containerRef = useRef(null);

    const scroll = (direction) => {
        if (containerRef.current) {
            const width = containerRef.current.clientWidth / 3; // 1 kart genişliği
            containerRef.current.scrollBy({
                left: direction === "right" ? width : -width,
                behavior: "smooth",
            });
        }
    };

    return (


        <div className="homepage">



            <main className="main">
                <p>fırsatı kaçırma</p>
                <h1>KOD ACIKTIRIR</h1>
                <h1>PİZZA, DOYURUR</h1>
                <button className="aciktim-buton" onClick={handleClick} >ACIKTIM</button>
            </main>


            <div className="yemek-bar">

                {items.slice(0, visibleCount).map((item, index) => (
                    <div key={index} className="yemek-item">
                        <img src={item.icon} alt={item.label} />
                        <span>{item.label}</span>
                    </div>
                ))}



            </div>


            <div className="altsayfa">

                {/* lezzetusun bulunduğu yer*/}
                <div className="lezzetus" >

                    <div className="ozel-lezzetus" >
                        <img
                            src="./public/cta/kart-1.png"
                            alt="Özel Lezzetus"
                        />

                        <h2>
                            Özel <br /> Lezzetus
                        </h2>

                        <p>
                            Position:Absolute Acı Burger
                        </p>

                        <button onClick={handleClick}
                            className="btn-siparisver">
                            SİPARİŞ VER
                        </button>
                    </div>


                    <div className="hackatlon-npm" >

                        <div>
                            <img
                                src="./public/cta/kart-2.png"
                                alt="Hackatlon"

                            />

                            <h2>
                                Hackathlon <br /> Burger Menü
                            </h2>

                            <button onClick={handleClick}
                                className="btn-siparisver"
                            >
                                SİPARİŞ VER
                            </button>
                        </div>


                        <div>
                            <img
                                src="./public/cta/kart-3.png"
                                alt="Kurye"
                            />

                            <h2 style={{ color: "black" }}>
                                <span style={{ color: "red" }}>Çooook</span> hızlı <br /> npm gibi kurye
                            </h2>

                            <button onClick={handleClick} className="btn-siparisver">
                                SİPARİŞ VER
                            </button>
                        </div>
                    </div>
                </div>


                <p className="paket-menu"> en çok paketlenen menüler</p>
                <h3 className="doyuran-lezzetler"> Acıktıran Kodlara Doyuran Lezzetler</h3>


                <div className="resimlibutondiv" >
                    <button onClick={handleClick} className="resimlibuton"> <img src="./public/icons/1.svg" /> Ramen </button>
                    <button onClick={handleClick} className="resimlibuton"> <img src="./public/icons/2.svg" /> Pizza </button>
                    <button onClick={handleClick} className="resimlibuton"> <img src="./public/icons/3.svg" /> Burger </button>
                    <button onClick={handleClick} className="resimlibuton"> <img src="./public/icons/4.svg" /> French Fries </button>
                    <button onClick={handleClick} className="resimlibuton"> <img src="./public/icons/5.svg" /> Fast food </button>
                    <button onClick={handleClick} className="resimlibuton"> <img src="./public/icons/6.svg" /> Soft Drinks </button>
                </div>




                <div className="carousel-wrapper">
                    <button className="scroll-btn" onClick={() => scroll("left")}>
                        ◀
                    </button>
                    <div className="carousel-container" ref={containerRef}>
                        {pizzalar.map((pizza, index) => (
                            <div className="pizza-card" key={index}>
                                <img src={pizza.src} alt={pizza.name} />
                                <h3>{pizza.name}</h3>
                                <div className="pizza-info">
                                    <span>⭐ {pizza.puan}</span>
                                    <span>👍 {pizza.begeni}</span>
                                    <span>₺ {pizza.fiyat}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="scroll-btn" onClick={() => scroll("right")}>
                        ▶
                    </button>
                </div>



            </div>


        </div>

    )
}