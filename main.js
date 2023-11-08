function updateTime() {
    const timeDisplay = document.getElementById('current-time');
    const now = new Date();
    timeDisplay.textContent = now.toLocaleTimeString();
  }
  let arrphoto = [{color:"red",srcc:"red.png"},
  {color:"black",srcc:"black.png"},
  {color:"pinck",srcc:"pinck.png"},
  {color:"white",srcc:"white.png"},
  {color:"blue",srcc:"blue.png"},
]
  function changeColor(color) {
    const image = document.getElementById('product-image');

    arrphoto.forEach(element => {
        if (color === element.color) {
            image.src = `${element.srcc}`;
        }

       });
   
  
  }
  
  function switchLanguage(lang) {
    if(lang === 'ar') {

      document.body.style.direction = 'rtl';

    } else {

      document.body.style.direction = 'ltr';

    }

  }

  document.addEventListener('DOMContentLoaded', function() {
    updateTime(); 
    setInterval(updateTime, 1000); 
  });