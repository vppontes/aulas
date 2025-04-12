// Variável para armazenar a transição em segundos da peça ao abandoná-la em alguma grid
const pieceGridTransition = 0.2;

// Sistema de preenchimento do tabuleiro
const chessBoard = document.getElementById("chessBoard");
const boardSize = 8;
const cellSize = 64; // Tamanho das células da grade

// For para a montagem do tabuleiro xadrez
for (row = 0; row < boardSize; row++) {
  for (col = 0; col < boardSize; col++) {
    let cell = document.createElement("div");
    
    cell.classList.add("cell");

    if ((row + col) % 2 == 0) {
      cell.classList.add("white");
    } else {
      cell.classList.add("black");
    }

    chessBoard.appendChild(cell);
  }
}

// FOR para a criação das peças
let numPieces = 8;
for(i=0; i<numPieces; i++) {
  newPiece = document.createElement('div');
  newPiece.classList.add("piece");
  newPiece.classList.add("naoSelecionavel");
  newPiece.style.left = `${i*cellSize}px`
  newPiece.style.top = `512px` // Abaixo do tabuleiro

  // icone da peça dentro da div ".piece"
  let img = document.createElement('img');
  img.src = 'peao.jpg';
  newPiece.appendChild(img);

  // fillet da peça para impossibilitar a movimentação da imagem
  let pieceFillet = document.createElement('div');
  pieceFillet.classList.add("pieceFillet");
  newPiece.appendChild(pieceFillet);

  chessBoard.appendChild(newPiece);
}

// Sistema da peça
const pieces = document.querySelectorAll(".piece"); // Array retorna elementos com classe '.piece' (as peças)
var isDragging = false; // Se está segurando a peça
let offsetX, offsetY; // OFFSETS


pieces.forEach((piece, i) => {

  // Evendo acionado quando o mouse é pressionado dentro de ".piece"
  piece.addEventListener("mousedown", (e) => {
    const rect = getComputedStyle(piece);
    const oldX = rect.getPropertyValue("left").replace("px", "");
    const oldY = rect.getPropertyValue("top").replace("px", "");

    // Evento acionado quando o botão do mouse para de ser precionado em cima da '.piece'
  piece.addEventListener("mouseup", () => {
    piece.style.cursor = 'grab';
    isDragging = false;
    piecesGrabGrid(piece, oldX, oldY);
    piece.style.transition = `left ${pieceGridTransition}s, top ${pieceGridTransition}s`;

    // Voltar o Fillet ao tamanho normal
    piece.querySelector(".pieceFillet").classList.remove('bigFillet');
  });

  // Evento acionado ao mouse sair do elemento ".piece"
    piece.addEventListener("mouseleave", (e) => {
      isDragging = false;
      piece.querySelector(".pieceFillet").classList.remove('bigFillet');
      piecesGrabGrid(piece, oldX, oldY);
      piece.style.transition = `left ${pieceGridTransition}s, top ${pieceGridTransition}s`;
      piece.style.cursor = 'grab';
    });

    // Deixar a transição nula para seguir o mouse melhor
    piece.style.transition = 'none';
    // Aumentar o Fillet de tamanho
    piece.querySelector(".pieceFillet").classList.add('bigFillet');
    piece.style.cursor = 'grabbing';
    isDragging = true;

    offsetX = e.clientX - rect.getPropertyValue("left").replace("px", "");
    offsetY = e.clientY - rect.getPropertyValue("top").replace("px", "");
  });


  // Evento acionado quando o mouse se move enquanto dentro da '.piece'
  piece.addEventListener("mousemove", (e) => {
      if(isDragging) {
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        let newX = mouseX - offsetX;
        let newY = mouseY - offsetY;
        
        piece.style.left = `${newX}px`;
        piece.style.top = `${newY}px`;
      }
  })
});

// Função para grudar as peças na grid
function piecesGrabGrid(piece, oldX, oldY) {
  // Calcula as coordenadas da célula mais próxima
  const rect = getComputedStyle(piece);
  let newX = Math.round(rect.getPropertyValue("left").replace("px", "") / cellSize) * cellSize;
  let newY = Math.round(rect.getPropertyValue("top").replace("px", "") / cellSize) * cellSize;

  if(newX>=0 && newX<=448 && newY>=0 && newY<=448) {
    // Define a nova posição da peça
    piece.style.left = `${newX}px`;
    piece.style.top = `${newY}px`;
    oldX = newX;
    oldY = newY;
  }else {
    piece.style.left = `${oldX}px`;
    piece.style.top = `${oldY}px`;
  }
}