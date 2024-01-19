# ChatGPT-SnippetTutor

To make your application usable by others with their own API key, you should consider allowing users to input their API key as a configuration option. One way to do this is to create an environment variable that users can set when running the application. Here are the steps:

1. Update the Environment Variable for API Key:

Remove the hard-coded API key from your code.
Use process.env.NEXT_PUBLIC_OPENAI_API_KEY to retrieve the API key from the environment variable.

const openai = new OpenAI({
apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
dangerouslyAllowBrowser: true,
});

2. Create a .env.local File:

Create a .env.local file in the root of your project.

NEXT_PUBLIC_OPENAI_API_KEY=YOUR_API_KEY_HERE

Add a placeholder for your API key, and instruct users to replace it with their own key.

3. Update .gitignore File:

Ensure that your .env.local file is added to the .gitignore file to prevent accidentally committing sensitive information.

.env.local

4. Update README or Documentation:

Include instructions in your README or documentation explaining how users can obtain their OpenAI API key and set it in the .env.local file.

5. Provide Default Key in Code: TODO

Optionally, you can provide a default API key in your code for testing purposes. This can be useful for users who just want to quickly try out the application.

const defaultAPIKey = "YOUR_DEFAULT_API_KEY";
const openai = new OpenAI({
apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || defaultAPIKey,
dangerouslyAllowBrowser: true,
});

Remember, it's essential to guide users on how to keep their API keys secure and not expose them publicly, especially if they plan to deploy the application. Providing clear instructions in your documentation can help users set up their API keys correctly.
