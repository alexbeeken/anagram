var anagram = function(string1, string2) {

  var compare1 = [];
  var compare2 = [];

  string1.toLowerCase().split("").forEach(function(string) {
    compare1.push(isNotSpace(string));
  });

  string2.toLowerCase().split("").forEach(function(string) {
    compare2.push(isNotSpace(string));
  });

  if (compare1.sort().join("") === compare2.sort().join("")) {
    return true;
  }

  var partial_big = "";
  var partial_small = "";
  var result = true;

  if (compare1.length < compare2.length) {
    partial_small = compare1;
    partial_big = compare2;
  } else {
    partial_small = compare2;
    partial_big = compare1;
  }

  partial_small.forEach(function(letter) {
    if (partial_big.indexOf(letter) === -1) {
      result = false;
    }
  });

  return result;
};

var isNotSpace = function(string) {
  if (string !== " ") {
    return string;
  } else {
    return null;
  }
};

$(document).ready(function() {

  $("form#word_form").submit(function(event) {
    var string1 = $("input#string1").val();
    var string2 = $("input#string2").val();

    var result = anagram(string1, string2);

    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

  $("#result").show();
  event.preventDefault();
  });
});
