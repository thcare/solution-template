#!/bin/bash

npm install

cd /workspaces
sudo -E git clone https://github.com/thcare/web.th.care.git
sudo -E git clone https://github.com/thcare/api.th.care.git
sudo chown -R node:node web.th.care api.th.care

cd /workspaces/web.th.care
sudo -E npm install

cd /workspaces/api.th.care
sudo -E npm install

