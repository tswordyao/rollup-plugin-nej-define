const {transRequireToDefine} = require('babel-plugin-nej-pack');

const nejBundleRequireToDefinePlugin = function(){
    return {
        name: 'transNejRequireToDefine',
        renderChunk(code) { 
            return babelCore.transform(code,{"plugins":[transRequireToDefine,"remove-use-strict"]});
        }
    }; 
}

export default nejBundleRequireToDefinePlugin;