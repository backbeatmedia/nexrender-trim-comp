const path = require('path');
const url = require('url');

module.exports = async (job, settings, options, type) => {
    settings.logger = settings.logger ?? console;
    const jsxUrl = url.pathToFileURL(path.join(__dirname, 'trimComp.jsx')).toString();
    
    settings.logger.log(`path to script = ${jsxUrl}`)
    
    // module runs in predownload mode only
    if (type == 'predownload') {

        // if a layer has been defined ...
        if (typeof options.layer !== 'undefined') {
            
            // ... add the AE script as an asset to be run at render time ...
            job.assets.push({
                src: jsxUrl,
                keyword: '_trim',
                type: 'script',

                // ... with the settings baked in
                parameters: [
                    {
                        key: 'comp',
                        value: job.template.composition,
                    },
                    {
                        key: 'layer',
                        value: options.layer
                    },
                    {
                        key: 'handle',
                        value: options.handle || 0
                    }
                ]
            })
        }    


        return job;

    } else {

        throw Error("'nexrender-trim-comp' module should be used only in 'predownload' section");
    }
}