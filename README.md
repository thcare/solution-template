# Solution Template

Welcome to YOUR th.care framework powered Solution!

## Quickstart

### Start a codespace

The fastest way to get started is to spin up a codespace by clicking this button.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/thcare/solution-template)

Click that, and you'll get a new browser tab running VS Code with this readme open. See you on the other side!

### Initialise your development environment

In the VS Code [terminal](https://code.visualstudio.com/docs/terminal/basics) you can now run the following command:

```
npm run codespace:init
```

This will download the dependencies and prepare you to begin development of your solution.

### A tour of the (important) files in this solution

```
├── FnOnIntakeFormSubmitted     // This is necessary for how functions are deployed (currently)
├── README.md                   // Hey, that's this file!
├── prisma
│   └── solution.prisma         // This is where you can add your solution-specific entities.
├── src                         // Where all the coding happens.
│   ├── apps                    // Where applications (e.g. patient, provider) are defined.
│   ├── components              // Custom components that can be injected into forms go in here.
│   ├── forms                   // Apps contain multiple forms, and they are defined here.
│   ├── functions               // Functions are where the "workflow logic" for your solution goes.
│   ├── graphql
│   │   └── queries.ts          // You'll be able to build queries/mutations for your entities in here.
│   ├── hooks                   // Hooks attach workflow logic to your solution.
│   ├── main.ts                 // The entry point for your solution definition.
```

### Make a change to your solution

in `src/main.ts' change this:

```
  title: "Solution Template",
```

to a title of your choosing.
