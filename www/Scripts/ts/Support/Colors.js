﻿var Told;
(function (Told) {
    (function (GreekBible) {
        (function (Colors) {
            var createGetUniqueColorInner = function (saturation, brightness) {
                saturation = saturation || 100;
                brightness = brightness || 225;

                var colorIds = {};
                var nextId = 1;

                var getColorId = function (text) {
                    colorIds[text] = colorIds[text] || nextId++;

                    return colorIds[text];
                };

                var getColorByText = function (text) {
                    return getUniqueColor(saturation, brightness, getColorId(text));
                };

                return getColorByText;
            };

            Colors.createGetUniqueColor = createGetUniqueColorInner;

            var getUniqueColor = function (saturation, brightness, id) {
                //http://stackoverflow.com/questions/1168260/algorithm-for-generating-unique-colors
                var hue;

                var PHI = (1 + Math.sqrt(5)) / 2;
                var n = id * PHI - Math.floor(id * PHI);
                hue = Math.floor(n * 256);

                var rgb = hsvToRgb(hue / 256, saturation / 256, brightness / 256);
                return rgbToHex(Math.floor(rgb[0]), Math.floor(rgb[1]), Math.floor(rgb[2]));
            };

            var componentToHex = function (c) {
                var hex = c.toString(16);
                return hex.length == 1 ? "0" + hex : hex;
            };

            var rgbToHex = function (r, g, b) {
                return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
            };

            // From : http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
            /**
            * Converts an RGB color value to HSL. Conversion formula
            * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
            * Assumes r, g, and b are contained in the set [0, 255] and
            * returns h, s, and l in the set [0, 1].
            *
            * @param   Number  r       The red color value
            * @param   Number  g       The green color value
            * @param   Number  b       The blue color value
            * @return  Array           The HSL representation
            */
            function rgbToHsl(r, g, b) {
                r /= 255, g /= 255, b /= 255;
                var max = Math.max(r, g, b), min = Math.min(r, g, b);
                var h, s, l = (max + min) / 2;

                if (max == min) {
                    h = s = 0; // achromatic
                } else {
                    var d = max - min;
                    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                    switch (max) {
                        case r:
                            h = (g - b) / d + (g < b ? 6 : 0);
                            break;
                        case g:
                            h = (b - r) / d + 2;
                            break;
                        case b:
                            h = (r - g) / d + 4;
                            break;
                    }
                    h /= 6;
                }

                return [h, s, l];
            }

            /**
            * Converts an HSL color value to RGB. Conversion formula
            * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
            * Assumes h, s, and l are contained in the set [0, 1] and
            * returns r, g, and b in the set [0, 255].
            *
            * @param   Number  h       The hue
            * @param   Number  s       The saturation
            * @param   Number  l       The lightness
            * @return  Array           The RGB representation
            */
            function hslToRgb(h, s, l) {
                var r, g, b;

                if (s == 0) {
                    r = g = b = l; // achromatic
                } else {
                    var hue2rgb = function (p, q, t) {
                        if (t < 0)
                            t += 1;
                        if (t > 1)
                            t -= 1;
                        if (t < 1 / 6)
                            return p + (q - p) * 6 * t;
                        if (t < 1 / 2)
                            return q;
                        if (t < 2 / 3)
                            return p + (q - p) * (2 / 3 - t) * 6;
                        return p;
                    };

                    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                    var p = 2 * l - q;
                    r = hue2rgb(p, q, h + 1 / 3);
                    g = hue2rgb(p, q, h);
                    b = hue2rgb(p, q, h - 1 / 3);
                }

                return [r * 255, g * 255, b * 255];
            }

            /**
            * Converts an RGB color value to HSV. Conversion formula
            * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
            * Assumes r, g, and b are contained in the set [0, 255] and
            * returns h, s, and v in the set [0, 1].
            *
            * @param   Number  r       The red color value
            * @param   Number  g       The green color value
            * @param   Number  b       The blue color value
            * @return  Array           The HSV representation
            */
            function rgbToHsv(r, g, b) {
                r = r / 255, g = g / 255, b = b / 255;
                var max = Math.max(r, g, b), min = Math.min(r, g, b);
                var h, s, v = max;

                var d = max - min;
                s = max == 0 ? 0 : d / max;

                if (max == min) {
                    h = 0; // achromatic
                } else {
                    switch (max) {
                        case r:
                            h = (g - b) / d + (g < b ? 6 : 0);
                            break;
                        case g:
                            h = (b - r) / d + 2;
                            break;
                        case b:
                            h = (r - g) / d + 4;
                            break;
                    }
                    h /= 6;
                }

                return [h, s, v];
            }

            /**
            * Converts an HSV color value to RGB. Conversion formula
            * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
            * Assumes h, s, and v are contained in the set [0, 1] and
            * returns r, g, and b in the set [0, 255].
            *
            * @param   Number  h       The hue
            * @param   Number  s       The saturation
            * @param   Number  v       The value
            * @return  Array           The RGB representation
            */
            function hsvToRgb(h, s, v) {
                var r, g, b;

                var i = Math.floor(h * 6);
                var f = h * 6 - i;
                var p = v * (1 - s);
                var q = v * (1 - f * s);
                var t = v * (1 - (1 - f) * s);

                switch (i % 6) {
                    case 0:
                        r = v, g = t, b = p;
                        break;
                    case 1:
                        r = q, g = v, b = p;
                        break;
                    case 2:
                        r = p, g = v, b = t;
                        break;
                    case 3:
                        r = p, g = q, b = v;
                        break;
                    case 4:
                        r = t, g = p, b = v;
                        break;
                    case 5:
                        r = v, g = p, b = q;
                        break;
                }

                return [r * 255, g * 255, b * 255];
            }
        })(GreekBible.Colors || (GreekBible.Colors = {}));
        var Colors = GreekBible.Colors;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
