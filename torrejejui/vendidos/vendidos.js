import { getTasks, getTask, updateTask, updateDoc, db, doc } from "./firebase.js";
const contenedorBotones = document.querySelector(".contenedorBotones");
const pisosVendidos = document.querySelector(".pisosVendidos");
const fragment = document.createDocumentFragment();
const todos = document.querySelector(".todos")
const monoambiente = document.querySelector(".monoambiente")
const unDormitorio = document.querySelector(".unDormitorio")
const dosDormitorio = document.querySelector(".dosDormitorio")
const modal = document.querySelector(".modal")
const wait = document.querySelector(".wait")
const vender = document.querySelector(".vender")
const cancelar = document.querySelector(".cancelar")
cancelar.addEventListener("click",() => modal.close())

window.addEventListener("DOMContentLoaded", async () => {
    // descargar y crear
    contenedorBotones.innerHTML = ""
    wait.showModal()
    const querySnapshot = await getTasks();
    try {
        querySnapshot.forEach((doc) => {
            const habitaciones = pisosVendidos.content.firstElementChild.cloneNode(true);
            const input =habitaciones.querySelector("input")
            const label =habitaciones.querySelector("label")
            habitaciones.classList.add(`${doc.data().tipologia}`)
            input.type = "checkbox";
            input.dataset.id = `${doc.id}`
            input.id = `chkbox${doc.data().dpto}`;
            input.checked = doc.data().vendido;
            input.value = doc.data().dpto;
            label.htmlFor = `chkbox${doc.data().dpto}`;
            label.textContent = doc.data().dpto;
            fragment.appendChild(habitaciones);
        });
        contenedorBotones.appendChild(fragment);
    } catch (error) {
        console.log(error)
    }
    wait.close()
    // seleccionar tipologia
    const monoambienteBtns = contenedorBotones.querySelectorAll(".monoambiente")
    const unDormitorioBtns = contenedorBotones.querySelectorAll(".unDormitorio")
    const dosDormitorioBtns = contenedorBotones.querySelectorAll(".dosDormitorio")
    const input = contenedorBotones.querySelectorAll("input")
    // Filtrar tipologia
    const resetBtns = ()=>{
        monoambienteBtns.forEach(btn=> btn.classList.remove("noVer"))
        unDormitorioBtns.forEach(btn=> btn.classList.remove("noVer"))
        dosDormitorioBtns.forEach(btn=> btn.classList.remove("noVer"))
        todos.disabled = false
        monoambiente.disabled = false
        unDormitorio.disabled = false
        dosDormitorio.disabled = false
    }
    monoambiente.addEventListener("click", ()=>{
        resetBtns()
        monoambiente.disabled = true
        unDormitorioBtns.forEach(btn=> btn.classList.add("noVer"))
        dosDormitorioBtns.forEach(btn=> btn.classList.add("noVer"))
    })
    unDormitorio.addEventListener("click", ()=>{
        resetBtns()
        unDormitorio.disabled = true
        monoambienteBtns.forEach(btn=> btn.classList.add("noVer"))
        dosDormitorioBtns.forEach(btn=> btn.classList.add("noVer"))
    })
    dosDormitorio.addEventListener("click", ()=>{
        resetBtns()
        dosDormitorio.disabled = true
        monoambienteBtns.forEach(btn=> btn.classList.add("noVer"))
        unDormitorioBtns.forEach(btn=> btn.classList.add("noVer"))
    })
    todos.disabled = true
    todos.addEventListener("click", ()=>{
        resetBtns()
        todos.disabled = true
    })
    // slect click
    input.forEach(btn =>{
        btn.addEventListener("click", async(e)=>{
            e.preventDefault()
            modal.showModal()
            if(e.target.checked){
                vender.innerText = "VENDER"
                vender.addEventListener("click", async()=>{
                    wait.showModal()
                    try {
                        await updateDoc(doc(db, "tasks", e.target.dataset.id), {
                            vendido : true
                        })
                        modal.close()
                        location.reload()
                    } catch (error) {
                        console.log(error)
                    }
                })
            }else{
                vender.innerText = "NOO VENDER"
                vender.addEventListener("click", async()=>{
                    wait.showModal()
                    try {
                        await updateDoc(doc(db, "tasks", e.target.dataset.id), {
                            vendido : false
                        })
                        modal.close()
                        location.reload()
                    } catch (error) {
                        console.log(error)
                    }
                })
            }
        })
    })
});