
export default async function handler(req, res) {
    const apiKey = 'inTheNameOfLove';  
    const providedKey = req.headers.authorization;
    if (providedKey !== apiKey) {
        res.status(403).json({ message: 'Not allowed' });
        return;
    }

    const auth = await fetchAuth();

    res.status(200).json({ token : auth.access_token });

}





async function fetchAuth() {

    const url = 'http://localhost:8080/api/v1/token';

    const requestOptions = { method: 'POST', headers: {'Content-Type': 'application/json','Authorization': generateBasicToken()}, body: null };
    
    try {

          const response = await fetch(url, requestOptions);

          if (!response.ok) {throw new Error('Error en la solicitud de autentificacion')}      
          const responseData = await response.json();

          console.log('BACKEND AUTH:', responseData);

          return responseData;



    } catch (error) { console.error('Error AUTH:', error.message);}
  }


  function generateBasicToken(){
    const clientId = 'company_brand_website';
    const clientSecret = 'iNEJYnNcOmzfIwrAj6jnQRqYINp1zEv1dI2pImrU';
    const credentials = `${clientId}:${clientSecret}`;
    const encodedCredentials = btoa(credentials);
    return `Basic ${encodedCredentials}`;
  }