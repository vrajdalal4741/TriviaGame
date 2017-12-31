let i = 0;
let rightAns = 0;
let wrongAns = 0;

const Questions = [
    {
       question: 'Along with Jerry, which character does the co-creator of Seinfled play in the TV series?',
       answers : [ 'George Constanza (Jason Alexander)',
            'Elaine Benes (Julia Louis-Dreyfus)',
            'Michael Richards (Cosmo Kramer)',
            'George Steinbrenner (Larry David)'
            ],
        correct : 4,   
    },
    {
        question:'How many times have the Minneosta Vikings won the SuperBowl?',
        answers: ['One',
                'Three',
                'Two',
                'Zero'
                ],
        correct : 4         
    },
    {
        question: 'Bruce Lee was the founder of which style of Martial Arts?',
        answers: ['Taekwondo',
        'Japanese Jujutsu',
        'Krav Maga',
        'Jeet Kune Do'
        ],
        correct : 4  
    },
    {
        question: 'In 2017, who did Food Beast rank as the best fried chicken chain in the U.S.?',
        answers :['KFC',
        'Chick-Fil-A',
        'Raising Canes',
        'Popeye\'s'],
        correct : 4  
    }
]

console.log(Questions);

let number = 16;

let intervalId;

function timer() {
    intervalId = setInterval(decrement, 1000);
    if(number == 0) {
    	number = 16;
        wrongAns++;
    }
}
function decrement() {
    number--;
    $('#ansTimer').html(number);
    if (number == 0) {
    	clearInterval(intervalId);
        timer();
        nextQuestion();    
    }
}

function stop(){
    clearInterval(intervalId);
}

stop();
timer();

function nextQuestion() {
   if (i < Questions.length) {
   
    console.log(i);
    console.log(Questions.length);
    showResults();

	$('#Question').html(Questions[i].question);

    for(let j = 0; j < 4; j++){
        let answerDiv = $('<div>');
        answerDiv.addClass('answer');
        answerDiv.attr('data-id', j); //setting the attribute
        answerDiv.html(Questions[i].answers[j]);
        $('#Question').append(answerDiv);
    }


    $('.answer').click(function(){
        let chosenAnswer = ($(this).attr('data-id')); //getting the attribute
        let correctAnswer = Questions[i].correct;
        number = 16;

        console.log(chosenAnswer);
        console.log(correctAnswer);

        if(chosenAnswer === correctAnswer){
            rightAns++;
            nextQuestion();
            showResults();
            i++;
        }else{
            wrongAns++;
            nextQuestion();
            showResults();
            i++;
        }

        console.log("rightAns", rightAns);
        console.log("wrongAns", wrongAns);

        //stop timer, call next question again
        stop();
        timer();

    });

   }
   else 
    {return;}
}



function showResults(){
    //correct and wrong answers
    if (i == Questions.length) {
    $('#Question').html("Right Answers: " + rightAns);
    $('#Question').append('<br>');
    $('#Question').append("Wrong Answers: " + wrongAns);
    stop();
    }
    //start game again
}

nextQuestion();
