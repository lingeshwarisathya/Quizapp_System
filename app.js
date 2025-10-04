// Quiz Application with Simulated Python Backend Integration
class QuizApp {
    constructor() {
        this.currentUser = null;
        this.currentQuiz = null;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answers = [];
        this.timer = null;
        this.timeRemaining = 0;
        this.startTime = null;
        
        // Simulated database from the provided JSON
        // Inside constructor, replace this.quizData with the extended one
this.quizData = {
    "quiz_categories": [
        {
            "id": "programming",
            "name": "Programming & Technology",
            "description": "Test your coding knowledge",
            "difficulty": "Intermediate",
            "questions": 15,
            "timePerQuestion": 30,
            "icon": "fas fa-code"
        },
        {
            "id": "science", 
            "name": "Science & Nature",
            "description": "Explore scientific concepts",
            "difficulty": "Medium",
            "questions": 12,
            "timePerQuestion": 25,
            "icon": "fas fa-flask"
        },
        {
            "id": "general",
            "name": "General Knowledge", 
            "description": "Test your general awareness",
            "difficulty": "Easy",
            "questions": 12,
            "timePerQuestion": 20,
            "icon": "fas fa-globe"
        },
        {
            "id": "engineering",
            "name": "Engineering Basics",
            "description": "Core engineering fundamentals",
            "difficulty": "Hard",
            "questions": 10,
            "timePerQuestion": 35,
            "icon": "fas fa-cogs"
        },
        {
            "id": "history",
            "name": "History & Culture",
            "description": "Dive into historical events",
            "difficulty": "Medium",
            "questions": 10,
            "timePerQuestion": 25,
            "icon": "fas fa-landmark"
        },
        {
            "id": "finance",
            "name": "Finance & Business",
            "description": "Business and finance fundamentals",
            "difficulty": "Intermediate",
            "questions": 10,
            "timePerQuestion": 30,
            "icon": "fas fa-coins"
        }
    ],
    "sample_questions": {
        "programming": [
            { "id": 1, "question": "Which Python framework is best suited for building RESTful APIs?", "options": ["Django", "Flask", "FastAPI", "All of the above"], "correct": 3, "explanation": "All three frameworks can build APIs." },
            { "id": 2, "question": "What is the purpose of a database schema?", "options": ["Data encryption","Define data structure","User authentication","Performance optimization"], "correct": 1, "explanation": "Defines structure & constraints." },
            { "id": 3, "question": "Which technology enables real-time client-server communication?", "options": ["HTTP","WebSockets","REST API","JSON"], "correct": 1, "explanation": "WebSockets enable bidirectional comms." },
            { "id": 4, "question": "Main advantage of Python virtual environments?", "options": ["Faster execution","Isolated dependencies","Better security","Automatic testing"], "correct": 1, "explanation": "They isolate dependencies." },
            { "id": 5, "question": "Which HTTP method updates data in REST API?", "options": ["GET","POST","PUT","DELETE"], "correct": 2, "explanation": "PUT updates existing resources." },
            { "id": 6, "question": "What does OOP stand for?", "options": ["Open Object Process","Object-Oriented Programming","Optimal Operation Procedure","Order of Priority"], "correct": 1, "explanation": "OOP = Object-Oriented Programming." },
            { "id": 7, "question": "Which of these is NOT a programming language?", "options": ["Python","JavaScript","HTML","C++"], "correct": 2, "explanation": "HTML is a markup language." },
            { "id": 8, "question": "What is Big-O notation used for?", "options": ["Memory allocation","Algorithm efficiency","Syntax checking","Code formatting"], "correct": 1, "explanation": "Measures algorithm complexity." },
            { "id": 9, "question": "Which SQL command retrieves data?", "options": ["SELECT","UPDATE","INSERT","DELETE"], "correct": 0, "explanation": "SELECT fetches rows." },
            { "id": 10, "question": "Which keyword defines a function in Python?", "options": ["func","define","def","function"], "correct": 2, "explanation": "Use 'def' keyword." },
            { "id": 11, "question": "Which data structure uses FIFO?", "options": ["Stack","Queue","Tree","Graph"], "correct": 1, "explanation": "Queue = First In First Out." },
            { "id": 12, "question": "Which of these is a NoSQL DB?", "options": ["MySQL","PostgreSQL","MongoDB","SQLite"], "correct": 2, "explanation": "MongoDB is NoSQL." },
            { "id": 13, "question": "Which keyword is used for inheritance in Java?", "options": ["extends","inherits","super","childof"], "correct": 0, "explanation": "'extends' keyword used." },
            { "id": 14, "question": "Which CSS property changes text color?", "options": ["font-size","text-color","color","background"], "correct": 2, "explanation": "Use color property." },
            { "id": 15, "question": "Git is primarily used for?", "options": ["Version control","Deployment","Compilation","Security"], "correct": 0, "explanation": "Git = distributed version control." }
        ],
        "science": [
            { "id": 1,"question":"What is the chemical symbol for gold?","options":["Go","Gd","Au","Ag"],"correct":2,"explanation":"Au from Latin aurum." },
            { "id": 2,"question":"Which planet is the Red Planet?","options":["Venus","Mars","Jupiter","Mercury"],"correct":1,"explanation":"Mars looks red." },
            { "id": 3,"question":"Powerhouse of the cell?","options":["Nucleus","Mitochondria","Ribosome","Chloroplast"],"correct":1,"explanation":"Mitochondria make ATP." },
            { "id": 4,"question":"Gas making up 78% atmosphere?","options":["Oxygen","Carbon dioxide","Nitrogen","Argon"],"correct":2,"explanation":"Nitrogen = 78%." },
            { "id": 5,"question":"What is H2O?","options":["Oxygen","Hydrogen","Water","Acid"],"correct":2,"explanation":"H2O = water." },
            { "id": 6,"question":"Earth’s largest organ?","options":["Heart","Skin","Liver","Brain"],"correct":1,"explanation":"Skin = largest organ." },
            { "id": 7,"question":"Speed of light?","options":["3×10^8 m/s","1.5×10^8 m/s","3×10^6 m/s","1×10^7 m/s"],"correct":0,"explanation":"3×10^8 m/s." },
            { "id": 8,"question":"Which vitamin is made in sunlight?","options":["A","B12","C","D"],"correct":3,"explanation":"Vitamin D from sunlight." },
            { "id": 9,"question":"Which organ purifies blood?","options":["Liver","Heart","Kidney","Lungs"],"correct":2,"explanation":"Kidneys filter blood." },
            { "id": 10,"question":"What type of blood cells fight infection?","options":["Red cells","White cells","Platelets","Plasma"],"correct":1,"explanation":"WBC fight infections." },
            { "id": 11,"question":"Which gas do plants release in photosynthesis?","options":["Oxygen","Carbon dioxide","Nitrogen","Methane"],"correct":0,"explanation":"Oxygen is released." },
            { "id": 12,"question":"Smallest particle of an element?","options":["Molecule","Atom","Proton","Electron"],"correct":1,"explanation":"Atom = smallest unit." }
        ],
        "general": [
            { "id": 1,"question":"Which country is home to Machu Picchu?","options":["Chile","Peru","Ecuador","Colombia"],"correct":1,"explanation":"In Peru." },
            { "id": 2,"question":"Largest ocean?","options":["Atlantic","Indian","Pacific","Arctic"],"correct":2,"explanation":"Pacific is largest." },
            { "id": 3,"question":"Year WWII ended?","options":["1944","1945","1946","1947"],"correct":1,"explanation":"1945." },
            { "id": 4,"question":"Capital of Australia?","options":["Sydney","Melbourne","Canberra","Perth"],"correct":2,"explanation":"Canberra." },
            { "id": 5,"question":"Currency of Japan?","options":["Yuan","Yen","Won","Dollar"],"correct":1,"explanation":"Yen is used." },
            { "id": 6,"question":"Who wrote Hamlet?","options":["Shakespeare","Dickens","Tolstoy","Homer"],"correct":0,"explanation":"Shakespeare wrote it." },
            { "id": 7,"question":"Tallest mountain?","options":["K2","Kangchenjunga","Everest","Makalu"],"correct":2,"explanation":"Mount Everest." },
            { "id": 8,"question":"Fastest land animal?","options":["Cheetah","Horse","Tiger","Leopard"],"correct":0,"explanation":"Cheetah." },
            { "id": 9,"question":"Which language has most speakers?","options":["English","Mandarin","Spanish","Hindi"],"correct":1,"explanation":"Mandarin Chinese." },
            { "id": 10,"question":"First man on the moon?","options":["Neil Armstrong","Buzz Aldrin","Yuri Gagarin","Alan Shepard"],"correct":0,"explanation":"Neil Armstrong." },
            { "id": 11,"question":"Which is not a continent?","options":["Africa","Asia","Oceania","Russia"],"correct":3,"explanation":"Russia is a country." },
            { "id": 12,"question":"Which festival is known as Festival of Lights?","options":["Holi","Diwali","Eid","Christmas"],"correct":1,"explanation":"Diwali." }
        ],
        "engineering": [
            { "id": 1,"question":"Unit of electrical resistance?","options":["Ohm","Volt","Ampere","Watt"],"correct":0,"explanation":"Measured in Ohms." },
            { "id": 2,"question":"Formula of Ohm’s Law?","options":["V=IR","P=VI","E=mc2","F=ma"],"correct":0,"explanation":"V=IR." },
            { "id": 3,"question":"Which bridge type uses cables?","options":["Beam","Arch","Suspension","Cantilever"],"correct":2,"explanation":"Suspension bridges." },
            { "id": 4,"question":"SI unit of force?","options":["Newton","Joule","Pascal","Watt"],"correct":0,"explanation":"Newton." },
            { "id": 5,"question":"Which law governs gases?","options":["Boyle’s Law","Hooke’s Law","Newton’s Law","Archimedes"],"correct":0,"explanation":"Boyle’s law for gases." },
            { "id": 6,"question":"Device converting AC to DC?","options":["Rectifier","Amplifier","Transistor","Inverter"],"correct":0,"explanation":"Rectifier." },
            { "id": 7,"question":"Which process hardens steel?","options":["Tempering","Annealing","Quenching","Polishing"],"correct":2,"explanation":"Quenching." },
            { "id": 8,"question":"Which metal is used in aircraft?","options":["Iron","Aluminium","Copper","Zinc"],"correct":1,"explanation":"Aluminium is light." },
            { "id": 9,"question":"What is CAD used for?","options":["Accounting","Design","Assembly","Debugging"],"correct":1,"explanation":"Computer Aided Design." },
            { "id": 10,"question":"Full form of HVAC?","options":["Heat Ventilation Air Control","Heating Ventilation Air Conditioning","High Voltage AC","Hybrid Vent Air Control"],"correct":1,"explanation":"Heating Ventilation AC." }
        ],
        "history": [
            { "id": 1,"question":"Who was the first President of USA?","options":["Lincoln","Washington","Jefferson","Adams"],"correct":1,"explanation":"George Washington." },
            { "id": 2,"question":"Taj Mahal was built by?","options":["Akbar","Shah Jahan","Aurangzeb","Humayun"],"correct":1,"explanation":"By Shah Jahan." },
            { "id": 3,"question":"World War I began in?","options":["1912","1914","1916","1918"],"correct":1,"explanation":"Started 1914." },
            { "id": 4,"question":"Who discovered America?","options":["Magellan","Vasco da Gama","Columbus","Cook"],"correct":2,"explanation":"Columbus." },
            { "id": 5,"question":"Where was Indus Valley Civilization?","options":["India-Pakistan","China","Egypt","Mesopotamia"],"correct":0,"explanation":"Indus Valley." },
            { "id": 6,"question":"Who was Cleopatra?","options":["Greek Queen","Roman Queen","Egyptian Queen","Indian Queen"],"correct":2,"explanation":"Last Pharaoh of Egypt." },
            { "id": 7,"question":"When did Berlin Wall fall?","options":["1987","1989","1990","1991"],"correct":1,"explanation":"In 1989." },
            { "id": 8,"question":"Founder of Maurya dynasty?","options":["Ashoka","Bindusara","Chandragupta","Chanakya"],"correct":2,"explanation":"Chandragupta Maurya." },
            { "id": 9,"question":"Who wrote Arthashastra?","options":["Kalidasa","Chanakya","Valmiki","Tulsidas"],"correct":1,"explanation":"By Chanakya." },
            { "id": 10,"question":"World’s oldest university?","options":["Nalanda","Oxford","Harvard","Takshashila"],"correct":3,"explanation":"Takshashila." }
        ],
        "finance": [
            { "id": 1,"question":"What does GDP stand for?","options":["Gross Domestic Product","General Domestic Policy","Global Data Processing","Government Debt Percentage"],"correct":0,"explanation":"GDP = Gross Domestic Product." },
            { "id": 2,"question":"Stock market regulator in India?","options":["SEBI","RBI","NSE","BSE"],"correct":0,"explanation":"SEBI regulates stock market." },
            { "id": 3,"question":"Which is not a cryptocurrency?","options":["Bitcoin","Ethereum","Ripple","PayPal"],"correct":3,"explanation":"PayPal is not crypto." },
            { "id": 4,"question":"Banking service via mobile is?","options":["E-banking","Online Banking","M-banking","Digital Wallet"],"correct":2,"explanation":"Mobile banking." },
            { "id": 5,"question":"Which is India’s central bank?","options":["SEBI","RBI","SBI","NABARD"],"correct":1,"explanation":"RBI." },
            { "id": 6,"question":"Sensex is related to?","options":["Bombay Stock Exchange","National Stock Exchange","Forex","Commodity Market"],"correct":0,"explanation":"Sensex = BSE index." },
            { "id": 7,"question":"Which tax was replaced by GST?","options":["VAT","Service Tax","Excise Duty","All of the above"],"correct":3,"explanation":"GST replaced many taxes." },
            { "id": 8,"question":"Full form of IPO?","options":["Initial Public Offering","International Purchase Order","Instant Payment Option","Indian Portfolio Offering"],"correct":0,"explanation":"IPO = Initial Public Offering." },
            { "id": 9,"question":"Currency of UK?","options":["Dollar","Pound","Euro","Franc"],"correct":1,"explanation":"British Pound." },
            { "id": 10,"question":"Warren Buffett is famous for?","options":["Sports","Investing","Politics","Music"],"correct":1,"explanation":"Legendary investor." }
        ]
    }
};

        this.init();
    }
    
