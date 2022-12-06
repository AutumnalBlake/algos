import { useState, useEffect } from 'react'

// Local storage hook
export function useLocalStorageState (key, initialValue) {
  const [data, setData] = useState(() => {
    const localData = window.localStorage.getItem(key)
    console.log('Loaded ', localData)
    return localData ? JSON.parse(localData) : initialValue
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(data))
    console.log('Set ', data)
  }, [key, data])

  return [data, setData]
}

// Random number
export function randInt (max) {
  return Math.floor(Math.random() * max)
}

// Random choice from array
export function randChoice (array) {
  return array[randInt(array.length)]
}

// Shuffled copy of array
export function shuffled (array) {
  const newArray = [...array]
  for (let i = 0; i < newArray.length; i++) {
    const j = randInt(newArray.length)
    // Swap a[i] and a[j]
    const temp = newArray[i]
    newArray[i] = newArray[j]
    newArray[j] = temp
  }
  return newArray
}

// Array [0 ... n - 1]
export function range (n) {
  return [...Array(n)].map((_, i) => i)
}

// Array of single value
export function arrayRepeat (n, value) {
  return range(n).map(_ => value)
}

// 2D array generator
export function grid (rows, cols, initialValue) {
  return range(rows).map(_ => arrayRepeat(cols, initialValue))
}

// Array equality
export function arrayEq (a, b) {
  if (a.length !== b.length) return false
  return range(a.length).every(i => a[i] === b[i])
}

export const noOp = () => { }

// Map over [k, v, i] from object
export function objMap (obj, fn) {
  return Object.entries(obj).map(([k, v], i) => fn(k, v, i))
}

export const intLog = x => Math.max(1, Math.ceil(Math.log2(x)))
