var numbers = [];

$("button").click(function(){
   var name = this.id;
   numbers.push(name);
   $(".main-result").text(numbers.join(""));
   
 });


$(".del-btn").click(function(){
  del();
  del();
});

$(".orange-btn").click(function(){
  calculating(numbers);
});

$(".reset-btn").click(function(){
  numbers = [];
  $(".main-result").text("0");
});


function del(){
  numbers.pop();
  $(".main-result").text(numbers.join(""));
}

function calculating(numbers){
 $(".main-result").text(eval(numbers.join("")));
}

// themes

$(".light").addClass("hidde");
$(".purpel").addClass("hidde");

$(".defualt").click(function() {
  $(".body0").addClass("body1");
  $(".main0").addClass("main");
  $(".keypad0").addClass("keypad");
  $(".button0").addClass("button1");
  $(".del-btn0").addClass("del-btn");
  $(".reset-btn0").addClass("reset-btn");
  $(".orange-btn0").addClass("orange-btn");
  $(".theme-buttons0").addClass("theme-buttons");
  $(".switch-buttons0").addClass("switch-buttons");
  $(".body0").removeClass("body2 body3");
  $(".main0").removeClass("main2 main3");
  $(".keypad0").removeClass("keypad2 keypad3");
  $(".button0").removeClass("button2 button3");
  $(".del-btn0").removeClass("del-btn2 del-btn3");
  $(".reset-btn0").removeClass("reset-btn2 reset-btn3");
  $(".orange-btn0").removeClass("orange-btn2 orange-btn3");
  $(".theme-buttons0").removeClass("theme-buttons2 theme-buttons3");
  $(".switch-buttons0").removeClass("switch-buttons2 switch-buttons3");
  $(".defualt").removeClass("hidde2 hidde3");
  $(".light").addClass("hidde");
  $(".purpel").addClass("hidde");
  $(".purpel").removeClass("hidde2");
  $(".light").removeClass("hidde3");
});

$(".light").click(function() {
  $(".body0").addClass("body2");
  $(".main0").addClass("main2");
  $(".keypad0").addClass("keypad2");
  $(".button0").addClass("button2");
  $(".del-btn0").addClass("del-btn2");
  $(".reset-btn0").addClass("reset-btn2");
  $(".orange-btn0").addClass("orange-btn2");
  $(".theme-buttons0").addClass("theme-buttons2");
  $(".switch-buttons0").addClass("switch-buttons2");
  $(".body0").removeClass("body1 body3");
  $(".main0").removeClass("main main3");
  $(".keypad0").removeClass("keypad keypad3");
  $(".button0").removeClass("button1 button3");
  $(".del-btn0").removeClass("del-btn del-btn3");
  $(".reset-btn0").removeClass("reset-btn reset-btn3");
  $(".orange-btn0").removeClass("orange-btn orange-btn3");
  $(".theme-buttons0").removeClass("theme-buttons theme-buttons3");
  $(".switch-buttons0").removeClass("switch-buttons switch-buttons3");
  $(".light").removeClass("hidde hidde3");
  $(".defualt").addClass("hidde2");
  $(".purpel").addClass("hidde2");
  $(".defualt").removeClass("hidde3");
});

$(".purpel").click(function() {
  $(".body0").addClass("body3");
  $(".main0").addClass("main3");
  $(".keypad0").addClass("keypad3");
  $(".button0").addClass("button3");
  $(".del-btn0").addClass("del-btn3");
  $(".reset-btn0").addClass("reset-btn3");
  $(".orange-btn0").addClass("orange-btn3");
  $(".theme-buttons0").addClass("theme-buttons3");
  $(".switch-buttons0").addClass("switch-buttons3");
  $(".body0").removeClass("body1 body2");
  $(".main0").removeClass("main main2");
  $(".keypad0").removeClass("keypad keypad2");
  $(".button0").removeClass("button1 button2");
  $(".del-btn0").removeClass("del-btn del-btn2");
  $(".reset-btn0").removeClass("reset-btn reset-btn2");
  $(".orange-btn0").removeClass("orange-btn orange-btn2");
  $(".theme-buttons0").removeClass("theme-buttons theme-buttons2");
  $(".switch-buttons0").removeClass("switch-buttons switch-buttons2");
  $(".purpel").removeClass("hidde hidde2");
  $(".defualt").addClass("hidde3");
  $(".light").addClass("hidde3");
});
