#Noderiety JavaScript 100

##URL
[https://github.com/Noderiety/javascript100/](https://github.com/Noderiety/javascript100/)

##IRC
\#noderiety on freenode.net

##Schedule

<!--- Full Day
* 5:30p: Overview & Execution Environments: [node.js](http://nodejs.org/), [Google Chrome Developer Tools](https://developers.google.com/chrome-developer-tools/)
* 5:45p: Basics & Primitives
* 6:15p: Functions
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
-->

* 09:30: Overview & Execution Environments: [node.js](http://nodejs.org/), [Google Chrome Developer Tools](https://developers.google.com/chrome-developer-tools/)
* 09:45: Basics & Primitives
* 10:30: Functions
* 11:15: [ES6](https://github.com/google/traceur-compiler/wiki/LanguageFeatures) & ["strict mode"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode)
* **11:45: Lunch**
* 12:45: Class-based Inheritance
* 1:15p: Logging, Errors
* 1:30p: Workshops:
  * [Javascripting (Language introduction)](https://github.com/sethvincent/javascripting)
  * [Count-to-6 (ES6 introduction)](https://github.com/domenic/count-to-6)
* 2:30p: this
* 2:45p: Object.create
* 3:00p: Break
* 3:15p: [Prototypal Inheritance](http://www.slideshare.net/Dmitry.Baranovskiy/demystifying-prototypes-6183470)
* 4:00p: Workshops:
  * [Functional JavaScript](https://github.com/timoxley/functional-javascript-workshop)
  * [Planetproto (Prototypal inheritance introduction)](https://github.com/sporto/planetproto)
  * [Lololodash](https://github.com/mdunisch/lololodash) 


##Preparation
Install [nvm](https://github.com/creationix/nvm):

```
# Mac / Linux
curl https://raw.githubusercontent.com/creationix/nvm/v0.17.2/install.sh | bash
source ~/.bashrc

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
echo 'export PATH=`npm config get prefix`/bin:$PATH' >> ~/.bash_profile
source ~/.bash_profile

# Linux
echo 'export PATH=`npm config get prefix`/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

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