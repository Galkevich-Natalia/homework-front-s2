import {pureOnEnter} from '../GreetingContainer'
import { beforeEach, expect, test } from 'vitest'

let added: any
const addUser = () => {
    added = true
}

beforeEach(() => {
    added = false
})

test('name 1', () => {
    pureOnEnter({key: 'Enter'} as any, addUser)
    expect(added).toBe(true)
})
test('name 2', () => {
    pureOnEnter({key: ''} as any, addUser)
    expect(added).toBe(false)
})
