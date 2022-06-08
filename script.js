window.onload = function() {
    let plotis;
    let ilgis;
    let aukstis;
    let turis;

    ilgis = 15;
    plotis = 20;
    aukstis= 5;
    turis = staciakampioTuris(ilgis,plotis,aukstis);
    console.log(turis);
}

    function staciakampioTuris(a,b,c) {
        return a*b*c;
    }
