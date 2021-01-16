import firebase from 'firebase'
import firebaseConfig from "./firebase/firebaseIndex";

export async function getVegetables() {
    let vegetables = [];
    let data = await firebase.database().ref("vegetables").on("value", data => {
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

export function getVarious() {
    let various = [];
    firebase.database().ref("other").on("value", data => {
        data.forEach(vario => {
            various.push(vario.val());
        })
    })
    return various;
}

export function getRecipes() {
    let recipes = [];
    firebase.database().ref("recipes").on("value", data => {
        data.forEach(recipe => {
            recipes.push(recipe.val());
        })
    })
    return recipes;
}


