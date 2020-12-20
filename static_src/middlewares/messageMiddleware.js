import { updateChats } from '../actions/chatActions';
import { sendMessage } from '../actions/messageActions';


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
			}, 1000);
			sessionStorage.setItem('robotTimer', robotTimer);
		}
	};
