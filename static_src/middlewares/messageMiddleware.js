import { updateChats } from '../actions/chatActions';
import { sendMessage } from '../actions/messageActions';
import { toggleChatAttention } from '../actions/chatActions';

export const sendMessageThunk = (message, messageId, userName, chatId) =>
	(dispatch) => {
		console.log('thunk');
		dispatch(sendMessage(message, messageId, userName));

		if (sessionStorage.getItem('robotTimer'))
			clearTimeout(sessionStorage.getItem('robotTimer'));

		if (userName !== 'Робот') {
			const robotTimer = setTimeout(() => {
				dispatch(
					sendMessage(
						'Не приставай ко мне, я - робот!',
						messageId + 1,
						'Робот')
				);
				dispatch(
					updateChats(messageId + 1, chatId, 'Робот')
				);

				dispatch(toggleChatAttention(chatId));
				// dispatch(toggleChatAttention(chatId));
				// setTimeout(() => dispatch(toggleChatAttention(chatId), 2000));

			}, 1000);

			sessionStorage.setItem('robotTimer', robotTimer);

		}
	};
