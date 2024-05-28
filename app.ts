// // Exercise 1.
// console.log("Hello World!");

// // Exercise 2.	Personal Message: Store a person’s name in a variable, and print a message to that person.
// // Your message should be simple such as, “Hello Eric, would you like to learn some Python today?”
// let personName: string= "ERIC";
// console.log(`Hello ${personName} would you like to learn some Python today?`);

// // Exercise 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase and titlecase.
// // lower case
// let personName: string ="Kiran"
// console.log("lowercase:", personName.toLowerCase());

// // upper case
// console.log("uppercase:", personName.toLocaleUpperCase());

// // Title case
// console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));

// // Exercise 4.	Famous Quote: Find a quote from a famous person you admire. 
// // Print the quote and the name of its author. 
// // Your output should look something like the following, including the quotation marks: 
// //"Albert Einstein once said, “A person who never made a mistake never tried anything new.”

// let quote: string= "A person who never made a mistake never tried anything new.";
// let author: string= "Albert Einstein";
// console.log(`${author} once said, "${quote}"`);

// // Exercise 5.	Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
// //Then compose your message and store it in a new variable called message. Print your message.
// let quote: string= "A person who never made a mistake never tried anything new.";
// let famous_person= "Albert Einstein";
// let message= `${famous_person} once said, ${quote}`;
// console.log(message);

// // Exercise 6.	Stripping Names: store a person’s name, and include some whitespace characters at the beginning and end of the name.
// // Make sure you use each character combination, “/t” and “/n”, at least once. 
// //Print the name once, so the whitespace around the name is displayed.
// // Then print the name after striping the white spaces.
// let personName: string= `\n\t IMRAN KHAN \t\n`;
// console.log(personName);
// let stripped: string = personName.trim();
// console.log(stripped);

// // Exercise 7 & 8.	Number Eight: write addition, substraction, multiplication, and division operations that each result in the number 8.
// // Be sure to enclose your operations in print statements to see the results. 
// console.log(5 + 3);
// console.log(11 - 3);
// console.log(4 * 2);
// console.log(16 / 2);

// // Exercise 9.	Favorite Number: store your favorite number in a variable. Then, using that variable, 
// // create a message that reveals your favorite number. Print that message.
// let favoriteNumber : number = 9;
// console.log(`My favorite number is ${favoriteNumber}`);

// // Exercise 10. 
// // my name is KIRAN
// // Dated: 09/03/2024
// // this program will run simple code just like hello world
// console.log('How to add comments in a simple program');

// // 11.	Names: Store the names of a few of your friends in an array called names. 
// //Print each person’s name by accessing each element in the list, one at a time
// let members: string [] = ['Azam','Gul','Faraz','Hamza','Samar'];
// for(let i = 0; i <members.length; i++){
//     console.log(members[i]);
// }

// //12.	Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
// // The text of each message should be the same, but each message should be personalized with the person’s name.
// let members: string [] = ['Kiran', 'Gul', 'Faraz', 'Hamza', 'Samar'];
// let message: string = 'What is your plan tomorrow?';
// for (let i = 0; i < members.length; i++) {
//     console.log(message + members[i]);    
// }

// //13.	Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. 
// //Use your list to print a series of statements about these items, 
// //such as “I would like to own a Honda motorcycle”
// let transportation: string [] = ['Honda', 'Hilux', 'BRV'];
// for(let i=0; i<transportation.length; i++){
//     console.log('I would like to own a ' + transportation [i]);
// }

// //14.	Guest List: if you could invite anyone, living or deceased, to dinner, 
// // who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
// // Then use your list to print a message to each person, inviting them to dinner.
// let guest_list : string [] = ['Faraz' , 'Hamza' , 'Khadija' , 'Mohadisa'];
// for (let i = 0; i < guest_list.length; i++) {
//     console.log('Respected Sir/Madam ' + guest_list [i] + ',\n We are inviting you for a Dinner tomorrow. \n Thank You!\n\n');
    
// }
// export{guest_list}

// //15.	Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
// //You’ll have to think of someone else to invite.
// //•	Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// //•	Modify you list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// //•	Print second set of invitation messages, one for each person who is still in your list.

