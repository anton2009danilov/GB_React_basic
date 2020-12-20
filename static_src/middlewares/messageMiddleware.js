import { updateChats, UPDATE_CHATS } from '../actions/chatActions';
import { sendMessage, SEND_MESSAGE } from '../actions/messageActions';


export const sendMessageThunk = (message, messageId, userName, chatId) =>
	(dispatch) => {
		console.log('thunk');
		dispatch(sendMessage(message, messageId, userName));

		if (sessionStorage.getItem('robotTimer'))
			clearTimeout(sessionStorage.getItem('robotTimer'));

		if (userName !== 'Робот') {
			// const messageId = Object.keys(dispatch.getState().chatReducer.messages).length + 1;
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

// export default store => next => (action) => {
// 	switch (action.type) {
// 		case UPDATE_CHATS:
// 			if (sessionStorage.getItem('robotTimer'))
// 				clearTimeout(sessionStorage.getItem('robotTimer'));

// 			if (action.userName !== 'Робот') {
// 				const messageId = Object.keys(store.getState().chatReducer.messages).length + 1;
// 				const robotTimer = setTimeout(() => {
// 					store.dispatch(
// 						sendMessage(
// 							'Не приставай ко мне, я - робот!',
// 							messageId,
// 							'Робот')
// 					);
// 					store.dispatch(
// 						updateChats(messageId, action.chatId, 'Робот')
// 					);
// 				}, 1000);
// 				sessionStorage.setItem('robotTimer', robotTimer);
// 			}
// 	}
// 	return next(action);
// };