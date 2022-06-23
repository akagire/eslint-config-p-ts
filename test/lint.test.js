import { ESLint } from 'eslint';

const eslint = new ESLint();

const linter = async (path) => {
  const output = await eslint.lintFiles([path]);
  return output[0].messages.map((e) => e.ruleId);
};

describe('test', () => {
  test('noTab', async () => {
    const result = await linter('test/fixtures/noTab.ts');
    expect(result.filter((r) => r === 'no-tabs').length).toBe(1);
  });

  test('semi', async () => {
    const result = await linter('test/fixtures/semi.ts');
    expect(result.filter((r) => r === 'semi').length).toBe(1);
  });

  test('quotes', async () => {
    const result = await linter('test/fixtures/quotes.ts');
    expect(result.filter((r) => r === 'quotes').length).toBe(1);
  });

  test('export', async () => {
    const result = await linter('test/fixtures/export.ts');
    expect(result.filter((r) => r === 'import/no-default-export').length).toBe(1);
  });

  test('noNull', async () => {
    const result = await linter('test/fixtures/noNull.ts');
    expect(result.filter((r) => r === 'no-null/no-null').length).toBe(1);
  });

  test('namingConvention', async () => {
    const result = await linter('test/fixtures/namingConvention.ts');
    // TODO: namespace を PascalCase とするルールがない。本当は 9 にしたい。
    expect(result.filter((r) => r === '@typescript-eslint/naming-convention').length).toBe(8);
  });

  test('typeAnnotation', async () => {
    const result = await linter('test/fixtures/typeAnnotation.ts');
    // NOTE: baz :string の箇所は、:前と後の２箇所にエラーが出ているので 5 とカウント
    expect(result.filter((r) => r === '@typescript-eslint/type-annotation-spacing').length).toBe(5);
  });

  test('optionalAnnotation', async () => {
    const result = await linter('test/fixtures/optionalAnnotation.ts');
    expect(result.filter((r) => r === 'use-optional-annotation/use-optional-annotation').length).toBe(1);
  });

  test('noExplicitAny', async () => {
    const result = await linter('test/fixtures/explicitAny.ts');
    expect(result.filter((r) => r === '@typescript-eslint/no-explicit-any').length).toBe(1);
  });

  test('interfaceNamePrefix', async () => {
    const result = await linter('test/fixtures/interfaceNamePrefix.ts');
    expect(result.filter((r) => r === '@typescript-eslint/naming-convention').length).toBe(1);
  });

  test('interfacesSemicolon', async () => {
    const result = await linter('test/fixtures/interfaceSemi.ts');
    expect(result.filter((r) => r === '@typescript-eslint/member-delimiter-style').length).toBe(1);
  });

  test('noUnusedVars', async () => {
    const result = await linter('test/fixtures/noUnusedVars.ts');
    expect(result.filter((r) => r === '@typescript-eslint/no-unused-vars').length).toBe(1);
  });
});
