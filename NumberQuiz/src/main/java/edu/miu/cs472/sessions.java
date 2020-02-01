package edu.miu.cs472;

class Session {
    private String sessionID;
    private int score;
    private int questionNumber;

    public Session(String sessionID, int score, int questionNumber){
        this.questionNumber = questionNumber;
        this.sessionID = sessionID;
        this.score = score;
    }

    public String getSessionID() {
        return sessionID;
    }

    public void setSessionID(String sessionID) {
        this.sessionID = sessionID;
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

    @Override
    public boolean equals(Object obj) {
        return this.sessionID == ((Session) obj).sessionID;
    }
}
