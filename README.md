# Solution Template

Welcome to YOUR th.care framework powered Solution!

## Quickstart

### Create your own repo from this template

Click the button "Use this template" then click "Create a new repository"

For the demo, we ask that everyone put the repo in the thcare org (it won't
work otherwise), and name their repo `solution-<name>`, replace `<name>` with
your own name, or whatever you'd like.

### Start a codespace

The fastest way to get started is to spin up a codespace by clicking this button.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/thcare/solution-template)

Click that, and you'll get a new browser tab running VS Code with this readme open. See you on the other side!

### Initialise your development environment

In the VS Code [terminal](https://code.visualstudio.com/docs/terminal/basics)
you can now run the following command:

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

### Build and test your solution

You can develop your solution by running the following command:

```
npx thfx solution:dev
```

You should then be able to open a browser window at `http://localhost:3000` (if
you're on local) or `TODO` if you're running in a codespace.

### Commit and push your changes

If you're unfamiliar with `git`, don't wory, this should be pretty simple using VS Code.
You'll need to 1. Add (stage) your changes, 2. Commit your changes, then 3. Commit & push (sync)

The VS Code docs offer a simple and great explanation
[here](https://code.visualstudio.com/docs/sourcecontrol/intro-to-git#_staging-and-committing-code-changes)

TL;DR

- Click the 3rd button down on the left side (three circles with connecting lines)
- Press the plus button next to the "Changes" list (make sure all files are listed under "Staged Changes")
- Enter a message like "Changed the solution name"
- Click Commit
- Click Sync

### Ready to deploy!

You will need to get some credentials, and set them in your github
repository, then you will be able to use the Deploy solution action to
see your solution live.

```
npx thfx solution:init --configure-github
```

Once this runs successfully, you should be able to go to your repo:
`https://github.com/thcare/<FILL_IN_YOUR_SOLUTION_REPO>/actions/workflows/deploy-solution.yml`
And click "Run workflow". You should then be able to follow along with the
deployment by watching the logs, or simply wait for the run to succeed
(or fail! These are early days for the framework, and your patience is
valued)

Once the deploy is complete, you should be able to visit your solution, live at:
`https://patient.<YOUR_SOLUTION_NAME>.dev.thdev.care/`
