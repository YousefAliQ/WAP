package edu.miu.cs472;

/**
 * @since Jan, 31 2020
 * @author Yousef Ali
 *
 * This class Quiz contains the business logic of a numbers Quiz. it's designed
 * to be used in desktop and web (Servlet & JSP).
 */

public class Quiz {

    private int score = 0;
    private int questionNumber =0;
    private String[][] questions= {{"Guess the next number in the sequence!\n" +
            "\n" +
            "[1, 1, 2, 3, 5, ? ]","9"},{"Guess the next number in the sequence!\n" +
            "\n" +
            "[1, 1, 2, 3, 5, ? ]","8"}};

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
}
