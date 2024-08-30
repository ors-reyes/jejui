import {getTasks} from './vendidos/firebase.js'
window.addEventListener("DOMContentLoaded", async () => {
    const querySnapshot = await getTasks();
    try {
        querySnapshot.forEach((doc) => {
            console.log(doc.data().dpto)
            console.log(doc.data().vendido)
        });
    } catch (error) {
        console.log(error)
    }
})