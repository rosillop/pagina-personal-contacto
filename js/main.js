const foto = document.querySelector('.avatar img');

if (foto) {
  const quitarFoto = () => foto.remove();

  // Caso 1: la imagen falla después de que este script ya se cargó
  foto.addEventListener('error', quitarFoto);

  // Caso 2: la imagen ya había fallado antes de que el script corriera
  if (foto.complete && foto.naturalWidth === 0) {
    quitarFoto();
  }
}