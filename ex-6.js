let height = undefined;
let result;

function nlc(height){
    return height??"Height is not defined";
}
result = nlc(height)
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
