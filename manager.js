document.querySelectorAll('.status-photo').forEach((item) => {
  item.addEventListener('click', function () {
    const modalImage = document.querySelector('#modalImage');
    modalImage.src = this.src;
  });
});

const driverList = document.querySelectorAll('.row-item');
const serchDriver = document.querySelector('#serchDriver');
serchDriver.addEventListener('input', (e) => {
  driverList.forEach((item) => {
    const driverNumber = item
      .querySelector('.driver-number')
      .textContent.toLowerCase();
    const driverName = item
      .querySelector('.driver-name')
      .textContent.toLowerCase();

    const trailerElement = item.querySelector('.trailer-number');
    const trailerNumber = trailerElement
      ? trailerElement.textContent.toLowerCase()
      : '';

    if (
      !driverNumber.includes(e.target.value.toLowerCase()) &&
      !trailerNumber.includes(e.target.value.toLowerCase()) &&
      !driverName.includes(e.target.value.toLowerCase())
    ) {
      item.classList.add('hide');
    } else {
      item.classList.remove('hide');
    }
  });
});

document.querySelectorAll('#nav-tab button').forEach((tab) => {
  tab.addEventListener('click', () => {
    const targetId = tab.getAttribute('data-bs-target');

    document.querySelectorAll('.tab-pane').forEach((group) => {
      group.classList.remove('active');
    });
    document.querySelectorAll(targetId).forEach((content) => {
      content.classList.add('active');
      content.classList.add('show');
    });
  });
});
