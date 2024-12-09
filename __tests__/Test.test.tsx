import 'react-native';
import {it, describe, expect, test} from '@jest/globals';
import {bagi, kali, kurang, tambah} from '../src';

describe('Matematika fungsi', () => {
  it('Penambahan 2 bilangan', () => {
    expect(tambah(30, 5)).toBe(35);
  });

  it('Pengurangan 2 bilangan', () => {
    expect(kurang(20, 5)).toBe(15);
  });

  it('Perkalian 2 bilangan', () => {
    expect(kali(15, 5)).toBe(75);
  });

  it('Pembagian 2 bilangan', () => {
    expect(bagi(10, 5)).toBe(2);
  });
});

// import React from 'react';
// import {it, describe, expect, test} from '@jest/globals';
// import {fireEvent, render} from '@testing-library/react-native';
// import App from '../App';

// test('navigates to next screen on button press', () => {
//   const {getByText} = render(<App />);
//   const button = getByText('Next');
//   fireEvent.press(button);
//   expect(getByText('Next Screen')).toBeTruthy();
// });
