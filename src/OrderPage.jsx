import axios from 'axios';
import pizzalar from './pizzalar.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./orderpage.css";


import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
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


    const ekmalzemefiyat = 5;

    const [secilipizza, setSeciliPizza] = useState(pizzalar[1]);

    const handleChange = (e) => {
        const secilenIndex = e.target.value; // select'teki index
        setSeciliPizza(pizzalar[secilenIndex]);
    };



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


        <div>


            <div className='order-ust-bolum'>


                <img src='pictures/form-banner.png' alt='Form Banner' />
                <div className='order-pizza-aciklama' >
                    <nav className="breadcrumb">
                        <a href="/">Anasayfa</a>
                        <span>/</span>
                        <span>Sipariş Oluştur</span>
                    </nav>

                    <div className='pizza-secimi'>
                        <label className='label'> Pizzanı Seç</label>
                        <select onChange={handleChange}>
                            {pizzalar.map((pizza, index) => (
                                <option key={index} value={index}>
                                    {pizza.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <h2>{secilipizza.name}</h2>


                    <div className='baslik'>
                        <span className='fiyat'>{secilipizza.fiyat}₺</span>
                        <span className='puan'>{secilipizza.puan}</span>
                        <span className='puan'>({secilipizza.begeni})</span>
                    </div>


                    <p>{secilipizza.aciklama} </p>
                </div>

            </div>
            <div className='order-alt-bolum'>
                <form onSubmit={handleSubmit(onSubmit)}>


                    <div>


                        <div className='boyuthamur'>
                            <div className="secim">
                                <label className="zorunluLabel">Boyut Seç
                                </label>
                                <div className="radio-group">
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
                                <label className="zorunluLabel">Hamur Seç </label>
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

                        <p >En fazla 10 en az 4 malzeme seçebilirsiniz. {ekmalzemefiyat}₺</p>
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

                    <div className='isim-siparis'>
                        <label className='label' >İsim</label>
                        <input className='siparis-input'
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

                    <div className='isim-siparis'>
                        <label className='label'>Sipariş Notu</label>
                        <textarea className='siparis-input'
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

                            <div className="form-row">
                                <p>Seçimler:</p>
                                <p>{secilenlerFiyat2}</p>
                            </div>

                            <div className="form-row">
                                <p>Toplam:</p>
                                <p style={{ color: "red" }}>{toplam}</p>
                            </div>

                            <button className="siparis-buton" type="submit" disabled={!isValid}>
                                Sipariş Ver
                            </button>
                        </div>
                    </div>

                </form>
            </div>



            <ToastContainer />

        </div>

    )
}