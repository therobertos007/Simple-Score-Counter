const maxInput = document.querySelector('#number');

let pointOne = 0;
let pointTwo = 0;
let maxScore;

maxInput.addEventListener('input', function() {

  maxScore = maxInput.value;
  maxScore = parseInt(maxScore);
  console.log(`Max score is ${maxScore}`);

})


function headerUpdate() {
  const header = document.querySelector('h1');
  header.innerText = `${pointOne} to ${pointTwo}`;

}


function addPoints() {
  const buttonClickTrue = document.getElementById('btn_one');
  const buttonClickTrue2 = document.getElementById('btn_two');
  const resetButtonTrue = document.getElementById('btn_reset');

  buttonClickTrue.addEventListener('click', function() {
    pointOne++;
    // console.log(`Your score is ${pointOne}`);
    headerUpdate();

    if(pointOne === maxScore){
        alert(`P1 WIN:        *** ${pointOne} to ${pointTwo} ***`);
        refreshWeb();
    }
  })

  buttonClickTrue2.addEventListener('click', function() {
    pointTwo++;
    // console.log(`Second score is ${pointTwo}`);
    headerUpdate();

    if(pointTwo === maxScore ){
        alert(`P2 WIN:       *** ${pointOne} to ${pointTwo} *** `);
        refreshWeb();
    }
  })

  resetButtonTrue.addEventListener('click', function() {
    window.location.reload(true);
  })

}

addPoints();

function refreshWeb(){
    window.location.reload(true);
}