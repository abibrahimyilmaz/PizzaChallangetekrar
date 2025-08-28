import axios from 'axios';
import pizzalar from './pizzalar.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";

import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
export default function OrderPage() {

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


    const secilipizza = pizzalar[0]
    const ekmalzemefiyat = 5;



    const { register, handleSubmit, setValue, getValues, watch, formState: { errors } } = useForm();

    // Formdaki değerleri takip et
    const secilenMalzemeler = watch("malzemeler") || [];
    const adet = parseInt(watch("adet")) || 1;

    // Hesaplama
    const secilenlerFiyat = secilenMalzemeler.length * ekmalzemefiyat;
    const toplam = (secilipizza.fiyat + secilenlerFiyat) * adet;

    const onSubmit = (data) => {





        axios.post("https://reqres.in/api/pizza", (data), {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": `reqres-free-v1`
            }
        })
            .then((res) => {
                console.log("API cevabı:", res.data);
                toast.success("Siparişin gönderildi!");
                history.push("/SuccessPage")

            })
            .catch((err) => {
                console.error("Gönderim hatası:", err);
                toast.error("Bir hata oluştu, lütfen tekrar deneyin.");
            });

    }

    return (


        <div className="orderpage">
            <div>
                <h2 style={{ marginTop: "10px" }} >{secilipizza.name}</h2>
                <div className='baslik'>

                    <span className='fiyat'>{secilipizza.fiyat}</span>
                    <div>
                        <span className='puan'>{secilipizza.puan}</span>
                        <span className='puan'>({secilipizza.begeni})</span>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>


                <div>
                    <p>{secilipizza.aciklama} </p>

                    <div className='boyuthamur'>
                        <div className="secim">
                            <label className="zorunluLabel">Boyut Seç:</label>
                            <div className="radio-group">
                                {["Küçük", "Orta", "Büyük"].map((boyut, index) => (
                                    <div key={index}>
                                        <input
                                            type="radio"
                                            value={boyut}
                                            {...register("boyut", { required: "Boyut Seçmek Zorunlu!" })}
                                            id={`boyut-${index}`}
                                        />
                                        <label htmlFor={`boyut-${index}`}>{boyut}</label>
                                    </div>
                                ))}
                            </div>
                            {errors.boyut && <p style={{ color: "red" }}>{errors.boyut.message}</p>}
                        </div>

                        <div className="secim">
                            <label className="zorunluLabel">Hamur Seç:</label>
                            <select {...register("hamur", { required: "Hamur seçmek zorunlu" })}>
                                <option value="">Hamur Kalınlığı</option>
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
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    value={malzeme}
                                    {...register("malzemeler", {
                                        validate: (selected) => {
                                            if (!selected) return "En az 4 malzeme seçmelisiniz";
                                            if (selected.length < 4) return "En az 4 malzeme seçmelisiniz";
                                            if (selected.length > 10) return "En fazla 10 malzeme seçebilirsiniz";
                                            return true;
                                        },
                                    })}
                                    id={`malzeme-${index}`}
                                />
                                <label htmlFor={`malzeme-${index}`}>{malzeme}</label>
                            </div>
                        ))}
                    </div>
                    {errors.malzemeler && <p style={{ color: "red" }}>{errors.malzemeler.message}</p>}


                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label style={{ fontWeight: "bold", padding: "20px 0 " }}>Sipariş Notu:</label>
                    <textarea style={{

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

                        <p>Seçimler: {secilenlerFiyat}</p>
                        <p style={{ color: "red" }}>Toplam: {toplam} </p>
                        <button className="siparis-buton" type="submit">Sipariş Ver</button>
                    </div>
                </div>

            </form>
            <ToastContainer />

        </div>

    )
}