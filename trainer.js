document.querySelectorAll('.trainer').forEach(trainer => {
    trainer.addEventListener('click', () => {
        const trainerName = trainer.querySelector('h2').innerText;
        alert(`More about ${trainerName}`);
    });
});
