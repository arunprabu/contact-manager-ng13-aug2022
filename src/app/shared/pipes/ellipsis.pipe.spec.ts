import { EllipsisPipe } from './ellipsis.pipe';

describe('EllipsisPipe', () => {

  it('create an instance', () => {
    const pipe = new EllipsisPipe();
    expect(pipe).toBeTruthy();
  });

  // positive test 
  it('transform \'random\' to \'random...\'', () => {
    const pipe = new EllipsisPipe();
    expect(pipe.transform('random')).toBe('random...');
  });

  // negative test
  it('transform \'\' to \'\'', () => {
    const pipe = new EllipsisPipe();
    expect(pipe.transform('')).toBe('');
  });
});
