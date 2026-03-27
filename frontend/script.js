/* =============================================================
   NexusAI — Frontend Application
   ============================================================= */

// ==================== CONFIGURATION ====================
const CONFIG = {
    // 🔌 BACKEND API ENDPOINTS — Change these to match your backend
    API_ENDPOINT: '/api/chat',      // POST { message: "..." } → { reply: "..." }
    RESET_ENDPOINT: '/api/reset',   // POST → { status: "reset" }

    APP_NAME: 'NexusAI',
    STORAGE_KEY: 'nexusai_chats',
    THEME_KEY: 'nexusai_theme',
    TYPING_DELAY: 600,
};

// ==================== SVG ICONS ====================
const ICONS = {
    send: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg>`,
    stop: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>`,
    copy: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`,
    check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    trash: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>`,
    chat: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
    refresh: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>`,
    sun: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
    moon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`,
    sparkle: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1l2.59 7.41L22 11l-7.41 2.59L12 21l-2.59-7.41L2 11l7.41-2.59L12 1z"/></svg>`,
};

// ==================== MOCK RESPONSES ====================
const MOCK_RESPONSES = [
    `Great question! Here's what I think:\n\n**Key Points:**\n\n- First, let's understand the core concepts\n- Then we can explore practical applications\n- Finally, we'll look at real-world examples\n\nThe most important thing to remember is that learning is a continuous journey. Every step forward, no matter how small, brings you closer to mastery.\n\nWould you like me to elaborate on any of these points?`,

    `Here's a Python example:\n\n\`\`\`python\ndef fibonacci(n):\n    \"\"\"Generate fibonacci sequence up to n terms.\"\"\"\n    if n <= 0:\n        return []\n    elif n == 1:\n        return [0]\n    \n    sequence = [0, 1]\n    for i in range(2, n):\n        sequence.append(sequence[-1] + sequence[-2])\n    return sequence\n\n# Example usage\nresult = fibonacci(10)\nprint(f\"First 10 Fibonacci numbers: {result}\")\n\`\`\`\n\nThis implementation uses **O(n)** time complexity and **O(n)** space complexity. For a more memory-efficient version, you could use an iterative approach with only two variables.`,

    `## Here's a comprehensive overview\n\nThere are several approaches worth considering:\n\n### 1. The Fundamentals\nStart with a solid foundation. Understanding the basics is crucial before moving to advanced topics.\n\n### 2. Best Practices\n- Write clean, readable code\n- Follow the \`DRY\` principle (Don't Repeat Yourself)\n- Use meaningful variable names\n- Test your code thoroughly\n\n### 3. Advanced Techniques\nOnce comfortable with the basics, explore:\n\n1. Design patterns\n2. Architecture principles\n3. Performance optimization\n\n> "Simplicity is the ultimate sophistication." — Leonardo da Vinci\n\nLet me know if you'd like to dive deeper into any specific area!`,

    `That's an interesting topic! Let me break it down for you:\n\n**The Short Answer:** It depends on your specific use case, but here are the most common approaches.\n\n**The Detailed Answer:**\n\nWhen working with this, consider these factors:\n\n- **Performance** — How fast does it need to be?\n- **Scalability** — Will it need to handle more load in the future?\n- **Maintainability** — Can other developers easily understand the code?\n\nHere's a quick comparison:\n\n\`\`\`javascript\n// Approach A: Simple and readable\nconst result = data\n    .filter(item => item.active)\n    .map(item => item.name)\n    .sort();\n\n// Approach B: More performant\nconst result = [];\nfor (const item of data) {\n    if (item.active) result.push(item.name);\n}\nresult.sort();\n\`\`\`\n\nBoth approaches are valid — choose based on your priorities! 🚀`,
];

// ==================== APPLICATION STATE ====================
const AppState = {
    chats: [],
    activeChatId: null,
    isGenerating: false,
    abortController: null,
    theme: localStorage.getItem(CONFIG.THEME_KEY) || 'dark',
};

// ==================== DOM CACHE ====================
const DOM = {};

