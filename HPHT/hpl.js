let hpht = document.getElementById('hphtInput')
let dateSub = document.getElementById('hplSubmit')
let modal = document.querySelector('.modal-body')

function toggleButtonState() {
  if (hpht.value === '') {
    dateSub.disabled = true;
  } else {
    dateSub.disabled = false;
  }
}

const today = new Date().toISOString().split('T')[0];
hpht.max = today

dateSub.addEventListener('click',()=>{
    let hpl = new Date(hpht.value)
    hpl.setDate(hpl.getDate() + 7)
    hpl.setMonth(hpl.getMonth() - 3)
    hpl.setFullYear(hpl.getFullYear() + 1)
    let formatDate = { year: 'numeric', month: 'long', day: 'numeric'}
    let formatter = new Intl.DateTimeFormat('id-ID',formatDate)
    let formatHPL = formatter.format(hpl);
    
     modal.innerHTML = 
    `
    <div class="text-center p-4 bg-light rounded shadow-sm">
        <h5 class="mb-3 text-success">Perkiraan akan lahir pada :</h5>
        <h5 class="fw-bold text-dark">${formatHPL}</h5>
        <p class="mb-1 text-muted">Hasil perhitungan HPL</p>
        <hr class="my-4">
        <h6 class="fw-semibold">
            Hari Perkiraan Lahir Anda adalah ${formatHPL}.Tetap jaga kesehatan, rutin periksa ke bidan atau dokter, dan persiapkan persalinan dengan baik. Semangat menanti si kecil lahir!
        </h6>
    </div>
    `
})

hpht.addEventListener('input', toggleButtonState);
toggleButtonState()