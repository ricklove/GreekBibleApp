
//<link rel="stylesheet" href="Styles/css/External/themes/default/jquery.mobile-1.4.0.min.css">
//<link rel="stylesheet" href="Styles/css/External/qunit-1.14.0.css">
//<link rel="stylesheet" href="Styles/css/App.css">

//<script async="async" type='text/javascript' src="Scripts/js/External/jquery.min.js"></script>
//<script async="async" type='text/javascript' src="Scripts/js/External/jquery.mobile-1.4.0.min.js"></script>
//<script async="async" type='text/javascript' src="Scripts/js/External/knockout-3.0.0.min.js"></script>
//<script async="async" type="text/javascript" src="Scripts/js/External/linq.min.js"></script>
//<script async="async" type="text/javascript" src="Scripts/js/External/jquery.linq.min.js"></script>
//<script async="async" type='text/javascript' src='Scripts/js/External/qunit-1.14.0.min.js'></script>

//<script async="async" type='text/javascript' src='Scripts/ts/Core/Passage.js'></script>
//<script async="async" type='text/javascript' src='Scripts/ts/System/LoadPassageText.js'></script>
//<script async="async" type='text/javascript' src='Scripts/ts/System/ParsePassageText.js'></script>
//<script async="async" type='text/javascript' src='Scripts/ts/System/ParsePassageText_TestData.js'></script>
//<script async="async" type='text/javascript' src='Scripts/ts/System/ParsePassageText_Tests.js'></script>
//<script async="async" type='text/javascript' src='Scripts/ts/System/Colors.js'></script>

//<script async="async" type='text/javascript' src='Scripts/ts/User/MainViewModel.js'></script>
//<script async="async" type='text/javascript' src='Scripts/ts/User/DisplayPassage.js'></script>
//<script async="async" type='text/javascript' src='Scripts/ts/User/DisplayPassage_Tests.js'></script>
//<script async="async" type='text/javascript' src='Scripts/ts/User/ChoosePassage.js'></script>

function loadRequirements(onLoadedA, onProgressA) {

    function loadScripts(scriptList, onLoaded, onProgress) {

        function loadScriptInner(url, onScriptLoad) {
            // Based on jQuery.getScript
            var head = document.getElementsByTagName("head")[0] || document.documentElement;
            var script = document.createElement("script");
            //if (s.scriptCharset) {
            //    script.charset = s.scriptCharset;
            //}
            script.src = url;

            // Handle Script loading
            var done = false;

            // Attach handlers for all browsers
            script.onload = script.onreadystatechange = function () {
                if (!done && (!this.readyState ||
                        this.readyState === "loaded" || this.readyState === "complete")) {
                    done = true;

                    onScriptLoad();

                    // Handle memory leak in IE
                    script.onload = script.onreadystatechange = null;
                    if (head && script.parentNode) {
                        head.removeChild(script);
                    }
                }
            };

            // Use insertBefore instead of appendChild  to circumvent an IE6 bug.
            // This arises when a base node is used (#2709 and #4378).
            head.insertBefore(script, head.firstChild);
        }

        var scriptsToLoad = [];
        var scriptCount = 0;
        var isLoading = false;

        var loadNextScript = function () {

            if (onProgress) {
                onProgress(1.0 - (scriptsToLoad.length / scriptCount));
            }

            if (scriptsToLoad.length > 0) {
                var nextScript = scriptsToLoad.shift();
                loadScriptInner(nextScript, loadNextScript);
            } else {
                isLoading = false;
                if (onProgress) {
                    onProgress(1);
                }
                onLoaded();
            }
        };

        function loadScript(url) {
            scriptsToLoad.push(url);
            scriptCount++;

            if (!isLoading) {
                isLoading = true;

                setTimeout(loadNextScript, 0);
            }
        }

        scriptList.map(function (s) { loadScript(s) });
    }

    function loadCss(url) {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
    }

    // Export methods
    window.loadScripts = loadScripts;
    window.loadCss = loadCss;

    //<link rel="stylesheet" href="Styles/css/External/themes/default/jquery.mobile-1.4.0.min.css">
    //<link rel="stylesheet" href="Styles/css/External/qunit-1.14.0.css">
    //<link rel="stylesheet" href="Styles/css/App.css">
    loadCss('Styles/css/External/themes/default/jquery.mobile-1.4.0.min.css');
    loadCss('Styles/css/External/qunit-1.14.0.css');
    loadCss('Styles/css/App.css');

    var scriptListA = [
        'Scripts/js/External/jquery.min.js',
        'Scripts/js/External/jquery.mobile-1.4.0.min.js',
        'Scripts/js/External/knockout-3.0.0.min.js',
        'Scripts/js/External/linq.min.js',
        'Scripts/js/External/jquery.linq.min.js',
        'Scripts/js/External/qunit-1.14.0.min.js',
        'Scripts/js/External/yadda-0.9.8.js',

        'Scripts/ts/Core/Passage.js',

        'Scripts/ts/System/LoadPassageText.js',
        'Scripts/ts/System/ParsePassageText.js',
        'Scripts/ts/System/ParsePassageText_TestData.js',
        'Scripts/ts/System/ParsePassageText_Tests.js',
        'Scripts/ts/System/Colors.js',

        'Scripts/ts/User/MainViewModel.js',
        'Scripts/ts/User/DisplayPassage.js',
        'Scripts/ts/User/DisplayPassage_Tests.js',
        'Scripts/ts/User/ChoosePassage.js',

        'Scripts/ts/YaddaRunner.js',
    ];

    loadScripts(scriptListA, onLoadedA, onProgressA);


}
