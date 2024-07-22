function checkAnswer(element, answer) {
    const correctAnswer = 'D';
    const options = document.querySelectorAll('.option');
    
    options.forEach(option => {
        if (option.querySelector('.letter').innerText === correctAnswer) {
            option.classList.add('correct');
        } else {
            option.classList.add('incorrect');
        }
        option.style.pointerEvents = 'none';
    });
}