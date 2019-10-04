/**
 * Copyright Paikka. 2019, 2019
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import {variables} from '../src';

test('variables', () => {
    expect(variables).toMatchSnapshot();
});