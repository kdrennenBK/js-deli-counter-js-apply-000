var katzLine = []
var count = 0
// counter is set to 0 at the beginning of the day.
// rewrite takeANumber to eliminating name
// line is 3 people, but 2 are being served - line.slice[2]

// line = [1,2,3] -- nowServing -> [2,3] line.length = 2 
// takeANumber; position = 3
 
function takeANumber(line, ) {
  var current = line.length; 
  var next = position + 1;
  count = 0;
  return `Welcome, you are number ${next} in line.`
}

function nowServing(line) { 
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
    } else {
      var currentCustomer = line.shift();
    }
  return `Currently serving ${currentCustomer}.`;
}

function currentLine(line) {
  var peopleInLine = []; 
  if (line.length === 0) {
    return "The line is currently empty."
  }
  for (var i = 0; i < line.length; i++) {
    var name = line[i];
    var positionPerson = (i + 1) + ". " + name;
    peopleInLine.push(positionPerson);
      
   }
  return "The line is currently: " + peopleInLine.join(', ');
}