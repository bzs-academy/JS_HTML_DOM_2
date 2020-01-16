
document.querySelector('button').addEventListener('click', race);

function race () {

    document.querySelector('p').innerHTML = '';

    var kirmizi = document.getElementById('img1');
    var mavi = document.getElementById('img2');

    var pos1 = 0;
    var pos2  = 0;

    var durdur = setInterval( goFunc, 5 );    // milisaniye cinsinden sure

    function goFunc () {

        pos1 += Math.floor(Math.random() * 5);
        pos2 += Math.floor(Math.random() * 5);

        kirmizi.style.left = `${10 + pos1}px`;
        mavi.style.left = 10 + pos2 + "px";

        if ( pos1 >= 1250) {
            clearInterval(durdur);
            document.querySelector('p').innerHTML = 'Kirmizi KAZANDI';

        } else if (pos2 >= 1250) {
            clearInterval(durdur);
            document.querySelector('p').innerHTML = 'Mavi KAZANDI';
        }


    }

}