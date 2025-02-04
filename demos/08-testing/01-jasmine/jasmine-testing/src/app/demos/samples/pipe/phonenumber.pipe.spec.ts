import { PhonenumberPipe } from './phonenumber.pipe';

describe('Pipe - Phonenumber', () => {
  it('create an instance', () => {
    const pipe = new PhonenumberPipe();
    expect(pipe).toBeTruthy();
  });

  it('should display in phone format', () => {
    const phoneNumber = '3333333333';
    const pipe = new PhonenumberPipe();
    const result = pipe.transform(phoneNumber);

    expect(result).toBe('(333) 333 3333');
  });

  it('should display nothing when input is too long', () => {
    const phoneNumber = '333333333344';
    const pipe = new PhonenumberPipe();
    const result = pipe.transform(phoneNumber);

    expect(result).toBe('');
  });
});
