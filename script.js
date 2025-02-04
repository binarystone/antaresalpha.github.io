// Add smooth scrolling for the CTA button
document.querySelector('.cta-button')?.addEventListener('click', function(e) {
    // Only prevent default if it's not a navigation button
    if (!this.getAttribute('href')) {
        e.preventDefault();
    }
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
        {
            question: "You discover an artificial butterfly in your garden. Its wings are damaged but its neural core is still functioning. What is your immediate response?",
            options: [
                "Attempt to repair its wings using available materials",
                "Leave it be, as interference might cause more harm",
                "Take it to the nearest synthetic life repair center"
            ]
        },
        {
            question: "A child shows you their favorite digital pet. It's malfunctioning and displaying signs of distress. How do you react?",
            options: [
                "Offer to help diagnose and fix the issue immediately",
                "Suggest getting a new, upgraded model instead",
                "Explain that digital beings can't feel real distress"
            ]
        },
        {
            question: "You receive an anonymous message revealing that your closest friend is a synthetic being. What are your thoughts?",
            options: [
                "Nothing changes - friendship transcends physical form",
                "Feel betrayed by the years of deception",
                "Seek verification of this information first"
            ]
        },
        {
            question: "In your dream, you can't distinguish if you're human or artificial. How does this make you feel?",
            options: [
                "Intrigued by the philosophical implications",
                "Anxious about your true nature",
                "Indifferent - dreams aren't reality"
            ]
        }
    ];

    let currentQuestion = 0;

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
            displayQuestion(currentQuestion);
        } else {
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

    function displayQuestion(index) {
        const questionContainer = document.getElementById('questionContainer');
        if (questionContainer) {
            questionContainer.innerHTML = `
                <p class="question-number">QUERY_0${index + 1}</p>
                <p class="question-text">${questions[index].question}</p>
                <div class="response-options">
                    ${questions[index].options.map((option, i) => `
                        <button class="response-btn" data-option="${i}">${option}</button>
                    `).join('')}
                </div>
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
            `;

            // Add click handlers to the new buttons
            const responseButtons = questionContainer.querySelectorAll('.response-btn');
            responseButtons.forEach(button => {
                button.addEventListener('click', () => showLoadingScreen());
            });
        }
    }

    // Initialize first question
    displayQuestion(0);

    // Update biometrics
    function updateBiometrics() {
        const pulseValue = document.getElementById('pulseValue');
        const dilationValue = document.getElementById('dilationValue');
        if (pulseValue && dilationValue) {
            pulseValue.textContent = Math.floor(Math.random() * (95 - 65) + 65);
            dilationValue.textContent = (Math.random() * (6.5 - 2.8) + 2.8).toFixed(1);
        }
    }

    setInterval(updateBiometrics, 2000);
}); 