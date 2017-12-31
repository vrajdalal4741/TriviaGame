let i = 0;
let rightAns = 0;
let wrongns = 0;

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

timer();

function nextQuestion() {
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

        console.log(chosenAnswer);
        console.log(correctAnswer);

        if(chosenAnswer === correctAnswer){
            rightAns++;
        }else{
            wrongns++;
        }

        console.log("rightAns", rightAns);
        console.log("wrongns", wrongns);

        //chosenAnswer == correct answer
        //correct++
        //else
        //wrong++

        //stop timer, call next question again
        stop();

    });

    i++;
}

function showResults(){
    //correct and wrong answers

    //start game again
}

nextQuestion();
