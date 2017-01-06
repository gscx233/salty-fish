define([], function () {
    var move = function (elementListen, elementMove, strength) {
        elementListen.on('mousemove', function (e) {
            var imgHeight = elementMove.height();
            var imgWidth = elementMove.width();
            var centerX = imgWidth / 2;
            var centerY = imgHeight / 2;
            var offsetX = -(e.pageX - centerX) / imgWidth * strength;
            var offsetY = -(e.pageY - centerY) / imgHeight * strength;
            elementMove.css("transform", 'translate(' + offsetX + "px, " + offsetY + "px) scale(1.1)");

            //elementMove.css("background-position", offsetX + "px " + offsetY + "px");
        });
    };

    return { move: move };
});