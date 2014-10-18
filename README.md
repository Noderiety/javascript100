#Noderiety JavaScript 100

##URL
[https://github.com/Noderiety/javascript100/](https://github.com/Noderiety/javascript100/)

##IRC
\#noderiety on freenode.net

##Schedule

* 5:30p: Overview & Execution Environments: [node.js](http://nodejs.org/), [Google Chrome Developer Tools](https://developers.google.com/chrome-developer-tools/)
* 5:45p: Basics & Primitives
* 6:15p: Functions, Functions, Functions* 
* 7:15p: this
* 7:30p: Object.create
* 8:00p: [Prototypal Inheritance](http://www.slideshare.net/Dmitry.Baranovskiy/demystifying-prototypes-6183470)
* 8:50p: Logging, Errors
* 9:00p: [ES6](https://github.com/google/traceur-compiler/wiki/LanguageFeatures) & ["strict mode"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode)
* 09:30: Workshops:
  * [Javascripting (Language introduction)](https://github.com/sethvincent/javascripting)
  * [Functional JavaScript](https://github.com/timoxley/functional-javascript-workshop)
  * [Count-to-6 (ES6 introduction)](https://github.com/domenic/count-to-6)
  * [Planetproto (Prototypal inheritance introduction)](https://github.com/sporto/planetproto)
  * [Lololodash](https://github.com/mdunisch/lololodash) 

<!--- Full Day
* 09:00: [Execution](http://nodejs.org/) [environments](https://developers.google.com/chrome-developer-tools/) & [Overview](https://github.com/Noderiety/javascript100/)
* 09:15: Basics & Primitives
* 1:00p: Functions, Functions, Functions
* 11:30: [Workshop: Lololdash](http://nodeschool.io/#lololodash) 
* 12:00: Lunch
* 10:30: Object.create
* 11:00: this
* 2:00p: Prototypal Inheritance
* 3:00p: Break
* 3:15p: Logging, Errors
* 3:45p: ES6: ["strict mode" & block scoping](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode)
* 4:30p: [Workshop: Functional JavaScript](http://nodeschool.io/#functionaljs)
-->

##Preparation
Install [nvm](https://github.com/creationix/nvm):

```
# Mac / Linux
curl https://raw.githubusercontent.com/creationix/nvm/v0.17.2/install.sh | bash

# Windows
npm install -g n
```

Install latest:

```
# Mac / Linux
nvm install v0.11 # Current version is >= 0.11.14

# Windows
n latest
```

Or, install stable:

```
# Mac / Linux
nvm install v0.10 # Current version is >= 0.10.32

# Windows
n stable
```

Set npm install directory:

```
# Mac / Linux
mkdir ~/.npmprefix
npm config set prefix ~/.npmprefix

# Windows
# Necessary?
```

and add to PATH:

```
# Mac
echo “export PATH=`npm config get prefix`/bin:$PATH” >> ~/.bash_profile
source ~/. bash_profile

# Linux
echo “export PATH=`npm config get prefix`/bin:$PATH” >> ~/.bashrc
source ~/. bashrc

# Windows
# Necessary?
```

##Workshops
####Assigned workshops:
1. [Javascripting (Language introduction)](https://github.com/sethvincent/javascripting)
1. [Functional JavaScript](https://github.com/timoxley/functional-javascript-workshop)
1. [Count-to-6 (ES6 introduction)](https://github.com/domenic/count-to-6)
1. [Planetproto (Prototypal inheritance introduction)](https://github.com/sporto/planetproto)
1. [Lololodash](https://github.com/mdunisch/lololodash)

Workshops can be run in 1 of 2 ways:

####Local executable:
```
$ npm install functional-javascript-workshop # UNNECESSARY, INCLUDED IN REPO
$ ./npm_exec functional-javascript-workshop
```
####Global install and executable:
```
$ npm install functional-javascript-workshop -g
$ functional-javascript-workshop
```

##Resources
[JavaScript Garden](http://bonsaiden.github.io/JavaScript-Garden/)

[Perfection Kills' deep dives](http://perfectionkills.com/)

[Douglas Crockford's JavaScript Resources](http://javascript.crockford.com/)

[Eloquent JavaScript](http://eloquentjavascript.net/contents.html)

[MDN, Mozilla Developer Nework](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (the de facto language reference)

[Introduction to JavaScript](http://adamonio.us/wexcode/66/introduction-to-javascript/)