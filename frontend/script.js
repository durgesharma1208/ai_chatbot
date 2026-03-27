// ===============================
// Gemini Chat Frontend Script
// ===============================

// ===== DOM ELEMENTS =====
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const messagesList = document.getElementById('messagesList');
const messagesContainer = document.getElementById('messagesContainer');
const typingIndicator = document.getElementById('typingIndicator');
const welcomeScreen = document.getElementById('welcomeScreen');
const newChatBtn = document.getElementById('newChatBtn');
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');
const statusDot = document.querySelector('.status-dot');
const statusText = document.querySelector('.status-text');
const chips = document.querySelectorAll('.chip');

let isWaiting = false;


// ===============================
// AUTO RESIZE TEXTAREA
// ===============================
messageInput.addEventListener('input', () => {
    messageInput.style.height = 'auto';
    messageInput.style.height = Math.min(messageInput.scrollHeight, 120) + 'px';
    sendBtn.disabled = !messageInput.value.trim();
});


// ===============================
// ENTER TO SEND
// ===============================
messageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (!isWaiting && messageInput.value.trim()) {
            sendMessage();
        }
    }
});


// ===============================
// SEND BUTTON
// ===============================
sendBtn.addEventListener('click', () => {
    if (!isWaiting && messageInput.value.trim()) {
        sendMessage();
    }
});


// ===============================
// SUGGESTION CHIPS
// ===============================
chips.forEach(chip => {
    chip.addEventListener('click', () => {
        const message = chip.getAttribute('data-message');
        messageInput.value = message;
        sendBtn.disabled = false;
        sendMessage();
    });
});


// ===============================
// NEW CHAT RESET
// ===============================
newChatBtn.addEventListener('click', async () => {
    try {
        const response = await fetch('/api/reset', { method: 'POST' });

        if (!response.ok) {
            throw new Error("Reset failed");
        }

        messagesList.innerHTML = '';
        welcomeScreen.style.display = 'flex';
        sidebar.classList.remove('open');
        setStatus('online', 'Online');

    } catch (error) {
        console.error("Reset error:", error);
        setStatus('error', 'Reset Failed');
    }
});


// ===============================
// MOBILE SIDEBAR
// ===============================
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 &&
        !sidebar.contains(e.target) &&
        !menuToggle.contains(e.target)) {
        sidebar.classList.remove('open');
    }
});


// ===============================
// MAIN SEND FUNCTION
// ===============================
async function sendMessage() {
    const text = messageInput.value.trim();
    if (!text || isWaiting) return;

    welcomeScreen.style.display = 'none';
    appendMessage('user', text);

    messageInput.value = '';
    messageInput.style.height = 'auto';
    sendBtn.disabled = true;

    isWaiting = true;
    typingIndicator.style.display = 'flex';
    setStatus('online', 'Thinking...');
    scrollToBottom();

    try {
        // ===============================
        // 🔌 BACKEND CONNECTION
        // ===============================
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: text })
        });

        let data;

        try {
            data = await response.json();
        } catch {
            throw new Error("Invalid JSON response from server.");
        }

        typingIndicator.style.display = 'none';

        if (!response.ok) {
            throw new Error(data.error || `Server Error (${response.status})`);
        }

        appendMessage('bot', data.reply);
        setStatus('online', 'Online');

    } catch (error) {
        typingIndicator.style.display = 'none';
        console.error("Backend Error:", error);

        appendMessage('error', error.message || 'Failed to connect to backend.');
        setStatus('error', 'Error');
    }

    isWaiting = false;
    scrollToBottom();
}


// ===============================
// MESSAGE RENDERING
// ===============================
function appendMessage(type, text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type);

    const avatar = document.createElement('div');
    avatar.classList.add('message-avatar');

    const content = document.createElement('div');
    content.classList.add('message-content');

    if (type === 'user') {
        avatar.textContent = 'Y';
        content.textContent = text;

    } else if (type === 'bot') {
        avatar.textContent = '✦';
        content.innerHTML = formatMarkdown(text);

    } else if (type === 'error') {
        avatar.textContent = '⚠';
        content.textContent = text;
    }

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    messagesList.appendChild(messageDiv);
}


// ===============================
// MARKDOWN FORMATTER
// ===============================
function formatMarkdown(text) {
    let html = text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    html = html.replace(/```(\w*)\n?([\s\S]*?)```/g,
        (_, lang, code) => `<pre><code class="language-${lang}">${code.trim()}</code></pre>`);

    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
    html = html.replace(/^\* (.+)$/gm, '<li>$1</li>');
    html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');
    html = html.replace(/^&gt; (.+)$/gm, '<blockquote>$1</blockquote>');
    html = html.replace(/\n\n/g, '</p><p>');
    html = html.replace(/\n/g, '<br>');

    if (!html.startsWith('<')) {
        html = `<p>${html}</p>`;
    }

    return html;
}


// ===============================
// SCROLL
// ===============================
function scrollToBottom() {
    requestAnimationFrame(() => {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    });
}


// ===============================
// STATUS INDICATOR
// ===============================
function setStatus(type, text) {
    statusDot.className = 'status-dot ' + type;
    statusText.textContent = text;
}