// let guest_list : string [] = ['Faraz' , 'Hamza' , 'Khadija' , 'Mohadisa'];
// for (let i = 0; i < guest_list.length; i++) {
//     console.log('Respected Sir/Madam ' + guest_list [i] + ',\n\n We are inviting you for a Dinner tomorrow. \n\n Thank You!\n\n');
// }
// let not_present : string = `Khadija`;
// let new_guest : string = `Kiran`;
// guest_list [2] = new_guest;
// for (let i = 0; i < guest_list.length; i++) {
//     console.log('Respected Sir/Madam ' + guest_list [i] + ',\n\n We are inviting you for a Dinner tomorrow. \n\n Thank You!\n\n');
// }
// console.log(`Ms ${not_present} will not be coming to attend tomorrow dinner.`);

// //16.	More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// //•	Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// //•	Add one new guest to the beginning of your array.
// //•	Add one new guest to the middle of your array. 
// // Use append () to add one new guest to the end of your list. 
// // Print a new set of invitation messages, one of each person in your list.

// let guest_list : string [] = ['Faraz' , 'Hamza' , 'Khadija' , 'Mohadisa'];
// // for (let i = 0; i < guest_list.length; i++) {
// //     console.log('Respected Sir/Madam ' + guest_list [i] + ',\n\n We are inviting you for a Dinner tomorrow. \n\n Thank You!\n\n');
// // }
// let not_present : string = `Khadija`;
// let new_guest : string = `Kiran`;
// guest_list [2] = new_guest;
// for (let i = 0; i < guest_list.length; i++) {
//     console.log('Respected Sir/Madam ' + guest_list [i] + ',\n We are inviting you for a Dinner tomorrow. \n Thank You!\n\n');
// }
// guest_list.unshift('Ramiz', 'Hassan', 'Sultan');
// for (let i = 0; i < guest_list.length; i++) {
//     console.log('Respected Sir/Madam ' + guest_list [i] + ',\n We are inviting you for a Dinner tomorrow. We found bigger dinner table so we decide to invite 3 more guests\n Thank You!\n\n');
// }

// //17.	Shrinking Guest List: You just found out that your new dinner tale won’t arrive in time for the dinner, and you have space for only two guests.
// //•	Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// //•	Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
// //  print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// //•	Print a message to each of the two people still on your list, letting them know they’re still invited.
// //•	Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

// let guest_list : string [] = ['Faraz' , 'Hamza' , 'Khadija' , 'Mohadisa'];
// // for (let i = 0; i < guest_list.length; i++) {
// //     console.log('Respected Sir/Madam ' + guest_list [i] + ',\n\n We are inviting you for a Dinner tomorrow. \n\n Thank You!\n\n');
// // }
// let not_present : string = `Khadija`;
// let new_guest : string = `Kiran`;
// guest_list [2] = new_guest;
// // for (let i = 0; i < guest_list.length; i++) {
// //     console.log('Respected Sir/Madam ' + guest_list [i] + ',\n We are inviting you for a Dinner tomorrow. \n Thank You!\n\n');
// // }
// guest_list.unshift('Ramiz', 'Hassan', 'Sultan');
// // for (let i = 0; i < guest_list.length; i++) {
// //     console.log('Respected Sir/Madam ' + guest_list [i] + ',\n We are inviting you for a Dinner tomorrow. We found bigger dinner table so we decide to invite 3 more guests\n Thank You!\n\n');
// // }
// console.log('\nUnfortunately we cannot arrange big table, only two people allowed.')
// while(guest_list.length>2){
//     let remove_guest = guest_list.pop();
//     console.log(`Sorry Sir/Madam, ${remove_guest} you are not invited for dinner.`);
// }
// for (let i = 0; i < guest_list.length; i++) {
//     console.log('Respected Sir/Madam ' + guest_list [i] + ',\nYes, you are still invited on tomorrow dinner.\n Thank You!\n');
// }
// guest_list.splice(0,2)
// console.log(guest_list)

// //18.	Seeing the World: Think of at least give places in the world you’d like to visit.
// // •	Store the locations in an array. Make sure the array is not in alphabetical order.
// // •	Print your array in its original order.
// let places : string [] = ['Cape town', 'Mumbai', 'Karachi', 'Tehran', 'Istanbul']
// // console.log('original :' + places);
// //•	Print your array in alphabetical order without modifying the actual list.
// // console.log('copy ' + [...places].sort());
// //•	Show that your array is still in its original order by printing it.
// // console.log('original :' + places);
// //•	Print your array in reverse alphabetical order without changing the order of the original list.
// console.log('copy ' + [...places].sort().reverse());
// //•	Show that your array is still in its original order by printing it again.
// console.log('copy ' + [...places].sort().reverse());
// //•	Reverse the order of your list. Print the array to show that its order has changed
// console.log('original :' + places.sort());
// //•	Reverse the order of your list again. Print the list to show it’s back to its original order
// console.log('original :' + places.sort().reverse());

