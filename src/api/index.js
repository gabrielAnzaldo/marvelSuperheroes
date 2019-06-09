import md5 from 'js-md5';

const getSuperHeroes = () => {
  // TODO: move to a .env configuration file
  const ts = Date.now();
  const privateKey = '1808ec67118dd1d84cdd0169d6d05ae9ae6d2059';
  const publicapikey = '65061638632bc5ed70370ec1344a2e1c';
  const hash = md5(`${ts}${privateKey}${publicapikey}`);
  const parameters = `?apikey=${publicapikey}&hash=${hash}&ts=${ts}`;

  return fetch(
    `https://gateway.marvel.com:443/v1/public/characters${parameters}`,
  ).then(response => {
    return response.json();
  });
};

export default getSuperHeroes;