function cacheDom() {
    DOM.sidebar = document.getElementById('sidebar');
    DOM.sidebarOverlay = document.getElementById('sidebarOverlay');
    DOM.sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
    DOM.menuBtn = document.getElementById('menuBtn');
    DOM.newChatBtn = document.getElementById('newChatBtn');
    DOM.chatHistory = document.getElementById('chatHistory');
    DOM.clearChatsBtn = document.getElementById('clearChatsBtn');
    DOM.settingsBtn = document.getElementById('settingsBtn');
    DOM.headerTitle = document.getElementById('headerTitle');
    DOM.themeToggleBtn = document.getElementById('themeToggleBtn');
    DOM.chatArea = document.getElementById('chatArea');
    DOM.welcomeScreen = document.getElementById('welcomeScreen');
    DOM.messagesList = document.getElementById('messagesList');
    DOM.typingIndicator = document.getElementById('typingIndicator');
    DOM.scrollBottomBtn = document.getElementById('scrollBottomBtn');
    DOM.messageInput = document.getElementById('messageInput');
    DOM.sendBtn = document.getElementById('sendBtn');
    DOM.inputContainer = document.getElementById('inputContainer');
    DOM.settingsModal = document.getElementById('settingsModal');
    DOM.settingsCloseBtn = document.getElementById('settingsCloseBtn');
    DOM.toastContainer = document.getElementById('toastContainer');
    DOM.welcomeCards = document.querySelectorAll('.welcome-card');
    DOM.themeOpts = document.querySelectorAll('.theme-opt');
}

// ==================== INITIALIZATION ====================
function init() {
    cacheDom();
    loadFromStorage();
    applyTheme(AppState.theme);
    updateSendButton();
    renderChatHistory();

    if (AppState.activeChatId) {
        const chat = getChat(AppState.activeChatId);
        if (chat && chat.messages.length > 0) {
            renderMessages(chat);
        } else {
            showWelcome();
        }
    } else {
        showWelcome();
    }

    setupEventListeners();
}

document.addEventListener('DOMContentLoaded', init);

// ==================== THEME ====================
function applyTheme(theme) {
    AppState.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(CONFIG.THEME_KEY, theme);

    DOM.themeToggleBtn.innerHTML = theme === 'dark' ? ICONS.sun : ICONS.moon;
    DOM.themeToggleBtn.title = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;

    DOM.themeOpts.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.setTheme === theme);
    });
}

function toggleTheme() {
    applyTheme(AppState.theme === 'dark' ? 'light' : 'dark');
}

// ==================== SIDEBAR ====================
function openSidebar() {
    DOM.sidebar.classList.add('open');
    DOM.sidebarOverlay.classList.add('active');
}

function closeSidebar() {
    DOM.sidebar.classList.remove('open');
    DOM.sidebarOverlay.classList.remove('active');
}

// ==================== CHAT MANAGEMENT ====================
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function createChat(switchTo = true) {
    const chat = {
        id: generateId(),
        messages: [],
        createdAt: Date.now(),
    };
    AppState.chats.unshift(chat);

    if (switchTo) {
        AppState.activeChatId = chat.id;
        DOM.messagesList.innerHTML = '';
        showWelcome();
        DOM.headerTitle.textContent = 'New Chat';
        DOM.messageInput.focus();
    }

    renderChatHistory();
    saveToStorage();
    closeSidebar();
    return chat;
}

function getChat(id) {
    return AppState.chats.find(c => c.id === id);
}

function switchChat(id) {
    const chat = getChat(id);
    if (!chat) return;

    AppState.activeChatId = id;

    if (chat.messages.length > 0) {
        renderMessages(chat);
    } else {
        DOM.messagesList.innerHTML = '';
        showWelcome();
    }

    DOM.headerTitle.textContent = getChatTitle(chat);
    renderChatHistory();
    saveToStorage();
    closeSidebar();
}

function deleteChat(id, event) {
    event.stopPropagation();
    AppState.chats = AppState.chats.filter(c => c.id !== id);

    if (AppState.activeChatId === id) {
        if (AppState.chats.length > 0) {
            switchChat(AppState.chats[0].id);
        } else {
            AppState.activeChatId = null;
            DOM.messagesList.innerHTML = '';
            showWelcome();
            DOM.headerTitle.textContent = 'New Chat';
        }
    }

    renderChatHistory();
    saveToStorage();
    showToast('Chat deleted', 'info');
}

function clearAllChats() {
    if (AppState.chats.length === 0) return;
    AppState.chats = [];
    AppState.activeChatId = null;
    DOM.messagesList.innerHTML = '';
    showWelcome();
    DOM.headerTitle.textContent = 'New Chat';
    renderChatHistory();
    saveToStorage();
    showToast('All chats cleared', 'info');
    closeSidebar();

    // Reset backend session too
    fetch(CONFIG.RESET_ENDPOINT, { method: 'POST' }).catch(() => {});
}

function getChatTitle(chat) {
    if (!chat || chat.messages.length === 0) return 'New Chat';
    const first = chat.messages.find(m => m.role === 'user');
    if (!first) return 'New Chat';
    return first.content.length > 40
        ? first.content.substring(0, 40) + '...'
        : first.content;
}

