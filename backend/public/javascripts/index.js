const select = selector => document.querySelector(selector)

const form = select('.form')
const message = select('.message')

const expectedImageFiles = ['jpg', 'jpeg', 'png', 'JPG', 'PNG', 'JPEG']

const displayMessage = (text, color) => {
  message.style.visibility = 'visible'
  message.style.backgroundColor = color
  message.innnerText = text
  setTimeout(() => {
    message.style.visibility = 'hidden'
  }, 3000)
}
const validateForm = () => {
  const title = select('#title').value.trim()
  const content = select('#content').value.trim()
  const thumbnail = select('#thumbnail').value
  const category = select('#category').value

  if (!title || !content || !thumbnail || category == '0') {
    //show some error
    return displayMessage('Field cannot be blank', 'red')
  }
  const extension = thumbnail.split('.').pop()
  if (!expectedImageFiles.includes(extension)) {
    return displayMessage('Image file is not valid', 'red')
  }
  //console.log(extension)
  return true
}

form.addEventListener('submit', e => {
  e.preventDefault()
  //console.log('Form is submitting')
  validateForm()
})
