import { FirstExModule } from './first-ex.module';

describe('FirstExModule', () => {
  let firstExModule: FirstExModule;

  beforeEach(() => {
    firstExModule = new FirstExModule();
  });

  it('should create an instance', () => {
    expect(firstExModule).toBeTruthy();
  });
});
