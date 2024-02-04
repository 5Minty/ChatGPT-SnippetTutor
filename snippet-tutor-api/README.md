# Snippet Tutor API Project
This project is a supplement to the ChatGPT Snippet Tutor Chrome Extension project. It exists as the middleman API for requests made to ChatGPT from the SnippetTutor Chrome extension.

## Development
To get started developing on this project, follow these steps:

1. Open a command terminal and `cd <repository-root>/snippet-tutor-api`
2. Execute `npm install`
3. Create a `/snippet-tutor-api/.env.local` file to hold your ChatGPT API Key. Add a line that looks like this: 
```
OPENAI_API_KEY=YOUR-API-KEY-HERE

e.g. 
OPENAI_API_KEY=abcd1234
```
4. Identify the URL of the chrome extension tab that you're developing on. The URL will look like:
```
chrome-extension://asldkhgfhwokdghasasdhg
```
5. Open `index.ts` and add your chrome extension URL to the `origin` list parmeter in the CORS Option object.
6. Now, to run this project, type `npm run dev`. Any changes made will automatically rebuild your project using [nodemon](https://nodemon.io/).