const radioButtonsFs = document.querySelectorAll(
  'input[type="radio"][name="font-size"]'
);
const radioButtonsFw = document.querySelectorAll(
  'input[type="radio"][name="font-weight"]'
);

const content = document.querySelectorAll('.container-fluid');
const backgroundsElements = document.querySelectorAll('.background');
const backgroundVariants = document.getElementsByName('background-variant');

// Додаємо обробник подій для кожної радіокнопки розміру шрифту
radioButtonsFs.forEach(function (radioButton) {
  radioButton.addEventListener('change', function () {
    changeFontSizeStyle(radioButton.value);
  });
});

// Додаємо обробник подій для кожної радіокнопки насиченості шрифту
radioButtonsFw.forEach(function (radioButton) {
  radioButton.addEventListener('change', function () {
    changeFontWeightStyle(radioButton.value);
  });
});

//обробка подій при завантажені
document.addEventListener('DOMContentLoaded', function () {
  // Перевіряємо, яка радіокнопка перевірена при завантаженні сторінки
  radioButtonsFs.forEach(function (radioButton) {
    if (radioButton.checked) {
      // Додаємо відповідний клас до всіх <tbody>
      content.forEach(function (pageContent) {
        pageContent.classList.add(radioButton.value);
      });
    }
  });
  radioButtonsFw.forEach(function (radioButton) {
    if (radioButton.checked) {
      // Додаємо відповідний клас до всіх <tbody>
      content.forEach(function (pageContent) {
        pageContent.classList.add(radioButton.value);
      });
    }
  });
  applyInitialBackgroundClass();
});

// Додаємо обробник подій для радіокнопок вибору фону
backgroundVariants.forEach(function (radio) {
  radio.addEventListener('change', applySelectedBackgroundClass);
});

function changeFontSizeStyle(value) {
  // const content = document.querySelectorAll('tbody');
  content.forEach(function (pageContent) {
    pageContent.classList.remove('fs-2', 'fs-3', 'fs-4', 'fs-5', 'fs-6');
    pageContent.classList.add(value);
  });
}

function changeFontWeightStyle(value) {
  content.forEach(function (pageContent) {
    pageContent.classList.remove('fw-lighter', 'fw-normal', 'fw-bolder');
    pageContent.classList.add(value);
  });
}

function applyInitialBackgroundClass() {
  backgroundVariants.forEach(function (radio) {
    if (radio.checked) {
      applySelectedBackgroundClass({ target: radio });
    }
  });
}
function applySelectedBackgroundClass(event) {
  backgroundsElements.forEach(function (element) {
    element.classList.remove(
      'background-blue',
      'background-green',
      'background-red',
      'background-lightgrey',
      'background-darkgrey',
      'background-brown',
      'background-violet',
      'background-default'
    );
    if (event.target.id === 'background-blue' && event.target.checked) {
      element.classList.add(event.target.id);
    } else if (event.target.id === 'background-green' && event.target.checked) {
      element.classList.add(event.target.id);
    } else if (event.target.id === 'background-red' && event.target.checked) {
      element.classList.add(event.target.id);
    } else if (
      event.target.id === 'background-lightgrey' &&
      event.target.checked
    ) {
      element.classList.add(event.target.id);
    } else if (
      event.target.id === 'background-darkgrey' &&
      event.target.checked
    ) {
      element.classList.add(event.target.id);
    } else if (event.target.id === 'background-brown' && event.target.checked) {
      element.classList.add(event.target.id);
    } else if (
      event.target.id === 'background-violet' &&
      event.target.checked
    ) {
      element.classList.add(event.target.id);
    } else if (
      event.target.id === 'background-default' &&
      event.target.checked
    ) {
      element.classList.add(event.target.id);
    }
  });
}
