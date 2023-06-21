import axios from 'axios'
import { EditedUserInfoRequest, EditedUserInfoResponse, User, Users } from '@/types/user'

const headers = {
  'content-type': 'application/json',
  apikey: 'KDT5_nREmPe9B',
  username: 'KDT5_Team6'
}

const instance = axios.create({
  baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth',
  headers
})
//사용자 정보 수정
export const editedUserInfo = async (data: EditedUserInfoRequest): Promise<boolean> => {
  try {
    const res = await instance.put('/user', data, {
      headers: {
        ...headers,
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    const json: EditedUserInfoResponse = await res.data
    console.log('사용자 정보 수정 성공', json)
    return true // setuserinfo 추가
  } catch (error) {
    console.error('사용자 정보 수정 실패:', error)
    return false
  }
}
//사용자 정보 조회
export const userList = async (data: Users): Promise<User[]> => {
  try {
    const res = await instance.get('/users', {
      headers: {
        ...headers,
        masterKey: `true`
      },
      params: data
    })

    const json: User[] = res.data
    console.log('사용자 목록 조회 성공', json)
    return json
  } catch (error) {
    console.error('사용자 목록 조회 실패:', error)
    return []
  }
}
