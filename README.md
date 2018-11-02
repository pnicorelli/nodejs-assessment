# Cyrius - NodeJS Assessment

This is a simple test to show us how you code.

There are 2 functions which are breaking the tests.
Your job is about to make the tests pass successfully.


### Running the tests

clone the repo

```
git clone https://github.com/pnicorelli/nodejs-assessment.git
```

initialize project

```
cd node-assessment
npm install
```

first run

```
npm test
```

this command should show:

> Caesar encryption:
>   1) should have encrypt a text using Caesar Algorithm
>   2) should encrypt a text using Caesar Algorithm
>   3) should decrypt a text with Caesar Algorithm
>
> Vigenere encryption:
>   4) should have encrypt a text using Caesar Algorithm
>   5) should encrypt a text using Vigenere Algorithm
>   6) should decrypt a text with Vigenere Algorithm
>
>
> 0 passing (7ms)
> 6 failing


then you can open your $favoriteEditor and fix those tests :)

### Algorithms

[Caesar](https://en.wikipedia.org/wiki/Caesar_cipher) and [Vigenere](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher) are encryption techniques based on alphabet substitution ciphers.

You must implements those algorithms in the files located in `./src/`. The files already exists but are empty.

### Submit the work

Once tests says:

```
Caesar encryption:
  ✓ should have encrypt a text using Caesar Algorithm
  ✓ should encrypt a text using Caesar Algorithm
  ✓ should decrypt a text with Caesar Algorithm

Vigenere encryption:
  ✓ should have encrypt a text using Caesar Algorithm
  ✓ should encrypt a text using Vigenere Algorithm
  ✓ should decrypt a text with Vigenere Algorithm


6 passing (7ms)
```

you're done!

Because *pull request* are not an option the best way to send us your work is by mail.

You can pack the code running `npm run-script pack`: a *$yourname.tar.gz* file will be created in the project directory. Or you can just zip the whole project, it's the same.

Then send to us the file.