// //19.	Dinner Guests: Working with one of the programs from exercises 14 through 18, 
// // print a message indicating the number of people you are inviting to dinner.
// import{ guest_list } from '../14 Guest List/main'
// console.log(`n\ PRINTING NUMBER OF GUEST INVITED`)
// console.log(`we had finally invited ${guest_list.length} from excersice 14`);

// //20.Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
// //Write a program that creates a list containing these items.
// let mountains : string [] = ['Everest', 'K-2', 'Manaslu', 'Broad Peak', 'Nanga Parbat']
// console.log("list of mountains: ")
// for (let top of mountains) {
//     console.log(top)
    
// }

// //21.They think of something you could store in a Typescript Object. 
// //Write a program that creates objects containing these items.
// interface item{
//     name:string
//     price:number
// }
// // create two objects
// const book: item = {
//     name : 'ESSENTIAL TYPESCRIPT V',
//     price : 1450
// }
// const laptop: item = {
//     name : 'LENOVO',
//     price : 65000
// }
// console.log(`book name: ${book.name}, price: Rs.${book.price}`)
// console.log(`laptop name: ${book.name}, price: Rs.${laptop.price}`)

// //22.	Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
// //Change an index in one of your programs to produce an index error.
// // Make sure you correct the error before closing the program.

// let array: (string | number) [] = ['Kiran', 'Faraz', 9,7,25, "Hamza"]
// console.log(array[5])
// console.log(array[4])
// console.log(array[1])
// console.log(array[3])
// console.log(array[0])
// console.log(array[2])

// //23.	Conditional Tests: Write a series of conditional tests.
// // Print a statement describing each test and your prediction for the results of each test. 
// //Your code should look something like this:
// //let car = ‘subaru’;
// //console.log(“Is car ==’subaru’? I predict True.”)
// //console.log(car == ‘subaru’)
// //Look closely at your results, and make sure you understand why each line evaluates to True or False.
// //Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False

// let cars: string = 'subaru';

// // Test 1: Equality comparison (True)
// console.log("Is car =='subaru'? I predict True.")
// console.log(cars == 'subaru'); // True

// // Test 2: Strict Equality comparison (True)
// console.log("Is car ==='subaru'? I predict True.")
// console.log(cars === 'subaru'); // True

// // Test 3: InEquality comparison (False)
// console.log("Is car !='subaru'? I predict True.")
// console.log(cars != 'subaru'); // False

// // Test 4: Strict InEquality comparison (False)
// console.log("Is car !=='subaru'? I predict True.")
// console.log(cars !== 'subaru'); // False

// // Test 5: Less than comparison (False)
// console.log("Is car < 'subaru'? I predict True.")
// console.log(cars < 'subaru'); // False (lexicographic comparison)

// // Test 6: Greater than comparison (False)
// console.log("Is car > 'subaru'? I predict True.")
// console.log(cars > 'subaru'); // False (lexicographic comparison)

// // Test 7: Less than or equal comparison (True)
// console.log("Is car <= 'subaru'? I predict True.")
// console.log(cars <= 'subaru'); // True

// // Test 8: Greater than or equal comparison (True)
// console.log("Is car >= 'subaru'? I predict True.")
// console.log(cars >= 'subaru'); // True

// // Test 9: Checking Truthiness (True)
// console.log("Is car ? 'subaru'? I predict True.")
// console.log(cars); // True (non-empty string is truth)

// // Test 10: Checking Falseness (False)
// console.log("Is !car ? 'subaru'? I predict False.")
// console.log(cars); // False (negation of a truthy value)

// //24.	More conditional Tests: You don’t have to limit the number of tests you create to 10. 
// //If you want to try more comparisons, write more thests. 
// //Have at least one True and one False result for each of the following:
// //•	Tests for equality and inequality with strings.
// //•	Tests using the lower case function
// //•	Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// //•	Tests using “and” and “or” operators
// //•	Test whether an item is in a array
// //•	Test whether an item is not in a array

