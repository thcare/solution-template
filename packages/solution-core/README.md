# th.care Framework Solution Template

<img alt="" src="thcare-logo.png" width="500" />

Welcome to YOUR th.care Framework powered Solution!

## Quickstart

### Create your own repo from this template

Click the button "Use this template" then click "Create a new repository"

---

### Start a codespace

The fastest way to get started is to spin up a codespace! Click the "Code" button in the top right of your repo, and select "Open with Codespaces". This will take a few minutes to spin up.

You'll get a new browser tab running VS Code with this readme open. See you on the other side!

### Install dependencies

Once your codespace is up and running, you'll need to install the dependencies.

First, you'll need to set an environment variable to get access to the `thcare` package repositories.  You can do this on the command line, or set it on your repository codespaces secrets configuration.  We'll leave that part up to you, but for brevity we will demo the command line here.  See [managing secrets for your codespaces](https://docs.github.com/en/codespaces/managing-your-codespaces/managing-secrets-for-your-codespaces).  The variable is `THCARE_KEY` and it should be one that was provided to you in your on-boarding process.

Open a terminal in VS Code (Terminal > New Terminal) and run:


```bash
export THCARE_KEY="ReplaceWithYourIdent"
```

And then run:

```bash
yarn
```

### A tour of the (important) files in this solution

```
├── FnOnFormSubmitted           // This is necessary for how functions are deployed (currently)
├── FnOnUserCreated
├── README.md                   // Hey, that's this file!
├── schema
│   └── models                  // This is where you can add your solution-specific entities.
├── src                         // Where all the coding happens.
│   ├── apps                    // Where applications (e.g. patient, provider) are defined.
│   ├── components              // Custom components that can be injected into forms go in here.
│   ├── forms                   // Apps contain multiple forms, and they are defined here.
│   ├── functions               // Functions are where the "workflow logic" for your solution goes.
│   ├── graphql
│   │   └── queries.ts          // You'll be able to build queries/mutations for your entities in here.
│   ├── hooks                   // Hooks attach workflow logic to your solution.
│   ├── solution.ts             // The entry point for your solution definition.
```

### Make a change to your solution

In [src/apps/patient.ts](./src/apps/patient.ts) change this:

```
  title: "Patient Application",
```

to a title of your choosing.

### Build and test your solution

You can develop your solution by running the following command:

```bash
yarn workbench
```

This command takes some time as it is spinning up a local database, multiple function apps, and web apps. It may be difficult to know when it is ready because it does its best to do all these things in parallel, and skips repetitive tasks. The result should be that the Ports tab in VS Code should show ports 3000 (3000+ for multiple web apps), 7071, 7072 and 21212, at minimum.

Then run:

```bash
yarn open-browser
```

This will open a new browser tab with your solution running. You should see the title you just changed in the top left.

If the browser tab doesn't open, you can open it manually by going to the "Ports" tab at the bottom of VS Code and clicking the "Open in Browser" button to the right of the line that says Port 3000.

> NOTE: If you're developing locally, you should then be able to open a browser window at `http://localhost:3000`

### Commit and push your changes

If you're unfamiliar with `git`, don't worry, this should be pretty simple using VS Code.

You'll need to 1. Add (stage) your changes, 2. Commit your changes, then 3. Commit & push (sync)

> **IMPORTANT NOTE:** Codespaces are ephemeral. If you don't commit _and_ push your changes, they will be lost when your codespace is deleted.

The VS Code docs offer a simple and great explanation
[here](https://code.visualstudio.com/docs/sourcecontrol/intro-to-git#_staging-and-committing-code-changes)

TL;DR

- Click the 3rd button down on the left side (three circles with connecting lines)
- Press the plus button next to the "Changes" list (make sure all files are listed under "Staged Changes")
- Enter a message like "Changed the solution name"
- Click Commit
- Click Sync

## Setting up GitHub Workflows

In order for the GitHub Workflow to run the validation steps, you will need to tell GitHub Actions your `THCARE_KEY` secret as well.  See [Creating secrets for a repository](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository) for more information.

## Further Reading

See our [Documentation](https://thfx.th.care) for more information on how to use the th.care Framework.
