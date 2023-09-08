// PocketBase SDK 활용편
import { useState } from 'react';
import pocketbase from './pocketbase';

// SDK 처리 함수를 포함하는 사용자 정의 훅 작성
export function useSDKData(collection) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('pending');

  async function SDK() {
    try {
      setStatus('loading');
      // opction 변경하기 - PocketHost List/Search 참고
      const records = await pocketbase.collection(collection).getFullList();
      setData(JSON.stringify(records));
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }

  return ({
    data,
    status,
    SDK
  })
}

// const {data, status, SDK} = useSDKData(변수)

/* export function useSDKData(collection) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('pending');

  async function SDK() {
    try {
      setStatus('loading');
      // opction 변경하기 - PocketHost List/Search 참고
      const SDKItems = await pocketbase.collection(collection).getFullList();
      setData(SDKItems);
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  }

  return {
    data,
    status,
    SDK
  }
} */