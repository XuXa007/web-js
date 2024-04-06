function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const searchText = document.getElementById('searchField').value.trim().toLowerCase();
        const table = document.getElementById('container');

        for (let i = 1; i < table.rows.length; i++) {
            table.rows[i].classList.remove('select');
        }

        for (let i = 1; i < table.rows.length; i++) {
            const row = table.rows[i].textContent.trim().toLowerCase()

            if (row.includes(searchText)) {
                table.rows[i].classList.add('select')
            }

        }
    }
}