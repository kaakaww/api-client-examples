#!/usr/bin/env bash

cd stack_hawk_public_api/
npm install
cd ../node-sample-app
npm link ../stack_hawk_public_api
