

var buttonOn = $("#buttonOn");
buttonOn.on("click", function() {
	alert("Using the .on() function");
});
var buttonColor = $("#buttonColor");
buttonColor.click(function() {
	if (buttonColor.hasClass("btn-info")) {
		buttonColor.removeClass("btn-info");
		buttonColor.addClass("btn-warning");
	} else {
		buttonColor.removeClass("btn-warning");
		buttonColor.addClass("btn-info");
	}		
});

var allButton = $("#buttonColor2");
allButton.click(function() {
	if (allButton.hasClass("btn-primary")) {
		allButton.removeClass("btn-primary");
		allButton.addClass("btn-danger");
	} else {
		allButton.removeClass("btn-danger");
		allButton.addClass("btn-primary");
	}
});

var thumbnail = $("#waterfall");
thumbnail.animate({
	left: "+=200px"
}, "slow");

var showButton = $("#showButton");
var showText = $("#showText");
showButton.click(function() {
	showText.show("fast");
});

$("#formDisable").prop("disabled", true);
var enableButton = $("#enableForm");
enableButton.click(function() {
	$("#formDisable").prop("disabled", false);
});

var linkItemReplaceButton = $("#linkItemReplaceButton");
linkItemReplaceButton.click(function() {
	var secondListItem = $("li.list-group-item").eq("1");
	secondListItem.text("Hello World");
});

var showCheckBoxButton = $("#showCheckBoxButton");
showCheckBoxButton.click(function() {
	var checkBox = $("#checkBox");
	if (checkBox.is(":hidden")) {
		checkBox.show();
	} else {
		checkBox.hide();
	}
});


var panelButton = $("#panelButton");
panelButton.click(function() {
	var panelElement = document.getElementById("panelElement");
	var listGroupItems = $(panelElement).find(".list-group-item");
	listGroupItems.text("Potato");
});

var buttonInput = $("#buttonInput");
buttonInput.click(function() {
	var inputFirstNameValue = $("#inputFirstName").val();
	var textFirstLastName = $("#textFirstLastName");
	var inputLastName = $("#inputLastName");
	inputLastName.val("Neat");
	textFirstLastName.text("Your name is " + inputFirstNameValue + " " + inputLastName.val());
});

var glyphiconButton = $("#glyphiconButton");
glyphiconButton.click(function() {
	var glyphiconSpan = $("#glyphiconSpan");
	glyphiconSpan.attr("class", "glyphicon glyphicon-heart");
});

var changePanelColorButton = $("#changePanelColorButton");
changePanelColorButton.click(function() {
	var panelContainer = $("#panelContainer");
	if (panelContainer.hasClass("panel-primary")) {
		panelContainer.removeClass("panel-primary");
		panelContainer.addClass("panel-success");
	} else {
		panelContainer.removeClass("panel-success");
		panelContainer.addClass("panel-primary");
	}	
});

var imageFocus = $("#imageFocus");
imageFocus.mouseover(function() {
	imageFocus.attr("src", "images/waterfall.jpg");
});
imageFocus.mouseout(function() {
	imageFocus.attr("src", "images/flower.jpg");
});

var lgi1 = $("#lgi1");
lgi1.mouseover(function() {
	lgi1.text("GOLDEN");
});
lgi1.mouseout(function() {
	lgi1.text("Red");
});


var lgi3 = $("#lgi3");
lgi3.mouseover(function () {
	lgi3.attr("class", "list-group-item list-group-item-warning");
});
lgi3.mouseout(function() {
	lgi3.attr("class", "list-group-item");
});










// $("#cool").append(" Cool");
// console.log("Page has loaded");
// $("h1").css("fontSize", "100px");
// $("h1").css({
// 	fontSize: "100px",
// 	color: "red"
// });
// var h1 = $("h1");
// h1.addClass("big");
// if (h1.hasClass("big")) {
// 	h1.css("color", "green");
// }
// h1.width("50px");
// console.log(h1.width());
// h1.height("100px");
// console.log(h1.height());
// h1.data("keyName", {foo: "bar"});
// console.log(h1.data("keyName"));

