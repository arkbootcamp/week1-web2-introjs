// *** pengulangan ***

let food =["nasi goreng","nasi padang", "nasi surabaya"]

// menggunakan for
for(let i = food.length-1; i>=0; i--){
    // console.log('ini pengulanang ke' + i)
    console.log('makan hari ini ' + food[i])
}

// menggunakan while dan do while
let ulang = 100;
while(ulang <= 5){
    console.log('ini menggunakan while ke '+ ulang)
    ulang= ulang + 1
}

do {
    console.log('ini menggunakan do while ke '+ ulang)
    ulang= ulang + 1
} while (ulang <= 5);

