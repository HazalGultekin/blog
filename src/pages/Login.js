import React from "react";
import { auth, provider } from "../firebase-config";
import { sign } from "firebase/auth"; 
import { signInWithPopup } from "firebase/auth"; //sayfayı yeniden yönlendirmek gibi yeni bir sayfa açarak google ile oturum açmamıza izin veriyor.
import { useNavigate } from "react-router-dom";

//butona tıkladığımızda çağrılan fonksiyon pop-up'ı açar ve google hesabımızla oturum açmamıza izin verir.
function Login({setIsAuth}) {
    let navigate = useNavigate(); //ekranlar arası geçiş sağlar

    const signInWithGoogle = () => { //oturumun pop-up şeklinde açılacağını söyler
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true); //yerel depomuzda oturum açıp açmadığımızı belirleyen bir durum
            setIsAuth(true);
            navigate("/"); //popup a basınca login'den home'a yönlendirir
        });
    };
    return (
    <div className="loginPage">
        <p>Sign In With Google to Continue</p>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
    );
}

export default Login;