import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import { Quiz } from '../Quiz'

describe('quiz', () => {
    const Quiz = jest.fn()
    let wrapper

    beforeEach(() => {
        wrapper = mount(<Quiz setModo={'quiz'} />)
    })

    it('renders', () => {
        expect(wrapper).toBe('quiz')
    })
})