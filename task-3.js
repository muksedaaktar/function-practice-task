function make_avg(numbers, size){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
       
    }
     average = sum/size;
    return average;

}
const int = [5, 10, 2, 3, 10];
const size = int.length;
const output = make_avg(int,size);
 console.log('The average is=',output);
