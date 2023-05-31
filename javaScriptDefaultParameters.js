function say(message="Hi") {
    console.log(message)
}

say();
say("Hello")

//Arguments vs. Parameters
function add(x,y) {
    return console.log(x+y);
}
add(100,100);

function say(message) {
    message = typeof message !== 'undefined' ? message : 'Hi';
    console.log(message);
}
say();