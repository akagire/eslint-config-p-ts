import { CLIEngine } from 'eslint';

const cli = new CLIEngine();

const linter = (path) => {
  const output = cli.executeOnFiles(path);
  return output.results[0].messages.map((e) => e.ruleId);
};

describe('test', () => {
  test('noTab', () => {
    const result = linter('test/fixtures/noTab.ts');
    expect(result.filter((r) => r === 'no-tabs').length).toBe(1);
  });

  test('semi', () => {
    const result = linter('test/fixtures/semi.ts');
    expect(result.filter((r) => r === 'semi').length).toBe(1);
  });

  test('quotes', () => {
    const result = linter('test/fixtures/quotes.ts');
    expect(result.filter((r) => r === 'quotes').length).toBe(1);
  });

  test('export', () => {
    const result = linter('test/fixtures/export.ts');
    expect(result.filter((r) => r === 'import/no-default-export').length).toBe(1);
  });

  test('noNull', () => {
    const result = linter('test/fixtures/noNull.ts');
    expect(result.filter((r) => r === 'no-null/no-null').length).toBe(1);
  });

  test('namingConvention', () => {
    const result = linter('test/fixtures/namingConvention.ts');
    // TODO: namespace を PascalCase とするルールがない。本当は 9 にしたい。
    expect(result.filter((r) => r === '@typescript-eslint/naming-convention').length).toBe(8);
  });

  test('typeAnnotation', () => {
    const result = linter('test/fixtures/typeAnnotation.ts');
    // NOTE: baz :string の箇所は、:前と後の２箇所にエラーが出ているので 5 とカウント
    expect(result.filter((r) => r === '@typescript-eslint/type-annotation-spacing').length).toBe(5);
  });

  test('optionalAnnotation', () => {
    const result = linter('test/fixtures/optionalAnnotation.ts');
    expect(result.filter((r) => r === 'use-optional-annotation/use-optional-annotation').length).toBe(1);
  });

  test('noExplicitAny', () => {
    const result = linter('test/fixtures/explicitAny.ts');
    expect(result.filter((r) => r === '@typescript-eslint/no-explicit-any').length).toBe(1);
  });

  test('interfaceNamePrefix', () => {
    const result = linter('test/fixtures/interfaceNamePrefix.ts');
    expect(result.filter((r) => r === '@typescript-eslint/interface-name-prefix').length).toBe(1);
  });
});
