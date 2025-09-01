import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import banner from './images/home-banner.png';
import "./index.css";




export default function HomePage() {



    const history = useHistory();
    const handleClick = () => {
        history.push("/orderpage");

    }

    return (


        <div className="homepage">
            <div>
                <h1  >KOD ACIKTIRIR</h1>
                <h1>PİZZA, DOYURUR</h1>
                <button className="aciktim-buton" style={{ color: "black" }} onClick={handleClick} >ACIKTIM</button>
            </div>

            <img className="banner" src={banner} alt="Banner" />
            <div style={{ maxWidth: "100%", backgroundColor: "white" }} > </div>
            <div style={{ maxWidth: "100%", backgroundColor: " #FAF7F2" }} >

                {/* lezzetusun bulunduğu yer*/}
                <div className="lezzetus" style={{ display: "flex", gap: "20px" }}>

                    <div className="lezzetus" style={{ position: "relative", width: "530px", height: "450px" }}>
                        <img
                            src="./public/cta/kart-1.png"
                            alt="Özel Lezzetus"
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "12px",
                                objectFit: "cover",
                            }}
                        />

                        <h2
                            style={{
                                position: "absolute",
                                top: "20%",
                                left: "10%",
                                color: "white",
                                fontSize: "32px",
                                fontWeight: "bold",
                            }}
                        >
                            Özel <br /> Lezzetus
                        </h2>

                        <p
                            style={{
                                position: "absolute",
                                top: "45%",
                                left: "10%",
                                color: "white",
                                fontSize: "16px",
                            }}
                        >
                            Position:Absolute Acı Burger
                        </p>

                        <button onClick={handleClick}
                            style={{
                                position: "absolute",
                                top: "65%",
                                left: "10%",
                                padding: "10px 20px",
                                border: "none",
                                borderRadius: "20px",
                                background: "white",
                                color: "red",
                                fontWeight: "bold",
                                cursor: "pointer",
                            }}
                        >
                            SİPARİŞ VER
                        </button>
                    </div>


                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                        <div style={{ position: "relative", width: "530px", height: "220px" }}>
                            <img
                                src="./public/cta/kart-2.png"
                                alt="Hackatlon"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "12px",
                                    objectFit: "cover",
                                }}
                            />

                            <h2
                                style={{
                                    position: "absolute",
                                    top: "20%",
                                    left: "10%",
                                    color: "white",
                                    fontSize: "24px",
                                    fontWeight: "bold",
                                }}
                            >
                                Hackathlon <br /> Burger Menü
                            </h2>

                            <button onClick={handleClick}
                                style={{
                                    position: "absolute",
                                    top: "65%",
                                    left: "10%",
                                    padding: "8px 16px",
                                    border: "none",
                                    borderRadius: "20px",
                                    background: "white",
                                    color: "red",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                }}
                            >
                                SİPARİŞ VER
                            </button>
                        </div>


                        <div style={{ position: "relative", width: "530px", height: "220px" }}>
                            <img
                                src="./public/cta/kart-3.png"
                                alt="Kurye"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "12px",
                                    objectFit: "cover",
                                }}
                            />

                            <h2
                                style={{
                                    position: "absolute",
                                    top: "20%",
                                    left: "10%",
                                    color: "black",
                                    fontSize: "24px",
                                    fontWeight: "bold",
                                }}
                            >
                                <span style={{ color: "red" }}>Çooook</span> hızlı <br /> npm gibi kurye
                            </h2>

                            <button onClick={handleClick}
                                style={{
                                    position: "absolute",
                                    top: "65%",
                                    left: "10%",
                                    padding: "8px 16px",
                                    border: "none",
                                    borderRadius: "20px",
                                    background: "white",
                                    color: "red",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                }}
                            >
                                SİPARİŞ VER
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <p style={{ color: "#CE2829", fontFamily: "Satisfy" }}> en çok paketlenen menüler</p>
                    <h3> Acıktıran Kodlara Doyuran Lezzetler</h3>
                </div>

                <div className="resimlibutondiv" style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                    <button onClick={handleClick} className="resimlibuton"> <img src="./public/icons/1.svg" /> Ramen </button>
                    <button onClick={handleClick} className="resimlibuton"> <img src="./public/icons/2.svg" /> Pizza </button>
                    <button onClick={handleClick} className="resimlibuton"> <img src="./public/icons/3.svg" /> Burger </button>
                    <button onClick={handleClick} className="resimlibuton"> <img src="./public/icons/4.svg" /> French Fries </button>
                    <button onClick={handleClick} className="resimlibuton"> <img src="./public/icons/5.svg" /> Fast food </button>
                    <button onClick={handleClick} className="resimlibuton"> <img src="./public/icons/6.svg" /> Soft Drinks </button>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
                    <div className="pizza-card">
                        <img src="/pictures/food-1.png" alt="Terminal Pizza" className="pizza-img" />
                        <h3 style={{ fontWeight: "bold" }}>Margherita</h3>
                        <div style={{ display: "flex", textAlign: "center", justifyContent: "space-between", padding: "10px" }}>

                            <p >⭐ 4.5 </p><p> 120 beğeni</p> <p >₺75</p></div>

                    </div>
                    <div className="pizza-card">
                        <img src="/pictures/food-2.png" alt="Terminal Pizza" className="pizza-img" />
                        <h3 style={{ fontWeight: "bold" }}>Pizza Absolute</h3>
                        <div style={{ display: "flex", textAlign: "center", justifyContent: "space-between", padding: "10px" }}>

                            <p >⭐ 4.5 </p><p> 120 beğeni</p> <p >₺75</p></div>

                    </div>
                    <div className="pizza-card">
                        <img src="/pictures/food-3.png" alt="Terminal Pizza" className="pizza-img" />
                        <h3 style={{ fontWeight: "bold" }}>Burger</h3>
                        <div style={{ display: "flex", textAlign: "center", justifyContent: "space-between", padding: "10px" }}>

                            <p >⭐ 4.5 </p><p> 120 beğeni</p> <p >₺75</p></div>

                    </div>

                </div>

            </div>


        </div>

    )
}