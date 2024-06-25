$(document).ready(() => {
    setIframeAspectRatio();
})

function showImage(imageUrl) {

    const mainImage = $('#mainImage');
    mainImage.removeClass('hidden');
    const mainFrame = $('#mainFrame');
    mainFrame.addClass('hidden');

    mainImage[0].src = imageUrl;
}

function showVideo(videoId) {

    const mainImage = $('#mainImage');
    mainImage.addClass('hidden');
    const mainFrame = $('#mainFrame');
    mainFrame.removeClass('hidden');

    const videoUrl = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';

    mainFrame.prop('src', videoUrl);
}

function setIframeAspectRatio() {

    const mainFrame = $('#mainFrame');

    const aspectRatio = 16 / 9;

    mainFrame[0].style.width = '100%';
    mainFrame[0].style.height = (mainFrame[0].offsetWidth / aspectRatio) + 'px';
}

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
}); //no right click


//--------------------

const express = require('express');
const router = express.Router();
const { getPrecoDoJogo } = require('./seu-arquivo-de-banco-de-dados');

router.get('/detalhesDoJogo', async (req, res) => {
    try {
        const precoDoJogo = await getPrecoDoJogo(); // Supondo que você tenha uma função para obter o preço do jogo do banco de dados
        res.render('detalhesDoJogo', { precoDoJogo });
    } catch (error) {
        console.error('Erro ao recuperar o preço do jogo:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

module.exports = router;
