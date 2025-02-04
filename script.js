// Add smooth scrolling for the CTA button
document.querySelector('.cta-button')?.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('CTA button clicked!');
});

// Add a simple animation when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = 0;
        setTimeout(() => {
            hero.style.transition = 'opacity 1s ease-in-out';
            hero.style.opacity = 1;
        }, 100);
    }

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
        if (pulseValue && dilationValue) {
            pulseValue.textContent = Math.floor(Math.random() * (95 - 65) + 65);
            dilationValue.textContent = (Math.random() * (6.5 - 2.8) + 2.8).toFixed(1);
        }
    }

    setInterval(updateBiometrics, 2000);

    function showLoadingScreen() {
        const loadingHTML = `
            <div class="loading-screen">
                <div class="loading-header">
                    <h2>PROCESSING NEURAL RESPONSE</h2>
                    <div class="loading-bar">
                        <div class="loading-progress"></div>
                    </div>
                </div>
                <div class="analysis-data">
                    <div class="data-stream">
                        <span class="data-text">ANALYZING EMOTIONAL PATTERNS</span>
                        <span class="data-value">[ IN PROGRESS ]</span>
                    </div>
                    <div class="data-stream">
                        <span class="data-text">QUANTUM PROCESSING</span>
                        <span class="data-value">[ ACTIVE ]</span>
                    </div>
                    <div class="data-stream">
                        <span class="data-text">NEURAL SYNC</span>
                        <span class="data-value">[ 67.3% ]</span>
                    </div>
                </div>
                <div class="data-log">
                    <p>> Initializing response analysis...</p>
                    <p>> Scanning emotional wavelengths...</p>
                    <p>> Processing linguistic patterns...</p>
                    <p>> Calculating empathy quotient...</p>
                </div>
            </div>
        `;

        const questionContainer = document.getElementById('questionContainer');
        if (questionContainer) {
            questionContainer.innerHTML = loadingHTML;

            // Simulate loading progress
            const progress = document.querySelector('.loading-progress');
            let width = 0;
            const interval = setInterval(() => {
                if (width >= 100) {
                    clearInterval(interval);
                    setTimeout(showNextQuestion, 1000);
                } else {
                    width++;
                    if (progress) progress.style.width = width + '%';
                }
            }, 30);

            // Simulate log updates
            const dataLog = document.querySelector('.data-log');
            const logMessages = [
                '> Analyzing response vectors...',
                '> Mapping neural pathways...',
                '> Correlating behavioral patterns...',
                '> Synthesizing data streams...',
                '> Compiling results...'
            ];

            logMessages.forEach((message, index) => {
                setTimeout(() => {
                    if (dataLog) {
                        dataLog.innerHTML += `<p>${message}</p>`;
                        dataLog.scrollTop = dataLog.scrollHeight;
                    }
                }, 1000 * (index + 1));
            });
        }
    }

    function showNextQuestion() {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            const questionContainer = document.getElementById('questionContainer');
            if (questionContainer) {
                questionContainer.innerHTML = `
                    <p class="question-number">QUERY_0${currentQuestion + 1}</p>
                    <p class="question-text">${questions[currentQuestion]}</p>
                    <textarea class="response-input" id="responseInput" placeholder="ENTER RESPONSE..."></textarea>
                    <div class="biometric-indicators">
                        <div class="indicator">
                            <span class="label">PULSE</span>
                            <span class="value" id="pulseValue">87</span>
                        </div>
                        <div class="indicator">
                            <span class="label">DILATION</span>
                            <span class="value" id="dilationValue">4.2</span>
                        </div>
                    </div>
                    <button class="submit-btn" id="submitResponse">PROCESS RESPONSE</button>
                `;
                // Reattach event listener to new button
                document.getElementById('submitResponse')?.addEventListener('click', handleSubmit);
            }
        } else {
            // Assessment complete
            const container = document.querySelector('.assessment-container');
            if (container) {
                container.innerHTML = `
                    <div class="assessment-header">
                        <h2>ASSESSMENT COMPLETE</h2>
                        <p class="system-text">[ANALYZING NEURAL PATTERNS]</p>
                        <div class="loading-bar">
                            <div class="loading-progress"></div>
                        </div>
                    </div>
                `;
            }
        }
    }

    function handleSubmit() {
        if (responseInput && responseInput.value.trim() === '') {
            return;
        }
        showLoadingScreen();
    }

    // Attach event listener to submit button if it exists
    if (submitBtn) {
        submitBtn.addEventListener('click', handleSubmit);
    }
}); 