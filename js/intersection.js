const obsDr = new IntersectionObserver(
    entries => {
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                dr.classList.add("addDr")
                iz.classList.add("addDr")
                logoCirculo.classList.add("giro")
            }
        })
    },
    {
        threshold:0.9
    }
)
const drS = document.querySelectorAll(".obs")
const dr = document.querySelector(".dr")
const iz = document.querySelector(".iz")
const logoCirculo = document.querySelector(".logoCirculo")
drS.forEach(dr=>{
    obsDr.observe(dr)
})
// ----------------
const obsbottom = new IntersectionObserver(
    entries => {
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("addbottom")
            }
        })
    },
    {
        threshold:0.5
    }
)
const bottomS = document.querySelectorAll(".bottom")
bottomS.forEach(dr=>{
    obsbottom.observe(dr)
})
//-------
const obstop = new IntersectionObserver(
    entries => {
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("addtop")
            }
        })
    },
    {
        threshold:0.5
    }
)
const topS = document.querySelectorAll(".top")
topS.forEach(top=>{
    obstop.observe(top)
})