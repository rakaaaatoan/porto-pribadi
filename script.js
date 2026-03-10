// Pilih elemen yang ingin dipantau
const textElement = document.querySelector('.typing-text');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Jika elemen masuk ke area pandang (viewport)
        if (entry.isIntersecting) {
            // Tambahkan class yang memicu animasi CSS
            entry.target.classList.add('start-typing');
            // Stop memantau kalau sudah jalan sekali (opsional)
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5 // Animasi jalan kalau 50% elemen sudah terlihat
});

observer.observe(textElement);