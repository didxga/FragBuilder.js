var FragBuilder = (function() {
    var applyStyles = function(element, style_object) {
        for (var prop in style_object) {
            element.style[prop] = style_object[prop];
        }
    };
    var generateFragment = function(json) {
        var tree = document.createDocumentFragment();
        json.forEach(function(obj) {
            if (!('tagName' in obj)) {
                throw "Error: Malformed Fragment; 'tagName' must exist for each element.";
                return;
            }
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
                    el.appendChild(generateFragment(val));
                    break;
                default:
                    el.setAttribute(part, val);
                    break;
                }
            }
            tree.appendChild(el);
        });
        return tree;
    };
    return generateFragment;
}());
