(function() {

    function compByName(name) {
        for (var i = 1; i <= app.project.items.length; i++) {
            var item = app.project.items[i];
            if (item instanceof CompItem && item.name === name) {
                return item;
            }
        }
    }

    function layerByName(comp, name) {
        for (var i = 1; i <= comp.layers.length; i++) {
            var item = comp.layers[i];
            if (item.name === name)
                return item;
        }
    }

    if (typeof _trim !== 'undefined') {

        // get the settings
        var comp = _trim.get('comp');
        var layer = _trim.get('layer');
        var handle = _trim.get('handle');

        // access the render comp and layer
        var renderComp = compByName(comp);
        var referenceLayer = layerByName(renderComp, layer);

        // calculate the desired outpoint
        var newOutpoint = referenceLayer.outPoint + handle;

        // apply to the comp
        renderComp.workAreaDuration = newOutpoint - renderComp.workAreaStart;

    }

})();