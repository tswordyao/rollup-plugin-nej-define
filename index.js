const babelCore= require('@babel/core');
const {transRequireToDefine} = require('babel-plugin-nej-pack');

const nejBundleRequireToDefinePlugin = function(ops){
    let plugins = (ops && ops.removeStrict) ? [transRequireToDefine,"remove-use-strict"] : [transRequireToDefine]
    return {
        name: 'transNejRequireToDefine',
        renderChunk(code) { 
            return babelCore.transform(code,{plugins});
        }
    }; 
}

module.exports =nejBundleRequireToDefinePlugin;