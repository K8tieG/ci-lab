function getGreeting(name){
    return "Hi " + name;
}

// module.exports = getGreeting;
module.exports = {
    getGreeting,
    add: function(num1, num2) { return num1 + num2 }

}
