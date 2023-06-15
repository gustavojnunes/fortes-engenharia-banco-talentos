// Ao clickar no botao adicionar o botao alterna entre adicionar e adicionadoo
function adicionar(botaoId) {
    const botao = document.getElementById(botaoId);
    let adicionado = botao.textContent === "Adicionado";
  
    if (adicionado) {
      botao.textContent = "Adicionar";
    } else {
      botao.textContent = "Adicionado";
    }
  }
  
// Ao clickar no botao de atualizar a pagina recarrega
  function atualizarPagina() {
    location.reload();
  }
  