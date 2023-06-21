import axios from 'axios'
import { SignUpRequest, SignUpResponse, SignInRequest, SignInResponse, LogoutResponse } from '@/types/auth'

const headers = {
  'content-type': 'application/json',
  apikey: 'KDT5_nREmPe9B',
  username: 'KDT5_Team6'
}

const instance = axios.create({
  baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth',
  headers
})

export const signUp = async (data: SignUpRequest): Promise<boolean> => {
  try {
    const res = await instance.post('/signup', data)
    const json: SignUpResponse = await res.data
    localStorage.setItem('token', json.accessToken)
    console.log('회원가입 성공:', json)
    return true
  } catch (error) {
    console.error('회원가입 실패:', error)
    return false
  }
}

export const signIn = async (data: SignInRequest): Promise<boolean> => {
  try {
    const res = await instance.post('/login', data)
    const json: SignInResponse = await res.data
    localStorage.setItem('token', json.accessToken)
    console.log('로그인 성공:', json)
    return true //setuser추가
  } catch (error) {
    console.error('로그인 실패:', error)
    return false
  }
}

export const signOut = async (): Promise<void> => {
  const res = await instance.post('/logout', {
    headers: {
      ...headers,
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  const json: LogoutResponse = await res.data
  localStorage.removeItem('token')
  console.log('로그아웃 성공 : ', json)
}
