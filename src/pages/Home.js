//pages klasörü :gideceğimiz tüm sayfaların olduğu klasördür

import React, { useEffect,useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore"; //bir koleksiyonun içindeki tüm belgeleri döndürür 
import { auth, db } from "../firebase-config"

function Home({isAuth}) {
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");

    useEffect(() => { //useEffect: veritabanında bulunan bilgileri almak için firebase'e bir çağrı yapar
        const getPosts = async() => {
            const data =  await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }; 
        getPosts(); //postları alma
    });

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
    };

    return (
        <div className="homePage">
            {postLists.map((post) => {
                return (
                    <div className="post">
                        <div className="postHeader">
                            <div className="title">
                                <h1> {post.title} </h1>
                            </div>
                            <div className="deletePost">
                                {isAuth && post.author.id === auth.currentUser.uid && (
                                    <button
                                        onClick={() => {
                                        deletePost(post.id);
                                    }}
                                    >
                                        X
                                    </button>
                                )}           
                            </div>
                        </div>
                        <div className="postTextContainer"> {post.postText} </div> 
                        <h3>@{post.author.name}</h3>
                    </div>
                );
            })}
        </div>
    ); //veritabanındaki tüm gönderilerin listesine erişip,haritalarını çıkarıp onları göstericez
}

export default Home;


