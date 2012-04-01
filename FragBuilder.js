var FragBuilder = (function() {
    var applyStyles = function(element, style_object) {
        for (var prop in style_object) {
            element.style[prop] = style_object[prop];
        }
    };
    var generateFragmentFromJSON = function(json) {
        var tree = document.createDocumentFragment();
        json.forEach(function(obj) {
            if (!('tagName' in obj) && 'textContent' in obj) {
                tree.appendChild(document.createTextNode(obj['textContent']));
            } else if ('tagName' in obj) {
                var el = document.createElement(obj.tagName);
                delete obj.tagName;
                for (part in obj) {
                    var val = obj[part];
                    switch (part) {
                    case ('textContent'):
                        el.appendChild(document.createTextNode(val));
                        break;
                    case ('style'):
                        applyStyles(el, val);
                        break;
                    case ('className'):
                        el.className = val;
                        el.setAttribute('class', val);
                        break;
                    case ('childNodes'):
                        el.appendChild(generateFragmentFromJSON(val));
                        break;
                    default:
                        el.setAttribute(part, val);
                        break;
                    }
                }
                tree.appendChild(el);
            } else {
                throw "Error: Malformed Fragment";
            }
        });
        return tree;
    };
    var generateFragmentFromString = function(HTMLstring) {
        var div = document.createElement("div"),
            tree = document.createDocumentFragment();
        div.innerHTML = HTMLstring;
        while (div.hasChildNodes()) {
            tree.appendChild(div.firstChild);
        }
        return tree;
    };
    return {
        'json': generateFragmentFromJSON,
        'string': generateFragmentFromString
    };
}());
