function toggleLike(element) {
    element.classList.toggle('liked');
    if (element.classList.contains('liked')) {
      element.textContent = '❤️'; // Filled heart
    } else {
      element.textContent = '🤍'; // Empty heart
    }
  }