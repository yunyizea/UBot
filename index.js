const {
    wsc,
    unit
} = require('./module');

const config = require('./config');
const enablePlugins = [];

try {
    for (let key in config.usePlugins) {
        if (Object.hasOwnProperty.call(config.usePlugins, key)) {
            let e = config.usePlugins[key];
            enablePlugins.push(require(e.path)(e.opt))
            unit.log(`${e.name}加载完成。`)
        }
    }

    wsc.listener(data => {
        if (data.post_type === 'meta_event' && data.meta_event_type === 'lifecycle') {
            unit.log(`go-cqhttp WebSocket Server 连接成功。`);
            unit.log(`登录账号：${data.self_id}。`);
            unit.log(`连接时间：${unit.formatTime(new Date(data.time * 1000))}。`);
        }
        enablePlugins.forEach(plugin => plugin(wsc, data));
        // console.log(data);
    })
} catch (error) {
    unit.err(`UBot启动失败。`);
    unit.err(error);
}
