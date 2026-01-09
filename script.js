// 模拟AI回复数据（先不用真实API）
const aiResponses = [
    "你好！我是你的AI助手，很高兴为你服务。",
    "这是一个很好的问题，让我思考一下...",
    "我可以帮你解答各种问题，比如学习、工作、生活等。",
    "建议你多问具体的问题，这样我能更好地帮助你。",
    "我正在学习如何更好地理解人类语言，请多指教！",
    "你知道吗？每天学习一点新知识，生活会变得更有趣。",
    "我虽然是个程序，但我很愿意成为你的聊天伙伴。"
];

// 获取DOM元素
const chatContainer = document.getElementById('chatContainer');
const messageInput = document.getElementById('messageInput');

// 添加消息到聊天窗口
function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;
    messageDiv.textContent = message;
    chatContainer.appendChild(messageDiv);
    
    // 滚动到底部
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// 模拟AI思考过程
function simulateThinking() {
    const thinkingDiv = document.createElement('div');
    thinkingDiv.className = 'message ai-message';
    thinkingDiv.textContent = 'AI正在思考...';
    thinkingDiv.id = 'thinking';
    chatContainer.appendChild(thinkingDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    
    return thinkingDiv;
}

// 获取AI回复
function getAIResponse(userMessage) {
    // 先显示"正在思考"
    const thinkingDiv = simulateThinking();
    
    // 模拟网络延迟
    setTimeout(() => {
        // 移除"正在思考"
        thinkingDiv.remove();
        
        // 随机选择一个回复
        const randomIndex = Math.floor(Math.random() * aiResponses.length);
        const response = aiResponses[randomIndex];
        
        // 添加AI回复
        addMessage(response);
    }, 1000);
}

// 发送消息
function sendMessage() {
    const message = messageInput.value.trim();
    
    if (message) {
        // 添加用户消息
        addMessage(message, true);
        
        // 清空输入框
        messageInput.value = '';
        
        // 获取AI回复
        getAIResponse(message);
    }
}

// 按Enter键发送
messageInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// 页面加载时设置输入框焦点
window.onload = function() {
    messageInput.focus();
};
