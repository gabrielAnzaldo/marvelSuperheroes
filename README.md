# marvelSuperheroes
Awesome app to show awesome heroes

## Instructions to run the app
1. Clone the repo
2. run npm install
3. run npm start

### technical decisions
1. Build development environment from scratch, starting from an npm init. I did not use create-react-app or any similar tool. Why? In order to show a deep knowledge about tooling and the react ecosystem, and also for fun =).

2. Use normalize in order to reset default styles.

3. Use sass and a preset for JavaScript class properties.

4. Set up a linter ESLint and prettier for code formatting, set vscode to run eslint onSave so in  that way the tool format the code for me, and I just worry about coding.

5. Use npm git hooks, to enforce some task before commiting, ideally we should run npm run lint:js, npm run lint:scss and npm run test.

#### TODOS
1. Move api keys to a .env file

2. Prepare the app for production and host it in a service like surge.sh.

3. Add unit tests, integrations test, e2e test.

4. Separete webpack files for development and production.

