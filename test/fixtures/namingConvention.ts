/* eslint no-unused-vars: off */
const camel_case = 'camel case';
const CamelCase = 'camel case';
const camelCase = 'camel case';

function CamelCaseFunc(v: any) {
  return undefined;
}

class camelCaseClass {
  name: string;

  TelNo: string;
}

interface IHoge {
  Member: string;
}


// TODO: namespaceをPascalCaseとするルールがない
namespace foo {}

enum color {
  red
}

// TODO: 本当は拒否したい
const UPPER_CASE = 'upper case';

// TODO: export だけを許可したい
export const HOGE = 'huga';
