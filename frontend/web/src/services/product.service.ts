import { environment } from "@/environments/environment";

const apiUrl = environment.apiUrl + "product/";

export const searchFeaturedProducts = async () => {
  try {
    const productList = await fetch(apiUrl + "search");
    const result = await productList.json();
    return result;
  } catch (error) {
    throw error; // Propagate the error for handling in components
  }
};

export const searchProducts = async () =>
  // pageIndex = 0, searchQuery = '', orderBy = ''
  {
    // const apiDecoded = `byCustomer?pageIndex=0&pageSize=25&orderBy=[name]&query=[name=%${searchQuery}%||email=%${searchQuery}%||mobile=%${searchQuery}%||phone=%${searchQuery}%]`

    try {
      // const productList = await apiClient.get(
      //     apiUrl +
      //     //  encodeURI(apiDecoded)
      //     "search"
      //     );
      // return people.data;
      console.log(apiUrl);
      const productList = await fetch(apiUrl + "search");
      const result = await productList.json();
      return result;
    } catch (error) {
      throw error; // Propagate the error for handling in components
    }
  };

export const sellProduct = async (product: any) => {
  try {
    const productSell = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const result = await productSell.json();
    return result;
  } catch (error) {
    throw error;
  }
};
