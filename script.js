// Set Template
const swiper = new Swiper(".swiper", {});

/*** Variables ***/
// API Key 5mUBZNSPHT1CDqipWwfRMAlWRgwim6gr
const API_KEY = '5mUBZNSPHT1CDqipWwfRMAlWRgwim6gr';
// limit
const limit = 50; 
// Get `input`
const inputField = document.querySelector('.search-input');
// Initialize or Default search query
inputField.value = '';

funny = 'tag';
// Listen to key presses
inputField.addEventListener('keyup', event => {
  
  if (event.key === 'Enter') {
    
    // Go fetch Giphy API data https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${inputField.value}&limit=${limit}
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${inputField.value}&limit=${limit}`)
      .then( response => response.json() )
      .then( gifs => {
     
      // check-check
      console.log(gifs);
      console.log(gifs.data);
      
      // Get container for data
      const videoContainer = document.querySelector('.swiper-wrapper');      
      // Loop through the array of data
      gifs.data.forEach( gif => {
        
          // template 
          const template  = `
          <div class="swiper-slide">
          <video src="${gif.images.original.mp4}" autoplay loop></video>
          </div>
          `;
        
          // append
          videoContainer.insertAdjacentHTML("afterbegin", template);
        
      });
      
      
    });
    
    // Reset value and return cursor focus -- of input field
    inputField.value = '';
    inputField.focus();
    
  }
  
});

