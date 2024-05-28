window.addEventListener("DOMContentLoaded", function() {
    const faqContainer = document.querySelector('.faq-content')
    const hamburgerButton = document.querySelector('.hamburger-button')
    const mobileMenu = document.querySelector('.mobile-menu')


    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header') //to obtain the closest div with the class of FAQ in this case

        if(!groupHeader) return

        const groupParent = groupHeader.parentElement
        const groupBody = groupParent.querySelector('.faq-group-body')
        const icon = groupHeader.querySelector('i')

        icon.classList.toggle('fa-plus')
        icon.classList.toggle('fa-minus')


        groupBody.classList.toggle('open')

        const otherGroup = faqContainer.querySelectorAll('.faq-group')

        otherGroup.forEach((otherGroup) =>{
            if(otherGroup !== groupParent){
                const otherGroupBody = otherGroup.querySelector('.faq-group-body')
                const otherIcon = otherGroup.querySelector('.faq-group-header i')

                otherGroupBody.classList.remove('open')
                otherIcon.classList.remove('fa-minus')
                otherIcon.classList.add('fa-plus')

            }
        })
    })

    hamburgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active')
    })



})