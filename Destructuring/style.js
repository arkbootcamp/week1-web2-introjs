
// *** destructuring ***
const biodata = {
    firstName: "risnao",
    lastName: 'akbar'
}
// cara biasa
const namaDepan = biodata.firstName;
const namaBelakang = biodata.lastName

// pakai destructuring
const {firstName, lastName} = biodata

// console.log(namaDepan)
// console.log(lastName)

const bigData = {
                id: 1,
                name: "Leanne Graham",
                username: "Bret",
                email: "Sincere@april.biz",
                address: {
                        street: "Kulas Light",
                        suite: "Apt. 556",
                        geo: {
                            lat: "-37.3159",
                            lng: "81.1496"
                            }
                        },
                }

// cara biasa
const streetCth = bigData.address.street
const suiteCth = bigData.address.suite

// pakai destructuring
const {street, suite, tes} = bigData.address
console.log(tes);
