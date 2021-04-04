# NodeWatch
A nodejs script that recursively scans your npm dependencies to reveal the true number of dependencies your code has

## What is this?

It's no secret that Nodejs apps have a lot of dependencies. In fact, the size of the node_modules folder has become a meme. However, I've met far too many programmers who claim their app is lightweight, having "only 4 dependencies in the package.json". The thing is, each of those dependencies has possibly dozens of dependencies of their own, and their dependencies might have dependencies, and so on. In fact, Express, one of the most popular NPM packages, has 56 dependencies, including itself

__NodeWatch recursively scans your dependencies, traversing your dependency tree all the way down to discover the true number of dependencies you have.__

It allows you to quickly and easily discover the true size of your dependency tree, uncovering issues many devs didn't even know existed.

It's also just kinda fun

## Installing and Using

1. git clone this repository by running the command `git clone https://github.com/ThePotato10/node-watch.git`
2. Install the latest version of nodejs, if you don't already have it, by following the instructions [here](https://nodejs.dev/learn/how-to-install-nodejs)
3. Run NodeWatch by typing the command `node [your-install-location]/node-watch/src/app.js` in the directory you want to scan
4. Additionally, you can alias the above command if you want

## Contributing

Fork and contribute. All are welcome

## License

This project is licensed under the MIT license