// let car: string = 'subaru';
// let age: number = 25;
// let numbers: number[] = [1, 2, 3, 4];

// // **String tests**

// //Test 1: Equality (True)
// console.log("Is car == 'Subaru'? I predict True.");
// console.log(car == 'Subaru'); // True (case-insensitive)

// //Test 2: Strict equality (True)
// console.log("Is car === 'Subaru'? I predict False.");
// console.log(car === 'Subaru'); // False (case-insensitive)

// //Test 3: Inequality (True)
// console.log("Is car != 'Toyota'? I predict True.");
// console.log(car != 'Toyota'); // True (case-insensitive)

// //Test 4: Inequality (False)
// console.log("Is car !== 'Subaru'? I predict False.");
// console.log(car !== 'Subaru'); // False (case-insensitive)

// // **Lower Function Test**

// // Test 5: Lowercase conversion (True)
// console.log("Is car.toLowerCase() == 'Subaru'? I predict True.");
// console.log(car.toLowerCase() == 'subaru'); // True (converted to lowercase)

// // Test 6: Lowercase conversion (False)
// console.log("Is car.toLowerCase() === 'Subaru'? I predict False.");
// console.log(car.toLowerCase() === 'subaru'); // False (original value remains uppercase)


// // **Numerical Tests**

// // Test 7 Equality (True)
// console.log("Is age ==25? I predict True.");
// console.log(age == 25); // True

// // Test 8 InEquality (False)
// console.log("Is age != 30? I predict True.");
// console.log(age != 30); // True

// // Test 9: Greater than (False)
// console.log("Is age > 30? I predict False.");
// console.log(age > 30); // False

// //Test 10: Less than or equal (True)
// console.log("Is age <= 25? I predict True.")
// console.log(age <= 25); // True


// // **Logical Operators**

// // Test 11: AND (True)
// console.log("Is age > 20 && age < 30? I predict True.");
// console.log (age > 20 && age < 30); // True (both conditions)

// // Test 12: OR (False)
// console.log("Is age > 30 || age < 18? I predict False.");
// console.log (age > 30 || age < 18); // False (neither condition met)


// // **Array Tests**

// // Test 13: In array (True)
// console.log("Is 3 in numbers? I predict True");
// console.log(3 in numbers); //true

// // Test 14: Not In array (False)
// console.log("Is 5 not in numbers? I predict True");
// console.log(5 in numbers); // False (negation of "in" operator)

// //25.	Alien Colors #1: Imagine an alien was just shot down in a game. 
// //Create a variable called alien_color and assign it a value of ‘green’, ‘yellow’, or ‘red’.

// //•	Write an if statement to test whether the alien’s color is green. 
// //If it is, print a message that the player just earned 5 points.

// // let alien_color : string = "green";
// // if(alien_color == "green"){
// //     console.log("the player just earned 5 points.")
// // }

// //•	Write one version of this program that passes the if test and another that fails. 
// //(The version that fails will have no output.)

// let alien_color = "yellow";

// if(alien_color == "green"){
//     console.log("the player just earned 5 points.")
// }

// //26.	Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if_else chain.
// //•	If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// //•	If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// //•	Write one version of this program that runs the if block and another that runs the else block.

// let alien_color = "green"; // Define the color of the alien

// // Check if the alien is green
// if (alien_color === "green") {
//     console.log("The player just earned 5 points for shooting the alien.");
// } else {
//     console.log("The player just earned 10 points.");
// }

// alien_color = "red"; // Change the color of the alien

// // Check if the alien is green again
// if (alien_color === "green") {
//     console.log("The player just earned 5 points for shooting the alien.");
// }

// //27.	Alien color #3: Turn your if-else chain from Exercise 25-26into an if-else chain.


// let alien_color: string = "green"; // Define the color of the alien

// //•	If the alien is green, print a message that the player earned 5 points.
// if (alien_color == "green") {
//     console.log("The player earned 5 points.");
// }

// //•	If the alien is yellow, print a message that the player earned 10 points.
// else if (alien_color == "yellow") {
//     console.log("The player just earned 10 points.");
// }

// //•	If the alien is red, print a message that the player earned 15 points.

// else if (alien_color == "red") {
//     console.log("The player just earned 15 points.");
// }

// //•	Write three versions of this program, 
// //making sure each message is printed for the appropriate color alien.

