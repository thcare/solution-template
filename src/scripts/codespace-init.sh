#!/bin/bash

npm install

cd ..
git clone https://github.com/thcare/web.th.care.git
git clone https://github.com/thcare/api.th.care.git

cd web.th.care
npm install

cd ../api.th.care
npm install

