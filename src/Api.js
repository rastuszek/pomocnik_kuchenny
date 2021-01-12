import firebase from 'firebase'
import firebaseConfig from "./firebase/firebaseIndex";

export function getVegetables() {
    let vegetables = [];
    firebase.database().ref("vegetables").on("value", data => {
        data.forEach(veg => {
           vegetables.push(veg.val());
        })
    })
    return vegetables;
}

export function getPasta() {
    let pasta = [];
    firebase.database().ref("pasta").on("value", data => {
        data.forEach(pas => {
            pasta.push(pas.val());
        })
    })
    return pasta;
}

