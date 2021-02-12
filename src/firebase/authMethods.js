import firebase from "firebase";
import firebaseConfig from "./firebaseIndex";

export const authMethods = {
    singin: (email, password, setToken, setErrors) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(async (res) => {
                const token = await Object.entries(res.user)[5][1].b;
                await localStorage.setItem("token", token);
                setToken(token);
                window.location.replace('http://localhost:3000/funkcje/znajdz')
            })
            .catch((e) => setErrors(e));
    },
    singout: (email, password) => {},
    singup: (email, password, setToken, setErrors) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async (res) => {
                const token = await Object.entries(res.user)[5][1].b;
                await localStorage.setItem("token", token);
                setToken(token);
                window.location.replace('http://localhost:3000/logowanie')
            })
            .catch((e) => setErrors(e));
    },
};