    init() {
        this.loadUserData();
        this.bindEvents();
        this.showScreen('welcome-screen');
    }
    
    // Simulated backend API calls using localStorage
    loadUserData() {
        const userData = localStorage.getItem('quizApp_userData');
        if (userData) {
            const data = JSON.parse(userData);
            this.currentUser = data.currentUser;
            if (this.currentUser) {
                this.showScreen('dashboard-screen');
                this.updateDashboard();
            }
        }
    }
    
    saveUserData() {
        const users = JSON.parse(localStorage.getItem('quizApp_users') || '[]');
        const quizHistory = JSON.parse(localStorage.getItem('quizApp_quizHistory') || '[]');
        
        const userData = {
            currentUser: this.currentUser,
            users: users,
            quizHistory: quizHistory
        };
        
        localStorage.setItem('quizApp_userData', JSON.stringify(userData));
    }
    
    bindEvents() {
        // Authentication tabs
        document.querySelectorAll('.auth-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const tabName = e.target.dataset.tab;
                this.switchAuthTab(tabName);
            });
        });
        
        // Forms
        document.getElementById('login-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });
        
        document.getElementById('register-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleRegister();
        });
        
        // Dashboard events
        document.getElementById('logout-btn').addEventListener('click', () => {
            this.handleLogout();
        });
        
        // Quiz navigation
        document.getElementById('back-to-dashboard').addEventListener('click', () => {
            this.endQuiz();
            this.showScreen('dashboard-screen');
        });
        
        document.getElementById('next-question').addEventListener('click', () => {
            this.nextQuestion();
        });
        
        // Results actions
        document.getElementById('retake-quiz').addEventListener('click', () => {
            this.startQuiz(this.currentQuiz);
        });
        
        document.getElementById('back-to-categories').addEventListener('click', () => {
            this.showScreen('dashboard-screen');
        });
        
        document.getElementById('view-dashboard').addEventListener('click', () => {
            this.showScreen('dashboard-screen');
            this.updateDashboard();
        });
    }
    
    switchAuthTab(tabName) {
        // Update tabs
        document.querySelectorAll('.auth-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        
        // Update forms
        document.querySelectorAll('.auth-form').forEach(form => {
            form.classList.remove('active');
        });
        document.getElementById(`${tabName}-form`).classList.add('active');
    }
    
    handleLogin() {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        // Simulated authentication
        const users = JSON.parse(localStorage.getItem('quizApp_users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            this.currentUser = user;
            this.saveUserData();
            this.showScreen('dashboard-screen');
            this.updateDashboard();
        } else {
            alert('Invalid credentials. Try registering first or use demo@example.com / password');
        }
    }
    
    handleRegister() {
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        
        const users = JSON.parse(localStorage.getItem('quizApp_users') || '[]');
        
        // Check if user exists
        if (users.some(u => u.email === email)) {
            alert('User with this email already exists');
            return;
        }
        
        // Create new user
        const newUser = {
            id: Date.now(),
            name: name,
            email: email,
            password: password,
            joinDate: new Date().toISOString(),
            totalScore: 0,
            quizzesTaken: 0
        };
        
        users.push(newUser);
        localStorage.setItem('quizApp_users', JSON.stringify(users));
        
        this.currentUser = newUser;
        this.saveUserData();
        this.showScreen('dashboard-screen');
        this.updateDashboard();
    }
    
    handleLogout() {
        this.currentUser = null;
        this.saveUserData();
        this.showScreen('welcome-screen');
        
        // Clear forms
        document.querySelectorAll('input').forEach(input => input.value = '');
    }
    
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.add('hidden');
        });
        document.getElementById(screenId).classList.remove('hidden');
    }
    
    updateDashboard() {
        if (!this.currentUser) return;
        
        // Update user greeting
        document.getElementById('user-greeting').textContent = `Welcome, ${this.currentUser.name}!`;
        
        // Calculate stats
        const quizHistory = JSON.parse(localStorage.getItem('quizApp_quizHistory') || '[]');
        const userQuizzes = quizHistory.filter(q => q.userId === this.currentUser.id);
        
        const totalScore = userQuizzes.reduce((sum, quiz) => sum + quiz.score, 0);
        const averageScore = userQuizzes.length > 0 ? Math.round(totalScore / userQuizzes.length) : 0;
        
        // Update stats display
        document.getElementById('total-score').textContent = totalScore;
        document.getElementById('quizzes-taken').textContent = userQuizzes.length;
        document.getElementById('average-score').textContent = `${averageScore}%`;
        
        // Render quiz categories
        this.renderQuizCategories();
        
        // Render quiz history
        this.renderQuizHistory(userQuizzes);
    }
    
    renderQuizCategories() {
        const container = document.getElementById('categories-grid');
        container.innerHTML = '';
        
        this.quizData.quiz_categories.forEach(category => {
            const categoryCard = document.createElement('div');
            categoryCard.className = 'category-card';
            categoryCard.onclick = () => this.startQuiz(category);
            
            const difficultyClass = category.difficulty.toLowerCase().replace('intermediate', 'medium');
            
            categoryCard.innerHTML = `
                <div class="category-header">
                    <div class="category-icon">
                        <i class="${category.icon || 'fas fa-question'}"></i>
                    </div>
                    <span class="difficulty-badge difficulty-${difficultyClass}">${category.difficulty}</span>
                </div>
                <div class="category-info">
                    <h3>${category.name}</h3>
                    <p>${category.description}</p>
                    <div class="category-meta">
                        <span><i class="fas fa-question-circle"></i> ${category.questions} Questions</span>
                        <span><i class="fas fa-clock"></i> ${category.timePerQuestion}s each</span>
                    </div>
                </div>
            `;
            
            container.appendChild(categoryCard);
        });
    }
    
    renderQuizHistory(quizzes) {
        const container = document.getElementById('history-container');
        
        if (quizzes.length === 0) {
            container.innerHTML = '<p class="no-history">No quizzes taken yet. Start your first quiz above!</p>';
            return;
        }
        
        container.innerHTML = '';
        
        // Show last 5 quizzes
        quizzes.slice(-5).reverse().forEach(quiz => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            
            const date = new Date(quiz.completedAt).toLocaleDateString();
            const statusClass = quiz.score >= 80 ? 'status--success' : quiz.score >= 60 ? 'status--warning' : 'status--error';
            
            historyItem.innerHTML = `
                <div class="history-info">
                    <h4>${quiz.categoryName}</h4>
                    <p>Completed on ${date} • ${quiz.timeTaken}</p>
                </div>
                <div class="history-score">
                    <span class="status ${statusClass}">${quiz.score}%</span>
                </div>
            `;
            
            container.appendChild(historyItem);
        });
    }
    
    startQuiz(category) {
        this.currentQuiz = category;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answers = [];
        this.startTime = Date.now();
        
        // Get questions for this category
        const questions = this.quizData.sample_questions[category.id] || [];
        
        // Randomize questions if there are more available than needed
        this.currentQuestions = this.shuffleArray([...questions]).slice(0, Math.min(category.questions, questions.length));
        
        this.showScreen('quiz-screen');
        this.updateQuizHeader();
        this.loadQuestion();
    }
    
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    updateQuizHeader() {
        document.getElementById('quiz-title').textContent = this.currentQuiz.name;
        document.getElementById('current-question').textContent = this.currentQuestionIndex + 1;
        document.getElementById('total-questions').textContent = this.currentQuestions.length;
        document.getElementById('current-score').textContent = this.score;
        
        // Update progress bar
        const progress = ((this.currentQuestionIndex) / this.currentQuestions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
    }
    
    loadQuestion() {
        if (this.currentQuestionIndex >= this.currentQuestions.length) {
            this.endQuiz();
            return;
        }
        
        const question = this.currentQuestions[this.currentQuestionIndex];
        
        // Update question text
        document.getElementById('question-text').textContent = question.question;
        
        // Create option buttons
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-button';
            button.textContent = option;
            button.onclick = () => this.selectOption(index, button);
            optionsContainer.appendChild(button);
        });
        
        // Reset next button
        document.getElementById('next-question').disabled = true;
        
        // Start timer
        this.startTimer();
    }
    
    startTimer() {
        this.timeRemaining = this.currentQuiz.timePerQuestion;
        document.getElementById('timer').textContent = this.timeRemaining;
        
        const timerContainer = document.querySelector('.timer-container');
        timerContainer.classList.remove('warning');
        
        this.timer = setInterval(() => {
            this.timeRemaining--;
            document.getElementById('timer').textContent = this.timeRemaining;
            
            if (this.timeRemaining <= 5) {
                timerContainer.classList.add('warning');
            }
            
            if (this.timeRemaining <= 0) {
                this.timeUp();
            }
        }, 1000);
    }
    
    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        document.querySelector('.timer-container').classList.remove('warning');
    }
    
    timeUp() {
        this.stopTimer();
        this.selectOption(-1); // -1 indicates no answer selected
    }
    
    selectOption(selectedIndex, buttonElement) {
        this.stopTimer();
        
        const question = this.currentQuestions[this.currentQuestionIndex];
        const isCorrect = selectedIndex === question.correct;
        
        // Disable all options
        document.querySelectorAll('.option-button').forEach((btn, index) => {
            btn.disabled = true;
            
            if (index === question.correct) {
                btn.classList.add('correct');
            } else if (index === selectedIndex && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
        
        // Record answer
        this.answers.push({
            questionId: question.id,
            selectedIndex: selectedIndex,
            correct: isCorrect,
            timeSpent: this.currentQuiz.timePerQuestion - this.timeRemaining
        });
        
        if (isCorrect) {
            this.score += Math.round(100 / this.currentQuestions.length);
            document.getElementById('current-score').textContent = this.score;
        }
        
        // Show feedback
        this.showFeedback(isCorrect, question.explanation);
        
        // Enable next button
        document.getElementById('next-question').disabled = false;
        
        // Auto-advance after 3 seconds
        setTimeout(() => {
            if (!document.getElementById('next-question').disabled) {
                this.nextQuestion();
            }
        }, 3000);
    }
    
    showFeedback(isCorrect, explanation) {
        const modal = document.getElementById('feedback-modal');
        const icon = document.getElementById('feedback-icon');
        const title = document.getElementById('feedback-title');
        const explanationEl = document.getElementById('feedback-explanation');
        
        icon.className = isCorrect ? 'fas fa-check-circle correct' : 'fas fa-times-circle incorrect';
        title.textContent = isCorrect ? 'Correct!' : 'Incorrect';
        explanationEl.textContent = explanation;
        
        modal.classList.remove('hidden');
        
        // Hide modal after 2.5 seconds
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 2500);
    }
    
    nextQuestion() {
        this.currentQuestionIndex++;
        this.updateQuizHeader();
        
        if (this.currentQuestionIndex >= this.currentQuestions.length) {
            this.endQuiz();
        } else {
            this.loadQuestion();
        }
    }
    
    endQuiz() {
        this.stopTimer();
        
        if (this.currentQuestionIndex < this.currentQuestions.length) {
            // Quiz was ended early
            this.showScreen('dashboard-screen');
            return;
        }
        
        // Calculate final results
        const endTime = Date.now();
        const totalTime = Math.round((endTime - this.startTime) / 1000);
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;
        const timeString = `${minutes}m ${seconds}s`;
        
        const correctAnswers = this.answers.filter(a => a.correct).length;
        const finalScore = Math.round((correctAnswers / this.currentQuestions.length) * 100);
        
        // Save quiz result
        this.saveQuizResult(finalScore, correctAnswers, timeString);
        
        // Show results
        this.showResults(finalScore, correctAnswers, timeString);
    }
    
    saveQuizResult(score, correctAnswers, timeString) {
        const quizHistory = JSON.parse(localStorage.getItem('quizApp_quizHistory') || '[]');
        
        const result = {
            id: Date.now(),
            userId: this.currentUser.id,
            categoryId: this.currentQuiz.id,
            categoryName: this.currentQuiz.name,
            score: score,
            correctAnswers: correctAnswers,
            totalQuestions: this.currentQuestions.length,
            timeTaken: timeString,
            completedAt: new Date().toISOString(),
            answers: this.answers
        };
        
        quizHistory.push(result);
        localStorage.setItem('quizApp_quizHistory', JSON.stringify(quizHistory));
        
        // Update user stats
        this.currentUser.totalScore = (this.currentUser.totalScore || 0) + score;
        this.currentUser.quizzesTaken = (this.currentUser.quizzesTaken || 0) + 1;
        
        const users = JSON.parse(localStorage.getItem('quizApp_users') || '[]');
        const userIndex = users.findIndex(u => u.id === this.currentUser.id);
        if (userIndex !== -1) {
            users[userIndex] = this.currentUser;
            localStorage.setItem('quizApp_users', JSON.stringify(users));
        }
        
        this.saveUserData();
    }
    
    showResults(finalScore, correctAnswers, timeString) {
        // Update trophy icon based on score
        const trophyIcon = document.getElementById('trophy-icon');
        if (finalScore >= 90) {
            trophyIcon.className = 'fas fa-trophy trophy-gold';
        } else if (finalScore >= 70) {
            trophyIcon.className = 'fas fa-trophy trophy-silver';
        } else {
            trophyIcon.className = 'fas fa-trophy trophy-bronze';
        }
        
        // Update results data
        document.getElementById('final-score').textContent = `${finalScore}%`;
        document.getElementById('correct-answers').textContent = `${correctAnswers}/${this.currentQuestions.length}`;
        document.getElementById('time-taken').textContent = timeString;
        document.getElementById('difficulty-level').textContent = this.currentQuiz.difficulty;
        document.getElementById('questions-answered').textContent = `${this.currentQuestions.length} of ${this.currentQuestions.length}`;
        
        // Calculate average time per question
        const avgTime = Math.round(this.answers.reduce((sum, a) => sum + a.timeSpent, 0) / this.answers.length);
        document.getElementById('avg-time').textContent = `${avgTime}s`;
        
        // Performance rating
        const ratingEl = document.getElementById('performance-rating');
        if (finalScore >= 90) {
            ratingEl.textContent = 'Excellent';
            ratingEl.className = 'status status--success';
        } else if (finalScore >= 70) {
            ratingEl.textContent = 'Good';
            ratingEl.className = 'status status--warning';
        } else {
            ratingEl.textContent = 'Needs Improvement';
            ratingEl.className = 'status status--error';
        }
        
        this.showScreen('results-screen');
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});