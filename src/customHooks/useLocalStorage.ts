import React, { useEffect, useState } from 'react'

const useLocalStorage = () => {
  const getLocalStorage = (key: string) => {
    return localStorage.getItem(key)
  }
  const setLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, value)
  }
  const removeLocalStorage = (key: string) => {
    localStorage.removeItem(key);
  }
  return { getLocalStorage, setLocalStorage, removeLocalStorage }
}
export default useLocalStorage
