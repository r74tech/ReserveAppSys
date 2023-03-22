import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataDisplay from "./DataDisplay";
import NotFound from "./NotFound";
import { fetchData } from "../api/fetchData";

interface DataDisplayWrapperProps {}

const DataDisplayWrapper: React.FC<DataDisplayWrapperProps> = () => {
  const [data, setData] = useState<any>(null);
  const [notFound, setNotFound] = useState<boolean>(false);
  const { slug } = useParams<{ slug?: string }>();

  const formatSlug = (input?: string): string => {
    return input ? input.replace(/[-\s%20]/g, "-") : "";
  };

  useEffect(() => {
    if (slug) {
      async function fetchDataAndSetData() {
        const formattedSlug = formatSlug(slug);
        const result = await fetchData(formattedSlug);

        if (result) {
          setData(result);
          setNotFound(false);
        } else {
          setNotFound(true);
        }
      }

      fetchDataAndSetData();
    }
  }, [slug]);

  return notFound ? <NotFound /> : <DataDisplay data={data} />;
};

export default DataDisplayWrapper;