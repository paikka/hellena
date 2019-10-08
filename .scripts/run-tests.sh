#!/bin/bash

##
# Copyright Paikka. 2019, 2019
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.
#

if [[ ! -d node_modules ]]; then
   npm install
fi

npm run test
npm run eslint
npm run stylelint
