import "./success.css";
export default function SuccessPage({ siparis }) {


    return (


        <div className="successpage">
            <div className="siparis-alindi">
                <h2 >lezzetin yolda</h2>
                <h1>SİPARİŞ ALINDI</h1>
            </div>
            <hr />



            <h4> {siparis.pizzaIsmi}</h4>

            <div>



                <p> <span style={{ fontWeight: "100" }}>Boyut:</span><span style={{ fontWeight: "bold" }}> {siparis.boyut} </span> </p>
                <p> <span style={{ fontWeight: "100" }}>Hamur:</span> <span style={{ fontWeight: "bold" }}>{siparis.hamur}</span> </p>
                <p><span style={{ fontWeight: "100" }}>Ek Malzemeler: </span><span style={{ fontWeight: "bold" }}> {siparis.malzemeler.join(", ")}</span>

                </p>



            </div>
            <div className="fiyat-container">
                <p className="baslik">Sipariş Toplamı</p>

                <div className="satir">
                    <p>Seçimler:</p>
                    <span>{siparis.secilenlerFiyat2}₺</span>
                </div>

                <div className="satir">
                    <p>Toplam:</p>
                    <span>{siparis.toplam}₺</span>
                </div>
            </div>
        </div>

    )
}