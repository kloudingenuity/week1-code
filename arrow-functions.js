// Using a regular JS function

// function Announcer() {
//     this.message = 'Time is up!';
//     console.log(this);

//     setTimeout(function() {
//         console.log(this);
//         console.log(this.message);
//     }, 1000);
// }

// new Announcer();

// Using an arrow function

// function Announcer() {
//     this.message = 'Time is up!';
//     console.log(this);

//     setTimeout(() => {
//         console.log(this);
//         console.log(this.message);
//     }, 1000);
// }

// new Announcer();

// function add(a) {
//     return function(b) {
//         return a + b;
//     }
// }


const add = a => b => {
    return a + b;
};

console.log(add(1)(2));

// withAnalytics(SomethingThatNeedsAnalytics);

// function SomethingThatNeedsAnalytics(message) {
//     return message;
// }

// function withAnalytics(fn) {
//     const msg = fn();
//     console.log(msg);

//     return fn;
// }