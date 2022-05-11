# SD-Paywall-CTF

## Description

This is just a little ctf that was inspired by the paywall of [StuDocu](https://studocu.com/).
Their paywall is really easy to crack, but the ctf is a bit more difficult because you can't make any changes to the body (3 exceptions) and the position of the flag is randomized.

I did not report anything to [StuDocu](https://studocu.com/) because it's very obvious that this is possible and they probably get a report each day.

If you think this should be reported: Go ahead, maybe they'll fix it.

## How to play

### **1. Clone the repo**

```shell
git clone "https://github.com/RC-14/SD-Paywall-CTF.git"
```

### **2. Run the http server**

```shell
npm run start
```

I won't tell you how to install `node` or how  to use `cd`.
The internet exists.

Configuration is possible with these environment variables (obviously only numbers allowed):

- PORT: The port to listen on (default: 8080)
- FLAG_LENGTH: The length of the flag (default: 15). This is not the amount of characters, but the amount of random strings inside flag{}.
- FAKES: The amount of fake flags (default: 9).

### **3. Visit the website**

Something like `http://localhost:8080/`.
Just visit the website like any other website. (JavaScript is must be enabled - technically it's not but it's too easy if you disable it.)

### **4. Get the flag**

The flag looks something like this: `flag{random...string}`. (You'll instantly see if the flag is fake without even submitting it.)

There are multiple ways to get the flag:
<details>
<summary>Minor Spoilers (not the solution)</summary>
- CSS
- JS
</details>

### **5. Submit the flag**

Copy the flag into the text field and submit it. (Don't worry, about whitespaces, they're automatically removed by the submit button.)

![2022-05-11_03-25-05](https://user-images.githubusercontent.com/61058098/167750426-050f38c5-f9e7-468a-8ce5-1b813476f90f.png)

If you are unable to copy the flag try disabling all extensions and reload the page.

### **6. You win!** (if you submitted the right flag)
