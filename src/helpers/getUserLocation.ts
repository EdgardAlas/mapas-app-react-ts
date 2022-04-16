export const getUserLocation = async (): Promise<[number, number]> =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve([coords.longitude, coords.latitude]);
      },
      (err) => {
        alert('No se pudo obtener la geolocalizacion');
        console.log(err);
        reject();
      }
    );
  });
