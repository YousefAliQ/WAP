package edu.miu.cs472;

import org.junit.*;

import static org.junit.Assert.*;
import static org.junit.Assert.assertEquals;

public class QuizTest {

    Quiz quizUnderTest = new Quiz(0,0);

    @Test
    public void getNumCorrect() {
        /* should be at first question, answer should be 0 */
        assertEquals(0, quizUnderTest.getNumCorrect());

        quizUnderTest.scoreAnswer(); //should increment the score and the current question number
        assertEquals(1, quizUnderTest.getNumCorrect());
        assertEquals(1, quizUnderTest.getCurrentQuestionIndex());
    }

    @Test
    public void getCurrentQuestion() {
    }

    @Test
    public void isCorrect() {
        /* should be at first question, answer should be "9" */
        assertTrue("first question answer should be '9'", quizUnderTest.isCorrect("9"));
    }

    @Test
    public void scoreAnswer() {
        /* should be 1 after answer the first3 question*/
        quizUnderTest.scoreAnswer();
        assertEquals(1,quizUnderTest.getNumCorrect());
    }

    @Test
    public void getNumQuestions() {
        /* should be at first question, answer should be 2 */
        assertEquals(2, quizUnderTest.getNumQuestions());
    }

    @Test
    public void getCurrentQuestionIndex() {
        /* should be at first question, should be 0 */
        assertEquals(0,quizUnderTest.getCurrentQuestionIndex() );
    }
}