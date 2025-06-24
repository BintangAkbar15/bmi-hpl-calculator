let tb = document.getElementById('heightInput')
let bb = document.getElementById('weightInput')
let bmiSub = document.getElementById('bmiSubmit')
let modal = document.querySelector('.modal-body')
let text = document.getElementById('validation-text')
let heitext = document.getElementById('height-validation-text')

let data = [
    {
        score: 18.5,
        category: 'Underweight',
        color: 'secondary',
        msg: 'Berat badan kamu kurang dari ideal. Coba perhatikan pola makan dan konsultasikan dengan ahli gizi.'
    },
    {
        score: 24.9,
        category: 'Normal/Ideal',
        color: 'success',
        msg: 'Selamat! Berat badan kamu ideal. Pertahankan gaya hidup sehat dan tetap aktif.'
    },
    {
        score: 29.9,
        category: 'Overweight',
        color: 'warning',
        msg: 'Kamu sedikit kelebihan berat badan. Mulai atur pola makan dan rutin berolahraga yuk.'
    },
    {
        score: Infinity,
        category: 'Obesitas',
        color: 'danger',
        msg: 'Berat badan kamu berada di kategori obesitas. Sangat disarankan untuk segera memulai program hidup sehat dan konsultasi medis.'
    }
];

function toggleButtonState() {
    if (tb.value === '' || bb.value === '') {
        text.textContent = 'Tolong isi semua field diatas'
        bmiSub.disabled = true;
        
    } else if ((tb.value === "0" && bb.value === "0")||tb.value === "0") {
        text.textContent = ''
        heitext.textContent = "Isi Tinggi Badanmu"
    } else {
        heitext.textContent = ""
        text.textContent = ''
        bmiSub.disabled = false;
    }
}

tb.addEventListener("keydown", function(e) {
    if (e.key === '-' || e.key === 'Minus' || e.key === 'e') {
        e.preventDefault(); // ini yang bikin ga bisa minus
    }
});

bb.addEventListener("keydown", function(e) {
    if (e.key === '-' || e.key === 'Minus' || e.key === 'e') {
        e.preventDefault(); // ini yang bikin ga bisa minus
    }
});

function countBMI(){
    let tinggi = parseFloat(tb.value) / 100; // convert cm to meter
    let berat = parseFloat(bb.value);

    if (isNaN(tinggi) || isNaN(berat) || tinggi === 0) {
        console.log("Input tidak valid");
        return;
    }

    let bmi = berat / (tinggi * tinggi);
    return bmi.toFixed(2);
}

tb.min = 12
bb.min = 0

bmiSub.addEventListener('click',()=>{
    let result = countBMI()
    let item = data.find(item=> result <= item["score"])

    modal.innerHTML = 
    `
    <div class="text-center p-4 bg-light rounded shadow-sm">
        <h5 class="mb-3 text-success">Hasil Perhitungan BMI</h5>
        <h1 class="display-4 fw-bold text-dark">${result}</h1>
        <p class="mb-1 text-muted">Nilai BMI kamu</p>
        <hr class="my-4">
        <p class="mb-1 text-secondary">Kategori:</p>
        <h6 class="text-${item.color} fw-semibold">${ result < 40 ? item.category : 'Obesitas Ekstrem'}</h6>
        <h6 class="fw-semibold">${result < 40 ? item.msg : 'Obesitasmu sudah sangat parah, segera hubungi rumah sakit untuk terapi lebih lanjut'}</h6>
    </div>
    `
})

tb.addEventListener('input', toggleButtonState);
bb.addEventListener('input', toggleButtonState);

toggleButtonState();