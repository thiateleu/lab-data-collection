//--------Part 2: Expanding Functionality-------

let csvData = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26'

//step 1
let rows = csvData.split('\n').map(row => row.split(','));

//step 2
let columnCount = rows[0].length;

console.log("Number of columns:" , columnCount)

//step 3
let resultArray = rows.map(row => {
    if (row.length !== columnCount) {
        throw new Error('Row length does not match')
    }
    return row;
});

//step 4
let cachedArray = resultArray;

console.log('Two-Dimensional Array:', cachedArray);