function getDateGroup(timestamp) {
    const now = new Date();
    const date = new Date(timestamp);
    const diffMs = now - date;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays <= 7) return 'Previous 7 Days';
    if (diffDays <= 30) return 'Previous 30 Days';
    return 'Older';
}

function renderChatHistory() {
    DOM.chatHistory.innerHTML = '';

    if (AppState.chats.length === 0) {
        DOM.chatHistory.innerHTML = `<div style="padding:20px 10px;text-align:center;color:var(--text-tertiary);font-size:12.5px;">No conversations yet</div>`;
        return;
    }

    const groups = {};
    AppState.chats.forEach(chat => {
        const group = getDateGroup(chat.createdAt);
        if (!groups[group]) groups[group] = [];
        groups[group].push(chat);
    });

    Object.entries(groups).forEach(([label, chats]) => {
        const groupLabel = document.createElement('div');
        groupLabel.className = 'history-group-label';
        groupLabel.textContent = label;
        DOM.chatHistory.appendChild(groupLabel);

        chats.forEach(chat => {
            const item = document.createElement('div');
            item.className = 'history-item' + (chat.id === AppState.activeChatId ? ' active' : '');
            item.innerHTML = `
                <span class="history-item-icon">${ICONS.chat}</span>
                <span class="history-item-title">${escapeHtml(getChatTitle(chat))}</span>
                <button class="history-item-delete" title="Delete chat">${ICONS.trash}</button>
            `;
            item.addEventListener('click', () => switchChat(chat.id));
            item.querySelector('.history-item-delete').addEventListener('click', (e) => deleteChat(chat.id, e));
            DOM.chatHistory.appendChild(item);
        });
    });
}

// ==================== WELCOME SCREEN ====================
function showWelcome() {
    DOM.welcomeScreen.style.display = 'flex';
    DOM.messagesList.style.display = 'none';
}

function hideWelcome() {
    DOM.welcomeScreen.style.display = 'none';
    DOM.messagesList.style.display = 'flex';
}

// ==================== MESSAGE SENDING ====================
async function sendMessage(text = null) {
    const content = text || DOM.messageInput.value.trim();
    if (!content || AppState.isGenerating) return;

    // Ensure there's an active chat
    let chat = getChat(AppState.activeChatId);
    if (!chat) {
        chat = createChat(true);
    }

    hideWelcome();

    // Add user message
    chat.messages.push({ role: 'user', content, time: Date.now() });
    renderSingleMessage({ role: 'user', content, time: Date.now() });
    scrollToBottom(true);

    // Update UI
    DOM.messageInput.value = '';
    DOM.messageInput.style.height = 'auto';
    DOM.headerTitle.textContent = getChatTitle(chat);
    renderChatHistory();

    // Show typing
    AppState.isGenerating = true;
    updateSendButton();
    showTyping();

    try {
        const reply = await getAIResponse(content);

        hideTyping();
        chat.messages.push({ role: 'assistant', content: reply, time: Date.now() });
        renderSingleMessage({ role: 'assistant', content: reply, time: Date.now() });
        scrollToBottom(true);

    } catch (error) {
        hideTyping();
        const errMsg = 'Sorry, something went wrong. Please try again.';
        chat.messages.push({ role: 'assistant', content: errMsg, time: Date.now() });
        renderSingleMessage({ role: 'assistant', content: errMsg, time: Date.now() });
        showToast('Failed to get response', 'error');
    }

    AppState.isGenerating = false;
    updateSendButton();
    saveToStorage();
    DOM.messageInput.focus();
}

function stopGenerating() {
    if (AppState.abortController) {
        AppState.abortController.abort();
        AppState.abortController = null;
    }
    AppState.isGenerating = false;
    hideTyping();
    updateSendButton();
}

// ==================== AI RESPONSE ====================
// 🔌 This function connects to your Python backend
async function getAIResponse(message) {
    AppState.abortController = new AbortController();

    try {
        const response = await fetch(CONFIG.API_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message }),
            signal: AppState.abortController.signal,
        });

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            throw new Error(errData.error || 'API request failed');
        }

        const data = await response.json();
        return data.reply;

    } catch (error) {
        if (error.name === 'AbortError') {
            return '*(Generation stopped)*';
        }
        // Fallback to mock if backend unavailable
        console.warn('Backend unavailable, using mock response:', error.message);
        await new Promise(r => setTimeout(r, 1200 + Math.random() * 800));
        return MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)];
    }
}

