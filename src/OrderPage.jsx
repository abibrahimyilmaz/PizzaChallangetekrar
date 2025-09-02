import axios from 'axios';
import pizzalar from './pizzalar.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";

import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
export default function OrderPage({ setSiparis }) {

    const history = useHistory();

    const malzemeler = [
        "Mozzarella",
        "Sucuk",
        "Mantar",
        "Biber",
        "Soğan",
        "Zeytin",
        "Domates",
        "Jambon",
        "Ananas",
        "Kapari",
        "Sosis",
        "Tavuk",
        "Rokfor",
        "Mısır",
        "Biberiye"
    ];

    const formatTL = (sayi) => {
        return `${sayi.toFixed(2).replace(".", ",")}₺`;
    };

    const secilipizza = pizzalar[0]
    const ekmalzemefiyat = 5;



    const { register, handleSubmit, setValue, getValues, watch, formState: { errors, isValid } } = useForm({
        mode: "onChange"
    });

    // Formdaki değerleri takip et
    const secilenMalzemeler = watch("malzemeler") || [];
    const adet = parseInt(watch("adet")) || 1;

    // Hesaplama

    const secilenlerFiyat = secilenMalzemeler.length * ekmalzemefiyat;
    const secilenlerFiyat2 = formatTL(secilenMalzemeler.length * ekmalzemefiyat);
    const toplam = formatTL((secilipizza.fiyat + secilenlerFiyat) * adet);

    const onSubmit = (data) => {
        const payload = {
            ...data,
            secilenlerFiyat2,
            toplam,
            pizzaIsmi: secilipizza.name
        };





        axios.post("https://reqres.in/api/pizza", payload, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": `reqres-free-v1`
            }
        })
            .then(res => {
                setSiparis({ ...res.data, ...payload })

                console.log(res.data);
                history.push("/SuccessPage");
            })
            .catch((err) => {
                console.error("Gönderim hatası:", err);
                toast.error("Bir hata oluştu, lütfen tekrar deneyin.");
            });

    }

    return (


        <div className="orderpage">

            <div style={{ backgroundColor: "#FAF7F2", maxWidth: "100%" }}>

                <img src='pictures/form-banner.png' alt='Form Banner' />
                <nav className="breadcrumb">
                    <a href="/">Anasayfa</a>
                    <span>/</span>
                    <span>Sipariş Oluştur</span>
                </nav>

                <h2 style={{ marginTop: "10px" }} >{secilipizza.name}</h2>
                <div className='baslik'>

                    <span className='fiyat'>{secilipizza.fiyat}</span>
                    <div>
                        <span className='puan'>{secilipizza.puan}</span>
                        <span className='puan'>({secilipizza.begeni})</span>
                    </div>

                </div>
                <p>{secilipizza.aciklama} </p>

            </div>

            <form onSubmit={handleSubmit(onSubmit)}>


                <div>


                    <div className='boyuthamur'>
                        <div className="secim">
                            <label className="zorunluLabel">Boyut Seç:</label>
                            <div style={{ display: "flex", flexDirection: "row" }} className="radio-group">
                                {["S", "M", "L"].map((boyut, index) => (
                                    <label key={index} className="radio-label">
                                        <input
                                            type="radio"
                                            value={boyut}
                                            {...register("boyut", { required: "Boyut Seçmek Zorunlu!" })}
                                        />
                                        <span className="radio-text">{boyut}</span>
                                    </label>
                                ))}
                            </div>

                            {errors.boyut && <p style={{ color: "red" }}>{errors.boyut.message}</p>}
                        </div>

                        <div className="secim">
                            <label className="zorunluLabel">Hamur Seç:</label>
                            <select className='hamurselect' {...register("hamur", { required: "Hamur seçmek zorunlu" })}>
                                <option value="">-- Hamur Kalınlığı Seç --</option>
                                <option value="ince">İnce</option>
                                <option value="Süper ince">Süper İnce</option>
                                <option value="Kalın">Kalın</option>
                            </select>
                            {errors.hamur && <p style={{ color: "red" }}>{errors.hamur.message}</p>}
                        </div>

                    </div>


                    <label className="label">Ek Malzemeler</label>

                    <p style={{ margin: "10px auto" }} >En fazla 10 en az 4 malzeme seçebilirsiniz. {ekmalzemefiyat}₺</p>
                    <div className="checkbox-group">
                        {malzemeler?.map((malzeme, index) => (
                            <label key={index} className="checkbox-label" htmlFor={`malzeme-${index}`}>
                                <input
                                    type="checkbox"
                                    id={`malzeme-${index}`}
                                    value={malzeme}
                                    {...register("malzemeler", {
                                        validate: (selected) => {
                                            if (!selected || selected.length < 4) {
                                                return "En az 4 malzeme seçmelisiniz";
                                            }
                                            if (selected.length > 10) {
                                                return "En fazla 10 malzeme seçebilirsiniz";
                                            }
                                            return true;
                                        },
                                    })}
                                />
                                <span className="checkmark"></span>
                                {malzeme}
                            </label>
                        ))}
                    </div>
                    {errors.malzemeler && (
                        <p style={{ color: "red" }}>{errors.malzemeler.message}</p>
                    )}





                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label style={{ fontWeight: "bold", padding: "10px 0px" }} >İsim</label>
                    <input style={{ backgroundColor: "#FAF7F2", height: "35px" }}
                        type="text"
                        {...register("isim", {
                            required: "İsim Zorunlu",
                            minLength: {
                                value: 3,
                                message: "İsim en az 3 karakter olmalı",
                            },
                        })}
                        placeholder="Lütfen İsminizi Giriniz"
                    />
                    {errors.isim && <p style={{ color: "red" }}>{errors.isim.message}</p>}
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label style={{ fontWeight: "bold", padding: "20px 0 " }}>Sipariş Notu</label>
                    <textarea style={{
                        backgroundColor: "#FAF7F2",
                        padding: "10px 0"
                    }}
                        {...register("not")}
                        placeholder="Siparişine eklemek istediğin bir not var mı?"
                        rows={3}
                    ></textarea>
                </div>
                <hr style={{ margin: "5px 0" }}></hr>




                <div className='form-row' >
                    <div>
                        <label>Adet:</label>

                        <div className="qty">
                            <button
                                type="button"
                                className="qty-btn"
                                onClick={() => setValue("adet", Math.max(1, Number(getValues("adet") || 1) - 1))}
                            >
                                –
                            </button>

                            <input
                                type="number"
                                defaultValue={1}
                                {...register("adet", {
                                    required: "Adet gerekli",
                                    min: { value: 1, message: "Minimum 1 adet" },
                                })}
                                className="qty-input"
                            />

                            <button
                                type="button"
                                className="qty-btn"
                                onClick={() => setValue("adet", Number(getValues("adet") || 1) + 1)}
                            >
                                +
                            </button>
                        </div>

                        {errors.adet && <p>{errors.adet.message}</p>}
                    </div>
                    <div className="form-group">
                        <h4>Sipariş Toplamı</h4>

                        <p>Seçimler: {secilenlerFiyat2}</p>
                        <p style={{ color: "red" }}>Toplam: {toplam} </p>
                        <button className="siparis-buton" type="submit" disabled={!isValid}>Sipariş Ver</button>
                    </div>
                </div>

            </form>
            <ToastContainer />

        </div>

    )
}