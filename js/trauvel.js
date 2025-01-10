dynamicallyLoadScript(
    [
        './js/trauvel/components/plumb/getInstance.js',


        './js/trauvel/variable.js',


        './js/trauvel/components/elements/block.js',
        './js/trauvel/components/elements/classes.js',

        './js/trauvel/components/ui/context-menu/ui.js',
        './js/trauvel/components/ui/canvas/canvas.js',

        './js/trauvel/components/ui/menu/addService.js',
        './js/trauvel/components/ui/menu/addClass.js',
        './js/trauvel/components/ui/menu/saveCanvas.js',
        './js/trauvel/components/ui/menu/loadCanvas.js',
        './js/trauvel/components/ui/menu/backButton.js',


        './js/trauvel/handlers/context-menu/add-connection.js',
        './js/trauvel/handlers/context-menu/rename.js',

        './js/trauvel/handlers/service/enterButton.js',
    ]
);


function dynamicallyLoadScript(urlMap) {
    urlMap.map(url => {
        var script = document.createElement("script");
        script.src = url;

        footer.appendChild(script);
    });
}