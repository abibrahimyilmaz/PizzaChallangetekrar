import pizzalar from './pizzalar.json';

import { useForm } from 'react-hook-form';
export default function OrderPage() {

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


    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {





        console.log("sipariş:", data);
    }

    return (


        <div className="orderpage">
            <div>
                <h2>{secilipizza.name}</h2>
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
                        <div className="form-group">
                            <label className="zorunluLabel">Boyut Seç:</label>
                            <div className="radio-group">
                                {["küçük", "orta", "büyük"].map((boyut, index) => (
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
                        </div>

                        <div className="form-group">
                            <label className="zorunluLabel">Hamur Seç:</label>
                            <select {...register("hamur", { required: "Hamur seçmek zorunlu" })}>
                                <option value="">Hamur Seç</option>
                                <option value="ince">İnce</option>
                                <option value="Süper ince">Süper İnce</option>
                                <option value="Kalın">Kalın</option>
                            </select>
                        </div>
                    </div>


                    <label className="label">Ek Malzemeler:</label>
                    <div className="checkbox-group">
                        {malzemeler?.map((malzeme, index) => (
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    value={malzeme}
                                    {...register("malzemeler")}
                                    id={`malzeme-${index}`}
                                />
                                <label htmlFor={`malzeme-${index}`}>{malzeme}</label>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="form-group">
                    <label className='label'>Sipariş Notu:</label>
                    <textarea
                        {...register("not")}
                        placeholder="Siparişine eklemek istediğin bir not var mı?"
                        rows={4}  // yüksekliği
                    ></textarea>
                </div>

                <div className="form-group">
                    <h4>Sipariş Toplamı</h4>

                    <p>Seçimler: </p>
                    <p>Toplam: </p>
                </div>

                <div>
                    <label>Adet:</label>
                    <input
                        type="number"
                        defaultValue={1}
                        {...register("adet", {
                            required: "Adet gerekli",
                            min: { value: 1, message: "Minimum 1 adet" }
                        })}
                    />
                    {errors.adet && <p>{errors.adet.message}</p>}
                </div>
                <button type="submit">Sipariş Ver</button>
            </form>

        </div>

    )
}