// Salvar todos os inputs pela ordem
function salvarSemana() {
  let valores = [];
  document.querySelectorAll("input[type='text']").forEach(input => {
    valores.push(input.value);
  });
  localStorage.setItem("semanaTreino", JSON.stringify(valores));
  alert("✅ Semana salva com sucesso!");
}

// Recuperar quando a página carregar
window.onload = function() {
  let valores = JSON.parse(localStorage.getItem("semanaTreino"));
  if (valores) {
    document.querySelectorAll("input[type='text']").forEach((input, index) => {
      input.value = valores[index];
    });
  }
};

