  document.addEventListener('DOMContentLoaded', function () {
    const memes = ['img/migrañaT.jpg', 'img/hipertensionT.jpg', 'img/estresT.jpg', 'img/pin.jpg'];
    let currentIndex = 0;
  
    function moveImageUp(memeImage) {
      let topPosition = 250;
  
      function animate() {
        memeImage.style.top = `-${topPosition}px`;
  
        if (topPosition > 0) {
          topPosition -= 2;
          requestAnimationFrame(animate);
        } else {
          setTimeout(() => {
            memeImage.style.top = '0';
          }, 10);
        }
      }
  
      animate();
    }
  
    function showNextMeme() {
      const memeElement = document.getElementById(`meme${currentIndex + 1}`);
      const memeImage = memeElement.querySelector('.meme-image');
  
      memeImage.style.backgroundImage = `url('${memes[currentIndex]}')`;
  
      memeImage.style.top = '0';
  
      moveImageUp(memeImage);
  
      currentIndex = (currentIndex + 1) % memes.length;
  
      if (currentIndex !== 0) {
        setTimeout(showNextMeme, 3000);
      }
    }
      showNextMeme();
  });
  