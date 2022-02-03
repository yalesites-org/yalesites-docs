---
title: "Installation & Usage"
description: "Steps you may need to take to work on/with the YaleSites design system."
publishToStyleGuide: true
---

## Development requirements

All of the repos have a `.nvmrc` file in them that indicates the required node version each environment should be using. Using a version different than the one indicated can (and likely will!) result in a failed build that may not be easy to debug. Please check the node requirements in each project. They should be in sync across projects, but as time goes on, they may unintentionally diverge.

[nvm](https://github.com/nvm-sh/nvm/blob/master/README.md#install-script) is HIGHLY recommended to make node version switching easy. Once installed, you can run `nvm use` in any project, and nvm will switch your node executable to the one defined in the `.nvmrc` file.

There are also docs on how you can configure your shell to [automatically run `nvm use`](https://github.com/nvm-sh/nvm#automatically-call-nvm-use) when you change directories in your terminal. This makes it so that you don't have to remember to manually run the command, and can be a life saver, since using an incorrect version of node can break builds.

### Personal Access Token

In order to install many of the YaleSites packages from GitHub, you will need to create a personal access token and store it as an environment variable in your local environment. This only needs to be done once per-environment and will grant access to all of the repositories.

#### Create a personal access token

- Go to `https://github.com/settings/tokens/new`
  - In the "Note" field add something like "YaleSites GitHub Packages"
  - Choose an expiration value
  - Check the box for "write:packages" (this will automatically check all of the "repo" boxes as well)
  - Click "Generate token"

#### Set a local environment variable

- On your local machine, create an environment variable. This process varies depending on the shell and operating system you use. It will be something similar to this though: `export KEY=value`.
  - The `key` for YaleSites projects needs to be `YALESITES_BUILD_TOKEN`
  - The `value` is the token you created above
- Done!
