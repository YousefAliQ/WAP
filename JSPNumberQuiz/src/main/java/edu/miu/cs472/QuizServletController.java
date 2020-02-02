package edu.miu.cs472;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


public class QuizServletController extends HttpServlet {
    /**
     * Sessions should be stored in the database temporary. But for testing I used an array list instead
     */
    private List<Session> sessions = new ArrayList<Session>();

    /**
     * doPost function will response to Post requests by creating a Quiz module and update the scores
     * Then, It will forward it to QuizGenerator function which is responsible for forwarding it to the
     * correct JSP viewer.
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Session ssn = getSessionDetails(request);

        if (ssn != null) {

            QuizModule quiz = new QuizModule();
            quiz.setQuestionNumber(ssn.getQuestionNumber());
            quiz.setScore(ssn.getScore());
            if (quiz.isCorrect(request.getParameter("txtAnswer").trim())) {
                quiz.scoreAnswer();
                ssn.setScore(quiz.getScore());
                ssn.setQuestionNumber(quiz.getQuestionNumber());
            }
            // check if the quiz over.
            QuizGenerator(request, response, quiz);
            return;
        }

    }


    /**
     * doGet function will response to Get requests by calling QuizGenerator which responsible for
     * generating a new quiz or restate the current quiz
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Session ssn = getSessionDetails(request);

        if (ssn != null) {

            QuizModule quiz = new QuizModule();
            quiz.setQuestionNumber(ssn.getQuestionNumber());
            quiz.setScore(ssn.getScore());

            // check if the quiz over.
            QuizGenerator(request, response, quiz);
        }

    }

    /**
     * GuizGenerator function to start a new Quiz and attach it to the session id
     * or to restate quizzes that did not over yet by retrieve the details of the session id
     *
     * @param request
     * @param response
     * @param quiz
     * @throws ServletException
     * @throws IOException
     */
    private void QuizGenerator(HttpServletRequest request, HttpServletResponse response, QuizModule quiz) throws ServletException, IOException {

        if (quiz.getNumQuestions() == quiz.getCurrentQuestionIndex()) {
            request.setAttribute("quiz", quiz);
            sessions.remove(new Session(request.getSession().getId(), 0, 0));
            request.getSession().invalidate();
            RequestDispatcher dispatcher = request.getRequestDispatcher("QuizOver.jsp");
            dispatcher.forward(request, response);
        } else {
            request.setAttribute("quiz", quiz);
            request.setAttribute("question", quiz.getCurrentQuestion());
            RequestDispatcher dispatcher = request.getRequestDispatcher("QuizViewer.jsp");
            dispatcher.forward(request, response);
        }
    }

    /**
     * getSessionDetails function is responsible to keep track of sessions validity and look up to
     * database or a list in this demo Number Quiz lab or create a new session
     * @param request
     * @return
     */
    private Session getSessionDetails(HttpServletRequest request) {

        HttpSession ssn = request.getSession();
        if (ssn != null) {
            String ssnId = ssn.getId();
            boolean isNew = true;
            int i;
            Session targetSession = new Session(ssnId, 0, 0);
            for (i = 0; i < sessions.size(); i++) {
                if (sessions.contains(targetSession)) {
                    isNew = false;
                    break;
                }
            }

            if (!isNew) {
                return sessions.get(i);
            } else {
                sessions.add(targetSession);
                return targetSession;
            }
        } else {
            return null;
        }

    }

}

