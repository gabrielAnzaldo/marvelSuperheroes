const getSuperHeroes = () => {
  // const ts = Date.now();
  // const hash = 'c84dbeb65c97e41e0384a3031d287a61';
  // const apikey = '65061638632bc5ed70370ec1344a2e1c';
  return fetch(
    'https://gateway.marvel.com:443/v1/public/characters?apikey=65061638632bc5ed70370ec1344a2e1c&hash=c84dbeb65c97e41e0384a3031d287a61&ts=1560086041721',
  ).then(response => {
    return response.json();
  });
};

export default getSuperHeroes;
