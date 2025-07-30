// Selecionando os elementos do HTML
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Função para adicionar tarefa
function addTask() {
    const taskText = taskInput.value.trim(); // pega o texto e remove espaços extras

    if (taskText === "") {
        alert("Digite uma tarefa antes de adicionar!");
        return;
    }

    // Criar um <li> para a tarefa
    const li = document.createElement("li");
    li.textContent = taskText;

    // Criar botão de remover
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remover";
    removeBtn.className = "removeBtn";

    // Ação de remover ao clicar
    removeBtn.onclick = () => {
        taskList.removeChild(li);
    };

    // Adicionar botão dentro do <li>
    li.appendChild(removeBtn);

    // Colocar o <li> na lista
    taskList.appendChild(li);

    // Limpar o campo de input
    taskInput.value = "";
    taskInput.focus();
}

// Adiciona tarefa ao clicar no botão
addTaskBtn.addEventListener("click", addTask);

// Também adiciona ao pressionar "Enter"
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
