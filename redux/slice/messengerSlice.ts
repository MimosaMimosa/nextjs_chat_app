import { createSlice } from '@reduxjs/toolkit'
import { type } from 'os'


export type TContent = {
    body:string,
    contentType:number,
    createdAt: Date,
    updatedAt: Date,
}

export type TMessages = {
    _id: string,
    conversationId: string,
    senderId: string,
    receiverId: string,
    content:TContent,
    createdAt: Date,
    updatedAt: Date,
}

export type TMembers = {
    _id: string,
    name: string,
    email: string,
}

export type TFriend = {
    _id: string,
    name: string,
    email: string,
}

type TConversations = {
    _id: string,
    members: Array<TMembers>,
    fiend: TFriend,
    type: number,
    name: string | null,
    createdAt: Date,
    updatedAt: Date,
    messages: Array<TMessages>
}

type TInitialState = {
    conversations: Array<TConversations>
    activeUsers: Array<string>
}

const initialState: TInitialState = {
    conversations: [],
    activeUsers: [],
}

export const messengerSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addConversation: (state, { payload }) => {
            const index = state.conversations.findIndex((c: TConversations) => c._id === payload._id);
            if (index !== -1) {
                state.conversations[index] = payload;
            } else {
                state.conversations.push(payload)
            }
        },
        addActiveUsers: (state, { payload }) => {
            state.activeUsers = payload;
        },
        addMessage: (state, { payload }) => {
            const conversation = state.conversations.find((c: TConversations) => c._id === payload.conversationId)
            if (conversation) {
                conversation.messages.push(payload)
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { addConversation, addActiveUsers, addMessage } = messengerSlice.actions

export default messengerSlice.reducer