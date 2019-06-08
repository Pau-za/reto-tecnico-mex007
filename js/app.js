// hacer fetch para obtener la data de la url:
const palceToRender1 = document.getElementById('list');

fetch('https://retos-tecnicos-backend.lizzie136.now.sh/bands')
    .then(response => {
        return response.json();
    }).then(data => {
        // const orderedBands = bands.sort;
        const bands = Object.values(data);
        bands.forEach(band => {
            palceToRender1.insertAdjacentHTML('beforeend', `<tr><td>${band}</td></tr>`)
        });
        const ignoreArts = (bandName) => {
            return bandName.replace(/^(an?|the)\s/i, '');
        };

        document.getElementById('button-order').addEventListener('click', () => {
            bands.sort((a, b) => {
                return ignoreArts(a).localeCompare(ignoreArts(b));
            })
            bands.forEach(element => {
                return document.getElementById('band-name').insertAdjacentHTML('beforeend', `<tr><td>${element}</td></tr>`)
            });
            document.getElementById('new-ordered').style.display = 'block';
        })
    })
    .catch(function (error) {
        if (error) {
            return alert('hubo un error, no se pudo extraer la data')
        }
    });