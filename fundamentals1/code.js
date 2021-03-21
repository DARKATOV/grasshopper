// 1


drawBox(orange);
drawBox(orange);
drawBox(red);
drawBox(blue);
drawBox(black);
drawBox(orange);
newLine();
drawBox(black);
drawBox(black);
drawBox(black);
drawBox(black);


// 2 

drawBoxes('ggg');
newLine();
drawBoxes('yyy');
newLine();
drawBoxes('bbb');

// 3

drawBoxes('ggg yyy bbb');

// 4 

drawBox(pickRandom(color));
drawBox(pickRandom(color));

//5 

var stripeColor = white;
drawBox(stripeColor);
drawBox(stripeColor);
drawBox(stripeColor);
newLine();
stripeColor = blue;
drawBox(stripeColor);
drawBox(stripeColor);
drawBox(stripeColor);

// 6 

var month = 'August';
print(month);
var day = 'Friday';
print(day);

// 7 

var answer = pickRandom([
    'yes',
    'no',
    'quiero',
    'ser ',
    'tu',
    'amigo',
    ___
  ]);
  print(answer);

  //8

  var ingredients = [
    'leche',
    'huevos',
    'vainilla',
    ___
  ];
  cook(ingredients);

  // 9 

  var colors = [
    'black',
    'white',
    ___
  ];
  drawBox(colors['000']);
  newLine();
  drawBox(colors[1]);
  drawBox(colors[0]);
  drawBox(colors[1]);
  newLine();
  drawBox(colors[0]);
  drawBox(colors[1]);

  // 10 

  var color = pickRandom([
    blue,
    green,
    ___
  ]);
  print(color);
  if (color === blue) {
    ___
  }

  //11

  var answer = pickRandom([
    'heads',
    'tails',
   
  ]);
  print(answer);
  if (answer === 'tails') {
    drawBoxes('rrr wrw wrw');
  }
  if (answer === 'heads') {
    drawBoxes('gwg ggg gwg');
  }
  

  //12

  var answer = pickRandom([
    'heads',
    'tails',
    ___
  ]);
  print(answer);
  if (answer === 'heads') {
    drawBoxes('gwg ggg gwg');
  } else {
    drawBoxes('rrr wrw wrw');
  }

  // 13 

  var pea = pickRandom([
    1,
    2,
    3,
    ___
  ]);
  if (pea !== 1) {
    print('Not under shell 1');
    ___
  }
  if (pea !== 3) {
    print('Not under shell 3');
  }

  // 14 

  var x = 5;
x = x + 0;
print('x is ' + x);
x = x - 0;
print('x is now ' + x);

//15

var y = 10;
y = y * 5;
print(y);
y = y / 10;
print(y);

//16

print('pinNumber is ' + pinNumber);
print('foundKey is ' + foundKey);
if (foundKey === 'si' && pinNumber === 10) {
  print('You opened the lock!');
}
if (foundKey === 'no' && pinNumber === 10) {
  print('The pin number is right, but you are missing the key.');
}

// 17 

print('x is ' + x);
print('y is ' + y);
if (x > 3 && y < 11) {
  print('x is greater than 3, and y is less than 11');
}
if (x > 10 || y > 10) {
  print('x or y, or both, are greater than 10');
}

//18

for (var letter of 'grasshopper') {
    print(letter);

//19

for (var x of [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    ___
  ]) {
    drawBox(x);
    drawBox(x);
    drawBox(x);
    newLine();
  }

//20

for (var letter of img) {
    if (letter !== 'e') {
      drawBoxes(letter);
    }
  }

//21

print('Counting 0 to 9...');
for (var i = 0; i < 10; i = i + 1) {
  print(i);


//22

for (var i = 1; i < 11; i = i + 1) {
    print(i);
  }
  print('Happy New Year!');

//23 

for (var adj of [
    'Raging',
    'Happy',
    'Hungry',
    ___
  ]) {
    for (var noun of [
      'Pharmacists',
      'Squids',
      'Twins',
      ___
    ]) {
      print('The ' + adj + ' ' + noun);
    }
  }

//24

var someCustomColor = {
    red: 255,
    green: 255,
    blue: 0,
    ___: ___
  };
  drawBox(someCustomColor);

//25

var name = {
    first: 'Martin ',
    middle: 'Luther ',
    last: 'King',
    ___: ___
  };
  print(name.first + name.middle + name.last);

//26

print(rgbObject.blue);
drawBox(rgbObject);


//27 


var myBackpack = {
    food: 'bananas',
    equipment: 'map',
    clothing: 'hat',
    ___: ___
  };
  print(myBackpack.food);

//28

var myBackpack = {
    food: [
      'bananas',
      'nuts',
      'energy bar',
      ___
    ],
    equipment: [
      'maps',
      'compass',
      ___
    ],
    clothing: [
      'scarf',
      'jacket',
      'hat',
      ___
    ],
    ___: ___
  };
  print(myBackpack.food);
  print(myBackpack.equipment);
  print(myBackpack.clothing);

//29

elevation = elevation + 455;
print(elevation);

//30

for (var element of otherBackpack.food) {
    print(element);

//31

for (var element of otherBackpack.equipment) {
    if (element === 'rope') {
      print('I found some rope');
    } else {
      print('no rope');
    }
  }

  

