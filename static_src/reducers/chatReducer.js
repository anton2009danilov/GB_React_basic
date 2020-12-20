import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';
import { ADD_CHAT, TOGGLE_CHAT_ATTENTION } from '../actions/chatActions';
import { UPDATE_CHATS } from '../actions/chatActions';
import { CHANGE_USER_NAME } from '../actions/profileActions';

const initialStore = {
	chats: {
		1: { id: 1, title: 'Чат 1', messageList: [1], attention: false },
		2: { id: 2, title: 'Чат 2', messageList: [2], attention: false },
		3: { id: 3, title: 'Чат 3', messageList: [], attention: false },
	},
	messages: {
		1: {
			id: 1,
			text: 'Привет',
			userName: 'Робот',
		},
		2: {
			id: 2,
			text: 'Как дела?',
			userName: 'Робот',
		},
	},
	userName: 'Аноним',
};

export default function chatReducer(store = initialStore, action) {
	switch (action.type) {
		case SEND_MESSAGE: {
			return update(store, {
				messages: {
					$merge: {
						...store.messages,
						[action.messageId]: {
							id: action.messageId,
							text: action.message,
							userName: action.userName,
						},
					}
				}
			});
		}
		case ADD_CHAT: {
			const chatId = Object.keys(store.chats).length + 1;
			return update(store, {
				chats: {
					$merge: {
						[chatId]: {
							title: action.title,
							messageList: []
						}
					}
				}
			});
		}
		case UPDATE_CHATS: {
			return update(store, {
				chats: {
					$merge: {
						[action.chatId]: {
							...store.chats[action.chatId],
							messageList: [
								...store.chats[action.chatId]['messageList'],
								action.messageId,
							],
						},

					}
				},
			});
		}
		case CHANGE_USER_NAME: {
			return update(store, {
				userName: {
					$set: action.userName
				}
			});
		}
		case TOGGLE_CHAT_ATTENTION: {
			return update(store, {
				chats: {
					$merge: {
						[action.chatId]: {
							...store.chats[action.chatId],
							attention: !store.chats[action.chatId].attention,
						}
					}
				}
			});
		};
		default:
			return store;
	}
}