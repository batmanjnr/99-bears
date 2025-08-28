for (let a = 99; a >= 2; a--) {
    let i = a - 1;
    display.innerHTML += `<br>${a} bottles of beer on the wall,${a} bottles of beer.<br>Take one down and pass it around,  ${i} bottles of beer on the wall.<br><br>`;
    if (a === 2) {
        display.innerHTML += `<br>${i} bottle of beer on the wall, ${i} bottle of beer.<br>Take one down and pass it around, no bottles of beer on the wall.<br><br>`;
        break;
    }
}
display.innerHTML += `<br>No more bottles of beer on the wall, no more bottles of beer.<br>Take one down and pass it around, 99 bottles of beer on the wall.<br>`;
