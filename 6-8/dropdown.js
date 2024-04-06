function addItem() {
    const select = document.getElementById('menu')
    const newItemText = document.getElementById('newItemText').value
    const newItemValue = document.getElementById('newItemValue').value

    const newItem = document.createElement('option')
    newItem.textContent=newItemText
    newItem.value = newItemValue
    select.appendChild(newItem)
}