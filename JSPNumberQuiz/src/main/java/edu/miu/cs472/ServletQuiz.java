package edu.miu.cs472;

import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

public class ServletQuiz extends HttpServlet {

    /**
     * Sessions should be stored in the database temporary. But for testing I used an array list instead
     */
    private List<Session> sessions = new ArrayList<Session>();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      /*  PrintWriter out = response.getWriter();
        HttpSession ssn = request.getSession();
        if(ssn != null){

            String ssnId = ssn.getId();

            boolean isNew = true;
            int i;
            for(i=0; i<sessions.size(); i++){
                if (sessions.contains(new Session(ssnId,0,0))){
                    isNew = false;
                    break;
                }
            }

            String answer = request.getParameter("txtAnswer").toString();

            QuizViewer viewer = new QuizViewer();
            if (!isNew){
                Session temp = (Session) sessions.get(i);
                int question = temp.getQuestionNumber();
                int score = temp.getScore();

                QuizModule quizModule = new QuizModule(question, score);
                boolean isCorrectAnswer = quizModule.isCorrect(answer);

                if(isCorrectAnswer){
                    quizModule.scoreAnswer();
                    temp.setQuestionNumber(quizModule.getQuestionNumber());
                    temp.setScore(quizModule.getScore());
                }
                if (quizModule.getNumQuestions() == quizModule.getCurrentQuestionIndex()){
                   out =  viewer.genQuizOverPage(out);
                   ssn.invalidate();
                   sessions.remove(new Session(ssnId,0,0));
                }else{
                    out = viewer.genQuizPage(quizModule, out, quizModule.getCurrentQuestion(), !isCorrectAnswer,  answer);
                }

            }else{
                sessions.add(new Session(ssnId,0,0));
                QuizModule quizModule = new QuizModule(0, 0);
                out = viewer.genQuizPage(quizModule, out, quizModule.getCurrentQuestion(),  false,  answer);
            }
        }
        else
        {
            System.out.print("Cannot find the session ID");
        }
*/
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
/*
        PrintWriter out = response.getWriter();
        HttpSession ssn = request.getSession();
        if(ssn != null){
            String ssnId = ssn.getId();

            boolean isNew = true;
            int i;
            for(i=0; i<sessions.size(); i++){
                if (sessions.contains(new Session(ssnId,0,0))){
                    isNew = false;
                    break;
                }
            }
            QuizViewer viewer = new QuizViewer();
            if (!isNew){
                Session temp = (Session) sessions.get(i);
                int question = temp.getQuestionNumber();
                int score = temp.getScore();

                QuizModule quizModule = new QuizModule(question, score);
                out = viewer.genQuizPage(quizModule, out, quizModule.getCurrentQuestion(), false,  "");
            }else{
                sessions.add(new Session(ssnId,0,0));
                QuizModule quizModule = new QuizModule(0, 0);
                out = viewer.genQuizPage(quizModule, out, quizModule.getCurrentQuestion(), false,  "");
            }
        }
        else
        {
          System.out.print("Cannot find the session ID");
        }*/
    }

}

