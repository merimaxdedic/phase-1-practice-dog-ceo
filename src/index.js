function fetchAndDisplayBreeds() {
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breedList = document.getElementById('breedList');
        const breedFilter = document.getElementById('breedFilter');
  
        function filterBreeds(selectedLetter) {
          if (selectedLetter === 'all') {
            return Object.keys(data.message);
          }
          return Object.keys(data.message).filter(breed => breed.startsWith(selectedLetter));
        }
  
        breedFilter.addEventListener('change', function() {
          const selectedLetter = this.value;
          const filteredBreeds = filterBreeds(selectedLetter);
  
          breedList.innerHTML = ''; 
  
          filteredBreeds.forEach(breed => {
            const liElement = document.createElement('li');
            liElement.textContent = breed;
            breedList.appendChild(liElement);
          });
        });
  
        
        const allBreeds = filterBreeds('all');
        allBreeds.forEach(breed => {
          const liElement = document.createElement('li');
          liElement.textContent = breed;
          breedList.appendChild(liElement);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  document.addEventListener('DOMContentLoaded', fetchAndDisplayBreeds);