// ==================== MESSAGE RENDERING ====================
function renderMessages(chat) {
    DOM.messagesList.innerHTML = '';
    hideWelcome();

    chat.messages.forEach(msg => {
        renderSingleMessage(msg, false);
    });

    scrollToBottom(true);
}

function renderSingleMessage(msg, animate = true) {
    DOM.messagesList.style.display = 'flex';

    const el = document.createElement('div');
    el.className = `message ${msg.role}`;
    if (!animate) el.style.animation = 'none';

    const timeStr = new Date(msg.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (msg.role === 'user') {
        el.innerHTML = `
            <div class="msg-avatar">You</div>
            <div class="msg-body">
                <div class="msg-content">${escapeHtml(msg.content)}</div>
            </div>
        `;
    } else {
        el.innerHTML = `
            <div class="msg-avatar">${ICONS.sparkle}</div>
            <div class="msg-body">
                <div class="msg-header">
                    <span class="msg-name">${CONFIG.APP_NAME}</span>
                    <span class="msg-time">${timeStr}</span>
                </div>
                <div class="msg-content">${renderMarkdown(msg.content)}</div>
                <div class="msg-actions">
                    <button class="msg-action-btn copy-msg-btn" title="Copy">${ICONS.copy} <span>Copy</span></button>
                    <button class="msg-action-btn regen-btn" title="Regenerate">${ICONS.refresh} <span>Regenerate</span></button>
                </div>
            </div>
        `;

        // Copy handler
        el.querySelector('.copy-msg-btn').addEventListener('click', function() {
            copyToClipboard(msg.content, this);
        });

        // Regenerate handler
        el.querySelector('.regen-btn').addEventListener('click', () => {
            const chat = getChat(AppState.activeChatId);
            if (!chat || AppState.isGenerating) return;
            // Remove last assistant message
            const lastIdx = chat.messages.length - 1;
            if (chat.messages[lastIdx]?.role === 'assistant') {
                chat.messages.pop();
                el.remove();
                // Get last user message and resend
                const lastUserMsg = [...chat.messages].reverse().find(m => m.role === 'user');
                if (lastUserMsg) {
                    sendMessage(lastUserMsg.content);
                }
            }
        });
    }

    DOM.messagesList.appendChild(el);
}

// ==================== MARKDOWN RENDERER ====================
function renderMarkdown(text) {
    if (!text) return '';

    let html = text;

    // Extract code blocks
    const codeBlocks = [];
    html = html.replace(/```(\w*)\n?([\s\S]*?)```/g, (_, lang, code) => {
        codeBlocks.push({ lang: lang || 'code', code: code.trim() });
        return `%%CODE_${codeBlocks.length - 1}%%`;
    });

    // Escape HTML
    html = escapeHtml(html);

    // Restore code block placeholders (they got escaped)
    codeBlocks.forEach((_, i) => {
        html = html.replace(`%%CODE_${i}%%`, `<<CODE_${i}>>`);
    });

    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

    // Bold
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

    // Italic
    html = html.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');

    // Headers
    html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');

    // Blockquotes
    html = html.replace(/^&gt; (.+)$/gm, '<blockquote>$1</blockquote>');

    // Unordered lists
    html = html.replace(/^[\-\*] (.+)$/gm, '• $1');

    // Ordered lists
    html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');

    // Paragraphs
    html = html.replace(/\n\n/g, '</p><p>');
    html = html.replace(/\n/g, '<br>');

    // Restore code blocks
    codeBlocks.forEach((block, i) => {
        const escaped = escapeHtml(block.code);
        const codeHtml = `
            <div class="code-block">
                <div class="code-block-header">
                    <span>${block.lang}</span>
                    <button class="code-copy-btn" onclick="copyCodeBlock(this)" title="Copy code">
                        ${ICONS.copy} <span>Copy</span>
                    </button>
                </div>
                <pre><code>${escaped}</code></pre>
            </div>`;
        html = html.replace(`&lt;&lt;CODE_${i}&gt;&gt;`, codeHtml);
    });

    if (!html.startsWith('<')) html = `<p>${html}</p>`;
    return html;
}

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

// ==================== CLIPBOARD ====================
function copyToClipboard(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        if (btn) {
            const originalHTML = btn.innerHTML;
            btn.innerHTML = `${ICONS.check} <span>Copied!</span>`;
            btn.classList.add('copied');
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.classList.remove('copied');
            }, 2000);
        }
        showToast('Copied to clipboard', 'success');
    }).catch(() => {
        showToast('Failed to copy', 'error');
    });
}

