const MOCK_STUDENTS = [
  { id: 1, name: 'Aye Chan', age: 18, email: 'aye@example.com', address: 'Bangkok' },
  { id: 2, name: 'Min Thu',  age: 20, email: 'min@example.com', address: 'Chiang Mai' },
  { id: 3, name: 'Su Su',    age: 19, email: 'su@example.com',  address: 'Phuket' },
  { id: 1, name: 'Aye Chan', age: 18, email: 'aye@example.com', address: 'Bangkok' },
  { id: 2, name: 'Min Thu',  age: 20, email: 'min@example.com', address: 'Chiang Mai' },
  { id: 3, name: 'Su Su',    age: 19, email: 'su@example.com',  address: 'Phuket' },
]

export function initStudents() {
  if (this.dataList.length === 0) {
    this.dataList = [...MOCK_STUDENTS]
  }
}

export function getAllStudents() {
  return this.dataList
}

export function addStudent(newStudent) {
  const nextId = (this.dataList.at(-1)?.id ?? 0) + 1
  this.dataList.push({ id: nextId, ...newStudent })
}

export function removeStudent(id) {
  this.dataList = this.dataList.filter(s => s.id !== id)
}
