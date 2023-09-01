# Welcome to your Thrive Framework Solution

## Start in a codespace

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/thcare/thfx)

### Using a devcontainer locally:

[Git Credential Sharing](https://code.visualstudio.com/remote/advancedcontainers/sharing-git-credentials)
TL;DR ssh key must be added to your ssh-agent:

```sh
ssh-add ~/.ssh/id_rsa
```

## Initial setup

If you are not using GitHub codespaces, you may need to set the `GITHUB_TOKEN` environment variable with your Github Personal Access Token. Your token will need `read:packages` on the https://github.com/thcare/dev.th.care/pkgs/npm/thcarefx package.

Run `yarn` in the root directory to install all the dependencies.

## Building your solution

To see live updates as you make changes, run `yarn dev --watch`. The running applications will be available at:

 - Patient Application: http://localhost:3000/
 - GraphQL Explorer: http://localhost:7071/api/

Once you're happy with your work, run `yarn build && yarn pack`. The generated `<tarball>.tgz` is the file that you will upload to the Thrive Deployment engine.
