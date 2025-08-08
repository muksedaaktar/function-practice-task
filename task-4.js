function count_zero(string, char){
    let count = 0;
    console.log(string);
     for (let i = 0; i < string.length; i++) {
    if (string[i] == char) {
      count++;
    }
  }
  return count;

}
const binaryString = '100111010101110100';
const bitCount = '0';
const output = count_zero(binaryString, bitCount);
console.log(output);