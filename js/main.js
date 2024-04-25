// Scale Config
var screenFix = document.querySelector("body");
var container_width = 1920;
// Em % (ex: 10%)
var margin = 0;

// Scale
var initScale = true;
var can_scale = true;

var resize_list;
var orient_list;

function calcScale() {
    setTimeout(() => {
        window.removeEventListener("resize", resize_list);
        window.removeEventListener("orientationchange", orient_list);
        console.log("Remove scale");
    }, 9999999)

    let pivWidth;

    pivWidth = screenFix.clientWidth / container_width;
    pivWidth = pivWidth.toFixed(3);

    let pivScale = pivWidth;
    pivScale = pivScale - margin / 100;
    console.log(`Scale ${pivWidth}`);
    pivScale > 1 ? pivScale = 1 : null
    try {
        document.querySelector('#container').style.cssText = `
        transform: scale(${pivScale});
        `
    } catch (err) {
        console.log("Scale Fail =>\n", err);
    }

    if (!initScale)
        return

    initScale = false
    setTimeout(function () {
        window.addEventListener(
            "resize",
            (resize_list = function () {
                calcScale();
            })
        );
        window.addEventListener(
            "orientationchange",
            (orient_list = function () {
                calcScale();
            })
        );
    }, 100);

}
// section-1


// frufru = lida com os sparks, retirando classe invisible e adicionando classe visivel após 3seg
document.addEventListener('DOMContentLoaded', function () {
    console.clear()
    console.log('%cFresh', 'color: #ff6699')
    calcScale()

    setTimeout(function () {
        // Seleciona todos os elementos com a classe 'sparks'
        const sparksElements = document.querySelectorAll('.sparks');

        // Itera sobre cada elemento com a classe 'sparks'
        sparksElements.forEach(function (sparksElement) {
            // Adiciona uma classe para torná-lo visível
            sparksElement.classList.add('visible');
            sparksElement.classList.remove('invisible');
        });
    }, 3000); // 3000 milissegundos = 3 segundos

    function findAllPulseClassAndRemoveClassOnClick() {
        const btns = document.querySelectorAll('.pulse')
        btns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                this.classList.remove('pulse');
            })
        })
    }
    findAllPulseClassAndRemoveClassOnClick();
});

// section-3

// caixas de click e resposta
let iconWrite = document.getElementsByClassName('icon-write')[0]
iconWrite.addEventListener('click', function () {
    let contentIconWrite = document.querySelector('.content-box-1')
    contentIconWrite.classList.remove('invisible')
    iconWrite.classList.remove('pulse')
})


let iconPerson = document.getElementsByClassName('icon-person')[0]
iconPerson.addEventListener('click', function () {
    let contentIconPerson = document.querySelector('.content-box-2')
    contentIconPerson.classList.remove('invisible')
    iconPerson.classList.remove('pulse')
})



// modal #dica b2b

let myIconsPulse = document.getElementsByClassName('pulse')
// console.log(myIconsPulse)





function downloadPDF() {
    
    var pdfURL = './assets/pdf/salesforce.pdf';
    var link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'salesforce.pdf';
    document.body.appendChild(link);

    link.click();
}


//section 12 ... videos

//btns
const btn_video1 = document.getElementById("btn-video-1")
const btn_video2 = document.getElementById("btn-video-2")

//content
const video1 = document.getElementById("video-1")
const video2 = document.getElementById("video-2")

btn_video1.addEventListener('click', function () {
    video2.classList.remove('show');
    video1.classList.add('show');
    btn_video1.classList.remove("pulse");
    this.style.backgroundColor = "#d9d9d9"
    this.style.color = "#660099"
    this.style.transition = '0.6s'
});

btn_video2.addEventListener('click', function () {
    video1.classList.remove('show');
    video2.classList.add('show');
    btn_video2.classList.remove("pulse");
    this.style.backgroundColor = "#d9d9d9"
    this.style.color = "#660099"
    this.style.transition = '0.6s'
});





// section 16 - 4 modais juntas 

//btns modal
const btnSmart = document.getElementById('btn-modal1').addEventListener('click', function () {
    this.classList.remove('pulse');
    this.style.backgroundColor = "#d9d9d9"
    this.style.color = "#660099"
    this.style.transition = '0.6s'
})

const btnVivoV = document.getElementById('btn-modal2').addEventListener('click', function () {
    this.classList.remove('pulse');
    this.style.backgroundColor = "#d9d9d9"
    this.style.color = "#660099"
    this.style.transition = '0.6s'
})
const btnPen = document.getElementById('btn-modal3').addEventListener('click', function () {
    this.classList.remove('pulse');
    this.style.backgroundColor = "#d9d9d9"
    this.style.color = "#660099"
    this.style.transition = '0.6s'
})
const btnVivoBox = document.getElementById('btn-modal4').addEventListener('click', function () {
    this.classList.remove('pulse');
    this.style.backgroundColor = "#d9d9d9"
    this.style.color = "#660099"
    this.style.transition = '0.6s'
})


// scorm region
// #region SCORM
ScormOBJ.init();