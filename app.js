
let friends = ["Ryan", "Autumn", "Avery", "Ella", "Meghan"];
 for (j= 0; j <= 4; j++) {

let lines;
for (i = 99; i >= 1; i--) 
{
    if (i == 1) {
        lines = 'line';
    } else {
        lines = 'lines';
    }
    console.log(i+" "+lines+" of code in the file");
    if (i < 99) {
        console.log(i+" "+lines+" of code in the file,");
    }
    console.log(i+" "+lines+" of code.");

    console.log(friends[j]+ " strikes one out,")

    console.log("Clears it all out,");
    if (i == 1) {
        console.log("No more lines of code in the file!");
    }
}
 }
