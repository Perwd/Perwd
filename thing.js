const express = require('express');

const app = express();
// {
//     "state": "success",
//     "data": []
// }
app.get('/server', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Header', '*');
    let server = {
        // 服务器返回的数据格式为
        // state: "success",
        // 'data': {
        //     id: null,
        //     temper: [Math.round(Math.random() * 100)],
        //     humi: [],
        //     power: [],
        // }
        state: "success",
        data: {
            id: [],
            temper: Math.round(Math.random() * 100) + "℃",
            humi: [],
            power: [],
        }
    }

    let json = JSON.stringify(server)
    setTimeout(function () {
        res.send(json)
    }, 1000);
    // res.send(json)
})
app.get('/interface', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Header', '*');
    let server = {
        // 服务器返回的数据格式为
        // state: "success",
        // 'data': {
        //     id: null,
        //     temper: [Math.round(Math.random() * 100)],
        //     humi: [],
        //     power: [],
        // }
        state: "success",
        data: {
            id: [],
            tem: Math.round(Math.random() * 100),
            humi: [],
            power: [],
        }
    }

    let json = JSON.stringify(server)
    // setTimeout(function () {
    //     res.send(json)
    // }, 1000);
    res.send(json)
})
app.post('/server', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('post');
})
app.all('/thing', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let thing = {
        state: 'success',
    }
    let str = JSON.stringify(thing);
    res.send(str);
})
app.get('/product/getBaseCaregoryList',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Header', '*');
    
    res.send();
})
app.listen(8000, () => {
    console.log("8000已启动")
});