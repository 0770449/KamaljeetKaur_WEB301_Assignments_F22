// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault()
      event.stopPropagation()
      if (form.checkValidity()) {
        // validation passed, so we can open a modal
        // This link leads to the documentation on how to create a modal in JavaScript
        // https://getbootstrap.com/docs/5.2/components/modal/#via-javascript
        // Given the code found there, first create your new instance of a Modal, by selecting your pages HTML modal (you don't need to pass in options)
        

        // then open it by using the show() method

      }

      
      form.classList.add('was-validated')
    }, false)
  })
})()
