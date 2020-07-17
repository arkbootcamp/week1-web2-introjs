

// *** condition ***
// if
let time = 13;
if(time< 11){
    console.log('selamat pagi')
}else if(time < 16){
    console.log('selamat sore')
}else if(time< 24){
    console.log('selamat malam')
}else{
    console.log('time bukan number')
}

// switch case
const day = 'selasa'
switch (day) {
    case 'senin':
        console.log('hari ini hari senin')
        break;
    case 'selasa':
        console.log('hari ini hari selasa')
        break;
    default:
        console.log('anda salah meningputkan')
        break;
}
// ternary operator
(time<11)?(console.log('pagi...')):(console.log('malam...'))
const whatTime = time<11 ? 'pagi':'malam';
console.log('sekarang apa '+whatTime)

if('2' === 2){
    console.log('nilainya sama')
}else{
    console.log('nilai beda')
}