// var newArr = [];

// $("li").each(function() {
// 	newArr.push(this.id);
// });
// console.log(newArr);

// $("span.subchild").parent();
// $("span.subchild").parents("div.parent");
// $("span.subchild").parents();
// $("span.subchild").parentsUntil("div.grandparent");
// $("span.subchild").closet("div");
// $("div.child").closet("div");
// $("div.grandparent").children("div");
// $("div.grandparent").find("div");
// $("div.parent").next();
// $("div.parent").prev();
// $("div.parent").nextAll();
// $("div.parent").nextAll().first();
// $("div.parent").nextAll().last();
// $("div.parent").siblings();

// $("h1").css("fontSize");
// $("h1").css("font-size");

// var h1 = $("h1");
// h1.addClass("big");
// h1.removeClass("big");
// h1.toggleClass("big");

// if (h1.hasClass("big")) {
// 	h1.css("color", "green");
// }

// $("#myList li").each(function() {
// 	var li = $(this);
// 	var div = li.find("div.content");
// 	li.data("contentDiv", div);
// });

// var firstLi = $("#myList li:first");
// firstLi.data("contentDiv").html("new content");

// $.trim("     Removes the extra white space");

// $.each(["foo", "bar", "baz"], function(idx, val) {
// 	console.log("element" + idx + " is" + val);
// });

// $.each({foo: "bar", baz: "bim"}, function(k, v) {
// 	console.log(k + " : " + v);
// });

// var myArray = [1, 2, 3, 5];

// if ($.inArray(4, myArray) !== -1) {
// 	console.log("found it!");
// }

// var firstObject = { foo: "bar", a: "b"};
// var secondObject = { foo: "baz"};
// var newObject = $.extend(firstObject, secondObject);
// console.log(firstObject.foo);
// console.log(secondObject.foo);

// var myFunction = function() {
// 	console.log(this);
// };
// var myObject = {
// 	foo: "bar";
// };
// myFunction();
// var myProxyFunction = $.proxy(myFunction, myObject);
// myProxyFunction();

// var myObject = {
// 	myFn: function() {
// 		console.log(this);
// 	}
// };

// $("#foo").click(myObject.myFn);
// $("#foo").click($.proxy(myObject, "myFn"));

// var sum = 0;
// var arr = [1, 2, 3, 4, 5];

// for (var i = 0; i < arr.length; i++) {
// 	sum += arr[i];
// }
// console.log(sum);

// $.each(arr, function(index, value) {
// 	sum += value;
// });

// var sum = 0;
// var obj = {
// 	foo: 1,
// 	bar: 2
// };

// for (var item in obj) {
// 	sum += obj[item];
// }
// console.log(sum);

// $.each(obj, function(key, value) {
// 	sum += value;
// });
// console.log(sum);

// $("li").each(function(index, element) {
// 	console.log($(this).text());
// });

// $("li").addClass("newClass");
// $("input").each(function(i, el) {
// 	var elem = $(el);
// 	elem.val(elem.val() + "%");
// });

// $("input").each(function(i, el) {
// 	var elem = $(el);
// 	elem.val(elem.val() + "%");
// });

// $("input").val(function(index, value) {
// 	return value + "%";
// });

// $("li").map(function(index, element) {
// 	return this.id;
// }).get();

// var arr = [{
// 	id: "a",
// 	tagName: "li"
// }, {
// 	id: "b",
// 	tagName: "li"
// }, {
// 	id: "c",
// 	tagName: "li"
// }];

// $("li").map(function(index, element) {
// 	return element.id;
// }).get();

// $.map(arr, function(value, index) {
// 	return value.id;
// });

// var foo = $("#foo1");
// console.log("Index: " + foo.index());

// var listItem = $("li");
// console.log("Index: " + listItem.index());
// console.log("Index: " + listItem.first().index());

// var div = $("div");

// var foo = $("li");
// console.log("Index: " + foo.index("li"));

// var panelElement = document.getElementById("#panelElement");
// console.log(panelElement);