// Lightbox functionality for project pages
let currentImageIndex = 0;
let images = [];

function initLightbox(imageArray) {
    images = imageArray;
}

function openLightbox(index) {
    currentImageIndex = index;
    const modal = document.getElementById('lightboxModal');
    const image = document.getElementById('lightboxImage');
    const currentIndexSpan = document.getElementById('currentImageIndex');
    const totalImagesSpan = document.getElementById('totalImages');
    
    image.src = images[index];
    currentIndexSpan.textContent = index + 1;
    totalImagesSpan.textContent = images.length;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    const image = document.getElementById('lightboxImage');
    const currentIndexSpan = document.getElementById('currentImageIndex');
    
    image.src = images[currentImageIndex];
    currentIndexSpan.textContent = currentImageIndex + 1;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('lightboxModal');
    
    if (modal) {
        // Modal dışına tıklayarak kapatma
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeLightbox();
            }
        });

        // Klavye kontrolleri
        document.addEventListener('keydown', function(e) {
            if (modal.style.display === 'block') {
                if (e.key === 'Escape') {
                    closeLightbox();
                } else if (e.key === 'ArrowLeft') {
                    changeImage(-1);
                } else if (e.key === 'ArrowRight') {
                    changeImage(1);
                }
            }
        });
    }
}); 