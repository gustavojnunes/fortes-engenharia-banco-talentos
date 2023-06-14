function adicionar(botaoId) {
    const botao = document.getElementById(botaoId);
    let adicionado = botao.textContent === "Adicionado";
  
    if (adicionado) {
      botao.textContent = "Adicionar";
    } else {
      botao.textContent = "Adicionado";
    }
  }
  