// else {
//     console.log("Please select right color.");
// }

// // version 2

// alien_color = "red";
// if (alien_color == "green") {
//     console.log("The player earned 5 points.");
// }
// else if (alien_color == "yellow") {
//     console.log("The player just earned 10 points.");
// }
// else if (alien_color == "red") {
//     console.log("The player just earned 15 points.");
// }
// else {
//     console.log("Please select right color.");
// }

// //version 3

// alien_color = "yellow";
// if (alien_color == "green") {
//     console.log("The player earned 5 points.");
// }
// else if (alien_color == "yellow") {
//     console.log("The player just earned 10 points.");
// }
// else if (alien_color == "red") {
//     console.log("The player just earned 15 points.");
// }
// else {
//     console.log("Please select right color.");
// }

// //28.	Stages of Life: Write an if-else chain that determines a person’s stage of life. 
// // Set a value for the variable age, and then,
// //•	If the person is less than 2 years old, print a message that the person is a baby.

// let age : number = 65;
// if(age < 2){
//     console.log("the person is a baby.")
// }
// //•	If the person at least 2 years old but less than 4, print a message that the person is a toddler.
// else if(age >=2 && age<4){
//     console.log("the person is a toddler.")
// }
// //•	If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// else if(age>= 4 && age<13){
//     console.log("the person is a kid")
// }
// //•	If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// else if(age>= 13 && age<20){
//     console.log("the person is a teenager")
// }
// //•	If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// else if(age>= 20 && age<65){
//     console.log("the person is an adult")
// }
// //•	If the person is age 65 or older, print a message that the person is an elder.
// else{
//     console.log("the person is an elder.")
// }

// //29.	Favorite Fruit: Make a array of your favorite fruits, 
// //and then write a series of independent if statements that check for certain fruits in your array.
// //•	Make a array of your three favorite fruits and call if favorite_fruits.
// //•	Write five if statements. Each should check whether a certain kind of fruit is in your array.
// // If the fruit is in your array, the if block should print a statement, 
// //such as You really like bananas!
// let favorite_fruits : string [] = ['apple', 'mango', 'orange']
// if(favorite_fruits.includes('apple')){
//     console.log('I really like apple!')
// }
// if(favorite_fruits.includes('mango')){
//     console.log('I really like mango!')
// }
// if(favorite_fruits.includes('orange')){
//     console.log('I really like orange!')
// }
// if(favorite_fruits.includes('grapes')){
//     console.log('I really like grapes!')
// }
// if(favorite_fruits.includes('bananas')){
//     console.log('I really like bananas!')
// }

// //30.	Hello Admin: Make a array of five or more usernames, including the name ‘admin’. 
// //Imagine you are writing code that will print a greeting to each user after they log in to a website.
// // Loop through the array, and print a greeting to each user.
// //•	If the username is ‘admin’, print a special greeting, such as "Hello Admin, 
// //would you like to see a status report?""
// //•	Otherwise, print a generic greeting, such as
// // " Hello Eric, thank you for logging in again."

// let users : string [] = ['Fatima', 'Sadaf', 'Gul', 'Samreen', 'Admin']
// for(let user of users){
//     if(user === "Admin"){
//         console.log("Hello Admin, would you like to see a status report?")
//     }
// else{
//     console.log(`Hello ${user}, 'thank you for logging in again.'`)
// }
// }

// //31.	No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// //•	If the list is empty, print the message We need to find some users!
// //•	Remove all of the usernames from your array, and make sure the correct message is printed.


// let users : string [] = ['Fatima', 'Sadaf', 'Gul', 'Samreen', 'Admin']
// if(users.length === 0)
// {
//     console.log("We need to find some users!")
// }
// //•	Remove all of the usernames from your array, 
// //and make sure the correct message is printed.
// else{
//     users = [];
//     console.log("All user have been removed " + users.length);
// }

// //32.	Checking usernames: Do the following to create a program that simulates how websites ensure that everyone has unique username.
// //•	Make a list of five or more usernames called current_users.
// //•	Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// //•	Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used. Print a message saying that the user_name is available.
// //•	Make sure your comparison is case insensitive. If ‘John’ has been used, ‘JOHN’ should not be accepted.

// let current_users: string[] = ["hina", "gul", "sumaira", "saba", "sarah"];
// let new_users: string[] = ["ahmed", "raza", "hamza", "admin", "abbas"];

