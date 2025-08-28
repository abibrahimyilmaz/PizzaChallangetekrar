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
                <h1>KOD ACIKTIRIR</h1>
                <h1>PİZZA, DOYURUR</h1>
                <button className="aciktim-buton" style={{ color: "black" }} onClick={handleClick} >ACIKTIM</button>
            </div>

            <img className="banner" src={banner} alt="Banner" />

        </div>

    )
}