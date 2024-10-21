document.addEventListener('DOMContentLoaded', function() {
    const categorias = document.querySelectorAll('.categoria');
    
    categorias.forEach(categoria => {
        categoria.addEventListener('click', () => {
            const conteudo = categoria.querySelector('.conteudo');
            conteudo.style.display = conteudo.style.display === 'none' ? 'block' : 'none';
        });
    });
});
