const allCircles = document.querySelectorAll('.circle');
let board = []; for (let i=0; i<42; i++) {board.push('')}


setInterval(()=>{
    updateVisuals();
})

for (let circle of allCircles) {
    circle.addEventListener('click', (e)=>{
        board[parseInt(e.target.id.slice(1))] = 'red';
    })
}

const updateVisuals = ()=>{
    for (let i=0; i<board.length; i++) {
        if (board[i] !== '') {document.querySelector(`#c${i}`).style.backgroundColor = board[i];}
    }
}