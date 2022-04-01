module.exports = {
    formatNumber: number => {
        let strNumber = number.toString;
        return strNumber[1] ? strNumber : '0' + strNumber;
    },
    formatTime: dateObj => {
        let date = dateObj ? new Date(dateObj) : new Date();
        let f = n => {
            return n.toString()[1] ? n : `0${n.toString()}`;
        }

        return `${date.getFullYear()}-${f(date.getMonth() + 1)}-${f(date.getDate())} ${f(date.getHours())}:${f(date.getMinutes())}:${f(date.getSeconds())}`
    },
    log: (msg, who) => {
        console.log(`[UBot LOG${who ? ' - ' + who : ''}]: ${msg}`);
    },
    err: (msg, who) => {
        console.error(`[UBot ERROR${who ? ' - ' + who : ''}]: ${msg}`);
    },
    warn: (msg, who) => {
        console.warn(`[UBot WARN${who ? ' - ' + who : ''}]: ${msg}`);
    }
}