// new_users.forEach((newUser) => {
//     if(
//         current_users.some(
//         (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
//         )
//     ) {
//         console.log(`${newUser} will need to enter a new username.`);
//     } else {
//         console.log(`${newUser} is available.`);
//     }
// });

// //33.	Ordinal Numbers: Ordinal numbers indicate their position in a array,
// // such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// //•	Store the numbers 1 through 9 in a array.
// //•	Loop through the array.
// //•	Use an if-else chain inside the loop to print the proper ordinal ending for each number.
// // Your output should read “1st 2nd 3rd 4th 5th 6th 7th 8th 9th”, 
// //and each result should be on a separate line.

// let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // for loop

// for(let i = 0; i < myNumbers.length; i++){
//     // now we use conditions
//     if(myNumbers[i] == 1){
//         console.log(`${myNumbers[i]}st`);

//     } else if(myNumbers[i] == 2){
//         console.log(`${myNumbers[i]}nd`);

//     }else if(myNumbers[i] == 3){
//         console.log(`${myNumbers[i]}rd`);

//     }else if(myNumbers[i] >= 4 && myNumbers[i] <= 9){
//         console.log(`${myNumbers[i]}th`);
//     }
// }

// //34.	Pizzas: Think of at least three kinds of your favorite pizza. 
// //  Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// //•	Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
// //  For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// //•	Add a line at the end of your program, outside the for loop, 
// //  that states how much you like pizza. 
// //  The output should consist of three or more lines about the kinds of pizza you like and then 
// //  an additional sentence, such as I really love pizza!

// let myPizza = ["Cheeze Pizza", "Pepperoni Pizza", "Vegeterian Pizza"];

// // print only names of pizza
// for(let i = 0; i < myPizza.length; i++){
//     console.log(myPizza[i]);
// }

// // printing names and sentence/message
// for(let i= 0; i < myPizza.length; i++){
//     console.log(`I like to eat ${myPizza[i]}`);
// }

// console.log(
//     `\n I really like to eat Pizzas. Pizza comes in a variety of flavors and topping, allowing each individual to customize according to their taste.`
// );

// //35.	Animals: Think of at least three different animals that have a common characteristic.
// // Store the names of these animals in a list, 
// //and then use a for loop to print out the name of each animal.
// // Modify your program to print a statement about each animal, 
// //such as A dog would make a great pet. 
// //Add a line at the end of your program stating what these animals have in common.  
// //You could print a sentence such as Any of these animals would make a great pet!

// let animals: string[] = ["dog", "cat", "parrot"];

// animals.forEach(animal =>{
//     console.log(`A ${animal} would make a great pet.`);
// });
// console.log("Any of these animals would make a great pet!");

// //36.	T-Shirt: Write a function called make_shirt () that accepts a size and the text of a message that should be printed on the shirt.
// // The function should printed on the shirt. 
// //The function should print a sentence summarizing the size of the shirt and the message printed on it. 
// //Call the function.

// function make_shirt(size : string, message: string){
//     console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
// }

// make_shirt("medium", "Coding is Life");

// //37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default
// // with a message that reads I love Transcript. 
// //Make a large shirt and a medium shirt with the default message,
// // and shirt of any size with a different message.

// function make_shirt(size: string = "large", message: string = "I Love Typescript") {
//     console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
// }

// make_shirt(); // default  large and message
// make_shirt("medium"); // default message, medium size
// make_shirt("small", "Dive into Coding"); // custom message, small size

// //38.	Cities: Write a function called describe_city() 
// //that accepts the name of a city and its country. 
// //The function should print a simple sentence, such Karachi is in Pakistan.
// // Give the parameter for the country a default value.
// // Call your function for three different cities, 
// //at least one of which is not in the default country.

// function describe_city(nameOfCity: string, country: string = "Asia") {
//     return `${nameOfCity} in in ${country}`;
// };

// // 3 cities

// let city1 = describe_city("Dhaka, Bangladesh");
// let city2 = describe_city("Dehli, India");
// let city3 = describe_city("Karachi, Pakistan");
// let city4 = describe_city("Tehran, Iran");

// console.log(city1);
// console.log(city2);
// console.log(city3);
// console.log(city4);

