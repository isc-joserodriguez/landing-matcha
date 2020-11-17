const arr = ['item1', 'item2', 'item3', 'item4',];
let index = 0;

const timer = setInterval(myTimer, 5000);
function myTimer() {
    document.getElementById(arr[index]).classList.add("inactive");
    index++;
    if (index === 4) {
        index = 0
    }
    document.getElementById(arr[index]).classList.remove("inactive");
}