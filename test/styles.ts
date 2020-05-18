/* eslint no-unused-vars: 0 */

function noTab() {
  console.log('hoge');
}

const quotes = 'double';

const semi = 'always';

// TODO: eqeqeq: smart ではうまく動いていない
function eqeqeq() {
  const error = undefined;
  console.log(typeof error !== undefined);
  console.log(typeof error != undefined);
  console.log(error != undefined);
}

const camel_case = 'camel case';

const CamelCase = 'camel case';

// TEST: OK
const UPPER_CASE = 'upper case';

function CamelCaseFunc(v: any) {
  return null;
}

// TODO: 関数利用時にnullを渡すのはOKとしたい
CamelCaseFunc(null);

class camelCaseClass {
  firstName: string;

  lastName: string;

  middleName: string;

  TelNo: string;
}

interface Ihoge {
  Member: string
}

// TODO: namespaceをPascalCaseとするルールがない
namespace foo {}

enum color {
  red
}

const foo: string = 'hello';
const bar: string = 'hello';
const baz: string = 'hello';
type Qux = ()=> {};
type Quux = () =>{};

export default {
  hoge: 'huga',
};

export const HOGE = 'huga';
