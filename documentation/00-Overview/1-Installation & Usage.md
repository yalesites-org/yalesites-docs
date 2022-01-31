---
title: "Installation & Usage"
description: "Steps you may need to take to work on/with the YaleSites design system."
publishToStyleGuide: true
---

## Development requirements

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
