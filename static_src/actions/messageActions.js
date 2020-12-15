export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (messageId, text, sender, chatId) => ({
	type: SEND_MESSAGE,
	messageId,
	message,
	userName,
	chatId,
});