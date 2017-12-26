let i = 0;

const Questions = [
    ['Along with Jerry, which character does the co-creator of Seinfled play in the TV series?',
        'George Constanza (Jason Alexander)',
        'Elaine Benes (Julia Louis-Dreyfus)',
        'Michael Richards (Cosmo Kramer)',
        'George Steinbrenner (Larry David)'
    ],
    ['How many times have the Minneosta Vikings won the SuperBowl?',
        'One',
        'Three',
        'Two',
        'Zero'
    ],
    ['Bruce Lee was the founder of which style of Martial Arts?',
        'Taekwondo',
        'Japanese Jujutsu',
        'Krav Maga',
        'Jeet Kune Do'
    ],
    ['In 2017, who did Food Beast rank as the best fried chicken chain in the U.S.?',
        'KFC',
        'Chick-Fil-A',
        'Raising Canes',
        'Popeye\'s'
    ]
]
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

timer();

function nextQuestion() {
	$('#Question').html(Questions[i][0]);
    $('#Aone').html(Questions[i][1]);
    $('#Atwo').html(Questions[i][2]);
    $('#Athree').html(Questions[i][3]);
    $('#Afour').html(Questions[i][4]);
    i++;
}
nextQuestion();
let rightAns = 0;
let wrongns = 0;
