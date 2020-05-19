// TODO: eqeqeq: smart ではうまく動いていない
function eqeqeq() {
  const error = undefined;
  console.log(typeof error !== undefined);
  console.log(typeof error != undefined);
  console.log(error != undefined);
}

// TODO: 関数利用時にnullを渡すのはOKとしたい
CamelCaseFunc(null);
