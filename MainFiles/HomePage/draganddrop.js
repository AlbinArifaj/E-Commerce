document.addEventListener('DOMContentLoaded', (event) => {
    let cards = document.querySelectorAll('.reklamat .carda');
    let sourceCard;
  
    function handleDragStart(e) {
      sourceCard = this;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.innerHTML);
    }
  
    function handleDragOver(e) {
      e.preventDefault();
      return false;
    }
  
    function handleDragEnter(e) {
      this.classList.add('over');
    }
  
    function handleDragLeave(e) {
      this.classList.remove('over');
    }
  
    function handleDrop(e) {
      e.stopPropagation();
      e.preventDefault();
  
      
      if (sourceCard !== this) {
        sourceCard.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
      }
  
      cards.forEach(function (card) {
        card.classList.remove('over');
      });
  
      return false;
    }
  


    cards.forEach(function (card) {
      card.addEventListener('dragstart', handleDragStart);
      card.addEventListener('dragover', handleDragOver);
      card.addEventListener('dragenter', handleDragEnter);
      card.addEventListener('dragleave', handleDragLeave);
      card.addEventListener('drop', handleDrop);
    });
  });
  
  