function search() {
    const towns = document.getElementById('towns');
    const searchText = document.getElementById('searchText').value.trim().toLowerCase();
    const res = document.getElementById('result');

    let math = 0
    for (let i = 0; i < towns.children.length; i++) {
        const town = towns.children[i]
        const townSea = towns.children[i].textContent.trim().toLowerCase()

        if (townSea.includes(searchText)) {
            town.style.fontWeight = 'bold'
            town.style.textDecoration = 'underline'

            math++
        } else {
            town.style.fontWeight = 'normal'
            town.style.textDecoration = 'none'
        }

    }
    res.textContent = `${math} found`
}