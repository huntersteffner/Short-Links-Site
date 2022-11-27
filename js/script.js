const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

const input = document.getElementById('link-input')
const linkForm = document.getElementById('link-form')
const errMsg = document.getElementById('err-msg')

const validURL = (str) => {
    const pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
          '((\\d{1,3}\\.){3}\\d{1,3}))' +
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
          '(\\?[;&a-z\\d%_.~+=-]*)?' +
          '(\\#[-a-z\\d_]*)?$',
        'i'
      )
      return !!pattern.test(str)
}

const formSubmit = (e) => {
    e.preventDefault()
    if(input.value === '') {
        errMsg.innerHTML = 'Please enter something'
        input.classList.add('border-red')
    } else if(!validURL(input.value)) {
        errMsg.innerHTML = 'Please enter valid URL'
        input.classList.add('border-red')
    } else {
        errMsg.innerHTML = ''
        input.classList.remove('border-red')
        alert('Success')
    }
}
const navToggle = () => {
    btn.classList.toggle('open')
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')
}
linkForm.addEventListener('submit', formSubmit)
btn.addEventListener('click', navToggle)