# th.care Framework Solution Template

![th.care logo](thcare-logo.png)

Welcome to YOUR th.care Framework powered Solution!

## Quickstart

### Create your own repo from this template

Click the button "Use this template" then click "Create a new repository"

---

**IMPORTANT NOTE**

For the demo, we ask that:

1. Everyone put the repo in the `thcare` org (it won't work otherwise)
2. Prefix the name in their repo like this `solution-<name>`. Replace `<name>` with your name, or whatever you'd like.
3. Ensure sure the repo is _private_.

---

### Start a codespace

The fastest way to get started is to spin up a codespace! Click the "Code" button in the top right of your repo, and select "Open with Codespaces". This will take a few minutes to spin up.

You'll get a new browser tab running VS Code with this readme open. See you on the other side!

### Install dependencies

Once your codespace is up and running, you'll need to install the dependencies. Open a terminal in VS Code (Terminal > New Terminal) and run:

```bash
yarn
```

### A tour of the (important) files in this solution

```
├── FnOnIntakeFormSubmitted     // This is necessary for how functions are deployed (currently)
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

### Ready to deploy!

You will need to get some credentials and set them in your GitHub
repository, then you will be able to use the Deploy solution action to
see your solution live.

```bash
npx thfx init <name>
```

Replace `<name>` with the same name you used in your repository naming earlier (i.e. `solution-<name>`).

> **NOTE:** This relies on some variables that are set in codespaces, so if you're not using a codespace, you'll need to set these manually. See the [thfx init command documentation](https://github.com/thcare/dev.th.care/blob/main/docs/cli/init.md) and [Documentation Wiki](https://github.com/thcare/docs/wiki) for details.

Once this runs successfully, you should be able to go to your repo:
`https://github.com/thcare/<FILL_IN_YOUR_SOLUTION_REPO>/actions/workflows/deploy-solution.yml`
And click "Run workflow". You should then be able to follow along with the
deployment by watching the logs, or simply wait for the run to succeed
(or fail! These are early days for the framework, and your patience is
valued)

Once the deployment is complete, you should be able to visit your solution, live at:
`https://patient.<YOUR_SOLUTION_NAME>.dev.thdev.care/`

## Further Reading

See our [Documentation Wiki](https://github.com/thcare/docs/wiki) for more information on how to use the th.care Framework.
