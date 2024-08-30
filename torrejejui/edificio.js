import {getTasks} from './vendidos/firebase.js'
window.addEventListener("load", async()=>{
    const whatsapp = document.querySelector(".whatsapp")
    const edificio = document.getElementById("edificio").contentDocument
    console.log(edificio)
    const btnMonoAmbiente = edificio.querySelector(".btnMonoAmbiente")
    const btnUnDormitorio = edificio.querySelector(".btnUnDormitorio")
    const btnDosDormitorios = edificio.querySelector(".btnDosDormitorios")
    const reset = edificio.querySelector(".reset")
    const pisosBtnsMono = edificio.querySelector(".pisosBtnsMono")
    const pisosBtnsUn = edificio.querySelector(".pisosBtnsUn")
    const pisosBtnsDos = edificio.querySelector(".pisosBtnsDos")
    const hMono = edificio.querySelector(".hMono")
    const pisosB = edificio.querySelectorAll(".pisosB")
    const pisosC = edificio.querySelectorAll(".pisosC")
    const monoAmbiente = edificio.querySelectorAll(".monoAmbiente")
    const unDormitorio = edificio.querySelectorAll(".unDormitorio")
    const dosDormitorios = edificio.querySelectorAll(".dosDormitorios")
    const monoBtns = edificio.querySelectorAll(".moBtn")
    const unBtns = edificio.querySelectorAll(".unBtn")
    const doBtns = edificio.querySelectorAll(".doBtn")
    const numDpto = edificio.querySelectorAll(".numDpto")
    const miniH = edificio.querySelectorAll(".miniH")
    const miniC = edificio.querySelectorAll(".miniC")
    const miniD = edificio.querySelectorAll(".miniD")
    const eTarget = edificio.querySelectorAll(".eTarget")
    let departamentoNumero = 0
    const modal = document.querySelector(".modal")
    const strong = modal.querySelector("strong")
    const cerrar = document.querySelector(".cerrar")

    const querySnapshot = await getTasks();
    try {
        querySnapshot.forEach((doc) => {
            eTarget.forEach(eTar=>{
                if(eTar.classList.value.includes(doc.data().dpto)){
                    if(doc.data().vendido){
                        eTar.style.fill = "red"
                        eTar.style.pointerEvents = "none"
                    }
                }
            })
        });
    } catch (error) {
        console.log(error)
    }
    
    cerrar.addEventListener("click", ()=>{
        // modal.close()
        modal.style.display="none"
    })
    let click0 = true
    const btnReset = ()=>{
        pisosB.forEach(piso=>piso.classList.remove("dtosEntrada"))
        pisosB.forEach(piso=>piso.classList.remove("dtosSalida"))
        pisosC.forEach(piso=>piso.classList.remove("dtosEntrada"))
        pisosC.forEach(piso=>piso.classList.remove("dtosSalida"))
        btnMonoAmbiente.classList.remove("disabled")
        btnUnDormitorio.classList.remove("disabled")
        btnDosDormitorios.classList.remove("disabled")
        monoAmbiente.forEach(habitaciones=>habitaciones.classList.remove("habitacionesActivas"))
        unDormitorio.forEach(habitaciones=>habitaciones.classList.remove("habitacionesActivas"))
        dosDormitorios.forEach(habitaciones=>habitaciones.classList.remove("habitacionesActivas"))
        btnUnDormitorio.classList.remove("moverBtns")
        btnDosDormitorios.classList.remove("moverBtns")
        pisosBtnsMono.classList.remove("display")
        pisosBtnsUn.classList.remove("display")
        btnUnDormitorio.classList.remove("regresarBtns")
        btnDosDormitorios.classList.remove("regresarBtns")
        pisosBtnsDos.classList.remove("display")
        monoBtns.forEach(btn => btn.classList.remove("disabled"))
        unBtns.forEach(btn => btn.classList.remove("disabled"))
        doBtns.forEach(btn => btn.classList.remove("disabled"))
        numDpto.forEach(num=>num.classList.remove("mostrar"))
        hMono.classList.remove("display")
        miniH.forEach(hab=>hab.classList.remove("display2"))
        miniC.forEach(hab=>hab.classList.remove("display2"))
        miniD.forEach(hab=>hab.classList.remove("display2"))
    }
    const btnMono = ()=>{
        btnReset()
        btnMonoAmbiente.classList.add("disabled")
        pisosC.forEach(piso=>piso.classList.add("dtosSalida"))
        pisosB.forEach(piso=>piso.classList.add("dtosEntrada"))
        monoAmbiente.forEach(habitaciones=>{
            habitaciones.classList.add("habitacionesActivas")
        })

        // 
        btnUnDormitorio.classList.add("moverBtns")
        btnDosDormitorios.classList.add("moverBtns")
        pisosBtnsMono.classList.add("display")
    }
    const btnUn = ()=>{
        btnReset()
        btnUnDormitorio.classList.add("disabled")
        pisosC.forEach(piso=>piso.classList.add("dtosSalida"))
        pisosB.forEach(piso=>piso.classList.add("dtosEntrada"))
        unDormitorio.forEach(habitaciones=>habitaciones.classList.add("habitacionesActivas"))
        // 
        btnDosDormitorios.classList.add("moverBtns")
        btnUnDormitorio.classList.add("regresarBtns")
        pisosBtnsUn.classList.add("display")
    }
    const btnDos = ()=>{
        btnReset()
        btnDosDormitorios.classList.add("disabled")
        pisosB.forEach(piso=>piso.classList.add("dtosSalida"))
        pisosC.forEach(piso=>piso.classList.add("dtosEntrada"))
        dosDormitorios.forEach(habitaciones=>habitaciones.classList.add("habitacionesActivas"))
        // 
        btnUnDormitorio.classList.add("regresarBtns")
        btnDosDormitorios.classList.add("regresarBtns")
        pisosBtnsDos.classList.add("display")
    }
    // select pisos
    const monoBtnClick = ()=>{
        monoBtns.forEach(btn=>{
            btn.addEventListener("click", ()=>{
                monoBtns.forEach(btn => btn.classList.remove("disabled"))
                let match = ""
                match = btn.classList.value.slice(6, 12)
                numDpto.forEach(num=>{
                    if(num.classList.value.includes(match)){
                        if(num.parentNode.classList.value.includes("monoAmbiente")){
                            num.classList.add("mostrar")
                            hMono.classList.add("display")
                        }
                    }else{
                        num.classList.remove("mostrar")
                    }
                })
                pisosB.forEach(piso=>{
                    if(piso.classList.value.includes(match)){
                        piso.classList.add("dtosEntrada")
                        piso.classList.remove("dtosSalida")
                        btn.classList.add("disabled")
                    }else{
                        piso.classList.add("dtosSalida")
                    }
                })
                miniH.forEach(hab=>{
                    if(hab.classList.value.includes(match)){
                        hab.classList.add("display2")
                        const haSele =  edificio.querySelectorAll(".eTarget")
                        haSele.forEach(click=>{
                            click.addEventListener("click", (e)=>{
                                const result = (e.target.classList.value.length)- 3
                                const result2 = (e.target.classList.value.length)
                                departamentoNumero = e.target.classList.value.substring(result, result2)
                                strong.innerText  = departamentoNumero
                                // modal.showModal()
                                modal.style.display="block"
                            })
                        })
                    }else{
                        hab.classList.remove("display2")
                    }
                })
            })
        })
    }
    const unBtnClick = ()=>{
        unBtns.forEach(btn=>{
            btn.addEventListener("click", ()=>{
                unBtns.forEach(btn => btn.classList.remove("disabled"))
                let match = ""
                match = btn.classList.value.slice(6, 12)
                numDpto.forEach(num=>{
                    if(num.classList.value.includes(match)){
                        if(num.parentNode.classList.value.includes("unDormitorio")){
                            num.classList.add("mostrar")
                            hMono.classList.add("display")
                        }
                    }else{
                        num.classList.remove("mostrar")
                    }
                })
                pisosB.forEach(piso=>{
                    if(piso.classList.value.includes(match)){
                        piso.classList.add("dtosEntrada")
                        piso.classList.remove("dtosSalida")
                        btn.classList.add("disabled")
                    }else{
                        piso.classList.add("dtosSalida")
                    }
                })
                miniC.forEach(hab=>{
                    if(hab.classList.value.includes(match)){
                        hab.classList.add("display2")
                        const haSele =  edificio.querySelectorAll(".eTarget")
                        haSele.forEach(click=>{
                            click.addEventListener("click", (e)=>{
                                const result = (e.target.classList.value.length)- 3
                                const result2 = (e.target.classList.value.length)
                                departamentoNumero = e.target.classList.value.substring(result, result2)
                                strong.innerText  = departamentoNumero
                                // modal.showModal()
                                modal.style.display="block"
                            })
                        })
                    }else{
                        hab.classList.remove("display2")
                    }
                })
            })
        })
    }
    const doBtnClick = ()=>{
        doBtns.forEach(btn=>{
            btn.addEventListener("click", ()=>{
                doBtns.forEach(btn => btn.classList.remove("disabled"))
                let match = ""
                match = btn.classList.value.slice(6, 12)
                numDpto.forEach(num=>{
                    if(num.classList.value.includes(match)){
                        if(num.parentNode.classList.value.includes("dosDormitorios")){
                            num.classList.add("mostrar")
                            hMono.classList.add("display")
                        }
                    }else{
                        num.classList.remove("mostrar")
                    }
                })
                pisosC.forEach(piso=>{
                    if(piso.classList.value.includes(match)){
                        piso.classList.add("dtosEntrada")
                        piso.classList.remove("dtosSalida")
                        btn.classList.add("disabled")
                    }else{
                        piso.classList.add("dtosSalida")
                    }
                })
                miniD.forEach(hab=>{
                    if(hab.classList.value.includes(match)){
                        hab.classList.add("display2")
                        const haSele =  edificio.querySelectorAll(".eTarget")
                        haSele.forEach(click=>{
                            click.addEventListener("click", (e)=>{
                                const result = (e.target.classList.value.length)- 4
                                const result2 = (e.target.classList.value.length)
                                departamentoNumero = e.target.classList.value.substring(result, result2)
                                strong.innerText  = departamentoNumero
                                // modal.showModal()
                                modal.style.display="block"
                            })
                        })
                    }else{
                        hab.classList.remove("display2")
                    }
                })
            })
        })
    }
    // 
    btnMonoAmbiente.addEventListener("click", ()=>{
        btnMono()
        !click0 ? null : pisosC.forEach(piso=>piso.classList.remove("dtosSalida"))
        monoBtnClick()
    })
    btnUnDormitorio.addEventListener("click", ()=>{
        btnUn()
        !click0 ? null : pisosC.forEach(piso=>piso.classList.remove("dtosSalida"))
        unBtnClick()
    })
    btnDosDormitorios.addEventListener("click", ()=>{
        btnDos()
        !click0 ? null : pisosB.forEach(piso=>piso.classList.remove("dtosSalida"))
        click0=false
        doBtnClick()
    })
    reset.addEventListener("click", ()=>{
        btnReset()
        click0=true
    })




    // monoAmbiente.forEach(habitaciones=>{
    //     if(habitaciones.classList.value.includes("101")){
    //         habitaciones.classList.remove("habitacionesActivas")
    //         habitaciones.classList.add("vendido")
    //         console.log(habitaciones)
    //     }
    // })
    // unDormitorio.forEach(habitaciones=>{
    //     if(habitaciones.classList.value.includes("102")){
    //         habitaciones.classList.remove("habitacionesActivas")
    //         habitaciones.classList.add("vendido")
    //         console.log(habitaciones)
    //     }
    // })

    whatsapp.addEventListener("click", (e)=>{
        e.preventDefault()
        var phonenumber = "+595981751986";
    
        var name = document.querySelector(".name").value;
    
        var url = "https://wa.me/" + phonenumber + "?text="
        +"Mi nombre es :  "+name+"%0a"
        +"Me podrian enviar más información sobre el departamento N°: "+departamentoNumero+" %0a"
        +"%0a"
        +"Gracias";
        window.open(url, '_blank').focus();
        modal.style.display="none"
        btnReset()
        // location.reload();
    })
})