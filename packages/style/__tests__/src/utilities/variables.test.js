/**
 * Copyright Paikka. 2019, 2019
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { variables, fontSizes, fontWeights } from '../../../src';

test('variables', () => {
  expect(variables).toMatchSnapshot();
});

test('Font size object assignment', () => {
  const expected = {
    1: '.5rem',
    2: '.875rem',
    3: '1rem',
    4: '1.125rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.625rem',
    11: '3rem',
    12: '3.375rem',
    13: '3.75rem',
    14: '4.25rem',
    15: '4.75rem'
  };
  expect(fontSizes).toEqual(expected);
});

test('Font weight object assignment', () => {
  const expected = {
    1: 300,
    2: 400,
    3: 600,
    4: 700,
    5: 800
  };
  expect(fontWeights).toEqual(expected);
});
