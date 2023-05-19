 const pGajah = document.querySelector('.gajah');
 pGajah.addEventListener('click', () => {
    // COM INPUT
    const comp = Math.random();
    if ( comp < 0.3) return 'batu';
    if ( comp >= 0.3 && comp < 0.6 )return 'gunting';
    return 'kertas';
})
