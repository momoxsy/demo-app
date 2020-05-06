const {
    override,
    fixBabelImports,
    overrideDevServer,
    addTslintLoader,
    watchAll
} = require('customize-cra');
module.exports = {
    webpack: override(
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true,
        }),
        addTslintLoader(),
        // (config, env) => { 
        //     debugger;
        //     const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
        //     console.log(loaders);
        // }
    ),
    devServer: overrideDevServer(
        watchAll()
    )
};