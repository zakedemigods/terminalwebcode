const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const awards = document.querySelector('#awards')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const awardsContent = document.querySelector('#awards-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    width: '400px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

awards.addEventListener('click', () => {
  const awardsBox = new WinBox({
    title: 'Awards',
    width: '400px',
    height: '400px',
    top: 200,
    right: 150,
    bottom: 50,
    left: 300,
    mount: awardsContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

