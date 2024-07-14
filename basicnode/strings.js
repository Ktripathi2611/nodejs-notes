let str1 = "Static";
console.log(typeof (str1));
console.log(str1.length);

console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

// Write something about your favorite actor and convert the sentence into upper and lowercase and find the length

let str2 = "Hello World";
console.log(str2.charAt(5));
console.log(str2.charAt(4).toUpperCase());
console.log(str2.charAt(6).toLowerCase());

// Consider the string "Static Int Educare", convert it into lowercase and print the characters at odd and even indexes seperately. Character at even: , Character at odd: 
let str3 = "Static Int Educare".toLowerCase();

let oddIndex = "";
let evenIndex = "";

for (let i = 0; i < str3.length; i++) {
    if (i % 2 == 0) {
        evenIndex += str3[i];
    } else {
        oddIndex += str3[i];
    }
}

console.log("Even Characters: ", evenIndex);
console.log("Odd Characters: ", oddIndex);

// Consider the following sentence and print all the characters at the indexes. "My name is {Your Name}". it should be printed as 'Character at index 0 is M, Character at index 1 is y, and so on..

let myname = "Krishna";
let char = "";

for (let j = 0; j < myname.length; j++) {
    char += myname.charAt(j);
    console.log("Character at index " + j + ":", myname[j]);
}

let str4 = "Hello World";
console.log(str4.includes('e'));
console.log(str4.includes('Hello'));

/*
Consider the following sentence:
"Javascript bohot confusing hai bhai." and count the occurence of a.
*/
let str6 = "Javascript bohot confusing hai bhai."
let count = 0;
for (let i = 0; i < str6.length; i++) {
    if (str6[i] == 'a')
        count++
}
console.log(str6.includes('a'))
console.log(count);

let str5 = "Static Int";
console.log(str5.substring(0, 5));
console.log(str5.startsWith('S'));

// Can you develop its code ????

console.log(str5.endsWith('T'));

// Can you develop its code ????
function check_start(str, ch) {
    if (str[0] == ch) {
        return true
    }
    else {
        return false
    }
}

function check_end(str, ch) {
    if (str[str.length - 1] == ch) {
        return true
    }
    else {
        return false
    }
}
console.log(check_start("Sanjay", "S"));
console.log(check_end("Sanjay", "p"));

let str7 = "    Hello World    !    ";
console.log(str7.trim());
console.log(str7.trimStart());
console.log(str7.trimEnd());

let str8 = "Mind, Power, Soul";
console.log(str8.replace("Power", "Space"));

let str9 = "Mallu bhai ";
let str10 = "Jaggu Dada";
console.log(str9.concat(str10));
    
