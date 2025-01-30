const sortableLists = document.querySelectorAll('.sortable-list'); // Масив списків

document.addEventListener('dragstart', (e) => {
  if (e.target.classList.contains('item')) {
    e.target.classList.add('dragging');
  }
});

document.addEventListener('dragend', (e) => {
  if (e.target.classList.contains('item')) {
    e.target.classList.remove('dragging');
  }
});

const initSortableList = (e) => {
  e.preventDefault();
  const draggingItem = document.querySelector('.dragging'); // Отримуємо поточний перетягуваний елемент
  const siblings = [
    ...e.currentTarget.querySelectorAll('.item:not(.dragging)'),
  ]; // Отримуємо лише елементи з поточного списку

  let nextSibling = siblings.find((sibling) => {
    const rect = sibling.getBoundingClientRect();
    return (
      e.clientY + window.scrollY <= rect.top + window.scrollY + rect.height / 2
    );
  });

  e.currentTarget.insertBefore(draggingItem, nextSibling);
};

sortableLists.forEach((sortableList) => {
  sortableList.addEventListener('dragover', initSortableList);
  sortableList.addEventListener('dragenter', (e) => e.preventDefault());
});
