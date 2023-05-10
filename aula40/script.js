while (true) {
    const hora = prompt('Type a clock time');

    if (hora > 12 && hora < 18) { //Initial comparation
        alert('Good Afternoon');
        console.log('Good Afternoon');
    } else if (hora <= 12 && hora >= 6) { //Can be added as much as you want
        alert('Good Morning');
        console.log('Good Morning');
    } else if ((hora >= 18 && hora < 24) || (hora >= 0 && hora < 6)) { 
        alert('Good Evening');
        console.log('Good Evening');
    } else {
        alert('Invalid time bye');
        console.log('Invalid Time bye');
        break;
    }
}
