export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (message, messageId, userName) => ({
	type: SEND_MESSAGE,
	message,
	messageId,
	userName,
});