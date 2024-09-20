// Caesar cipher test

import caesarCipher from './caesarCipher';

test('shifts a string using cipher', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('shifts a string using cipher', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('shifts a string using cipher', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});
