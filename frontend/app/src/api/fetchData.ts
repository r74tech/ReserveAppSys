export const fetchData = async (slug: string): Promise<any> => {
    try {
      const response = await fetch(`api/reserve/${slug}`);
      if (!response.ok) {
        throw new Error("Data not found");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };