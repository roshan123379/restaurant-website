const path = require('path')

module.exports={
    mode:"production",
    devServer:{
        static:path.join(__dirname,'dist'),
        compress:true,
        port:3000
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    }
}