export const updateLocalStorage = data => {
    localStorage.setItem('inventoryData', JSON.stringify(data));
  };
  
  export const getLocalStorage = () => {
    const storedData = localStorage.getItem('inventoryData');
    return storedData ? JSON.parse(storedData) : [];
  };
  