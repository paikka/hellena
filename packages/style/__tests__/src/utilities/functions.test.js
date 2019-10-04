/**
 * Copyright Paikka. 2019, 2019
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @jest-environment node
 */

'use strict';

import {rgba} from "../../../src/utilities/functions";

test('Convert the HEX color #000000 to RGBA rgba(0, 0, 0, 0.50)', () => {
    expect(rgba('#000000', '0.50')).toEqual('rgba(0, 0, 0, 0.50)');
});

test('Convert the HEX color #FFFFFF to RGBA rgba rgba(255, 255, 255, 0.90)', () => {
    expect(rgba('#FFFFFF', '0.90')).toEqual('rgba(255, 255, 255, 0.90)');
});