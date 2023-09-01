#!/bin/bash

# TODO: Move me out of bash

# This script is needed to support the m1 architecture in a devcontainer for VSCode.
# See: https://github.com/Azure/azure-functions-core-tools/issues/3112

ARCH=$(dpkg --print-architecture)

if [ "$ARCH" != "arm64" ]; then
  npm install -g azure-functions-core-tools@4 --unsafe-perm true
else
  cd /workspaces
  sudo rm -Rf azure-functions-core-tools
  sudo -E git clone https://github.com/Azure/azure-functions-core-tools.git
  sudo chown -R node:node azure-functions-core-tools
  cd azure-functions-core-tools

  # This is based on https://github.com/Azure/azure-functions-core-tools/blob/v4.x/build.sh

  dotnet build Azure.Functions.Cli.sln
  dotnet publish src/Azure.Functions.Cli/Azure.Functions.Cli.csproj --runtime linux-arm64 --output /tmp/cli
  sudo cp -r /tmp/cli/* /usr/local/bin
fi
