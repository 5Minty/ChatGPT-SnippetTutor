## Getting Started
First, install `pnpm`, (another package manager):

`npm install -g pnpm`

Then, cd to your source code for this project:

`cd <repos_path>/ChatGPT-SnippetTutor/`

## Adding .env files
For local development, you'll need to add a `.env.local` file at the application's root.

REMEMBER, THIS FILE SHOULD NEVER BE COMMITTED TO GIT. IT ONLY EXISTS ON YOUR COMPUTER. THAT IS WHY IT'S IN THE .GITIGNORE FILE. WE DON'T WANT OUR API KEYS ANYWHERE ON THE INTERNET.

In your `.env.local` file, add the following line:

```
PLASMO_PUBLIC_OPENAI_API_KEY=<YOUR_API_KEY>
```

## Doing Development
To run the development server:

```bash
pnpm dev
# or
npm run dev
```

If this doesn't work, you may need to re-boot whatever command terminal you're using.

Next, open your browser and load the appropriate development build. (You should only need to do this 1 time, ever).

1. Go to `chrome://extensions/`
2. Enable `Developer Mode` (Top-right)
3. Select `Load Unpacked` (Top-left)
4. In the File Explorer window that pops up, navigate to this folder in your repo and select it. This is the folder that your project is built into whenever you make changes
5. You should see `DEV | Snippet Tutor Plasmo` show up in your extensions.
6. Pin the extension to Chrome. If you don't know how to do that, look it up.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

## Submit to the webstores

The easiest way to deploy your Plasmo extension is to use the built-in [bpp](https://bpp.browser.market) GitHub action. Prior to using this action however, make sure to build your extension and upload the first version to the store to establish the basic credentials. Then, simply follow [this setup instruction](https://docs.plasmo.com/framework/workflows/submit) and you should be on your way for automated submission!
