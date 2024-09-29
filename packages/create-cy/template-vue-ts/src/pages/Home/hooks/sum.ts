import { ref, watch, type Ref } from 'vue'
const useAdd = (num1: Ref, num2: Ref) => {
  const addNum = ref(0)
  const addFn = (num1: number, num2: number) => {
    addNum.value = num1 + num2
  }
  watch(
    [num1, num2],
    ([num1, num2]) => {
      addFn(num1, num2)
    },
    { immediate: true }
  )

  return [addNum, addFn]
}
export default useAdd
