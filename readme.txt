Install Node.js to your system.

Create a folder for your prooject.

Initiate your project with -> npm init  <- problem might be for Path not define for npm commands.

Edit your package.json file to change the entry point inside scripts object -> test -> 'node <filename>.js' preferred as index.js.

Install dependency nodemon for development ease command -> npm install -D nodemon.

Open package.json add new parameter to 'scripts' as "dev" : "nodemon index.js" <- Warning!!! Don't forget to follow json structure. And this is only for development.

In the terminal use 'npm run dev' command.

Install microsoft SQL with command 'npm install mssql'

create react project npm create-react-app <project name>

add proxy to new project's package file -> "proxy" : "http://localhost:3001"

install react router dom -> npm i react-router-dom

npm start
