const { unit } = require('../../module');

module.exports = opt => {
    return async (wsc, data) => {
        if (data.post_type === 'message') {
            unit.log(`收到消息：'${data.message.replace(/\n/g, ' ')}'，消息类型：${data.message_type === 'private' ? '私聊' : '群'}消息，发送人：${data.user_id}，发送时间：${unit.formatTime(new Date(data.time * 1000))}`,'MainPlugin');
        }
    }
}
