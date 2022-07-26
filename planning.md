Quizz App

- App component
    - Start screen
        - click start quizz and call API
    - Questions
        - log api response
        - display each question with all possible answers as buttons
        - find out where to store correct answer and chosen answer
    - Trivia
        - conditionally render submit button, only if all questions have chosen answers
        - every time gameData.questions changes, check if all have been chosen
            - if so, set gameData.allChosen to true
        - call sendAnswers when button is clicked
            - check if each chosen answer is equal to 

state in app:
    - array of objects
        {
            question:
            correctAnswer:
            selectedAnswer
        }