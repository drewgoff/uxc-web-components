# How to create a web component library setup
***

### Step 1
Make sure you have node.js and npm installed on your computer.  Go to `https://nodejs.org/en/` to download it.


### Step 2
Go to the terminal and type in mkdir "folder-name" of your project


### Step 3
Go inside of the folder by typing `cd folder-name`


### Step 4
Create the npm json package file `npm init`.  Now go through the setup and type in the information you want.


### Step 5
In your terminal, download these three NPM packages from the website https://modern-web.dev/
- `npm i --save-dev @web/dev-server`
- `npm i --save-dev @web/dev-server-esbuild`
- `npm i --save-dev @web/test-runner`
- `npm i --save-dev @web/test-runner @esm-bundle/chai`


### Step 6
Open up your `package.json` file in your IDE and go to your `"scripts"` section.

Now type in these lines of code:

`"scripts": {`

	"start": "web-dev-server --node-resolve --open --watch",
	
	"clean": "find . -name 'node_modules' -exec rm -rf '{}' +",
	
	"test": "web-test-runner test/**/*.test.js --node-resolve",
	
	"test:watch": "web-test-runner test/**/*.test.js --node-resolve --watch"
  `},`


### Step 7
The next step in the terminal is to type in:
`npm install`


### Step 8
Now to test if your web server works, type in:
`npm start`

