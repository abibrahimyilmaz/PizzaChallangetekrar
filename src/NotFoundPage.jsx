import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


const NotFoundPage = () => {
    const history = useHistory();

    useEffect(() => {
        toast.warn("Sayfa bulunamadı, 5 saniye içinde anasayfaya yönlendiriliyorsunuz!");

        const timer = setTimeout(() => {
            history.push("/");
        }, 5000);

        return () => clearTimeout(timer); // component unmount olduğunda timer temizlenir
    }, [history]);

    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h2>404 - Sayfa Bulunamadı</h2>
            <p>Birazdan anasayfaya yönlendirileceksiniz...</p>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>

    );
};

export default NotFoundPage;
