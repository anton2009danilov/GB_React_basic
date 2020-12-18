import { updateChats, UPDATE_CHATS } from '../actions/chatActions';
import { sendMessage, SEND_MESSAGE } from '../actions/messageActions';

export default store => next => (action) => {
	switch (action.type) {
		case UPDATE_CHATS:
			console.log(action);
			if (action.userName !== 'Робот') {
				const messageId = Object.keys(store.getState().chatReducer.messages).length + 1;
				setTimeout(() => {
					store.dispatch(
						sendMessage(
							'Не приставай ко мне, я - робот!',
							messageId,
							'Робот')
					);
					store.dispatch(
						updateChats(messageId, action.chatId, 'Робот')
					);
				}, 1);
			}
	}
	return next(action);
};