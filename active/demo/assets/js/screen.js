function adjustToFreezeWidth(rootSvg, offx=0) {
    var windowWidth = $(window).width();

    var viewBoxVal = rootSvg.getAttribute("viewBox");
    var viewrect = viewBoxVal.split(" ");
    var viewBoxWidth = +viewrect[2];
    var viewBoxHeight = viewrect[3];
    rootSvg.removeAttribute("width");
    rootSvg.removeAttribute("height");

    var setWidth = +windowWidth + offx;
    var setHeight = (setWidth * viewBoxHeight) / viewBoxWidth;
    rootSvg.setAttribute("width", setWidth);
    rootSvg.setAttribute("height", setHeight);
}

function getSvgHeight(svg){
    return svg.getAttribute("height");
}

function getScale(svg){
    var windowWidth = $(window).width();
    var viewBoxVal = svg.getAttribute("viewBox");
    var viewrect = viewBoxVal.split(" ");
    var viewBoxWidth = +viewrect[2];
    var setWidth = +windowWidth;
    return setWidth / viewBoxWidth;
}

function adjustToNone(rootSvg) {

    var viewBoxVal = rootSvg.getAttribute("viewBox");
    var viewrect = viewBoxVal.split(" ");
    var viewBoxWidth = viewrect[2];
    var viewBoxHeight = viewrect[3];
    rootSvg.removeAttribute("width");
    rootSvg.removeAttribute("height");

    rootSvg.setAttribute("width", viewBoxWidth);
    rootSvg.setAttribute("height", viewBoxHeight);

}

function adjustToFreezeHeight(rootSvg) {

    var windowHeight = $(window).height();

    var viewBoxVal = rootSvg.getAttribute("viewBox");
    var viewrect = viewBoxVal.split(" ");
    var viewBoxWidth = viewrect[2];
    var viewBoxHeight = viewrect[3];
    rootSvg.removeAttribute("width");
    rootSvg.removeAttribute("height");

    var setHeight = windowHeight;
    var setWidth = (setHeight * viewBoxWidth)/viewBoxHeight;
    rootSvg.setAttribute("width", setWidth);
    rootSvg.setAttribute("height", setHeight);
}

function adjustToFreezeAll() {

    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    
    rootSvg.removeAttribute("width");
    rootSvg.removeAttribute("height");

    rootSvg.setAttribute("width", windowWidth);
    rootSvg.setAttribute("height", windowHeight);

}