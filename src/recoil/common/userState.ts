import { User } from '@/types/user'
import { atom } from 'recoil'
//Recoil의 상태를 표현하는 단위
// Atoms 업데이트 시 해당 Atom을 구독하는 모든 컴포넌트가 업데이트
import { v1 } from 'uuid'
// 개발모드 중복 랜더링 방지
export const userState = atom<User>({
  key: 'userState' + v1(),
  default: {} as User
})
