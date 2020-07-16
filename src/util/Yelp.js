const apiKey =
  'kxiNSGUvtvhedY2m02B__Mm5jojLg7jXoszmcOurjPlx1rOeEUwEXds-J8rYvfqgwgq2HgvyMfkhHmIHXDkTFcrMaALJ_-LaQZuQrnVyFhndYk-cIQLsfIn2iFIPX3Yx';
const corsURL = 'https://cors-anywhere.herokuapp.com/';
const baseURL = 'https://api.yelp.com/v3/';

const Yelp = {
  autocomplete(){
    return fetch(
      `${baseURL}`
    )
  },
  search(term, location, sortBy){
    return fetch(
      `${corsURL}${baseURL}businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    ).then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            console.log(business);
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipcode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });
        }
      });
  }
};

export default Yelp;