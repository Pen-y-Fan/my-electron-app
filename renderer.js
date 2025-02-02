const information = document.getElementById('info')
let text = `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()})`
text += `, and Electron (v${window.versions.electron()})`
information.innerText = text

const func = async () => {
  const response = await window.versions.ping()
  console.log(response) // prints out 'pong'
}

func().then(() => {
})
