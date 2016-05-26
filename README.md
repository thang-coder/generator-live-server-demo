# generator-live-server-demo
A simple Yeoman generator to launch live-server at the end

### Step 1
Prepare a place for a new generator.

```
mkdir demo-time
cd demo-time
```

### Step 2
Use Yeoman's `generator-generator` to create the new generator. [Read more about:](https://github.com/yeoman/generator-generator) `generator-generator`

```
npm install -g generator-generator
yo generator
``` 

Yeoman will gather information by asking some questions about the new generator.

```
? Your generator name generator-live-server-demo
Your generator must be inside a folder named generator-live-server-demo
I'll automatically create this folder.
? Description A simple Yeoman generator to launch live-server at the end
? Project homepage url https://github.com/thang-coder/generator-live-server-demo
? Author's Name Thang
? Author's Email thang.coder@yandex.com
? Author's Homepage 
? Package keywords (comma to split) yeoman-generator,demo,silo
? Send coverage reports to coveralls Yes
? GitHub username or organization thang-coder
```


### Step 3
Coding time:
- Write code in `generators\app\index.js` file. Please read Yeoman's [official documentation](http://yeoman.io/authoring/index.html) for coding references. 
- Inspect and modify the dependent package list in `package.json` file
- Write documentation in `README.md` file


### Step 4
Run the new generator

```
npm link
mkdir sandbox
cd sandbox
yo live-server-demo
rm -rf ../sandbox
```