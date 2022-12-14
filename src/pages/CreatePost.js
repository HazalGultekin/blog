// Eğer kullanıcı olarak giriş yaptıysanız sqadece 1 gönderi oluşturmanıza izin verir.

import React, { useEffect, useState } from "react"
import { addDoc, collection } from "firebase/firestore"; //addDoc , tabloya bir doc ekleme anlamına gelen bir func 
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom"; 

function CreatePost({isAuth}){
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const postsCollectionRef = collection(db, "posts"); //posts adlı koleksiyonumuza verilerimizi ekleyebiliriz
    let navigate = useNavigate();

    const createPost = async() => {//tıklandığında verileri firestore'a gönderecek ve veritabanında depolayacak
        await addDoc(postsCollectionRef, { 
            title,
            postText, 
            author: {name: auth.currentUser.displayName, id: auth.currentUser.uid },
        }); //ilk refans:hangi kolaksiyondan hangi tablodan bahsettiğini söyler
        navigate("/");
    }; 


    useEffect(() => { //kullanıcın kimliğinin doğrulanıp doğrulanmadığını kontrol ediyoruz
        if(!isAuth){
            navigate("/login");
        }
    }, []);

    return (
    <div className="createPostPage">
        <div className="cpContainer">
            <h1>Create A Post</h1>
            <div className="inputGp">
                <label>Title:</label>
                <input placeholder="Title..."
                        onChange={(event) => {
                            setTitle(event.target.value);//kullanıcıya girdiye birşey yazdığında çağırılacak olan fonk.
                        }} />
             </div>
             <div className="inputGp">
                <label>Post:</label>
                <textarea 
                    placeholder="Post..."
                    onChange={(event) => {
                        setPostText(event.target.value);
                    }}/>
             </div>
             <button onClick={createPost}>Submit Post</button>
        </div>
    </div>  
    );
}

export default CreatePost;