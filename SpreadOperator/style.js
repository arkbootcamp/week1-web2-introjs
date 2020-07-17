
// *** spread operator ***
const hoby = ['gaming', 'hiking'];
const hoby2 = ['swimming', 'karaoke'];

const newHoby =[...hoby, ...hoby2];
console.log(newHoby);

const biodata = {
    firstName: "risnao",
    lastName: 'akbar'
}
const biodata3 = {
    lastName: "ifan",
    email: 'ifan@gmail.com'
}
const biodata2 = {...biodata, ...biodata3};
console.log(biodata2)

