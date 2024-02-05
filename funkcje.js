function klikroz() {
    var body = document.body;
    var pinkField = document.getElementById('pinkField');

    // Zmiana płynna koloru tła całej strony na jasny różowy
    body.style.backgroundColor = 'lightpink';

    // Zmiana płynna koloru tła i tekstu pola różowego na błękitny
    pinkField.style.backgroundColor = 'lightblue';
    pinkField.style.color = 'blue';
  }

  function adjustFields() {
    // Zwiększ rozmiar różowego pola o 15px
    var pinkField = document.getElementById('pinkField');
    var currentWidth = parseInt(window.getComputedStyle(pinkField).width);
    var currentHeight = parseInt(window.getComputedStyle(pinkField).height);
    pinkField.style.width = (currentWidth + 15) + "px";
    pinkField.style.height = (currentHeight + 15) + "px";

    // Zmniejsz rozmiar czarnego pola o 15px
    var blackField = document.getElementById('blackField');
    var currentBlackWidth = parseInt(window.getComputedStyle(blackField).width);
    var currentBlackHeight = parseInt(window.getComputedStyle(blackField).height);
    blackField.style.width = (currentBlackWidth - 15) + "px";
    blackField.style.height = (currentBlackHeight - 15) + "px";

    // Sprawdź, czy czarne pole osiągnęło rozmiar 100px i usuń je, jeśli tak
    if (currentBlackWidth <= 100 || currentBlackHeight <= 100) {
      blackField.style.display = 'none';
    }

    // Zmiana pozycji czarnego pola w obrębie 250px
    var newPositionX = Math.random() * 250;
    var newPositionY = Math.random() * 250;
    blackField.style.transform = "translate(" + newPositionX + "px," + newPositionY + "px)";
  }