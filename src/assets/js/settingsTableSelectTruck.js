const columns = [
  document.querySelectorAll('#myTable tr > *:nth-child(1)'),
  document.querySelectorAll('#myTable tr > *:nth-child(2)'),
  document.querySelectorAll('#myTable tr > *:nth-child(3)'),
  document.querySelectorAll('#myTable tr > *:nth-child(4)'),
  document.querySelectorAll('#myTable tr > *:nth-child(5)'),
  document.querySelectorAll('#myTable tr > *:nth-child(6)'),
  document.querySelectorAll('#myTable tr > *:nth-child(7)'),
  document.querySelectorAll('#myTable tr > *:nth-child(8)'),
  document.querySelectorAll('#myTable tr > *:nth-child(9)'),
  document.querySelectorAll('#myTable tr > *:nth-child(10)'),
  document.querySelectorAll('#myTable tr > *:nth-child(11)'),
  document.querySelectorAll('#myTable tr > *:nth-child(12)'),
  document.querySelectorAll('#myTable tr > *:nth-child(13)'),
];
const checkboxes = [
  document.getElementById('crewCheck'),
  document.getElementById('truckTypeCheck'),
  document.getElementById('unloadCheck'),
  document.getElementById('stateCheck'),
  document.getElementById('statusCheck'),
  document.getElementById('infoCheck'),
  document.getElementById('whereCheck'),
  document.getElementById('radiusCheck'),
  document.getElementById('ekmtCheck'),
  document.getElementById('adrCheck'),
  document.getElementById('gbrCheck'),
  document.getElementById('nextLoadCheck'),
  document.getElementById('inParkCheck'),
];
const bordersCheck = document.getElementById('bordersCheck');
const typeTableCheckbox = document.getElementById('typeTable');
const tablesAll = document.getElementById('myTable');
checkboxes.forEach(function (checkbox, index) {
  checkbox.addEventListener('change', function () {
    toggleColumnVisibility(index);
  });
});

bordersCheck.addEventListener('change', function () {
  applyBordersStyle(bordersCheck.checked);
});

typeTableCheckbox.addEventListener('change', handleTypeTableCheckboxChange);

document.addEventListener('DOMContentLoaded', function () {
  checkboxes.forEach(function (checkbox, index) {
    toggleColumnVisibility(index);
  });
  applyBordersStyle(bordersCheck.checked);
  if (typeTableCheckbox.checked) {
    tablesAll.classList.remove('table-sm');
  }
});

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
function applyBordersStyle(checked) {
  const cells = document.querySelectorAll('#myTable td');

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
function handleTypeTableCheckboxChange() {
  if (typeTableCheckbox.checked) {
    tablesAll.classList.add('table-sm');
  } else {
    tablesAll.classList.remove('table-sm');
  }
}
