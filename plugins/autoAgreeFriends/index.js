const { unit } = require('../../module');

module.exports = opt => {
    return async (wsc, data) => {
        if (data.post_type === 'request' && data.request_type === 'friend') {
            unit.log(`已自动同意添加好友请求，对方QQ：${data.user_id}，请求时间：${unit.formatTime(data.time * 1000)}`,'Auto-agree friends');
            wsc.sender('set_friend_add_request', {
                flag: data.flag,
                approve: true
            });
        }
    }
}