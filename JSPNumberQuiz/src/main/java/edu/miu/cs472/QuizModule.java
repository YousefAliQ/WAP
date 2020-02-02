package edu.miu.cs472;

/**
 * @since Jan, 31 2020
 * @author Yousef Ali
 *
 * This class edu.miu.cs472.Quiz contains the business logic of a numbers edu.miu.cs472.Quiz. it's designed
 * to be used in desktop and web (Servlet & JSP).
 */

public class QuizModule {

    private int score = 0;
    private int questionNumber =0;
    private String[][] questions= {
            { "3, 1, 4, 1, 5, ","9"},
            {"1, 1, 2, 3, 5, ","8"}
    };

    /**
     * Quiz constructor
     */
    public QuizModule(){}
    /**
     * returns the number of the correct answered questions
     * @return {int} Score
     */
    public int getNumCorrect() {
        return score;
    }

    /**
     * returns the current question of the quiz depending on the question number
     * @return {String} Question
     */
    public String getCurrentQuestion() {
        return questions[questionNumber][0];
    }

    /**
     * checks if the answer given by the user is correct or not
     *
     * @param answer the entered number from the user as a response of the question
     * @return {boolean} Result
     */
    public boolean isCorrect(String answer) {
        boolean retVal = false;
        if (answer.equals(questions[questionNumber][1])){
            retVal = true;
        }
        return retVal;
    }

    /**
     * increase the number of the correctly answered questions
     * and change the next question by add 1 to increase the pointer of questions
     */
    public void scoreAnswer() {
        score++;
        questionNumber++;
    }

    /**
     * returns the length of all questions
     * @return {int} NumQuestions
     */
    public int getNumQuestions() {
        return questions.length;
    }

    /**
     * returns the current question pointer/index
     * @return {int} CurrentQuestion
     */
    public int getCurrentQuestionIndex() {
        return questionNumber;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public int getQuestionNumber() {
        return questionNumber;
    }

    public void setQuestionNumber(int questionNumber) {
        this.questionNumber = questionNumber;
    }
}
