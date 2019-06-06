// hacer fetch para obtener la data de la url:

fetch('https://retos-tecnicos-backend.lizzie136.now.sh/bands')
    .then(response => {
        return response.json();
    }).then(data => {
        // const orderedBands = bands.sort;
        const bands = Object.values(data);
        const ignoreArts = (bandName) => {
            return bandName.replace(/^(an?|the)\s/i, '');
        }
        bands.sort((a, b) => {
            return ignoreArts(a).localeCompare(ignoreArts(b));
        })
        bands.forEach(element => {
            document.getElementById('band-name').insertAdjacentHTML('beforeend', `<tr><td>${element}</tr></td>`)
        });
        return bands;
    })
    .catch(function (error) {
        if (error) {
            return alert('hubo un error, no se pudo extraer la data')
        }
    });