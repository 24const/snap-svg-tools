// First lets create our drawing surface out of existing SVG element
// If you want to create new surface just provide dimensions
// like s = Snap(800, 600);
$( document ).ready(function() {


    Snap.load("resources/images/logo.svg", function (svgElement) {

        var svgContainer = $("#svgContainer");
        svgContainer.append(svgElement.node);

        var s = Snap(svgElement.node);
        console.log("s", s);

        s.select("g g g").drag();

    });

});