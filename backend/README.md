## How to play with the tasks
1. follow the hints inside this readme file
2. some tasks require the code change, search for the keywords `todo-`, you will see the `todo-2.1` `todo-3.1` such things, then follow the hint and change the code.
3. if you stuck in some task, go to this [change](https://github.com/zkwzk/todolist/commit/2967c66c6d79c4b136ce85a74927c266b5f046f2) and find out what's the correct
4. you can also check out this commit to get a working version, `git checkout 2967c66c6d79c4b136ce85a74927c266b5f046f2`

Todolist Tasks:
1. add dependency of Express.js
   1. option 1: via `npm install --save [package name]`
   2. option 2: via modify the `package.json` and run `npm install`
2. implement and export a module function of create task
3. import the module function and use it
4. `npm start`
   1. to test the implementation, run `npm test`, if the unit test pass, then your implementation is correct,
   2. to test the api, run `curl -d '{"task":"a new task"}' -H "Content-Type: application/json" -X POST http://localhost:3001`, it will return an array include `a new task`
5. add custom command `npm run hello`
   1. you need to go to the `package.json` and under the `script` field, add a new command `hello` with the value `node hellotechladies.js`
   2. then try `npm run hello`, if success, you will see a `hello TechLadies`