document.addEventListener("DOMContentLoaded", () => {
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("sidebar");
  const themeToggleBtn = document.getElementById("themeToggle");

  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
  });

  themeToggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });

  const userAvatarButton = document.getElementById("avatar");
  const dropdownMenu = document.getElementById("dropdown");

  userAvatarButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden");
  });
});

// ### Start Article Form ###

document.addEventListener("DOMContentLoaded", () => {
  let planCount = 1; // Используется для создания уникальных имен

  document.getElementById("addPlanButton").addEventListener("click", () => {
    planCount++;
    const planBlock = document.createElement("div");
    planBlock.classList.add("plan-block", "mb-4");
    planBlock.innerHTML = `
        <input type="text" name="plan_title_${planCount}" class="border p-2 w-full mb-2" placeholder="Заголовок плана статьи №${planCount}">
        <textarea name="plan_content_${planCount}" class="border p-2 w-full" placeholder="Контент плана статьи №${planCount}"></textarea>
      `;
    document.getElementById("plans").appendChild(planBlock);
  });
});

// document.getElementById("saveButton").addEventListener("click", async () => {
//   const formData = {
//     title: document.getElementById("title").value,
//     description: document.getElementById("description").value,
//     category: document.getElementById("category").value,
//     createdate: document.getElementById("createdate").value,
//     plan: {}, // План статьи будет заполняться далее
//     img_data: null // Изображения также будут заполняться далее
//   };

//   // Заполнение данных плана статьи
//   const planBlocks = document.querySelectorAll(".plan-block");
//   let planData = Array.from(planBlocks).map(planBlock => ({
//     title: planBlock.querySelector("input").value,
//     content: planBlock.querySelector("textarea").value
//   }));

//   let planJSON = JSON.stringify(planData);

//   formData.plan = planJSON;

//   // Заполнение данных изображений
//   const imgDataInput = document.getElementById("img_data");
//   if (imgDataInput.files.length > 0) {
//     const imgDataArray = [];
//     for (const file of imgDataInput.files) {
//       const reader = new FileReader();
//       reader.readAsArrayBuffer(file);
//       reader.onload = () => {
//         const imgData = Array.from(new Uint8Array(reader.result));
//         imgDataArray.push(imgData);
//         if (imgDataArray.length === imgDataInput.files.length) {
//           formData.img_data = imgDataArray;
//           sendDataToServer(formData);
//         }
//       };
//     }
//   } else {
//     sendDataToServer(formData);
//   }
// });

// async function sendDataToServer(formData) {
//   try {
//     const form = new FormData();
//     for (const key in formData) {
//       form.append(key, formData[key]);
//     }

//     console.log(form);

//     const response = await fetch('/api/createarticles', {
//       method: 'POST',
//       body: form
//     });

//     // Обработка ответа...
//   } catch (error) {
//     console.error('Error saving article:', error);
//   }
//   console.log(formData);
// }


document.getElementById("saveButton").addEventListener("click", async () => {
  const formData = new FormData();

  const planBlocks = document.querySelectorAll(".plan-block");
  let planData = Array.from(planBlocks).map(planBlock => ({
    title: planBlock.querySelector("input").value,
    content: planBlock.querySelector("textarea").value
  }));
  formData.append('img_data', document.getElementById("img_data").files[0]); // Добавляем файл в FormData

  // Добавьте остальные поля формы в formData
  formData.append('title', document.getElementById("title").value);
  formData.append('description', document.getElementById("description").value);
  formData.append('category', document.getElementById("category").value);
  formData.append('createdate', document.getElementById("createdate").value);
  formData.append('plan', JSON.stringify(planData));
  
  // Отправляем данные на сервер
  try {
    const response = await fetch('/api/createarticles', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Article saved with ID:', data.id);
    } else {
      console.error('Failed to save article:', response.statusText);
    }
  } catch (error) {
    console.error('Error saving article:', error);
  }
});