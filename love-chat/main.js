
// 计时
var datetime = document.getElementById('datetime');
function fresh(n) {
    return n >= 0 && n < 10 ? '0' + n : '' + n;
}
function getDate() {
    var date = new Date('2021/07/30 00:00:00').getTime();//获取目标时间的时间戳
    var now = new Date().getTime();//当前时间戳
    var second = Math.floor((now - date) / 1000);//时间差秒数
    var day = Math.floor(second / 86400);//时间差天数
    second = second % 86400;//除去天数剩下的秒数
    var hour = Math.floor(second / 3600);//剩下秒数的小时数
    second %= 3600;//除去小时数剩下的秒数
    var minute = Math.floor(second / 60);//剩下秒数的分钟数
    second %= 60;//除去分钟数剩下的秒数
    var str = fresh(day) + '<span class="time">天</span>' +
        fresh(hour) + '<span class="time">小时</span>' +
        fresh(minute) + '<span class="time">分钟</span>' +
        fresh(second) + '<span class="time">秒</span>';
    datetime.innerHTML = str;
}
setInterval(getDate, 1000);//每秒调用上面的函数

// 
const chats = [...document.querySelectorAll(".chat .dialog")];

const onScroll = (_) => {
    const { scrollTop, scrollHeight, clientHeight } = document.scrollingElement;
    const phase = scrollTop / (scrollHeight - clientHeight);
    document.body.style.setProperty("--phase", phase);

    chats.forEach((e, i) => {
        const step = 1 / chats.length;
        const focalPoint = step * (i - 1);
        const focal = Math.min(Math.max(1 - (phase - focalPoint) / step, -1), 1);
        e.style.setProperty("--focal", focal);
        e.style.opacity = Math.min(Math.max(1 + focal * 2, 0), 1);

        const dist = (phase - step * i) / step;
        e.style.filter = `blur(${Math.min(Math.abs(dist ** 2 * 0.5), 1.2)}rem)`;
    });
};
window.addEventListener("scroll", onScroll);
onScroll();