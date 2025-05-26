type TInputs = {
  id: number
  name: string
  type: React.HTMLInputTypeAttribute
  placeholder: string | null
}

export const INPUT_ITEMS: TInputs[] = [
  { id: 1, name: 'userName', type: 'text', placeholder: 'Name' },
  { id: 2, name: 'password', type: 'password', placeholder: 'Password' }
]
