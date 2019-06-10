import Avatar from './'
import React from 'react'
import { shallow } from 'enzyme'

const IMG = 'avatars/uncle_bob.jpg'

test('Avatar displays an image', () => {
  const avatar = shallow(<Avatar src={IMG} />)
  const img = avatar.find('img')
  expect(img.prop('src')).toEqual(IMG)
})

test('Avatar displays user initials in uppercase when no image is provided', () => {
  const avatar = shallow(<Avatar name='uncle Bob' />)
  expect(avatar.text()).toEqual('UB')
})
