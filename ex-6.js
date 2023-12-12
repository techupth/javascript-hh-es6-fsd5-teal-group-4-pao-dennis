let height = undefined;
let result;
function isUndefined(height) {
  return height ?? "Height is not defined";
}
result = isUndefined(height);
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”\
