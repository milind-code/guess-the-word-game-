player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0
player2_score=0
document.getElementById("player1_name").innerHTML=player1_name+" :";
document.getElementById("player2_name").innerHTML=player2_name+" :";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question turn: "+player1_name;
document.getElementById("player_answer").innerHTML="answer turn: "+player2_name;

function send(){
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    charat1=word.charAt(1);
    lengthdivide=Math.floor(word.length/2);
    charat2=word.charAt(lengthdivide);
    lengthminus=word.length-1;
    charat3=word.charAt(lengthminus);
    replace_char1=word.replace(charat1,"_");
    replace_char2=replace_char1.replace(charat2,"_");
    replace_char3=replace_char2.replace(charat3,"_");
    questionword=replace_char3; input_box="<br><br>Answer:<input type='text' id='input_box1'>"; check_button="<br><br><button type='button' id='check' onclick='check()'>check</button>"; row=questionword+input_box+check_button; document.getElementById("output").innerHTML=row; document.getElementById("word").value="";
}
answerturn="player2";
questionturn="player1";

function check(){
    getans=document.getElementById("input_box1").value;
    ans=getans.toLowerCase(getans);
    if (ans == word){
        if (answerturn == "player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else {
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;  
        }
    }
    else {
        if (answerturn == "player1"){
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
        else {
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;  
        }
    }
    if(questionturn=='player1') {
         questionturn="player2";
    document.getElementById("player_question").innerHTML="question turn:"+player2_name;
    }
    else {
        questionturn="player1";
        document.getElementById("player_question").innerHTML="question turn:"+player1_name;
    }
    if(answerturn=='player1') {
        answerturn="player2";
   document.getElementById("player_answer").innerHTML="answer turn:"+player2_name;
   }
   else {
    answerturn="player1";
    document.getElementById("player_answer").innerHTML="answer turn:"+player1_name;
   }
   document.getElementById("output").innerHTML="";
}