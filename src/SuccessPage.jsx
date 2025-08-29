import "./index.css";
export default function SuccessPage({ siparis }) {


    return (


        <div className="successpage">
            <h2 style={{ fontFamily: "Satisfy", color: "#FDC913" }}>lezzetin yolda</h2>
            <h1>SİPARİŞ ALINDI</h1>

            <hr />



            <h4> {siparis.pizzaIsmi}</h4>

            <div className="siparis-container">



                <p> <span style={{ fontWeight: "100" }}>Boyut:</span><span style={{ fontWeight: "bold" }}> {siparis.boyut} </span> </p>
                <p> <span style={{ fontWeight: "100" }}>Hamur:</span> <span style={{ fontWeight: "bold" }}>{siparis.hamur}</span> </p>
                <p><span style={{ fontWeight: "100" }}>Ek Malzemeler: </span><span style={{ fontWeight: "bold" }}> {siparis.malzemeler.join(", ")}</span>

                </p>



            </div>
            <div className="fiyat-container">
                <p>Sipariş Toplamı</p>
                <p>Seçimler: <span>{siparis.secilenlerFiyat2}₺</span></p>
                <p>Toplam: <span>{siparis.toplam}₺</span></p>
            </div>
        </div>

    )
}