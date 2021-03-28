////Naming elements
//Cranes
var craneLineOne = document.getElementsByClassName("crane-line-one");
var craneLineTwo = document.getElementsByClassName("crane-line-two");
var craneKnot = document.getElementsByClassName("crane-knot");

// Star
var starPiece = document.getElementsByClassName("star-piece");
var starCut = document.getElementsByClassName("star-cut");
var starShadow = document.getElementsByClassName("star-shadow");

var wholeKnot = document.getElementsByClassName("whole-knot");

// Roller
var roller = document.getElementsByClassName("roller");
var rollerFold = document.getElementsByClassName("roller-fold");
var rollerShadow = document.getElementsByClassName("roller-fold-shadow");



//// Animation
// Crane 1
var tlCraneOne = new TimelineMax({
	repeat: -1,
	repeatDelay: 5.9,
});
tlCraneOne.set(craneLineOne, {transformOrigin:"50% 0%",})
										.to(craneLineOne, 1, {scaleY:1.4})
										.to(craneLineOne, 2, {scaleY:1}, 3)

// Crane 2
var tlCraneTwo = new TimelineMax({
	repeat: -1,
	repeatDelay: 0,
});
tlCraneTwo.set(craneLineTwo, {transformOrigin:"50% 0%",})
										.to(craneLineTwo, 2, {rotation: -8, scaleY:.92})
										.to(craneLineTwo, 2, {rotation: 0, scaleY:1}, 2)

//star
var tlstar = new TimelineMax({
	repeat: -1,
	repeatDelay: 5.9,
});
tlstar.to(wholeKnot, 1, {y:38})
						.to(wholeKnot, 2, {y:0}, 3)

var tlcut = new TimelineMax({
	repeat: -1,
	repeatDelay: 4,
})
tlcut.to(starCut, .1, {opacity:1}, 1)
					.to(starCut, 2, {opacity:0}, 4.9)


//starShadow
var tlstarsh = new TimelineMax({
	repeat: -1,
	repeatDelay: 5.9,
});
tlstarsh.from(starShadow, 0, {
	transformOrigin:"50% 50%",
	scale:0})
								.to(starShadow, 1, {scale:1.75})
								.to(starShadow, 2, {scale:0}, 3)


//roller
var tlstar = new TimelineMax({
	repeat: -1,
	repeatDelay: 0,
});
tlstar.to(roller, 2, {y:-6, x:18})
						.to(roller, 2, {y:0, x:0}, 2)


//rollerShadow
var tlrollerSh = new TimelineMax({
	repeat: -1,
	repeatDelay: 0,
});
tlrollerSh.set(rollerShadow, {
	transformOrigin:"100% 50%",
	opacity:0.05})
	.to(rollerShadow, .5, {opacity:0})							
	.to(rollerShadow, 2, {opacity:0.05}, 2)