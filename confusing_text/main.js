// 转换
function shuffle() {
    // 获取输入框中的字符
    const input = document.getElementById('input').value;
    // 将字符转换成数组
    const chars = input.split('');
    // 为每个字符创建一个对象，存储编号和字符
    const items = [];
    for (let i = 0; i < chars.length; i++) {
        items.push({
            id: i + 1,
            char: chars[i]
        });
    }
    // 打乱 items 数组的顺序
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }
    // 将打乱顺序的 items 数组拼接成新的字符串
    let output = '';
    for (const item of items) {
        output += `[${item.id}]${item.char}-`;
    }
    // 获取 div 元素并更新它的内容
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = output;
    // 提示用户生成成功
    const notificationElement = document.getElementById('notification');
    notificationElement.innerHTML = '转换成功';
}

// 复制
function copy() {
    const copyButton = document.getElementById('copy');
    // 获取 div 元素
    const output = document.getElementById('output');
    // 创建临时输入框
    const tempInput = document.createElement('input');
    // 将 div 的内容复制到临时输入框
    tempInput.value = output.innerText;
    // 将临时输入框添加到页面中
    document.body.appendChild(tempInput);
    // 选中临时输入框的内容
    tempInput.select();
    // 复制临时输入框的内容
    document.execCommand('copy');
    // 移除临时输入框
    document.body.removeChild(tempInput);
    // 提示用户复制成功
    const notificationElement = document.getElementById('notification');
    notificationElement.innerHTML = '复制成功';
    // 清空内容
    document.getElementById('input').value = "";
}

(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 750) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);