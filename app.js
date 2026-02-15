const loadTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showTodos(data);
    });
};

const showTodos = (todos) => {
  const showData = document.getElementById("showData");
  showData.innerHTML = "";

  todos.forEach((todo) => {
    console.log(todo);

    const todoCard = document.createElement("div");

    todoCard.innerHTML = `<div id="todo-card" class="border-solid border p-3 mx-auto h-full  rounded-xl shadow-lg ">
            <p>User ID : ${todo.userId}</p>
            <p class="${todo.completed ? "text-green-600" : "text-red-600"} font-semibold my-2">${todo.completed ? "<i class='fa-solid fa-square-check'></i>" : "<i class='fa-regular fa-square-check'></i>"} ${todo.completed ? "Completed" : "Not Completed"}</p>
            <h3 class="text-xl font-bold my-3">${todo.id}, ${todo.title}</h3>


        </div>`;
    showData.appendChild(todoCard);
  });
};
