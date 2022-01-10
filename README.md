# This repo documents my journey through typescript

Also i will use as a cheatsheet later on. 

The files and challanges based on this book:

[No BS TS, The Book” © 2021, Jack Herrington](https://no-bs-ts.myshopify.com/)

## Init a new repostiory

### Init the npm repository
```
npm init -y
```
### Add typescirpt and ts-node to be able to run .ts scripts on the fly
```
npm add TypeScript ts-node -D
```
### Init typescirpt config
```
 npx tsc - init
```

The above command will add a nice default setup for a typescript project.


## Tips:
* Use [FNM](https://github.com/Schniz/fnm) for Node.js version management
* via .npmrc you can control the version 

        node -v > .npmrc

* Run individual test files:

        npx ts-node .\src\challanges\challange-2\filter.ts