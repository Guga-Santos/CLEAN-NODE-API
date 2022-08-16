import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Gustavo',
        email: 'guga@guga.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
