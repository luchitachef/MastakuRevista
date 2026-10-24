/* Búsqueda progresiva: el contenido también se lee sin JavaScript. */
const tools = document.querySelector('.search-tools');
const input = document.querySelector('#buscar');
const cards = [...document.querySelectorAll('.elemento')];
const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[’‘ʼ']/g, '').toLowerCase();
tools.hidden = false;
input.addEventListener('input', () => {
  const query = normalize(input.value.trim());
  let count = 0;
  cards.forEach(card => {
    card.hidden = !normalize(card.textContent).includes(query);
    if (!card.hidden) count++;
  });
  document.querySelector('#resultados').textContent = `${count} de 49 elementos`;
  document.querySelector('#sin-resultados').hidden = count !== 0;
});