// Global function for code block copy buttons
window.copyCodeBlock = function(btn) {
    const codeEl = btn.closest('.code-block').querySelector('code');
    const text = codeEl.textContent;
    copyToClipboard(text, btn);
};

// ==================== UI HELPERS ====================
function showTyping() {
    DOM.typingIndicator.classList.add('visible');
    scrollToBottom(true);
}

function hideTyping() {
    DOM.typingIndicator.classList.remove('visible');
}

function updateSendButton() {
    if (AppState.isGenerating) {
        DOM.sendBtn.innerHTML = ICONS.stop;
        DOM.sendBtn.disabled = false;
        DOM.sendBtn.classList.add('is-stop');
        DOM.sendBtn.title = 'Stop generating';
    } else {
        DOM.sendBtn.innerHTML = ICONS.send;
        DOM.sendBtn.disabled = !DOM.messageInput.value.trim();
        DOM.sendBtn.classList.remove('is-stop');
        DOM.sendBtn.title = 'Send message';
    }
}

function scrollToBottom(force = false) {
    requestAnimationFrame(() => {
        DOM.chatArea.scrollTo({
            top: DOM.chatArea.scrollHeight,
            behavior: force ? 'auto' : 'smooth',
        });
    });
}

function autoResize() {
    const ta = DOM.messageInput;
    ta.style.height = 'auto';
    ta.style.height = Math.min(ta.scrollHeight, 160) + 'px';
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toastOut .3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ==================== SETTINGS MODAL ====================
function openSettings() {
    DOM.settingsModal.classList.add('active');
}

function closeSettings() {
    DOM.settingsModal.classList.remove('active');
}

// ==================== STORAGE ====================
function saveToStorage() {
    const data = {
        chats: AppState.chats,
        activeChatId: AppState.activeChatId,
    };
    try {
        localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
        console.warn('Storage save failed:', e);
    }
}

function loadFromStorage() {
    try {
        const raw = localStorage.getItem(CONFIG.STORAGE_KEY);
        if (!raw) return;
        const data = JSON.parse(raw);
        AppState.chats = data.chats || [];
        AppState.activeChatId = data.activeChatId || null;
    } catch (e) {
        console.warn('Storage load failed:', e);
    }
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    // Sidebar
    DOM.menuBtn.addEventListener('click', openSidebar);
    DOM.sidebarCloseBtn.addEventListener('click', closeSidebar);
    DOM.sidebarOverlay.addEventListener('click', closeSidebar);

    // New chat
    DOM.newChatBtn.addEventListener('click', () => createChat(true));

    // Clear chats
    DOM.clearChatsBtn.addEventListener('click', clearAllChats);

    // Theme
    DOM.themeToggleBtn.addEventListener('click', toggleTheme);

    // Settings
    DOM.settingsBtn.addEventListener('click', () => { closeSidebar(); openSettings(); });
    DOM.settingsCloseBtn.addEventListener('click', closeSettings);
    DOM.settingsModal.addEventListener('click', (e) => {
        if (e.target === DOM.settingsModal) closeSettings();
    });

    // Theme options in settings
    DOM.themeOpts.forEach(btn => {
        btn.addEventListener('click', () => applyTheme(btn.dataset.setTheme));
    });

    // Send message
    DOM.sendBtn.addEventListener('click', () => {
        if (AppState.isGenerating) {
            stopGenerating();
        } else {
            sendMessage();
        }
    });

    // Textarea
    DOM.messageInput.addEventListener('input', () => {
        autoResize();
        updateSendButton();
    });

    DOM.messageInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (!AppState.isGenerating) sendMessage();
        }
    });

    // Welcome cards
    DOM.welcomeCards.forEach(card => {
        card.addEventListener('click', () => {
            const prompt = card.dataset.prompt;
            if (prompt) sendMessage(prompt);
        });
    });

    // Scroll bottom button
    DOM.chatArea.addEventListener('scroll', () => {
        const { scrollTop, scrollHeight, clientHeight } = DOM.chatArea;
        const nearBottom = scrollHeight - scrollTop - clientHeight < 120;
        DOM.scrollBottomBtn.classList.toggle('visible', !nearBottom);
    });

    DOM.scrollBottomBtn.addEventListener('click', () => scrollToBottom(true));

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + Shift + N = new chat
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'N') {
            e.preventDefault();
            createChat(true);
        }
        // Escape closes modal/sidebar
        if (e.key === 'Escape') {
            closeSettings();
            closeSidebar();
        }
    });
}