//39.	City Names: Write a function called city_country() 
//that takes in the name of a city and its country.
// The function should return a string formatted like this:
//“Lahore, Pakistan”
//Call your function with at least three city-country pairs, and print the value that’s returned.

// function city_country(city: string, country: string) {
//     //return `"${city}, ${country}"`
//     console.log(`"${city}, ${country}"`);
// }

// city_country("Karachi", "Pakistan");

// let mycities = city_country("Karachi", "Pakistan");
// console.log(mycities);
// console.log(city_country("Dubai", "UAE"));
// console.log(city_country("London", "UK"));
// console.log(city_country("Riyadh", "KSA"));

//40.	Album: Write a function called make_album() that builds a Object describing a music album. 
//The function should take in an artist name and an album title, 
//and it should return a Object containing these two pieces of information. 
//Use the function to make three dictionaries representing different albums. 
//Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
//If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
//Make at least one new function call that includes the number of tracks on an album. 

// function myAlbum(artistName: string, albumTitle: string){
//     return{artistName, albumTitle}
// }

// let album1 = myAlbum("Atif Aslam", "Jal Pari");
// let album2 = myAlbum("KK", "PAL");
// let album3 = myAlbum("A R Rehman", "Roja");

// console.log(album1);
// console.log(album2);
// console.log(album3);

// // Number of tracks

// function myAlbum2(artistName: string, albumTitle : string, numberOfTracks: number){
//     return {artistName, albumTitle, numberOfTracks}
// }

// let album4 = myAlbum2("Atif", "dori sahi jayay na", 11);
// let album5 = myAlbum2("KK", "Jannatain kahan", 55);
// let album6 = myAlbum2("A.R. Rehman", "vande matram", 2);

// console.log(album4);
// console.log(album5);
// console.log(album6);

//41.	Magicians: Make a array of magician’s names. 
// //Pass the array to a function called show_magicians(), 
// //which prints the name of each magicians in the array.

// let magicians : string [] = ["Gabool", "Hamoon", "Samri"];

// function show_magicians(magicians:string[]) {
//     magicians.forEach(magicians => {
//         console.log(magicians);
//     });   
// }
// show_magicians(magicians);

//42.	Great Magicians: Start with a copy of your program from Exercise 41. 
// //Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// //call show_magicians() to see that the list has actually been modified.

// let magicians : string [] = ["DON", "Hamoon", "Samri"];

// function make_great(magicians:string[]) {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = magicians[i] + " the Great";
//         console.log(magicians);
//     };   
// }
// make_great(magicians); // modifies the orginal array
// //show_magicians(magicians); // actually modified list

//43.	Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. 
// //Because the original array will be unchanged, return the new array and store it in a separate array.
// // Call show_magicians() with each array to show that you have one array of the original names
// // and one array with the great added to each magician’s name.

// let magicians: string[] = ["Don", "Hamoon", "Samri"];

// function make_great(magicians: string[]): string[] {
//     let greatMagicians = [];
//     magicians.forEach(magicians => {
//         greatMagicians.push(`${magicians} the Great`);
//     });
//     return greatMagicians;
// }

// let greatMagicians = make_great(magicians.slice()); // creates a new modified array
// console.log("Original magicians:");
// console.log(magicians); // shows original names
// console.log("Great magicians:");
// console.log(greatMagicians); // shows modified names

//44.	Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// //The function should have one parameter that collects as many items as the function call provides, 
// //and it should print a summary of the sandwich that is being ordered, 
// //call the function three times, using a different number of arguments each time.

// function make_sandwich(...items:string[]) {
//     console.log(`Making a sandwich with: ${items.join(', ')}.`);    
// }

// make_sandwich("pepproni", "cheese");
// make_sandwich("lettuce", "Patties", "tomato");
// make_sandwich("Mayo", "Ketchup", "Avacado", "Beef");

// 45.	Cars: Write a function that stores information about a car in a Object. 
// //The function should always receive a manufacturer and a model name. 
// //It should then accept an arbitrary number of keyword arguments. 
// //Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
// // Print the Object that’s returned to make sure all the information was stored correctly.

// function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
//     let car = {manufacturer, model };
//     options.forEach(([key, value]) => car[key] = value);
//     return car;
// }

// console.log(make_car("Toyota", "Corolla", ["color", "black"], ["sunroof", true]));
// console.log(make_car("Suzuki", "Wagon R", ["color", "beige"], ["year", 2022]));