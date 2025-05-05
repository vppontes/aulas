async function entrou(idJogador) {

    try {
      const response = await fetch('https://api.cartola.globo.com/atletas/pontuados');
  
      if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
      }
  
      const data = await response.json();

      const jogador = data['100652'];
  
      if (jogador.entrou_em_campo == true) {
        return true;
      }
  
    } catch (error) {
        console.error('Erro ao consumir a API ou verificar "entrou_em_campo":', error);
        throw error;
    }
  }