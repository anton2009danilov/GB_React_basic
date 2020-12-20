export const ADD_CHAT = '@@chat/ADD_CHAT';
export const UPDATE_CHATS = '@@chat/UPDATE_CHATS';
export const TOGGLE_CHAT_ATTENTION = '@@chat/DRAW_ATTENTION';

export const addChat = (title) => ({
	type: ADD_CHAT,
	title
});

export const updateChats = (messageId, chatId, userName) => ({
	type: UPDATE_CHATS,
	messageId,
	chatId,
	userName
});

export const toggleChatAttention = (chatId) => ({
	type: TOGGLE_CHAT_ATTENTION,
	chatId,
});