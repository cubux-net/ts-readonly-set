import syncFrom from '../src/syncFrom';

describe('syncFrom', () => {
  it('different size', () => {
    const a = new Set([10, 20, 30]);
    const b = new Set([10, 20, 30, 40]);
    expect(syncFrom(a, b)).toBe(b);
  });

  it('different values', () => {
    const a = new Set([10, 20, 30]);
    const b = new Set([10, 42, 30]);
    expect(syncFrom(a, b)).toBe(b);
  });

  it('same reordered', () => {
    const a = new Set([10, 20, 30]);
    const b = new Set([20, 10, 30]);
    expect(syncFrom(a, b)).toBe(a);
  });

  it('same order', () => {
    const a = new Set([10, 20, 30]);
    const b = new Set([10, 20, 30]);
    expect(syncFrom(a, b)).toBe(a);
  });

  it('same', () => {
    const a = new Set([10, 20, 30]);
    expect(syncFrom(a, a)).toBe(a);
  });
});
