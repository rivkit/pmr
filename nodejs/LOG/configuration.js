const { format } = require('express/lib/response');
const winston =require('winston');
const {transports} =require('winston');
require('winston-mongodb');
// const { collection } = require('../models/Order');

const logConfiguration={
    transports:[
        new winston.transports.Console({
            level:'info'
        }),
        new winston.transports.File({
            level:'error',
            filename:'log/logger.log'
        }),
        new transports.MongoDB({
             level:'error',
             db:'mongodb://127.0.0.1:27017/212328231finalProject',
             options:{
                useUnifiedTopology:true
            },
            //   collection:'server_logs',
            //  format:this.format.combine(
            //      format.timestamp(
            //         format.json())
            //  )
        })
    ],
    format:winston.format.combine(
        winston.format.timestamp({
            format:'MM-DD-YYYY HH:mm:ss'
        }),
        winston.format.printf(info=>`${info.level}:${info.timestamp}:${info.message}`),
    )
}
const logger=winston.createLogger(logConfiguration)
module.exports=logger;


