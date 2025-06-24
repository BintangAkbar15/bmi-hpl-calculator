// Ambil semua elemen dengan class 'btn-wrapper'
const wrappers = document.querySelectorAll('.btn-wrapper');

wrappers.forEach(wrapper => {
  wrapper.addEventListener('mouseover', () => {
    // Cari elemen .info-desc di dalam wrapper ini
    const info = wrapper.querySelector('.info-desc');
    if (info) {
      info.style.display = 'block';
    }
  });
  wrapper.addEventListener('mouseout', () => {
    // Cari elemen .info-desc di dalam wrapper ini
    const info = wrapper.querySelector('.info-desc');
    if (info) {
      info.style.display = 'none';
    }
  });
});
