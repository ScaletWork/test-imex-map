const typeTableCheckbox = document.getElementById('typeTable');
const borderDriverCheckbox = document.getElementById('borderDriver');
const tablesAll = document.querySelectorAll('table');
const tables = document.querySelectorAll('tbody');
const bordersCheck = document.getElementById('bordersCheck');
const hideBtn = document.querySelector('.hide-all');
const showBtn = document.querySelector('.show-all');
const accordion = document.querySelectorAll('.accordion-table');
// Отримання всіх стовбців
const columns = [
  document.querySelectorAll('tr > *:nth-child(1)'),
  document.querySelectorAll('tr > *:nth-child(2)'),
  document.querySelectorAll('tr > *:nth-child(3)'),
  document.querySelectorAll('tr > *:nth-child(4)'),
  document.querySelectorAll('tr > *:nth-child(5)'),
  document.querySelectorAll('tr > *:nth-child(6)'),
  document.querySelectorAll('tr > *:nth-child(7)'),
  document.querySelectorAll('tr > *:nth-child(8)'),
];
// Отримання всіх чекбоксів
const checkboxes = [
  document.getElementById('numberCheck'),
  document.getElementById('routeCheck'),
  document.getElementById('clientCheck'),
  document.getElementById('truckTypeCheck'),
  document.getElementById('managerCheck'),
  document.getElementById('infoCheck'),
  document.getElementById('crewCheck'),
  document.getElementById('comentCheck'),
];

// Додаємо обробник подій для кожного чекбоксу відносно стовбця
checkboxes.forEach(function (checkbox, index) {
  checkbox.addEventListener('change', function () {
    toggleColumnVisibility(index);
  });
});

// Додаємо обробник подій для чекбоксу типу таблиці
typeTableCheckbox.addEventListener('change', handleTypeTableCheckboxChange);

// Додаємо обробник подій для чекбоксу границь таблиці
bordersCheck.addEventListener('change', function () {
  applyBordersStyle(!bordersCheck.checked);
});

document.addEventListener('DOMContentLoaded', function () {
  checkboxes.forEach(function (checkbox, index) {
    toggleColumnVisibility(index);
  });
  borderDriverCheckbox.addEventListener('change', function () {
    if (borderDriverCheckbox.checked) {
      applyBorderDriverStyle();
    } else {
      removeBorderDriverStyle();
    }
  });
  applyBordersStyle(!bordersCheck.checked);

  if (colorCheckbox.checked) {
    toggleColor();
  }
  if (typeTableCheckbox.checked) {
    tablesAll.forEach(function (table) {
      table.classList.remove('table-sm');
    });
  }
  if (borderDriverCheckbox.checked) {
    applyBorderDriverStyle();
  }
});
const originalCellColors = Array.from(
  document.querySelectorAll('table td')
).map((cell) =>
  window.getComputedStyle(cell).getPropertyValue('background-color')
);
const originalRowColors = Array.from(document.querySelectorAll('table tr')).map(
  (row) => window.getComputedStyle(row).getPropertyValue('background-color')
);
function toggleColor() {
  const rows = document.querySelectorAll('table tr');
  const checkboxColor = document.getElementById('colorCheckbox');

  rows.forEach(function (row, rowIndex) {
    const cells = row.querySelectorAll('td');
    if (checkboxColor.checked) {
      // Apply color to first two cells if checkbox is checked
      const rowColor = originalRowColors[rowIndex];
      cells.forEach(function (cell, cellIndex) {
        if (cellIndex < 2) {
          cell.style.backgroundColor = rowColor;
        }
      });
      row.style.backgroundColor = 'inherit'; // Set row background color to white
    } else {
      // Reset color if checkbox is unchecked
      const rowColor = originalRowColors[rowIndex];
      row.style.backgroundColor = rowColor; // Reset row background color to its original value
      cells.forEach(function (cell, cellIndex) {
        if (cellIndex < 2) {
          cell.style.backgroundColor =
            originalCellColors[rowIndex * 2 + cellIndex];
        }
      });
    }
  });
}
function applyBorderDriverStyle() {
  const rows = document.querySelectorAll('table tr');

  rows.forEach(function (row, rowIndex) {
    const cells = row.querySelectorAll('td');
    cells.forEach(function (cell, cellIndex) {
      if (cellIndex === 6) {
        // Вибираємо третю комірку
        const rowColor = originalRowColors[rowIndex];
        cell.style.borderStyle = 'solid';
        cell.style.borderWidth = '2px';
        cell.style.borderColor = 'EBF1F6';
        cell.style.borderRadius = '50px';
        cell.style.backgroundColor = rowColor;
      }
    });
  });
}
function removeBorderDriverStyle() {
  const rows = document.querySelectorAll('table tr');

  rows.forEach(function (row) {
    const cells = row.querySelectorAll('td');
    cells.forEach(function (cell, cellIndex) {
      if (cellIndex === 6) {
        // Вибираємо третю комірку
        cell.style.borderStyle = '';
        cell.style.borderWidth = '';
        cell.style.borderColor = '';
        cell.style.borderRadius = '';
        cell.style.backgroundColor = '';
      }
    });
  });
}
function applyBordersStyle(checked) {
  const cells = document.querySelectorAll('td');

  if (checked) {
    cells.forEach(function (cell) {
      cell.classList.add('border', 'border-1', 'border-dark-subtle');
    });
  } else {
    cells.forEach(function (cell) {
      cell.classList.remove('border', 'border-1', 'border-dark-subtle');
    });
  }
}
function toggleColumnVisibility(index) {
  const column = columns[index];
  const checkbox = checkboxes[index];
  if (!checkbox.checked) {
    column.forEach(function (cell) {
      cell.classList.add('hidden');
    });
  } else {
    column.forEach(function (cell) {
      cell.classList.remove('hidden');
    });
  }
}
function handleTypeTableCheckboxChange() {
  if (typeTableCheckbox.checked) {
    tablesAll.forEach(function (table) {
      table.classList.remove('table-sm');
    });
  } else {
    tablesAll.forEach(function (table) {
      table.classList.add('table-sm');
    });
  }
}
hideBtn.addEventListener('click', () => {
  accordion.forEach((accordionItem) => {
    const bodyAccardeon = accordionItem.querySelector('.accordion-collapse');
    const btnAccardeon = accordionItem.querySelector('.accordion-button');
    btnAccardeon.classList.add('collapsed');
    bodyAccardeon.classList.remove('show');
    console.log(bodyAccardeon, btnAccardeon);
  });
});
showBtn.addEventListener('click', () => {
  accordion.forEach((accordionItem) => {
    const bodyAccardeon = accordionItem.querySelector('.accordion-collapse');
    const btnAccardeon = accordionItem.querySelector('.accordion-button');
    btnAccardeon.classList.remove('collapsed');
    bodyAccardeon.classList.add('show');
    console.log(bodyAccardeon, btnAccardeon);
  });
});
