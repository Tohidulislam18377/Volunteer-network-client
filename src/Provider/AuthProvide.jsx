import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

const auth = getAuth(app)
export const AuthContact = createContext();

const AuthProvide = ({children}) => {
    const [user,setUser] = useState()
    const [loader,setLoader]= useState(true);

    const createUser = (email,password,name)=>{
        setLoader(true)
       return createUserWithEmailAndPassword(auth,email,password,name)
       
    };

    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    };

    const logOut= ()=>{
        setLoader(true)
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            // console.log(currentUser);
            setLoader(false)
        } )

        return ()=>{
            return unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        loader,
        createUser,
        loginUser,
        logOut
    }
    return (
    <AuthContact.Provider value={authInfo}>
        {children}
    </AuthContact.Provider>
    );
};

export default AuthProvide;