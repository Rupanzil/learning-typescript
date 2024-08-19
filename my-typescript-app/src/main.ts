// simple counter made using typescript

const addButton: HTMLElement | null = document.getElementById('add-button')
const subButton: HTMLElement | null = document.getElementById('subtract-button')

addButton?.addEventListener('click', handleClick)
subButton?.addEventListener('click', handleClick)

function handleClick(e: any): void {
  const countDisplay = document.getElementById('count')
  let currentCount: number = parseInt(countDisplay.textContent)
  if (e.target.id === 'add-button') {
    countDisplay?.textContent = currentCount + 1
  }
}
