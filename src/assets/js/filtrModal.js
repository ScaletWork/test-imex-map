document.addEventListener('DOMContentLoaded', function () {
  // Отримуємо елементи DOM
  var showModalBtn = document.getElementById('showModalBtn');
  var modal = document.getElementById('myModal');
  var closeModal = document.querySelector('.close');
  var modalForm = document.getElementById('modalForm');

  // Показати модальне вікно при натисканні кнопки
  showModalBtn.addEventListener('click', function () {
    modal.style.display = 'block';
  });

  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Обробка події відправки форми
  modalForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Тут ви можете обробити вибрані опції, наприклад, вивести їх в консоль
    var options = [];
    var checkboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    checkboxes.forEach(function (checkbox) {
      options.push(checkbox.name);
    });

    console.log('Вибрані опції:', options);

    // Закрити модальне вікно
    modal.style.display = 'none';
  });
});
