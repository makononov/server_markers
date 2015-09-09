// ==UserScript==
// @name       	IRB Server Markers
// @namespace  	http://www.mishakononov.com/
// @version    	0.3.1
// @description Display color-coded server markers on IRB pages
// @match      	http://*.irb.psu.edu/*
// @match	https://*.irb.psu.edu/*
// @copyright  	2013-2015, Misha Kononov
// @grant	none
// ==/UserScript==

if (window.top == window.self) {
    var serverName = "PRODUCTION";
    var barColor = "firebrick";
    var icon = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtBJREFUeNqMU89Lk2Ec/7w/nne6d2PNNnV6cNRpqAmWOEwtC/TQwRZCpHXIY0mHEqGDl/YPWAkFol30EAR1CjTcFFFCSA/b3C7mPLk5Rc1N0+3d2/fZppmnXvjwfXme5/P5/hZeDb7Eua+d0EFoIrgKZ2HCAmGSMHX2sXzm30noK3c4eqprau1VzkuSzV6au9hKbLrXoz8bQoFAdyy2MUFHw4Qov5PabrSckL03b91+dKfzXkmVvVRUQivYHxrC7+lpWBwVcNZfFa80NJqYLNVF19Yc9H6ZsHsSQR+RPc3XW9WD8XEkRkaQEUVkJQlZsr+CQehkL/b2ormrS6X3nhnfdJxsPxdoLy939DQ2tagHExPYGR1FRpahFQRAlpNB/9t0D0lE412PGl5Z6YnHNqZEXrDq2lo7Oz7G7thYnkzIMgadrM5kCAYGqViGpMrY+/IRciaNGuJwLo+giRfsaGnpH89ZTYO2swUcJaHvb0NkAkQKSLJacbi8iCrnZYlzuYCLV3vv9RtkuedsFgehEDLbm5DkNOQiIimUiY6cgL65hZ33XthHvvLauU7bqJPXo1gMqUgEukbEYvyFgUQIgixAEAUwo3Dae16DMPUZxrY2pAIBZNPpnEfumYORAFOJZCqGYimBcqEUlofP+WzkBowLLKyvrWpGtxsUJXkgVUZQ8l6lIgGyagKzlBG5Aoq1Eob6VkSjqxrncoHJYDCQ0IxGVHq9EKSCAMvnLhUpJGCFbLKRiAPmxwNIMwNCgWCCc/kkrqaSSYcsCXXVD7oV0WDA4Xd/vng8DaMpTzbbYOx+CqWjE/Pzsyka6w8k8O6kiMOzfn8Z5eBxvxhQ7U/6SMSH5Kdhyt8M8/1nYHVupGWGubmZ1KzP97mwD6fLxBdjcHbGH49EwrllcrquSba3uVYhQQVb/7GoBSns+LllOruN/KA/HotNEWidv/3XOv8RYADxIv7Z/piUUAAAAABJRU5ErkJggg==";
    
    if (window.location.hostname.match(/^dev/)) {
        serverName = "DEVELOPMENT";
        barColor = "seagreen";
        icon = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAArBJREFUeNqMU11IU2EYfr7znW06ZSYxTaVcFJRIEgrmpKFLsYuSfkC0bopuItmlCF144+qqm4hBQfRLll0XgdK0suxHUprNCf1so6LpMsUmwf5O73s2c3nV+Xg453zf+zzvz/e+or/vLNY9bYT9hEZCVXYvQBgnDBGGc43VnG8bwVW6qayruqbGWlm51Wi1lugH0eh8QzgcrPX7fJ1zke+DtOUhhPhMOpscq2R3U0vrsYOHjlqtFSUysDIDz9uLGAl6UbaxHLt31sm62j0W1aBWh4OfK8h+irC0GoGLyO2NDoflXuAObkxdBRIKREpCSSuYDr2HQutE/Sl0ODosZN/+1Pt4jt49LNDGYTfY9xYNzg7g5uQ1KAkVIqkA6YyAILKkdff1AKSmiMP2I0Wzfn8XpTOscME457iI49bkdZ2sJAkpA2RKJYIKVaNvKhdjcOI+ErSYw1yOoJEL9i4yqRNFKuM5lUxhMfYDv37HsLCyAEUREHRUXFCMifAbbK/cZmQuC1RxtT1jlyDTKpLJNALf/JhbmkcikdBJwkAgS0HGP0n0vNeNhycfce2q/l6j1CQiixHMfJlFPJ6AliKCBBQTwZAVoX9WUfLW7p5rEKB7RpPNCd/XacTJq5aG7lknmzIEmZ+FGei2u7g39AZjgXFqknj95gbdK4gMLRMye1aMOSJmAUOBRLNtH8KhYJy5LDBEHRY1k3T/ATc0LROmnrOaCZ1F1DyJwg0WuJ0XkC/M8E/7oszlTvy0EouVS1VWdzqPm0yqSTz5MKqThHEtDbOlEH32czi9o1t79eL5MgncJoHLq0X0PBvxlnKH9bb2FrmcLox+HMGVCY8e+pl6F5q3tCAP+Xg5NrZMXfggOw8QOdO4Nky7aJhs/wwTuE6c6vphyp1G3ujh9iT89zj/EWAAJxoAsM8LAngAAAAASUVORK5CYII=";
    
    }
    else if (window.location.hostname.match(/^beta/)) {
        serverName = "BETA";
        barColor = "midnightblue";
        icon = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtBJREFUeNqMU0tME1EUPZ15r8XCgED52A00Rk1BIASNfDQUjLAhwYWJNqxwWxI3GOOCDWx0pwmJG6Mx8ZO4IyQYwB8QCNEFAm2BhbZEDZYSJVJoO5+O97XQEFZOcubNvHvPuffd+65lcOAujjwdhE5CM8G9v7dCmCOMEyYOO7ND35WEvrJyp7e6tra0ssLFHCUlacNWNNoYXg+dCywt3oj82nhFW8OEsLDJba2XDshDrZc7erq6rzocTpfk/5OLh1M63gYNlBcXoL7KJTU01CuM85r10Dcn+S8Qtg8y6CNyd9NFj/L8i4bHMzFICQOyakBSUwgs7UIyTfReycM1j0ch/+6pd5MRWvuFQEdZ+QlvY1Oz8oLIT6bj4HEiJnQi06qbkI1UWuDl6Hb6+6qnRVkN+L10nAlJFKy6tq5UBcfTmQRYXIe8p4GRAEsa4AIkxPUUOIm8fvMXmsEgOIIrMmgWBVv4bhBBz6ae2jPwe0vDTozWBHnZKBaXUJgv4/NaEqeII7ji5RbVfjCaBBNEihxciSP6IwnNJGsuh5lLbrJMkLCVsGBoZBdjd9IdcmfbKM4W2VCxGtiDvq2l98wCDihWII/cjjGYIgvJAuTzbO9FDVaoz2g7w7G8moBOqcOg0CKqQo4kYh63wiyyAcU5gCMHvk47osQRXCEwFw6H9AunKZKWAqhtsEow7SyTfp4QIVshiRTbYJJA+0kGwRFcITAeWF7ctHMdgzeLMtFJADY6cw5BCJGISSK8gOGeR4LdoiJIHMEVN/HrbizmlBmvud7ltlmJ/NGfpPRZJjqd18y3gtH//Ubg1lkL5mendyjoMxJ4dFDE4en3k2Xiht3ubVF8PUX4QCLDsyoJMPg8DO0VFtihYn5mdodu4cj+PGSHSQzGAIlE1oJ+b1VNXen5Shcb82WGKRr9icCnkE7DtHl0mA5Po9joF9eT8N/j/E+AAQAhqirOd1/QLwAAAABJRU5ErkJggg==";
    
    }
    
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = "body:before {\
    content: \"" + serverName.replace(/./g, "$& ") + "\";\
      color: white;\
      background-color: " + barColor + ";\
      position: fixed;\
      top: 0;\
      left: 0;\
      width: 10px;\
      height: 100%;\
      padding: 10px;\
      font-weight: bold;\
    }\
    \
    body {\
      margin-left: 35px !important;\
    }\
    body.htmlPage {\
    	margin-left: 35px !important;\
    }\
    .external-link::after {\
        display: inline-block;\
        content: ' ';\
        height: 15px;\
        width: 15px;\
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gQXDgASJYlCWwAAAeZJREFUKM+lkL9rU1EUx7/3JjG5vsTk9VUUgmRJxSCE0GIhmEnpUCQ4KEijBB1FodWtS12EgBT/AqlbrJOlg5tu4pKCWwptCH2LXdIhJK/317vXIdYf0EiL3+ULh+8553MOcALV63WcSlUg0iqVXj+bnU3htPo2Pf0wqFbt5vz82rgMHVOPXZyYeGutxTWlHj1ZWCgDQK1W+ysUOa6zU6msT6ZSV40xoNYi2+uVgkrlTbPZtP/c/AKY9JLJuzqdRmJ1FdJ1cV6pmZyUd8ZiN376g3L5iwlDomIxRAsFaMYQKoW5dnvt3tJS5tjmZQCtYnEuw9hlzjkC3wcADPf2wDlHWsrkja2tx2Oxz8Xj77kQ4EJgsL8P0e1i4PvgnINzjmyn8/J2o5H79bAGgE8AvhYKrzzHucmFgJQSSikMd3Yw2N2F1BpSKUSkJBe2t/ObBwfvrLWgy6N7SSaReBocHkIIASEEQsZwaWUFxvMghBgNoBRuv3/r+eJikRAywr6ez3+2xrAjPC4EuNaQvR6UMVDWQhMCDYAYQ65sbHwo+v4Z8jGbncm5busIVSkFqRS01hDDIYjjICQEIQDzh3enpu5H+0Hwvc3Yuqb0bEgpwmiUGEph43FiHIfYUfi3WwtLCOGex/E/+gF22+1cPJSDtQAAAABJRU5ErkJggg==);\
        background-repeat: no-repeat;\
        vertical-align: text-bottom;\
    }\
    .external-link {\
        font-weight: bold;\
        color: red !important;\
    }";
    document.head.appendChild(css);
    
    // Fix the freaking RM Console
    if (document.body.nodeName != "BODY") {
		var body = document.createElement("body");
        body.appendChild(document.body);
        document.body = body;
    }
    
    var favicon = document.createElement("link");
    favicon.rel = "shortcut icon";
    favicon.href = "data:image/png;base64," + icon;
    document.head.appendChild(favicon);
    
    // Add the external-link class to any external links
    var regExp = new RegExp("//" + location.host + "($|/)");
    function addExternalClass(node) {
        var href = node.href;
        var isLocal = (href.substring(0,4) === "http") ? regExp.test(href) : true;
        if (!isLocal) {
            node.classList.add("external-link");   
        } 
    }
    
    function checkDocForLinks(myDoc) {
        var nodes = myDoc.getElementsByTagName("a"), i = nodes.length;	
        while(i--){
            addExternalClass(nodes[i]);
        }
    }
    
    checkDocForLinks(document);
    document.addEventListener("DOMNodeInserted", function () {
        if (this instanceof HTMLDocument) {
            checkDocForLinks(this);
        }
        else if (this.tagName == "a") {
            addExternalClass(this);   
        }
    });
}
