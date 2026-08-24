import { a } from 'vitest/dist/chunks/suite.d.udJtyAgw';
import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { 
    switch (action.type) {
        case 'sort': { // by name
            const direction = action.payload;

            return [...state].sort((a,b) => {
                return direction === 'up' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
            })
        }
        case 'check': {
            const minAge = action.payload; 

            return state.filter(item => item.age >= minAge)
        }
        default:
            return state
    }
}
