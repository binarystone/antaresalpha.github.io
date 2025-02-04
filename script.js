// Add smooth scrolling for the CTA button
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    // You can add scroll behavior or other interactive features here
    console.log('CTA button clicked!');
});

// Add a simple animation when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    hero.style.opacity = 0;
    
    setTimeout(() => {
        hero.style.transition = 'opacity 1s ease-in-out';
        hero.style.opacity = 1;
    }, 100);

    const questions = [
        "You discover an artificial butterfly in your garden. Its wings are damaged but its neural core is still functioning. What is your immediate response?",
        "A child shows you their favorite digital pet. It's malfunctioning and displaying signs of distress. How do you react?",
        "You receive an anonymous message revealing that your closest friend is a synthetic being. What are your thoughts?",
        "In your dream, you can't distinguish if you're human or artificial. How does this make you feel?"
    ];

    let currentQuestion = 0;
    const questionText = document.querySelector('.question-text');
    const questionNumber = document.querySelector('.question-number');
    const responseInput = document.getElementById('responseInput');
    const submitBtn = document.getElementById('submitResponse');
    const pulseValue = document.getElementById('pulseValue');
    const dilationValue = document.getElementById('dilationValue');

    function updateBiometrics() {
        pulseValue.textContent = Math.floor(Math.random() * (95 - 65) + 65);
        dilationValue.textContent = (Math.random() * (6.5 - 2.8) + 2.8).toFixed(1);
    }

    setInterval(updateBiometrics, 2000);

    submitBtn.addEventListener('click', function() {
        if (responseInput.value.trim() === '') {
            return;
        }

        currentQuestion++;
        if (currentQuestion < questions.length) {
            questionNumber.textContent = `QUERY_0${currentQuestion + 1}`;
            questionText.textContent = questions[currentQuestion];
            responseInput.value = '';
        } else {
            // Assessment complete
            document.querySelector('.assessment-container').innerHTML = `
                <div class="assessment-header">
                    <h2>ASSESSMENT COMPLETE</h2>
                    <p class="system-text">[ANALYZING NEURAL PATTERNS]</p>
                </div>
            `;
        }
    });
}); 