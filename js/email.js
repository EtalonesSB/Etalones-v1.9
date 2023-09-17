const btn = document.getElementById("button-submit");
const form = document.getElementById("form");
const anketWrapper = document.getElementById("callModal");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Отправка...";

  const serviceID = "default_service";
  const templateID = "template_cl2zyrx";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Отправить сообщение";
      closeForm(); // Вызываем функцию для закрытия формы
    },
    (err) => {
      btn.value = "Отправить сообщение";
      console.error(JSON.stringify(err));
    }
  );
});

// Функция для закрытия формы
function closeForm() {
  // Можно добавить дополнительные действия, если необходимо
  form.reset(); // Сбрасываем содержимое формы
  callModal.style.display = "none"; // Скрываем div с формой
}

/////////////////////////////////////////////////////////////////////
const btn1 = document.getElementById("button1");
const form1 = document.getElementById("form1");
const anketWrapper1 = document.getElementById("callModal1");

form1.addEventListener("submit", function (event) {
  event.preventDefault();

  btn1.value = "Отправка...";

  const serviceID1 = "service_333fybs";
  const templateID1 = "template_k4828mt";

  const selectedOptions = [];
  const selectElement = document.getElementById("profesion1");
  const options = selectElement.options;

  for (let i = 0; i < options.length; i++) {
    if (options[i].selected) {
      selectedOptions.push(options[i].textContent); // Получаем текст выбранной опции
    }
  }

  const formData = new FormData(this);
  formData.append("selectedOptions", selectedOptions.join(", "));

  emailjs.sendForm(serviceID1, templateID1, this).then(
    () => {
      btn1.value = "Отправить сообщение";
      closeForm1(); // Вызываем функцию для закрытия формы
    },
    (err) => {
      btn1.value = "Отправить сообщение";

      console.error(JSON.stringify(err));
    }
  );
});

// Функция для закрытия формы
function closeForm1() {
  // Можно добавить дополнительные действия, если необходимо
  form1.reset(); // Сбрасываем содержимое формы
  callModal1.style.display = "none"; // Скрываем div с формой
}
