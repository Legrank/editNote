document.addEventListener('click', (event) => {
  if (event.target.dataset.type === 'remove') {
    const id = event.target.dataset.id

    remove(id).then(() => {
      event.target.closest('li').remove()
    })
  }
})
document.addEventListener('click', (event) => {
  if (event.target.dataset.type === 'edit') {
    const id = event.target.dataset.id
    const title = prompt('Введите новое название')
    const data = { id, title }
    edit(data).then(() => {
      event.target.closest('li').querySelector('.content').textContent = title
    })
  }
})

async function remove(id) {
  await fetch(`/${id}`, { method: 'DELETE' })
}
async function edit(data) {
  await fetch(`/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  })
}
