const card = document.getElementById('teacherCard');
const photoFrame = document.getElementById('photoFrame');
const photoInput = document.getElementById('photoInput');
const uploadedPhoto = document.getElementById('uploadedPhoto');
const photoPlaceholder = document.getElementById('photoPlaceholder');
const uploadOverlay = document.getElementById('uploadOverlay');

// Flip card on click (but not when uploading photo)
card.addEventListener('click', (e) => {
  if (!photoFrame.contains(e.target)) {
    card.classList.toggle('flipped');
  }
});

// Upload photo
photoFrame.addEventListener('click', (e) => {
  e.stopPropagation();
  photoInput.click();
});

photoInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      uploadedPhoto.src = evt.target.result;
      uploadedPhoto.style.display = 'block';
      photoPlaceholder.style.display = 'none';
      uploadOverlay.style.display = 'none';
    };
    reader.readAsDataURL(file);
  }
});

// Accessibility: flip with Enter or Space
card.setAttribute('tabindex', '0');
card.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    card.classList.toggle('flipped');
  }
});
