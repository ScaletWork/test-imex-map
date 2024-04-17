document.addEventListener('DOMContentLoaded', function () {
  // Функція для створення нового блоку з текстовим полем та кнопкою видалення
  function createField() {
    // Створення нового блоку (div)
    const fieldBlock = document.createElement('div');
    fieldBlock.className = 'field-block m-2';

    // Створення нового текстового поля
    const textField = document.createElement('input');
    textField.type = 'text';
    textField.className = 'text-field';

    // Створення іконки видалення
    const deleteIcon = document.createElement('span');
    deleteIcon.className = 'delete-icon';
    deleteIcon.title = 'Видалити';

    // Створення SVG елементу та встановлення його вмісту
    const svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
        </svg>
        `;

    // Перетворення SVG рядка в DOM-елемент та додавання його до span
    const parser = new DOMParser();
    const svgElement = parser
      .parseFromString(svgContent, 'image/svg+xml')
      .querySelector('svg');
    deleteIcon.appendChild(svgElement);

    // Додавання текстового поля та іконки видалення до блоку
    fieldBlock.appendChild(textField);
    fieldBlock.appendChild(deleteIcon);

    // Знаходження батьківського блоку
    const parentBlock = this.closest('.coment-btn');

    // Вставляємо новий блок перед батьківським блоком
    // parentBlock.parentNode.insertBefore(fieldBlock, parentBlock);
    parentBlock.insertAdjacentElement('afterend', fieldBlock);
    // Обробник події для кнопки видалення
    deleteIcon.addEventListener('click', function () {
      fieldBlock.remove();
    });
  }

  // Обробник події для кнопок "Додати"
  const commentBtns = document.querySelectorAll('.coment-btn button');
  commentBtns.forEach(function (btn) {
    btn.addEventListener('click', createField);
  });
});
