import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import FetchData from "../functions/FetchData";
import MappingMasonryLayout from "../components/MappingMasonryLayout";
import { useSelector } from "react-redux";

const Home = () => {
  const { data, isLoading, refetch } = FetchData();
  const [newData, setNewData] = useState(data);
  const searchRedux = useSelector((state) => state.searchStore.value);

  useEffect(() => {
    if (searchRedux.length > 0) {
      const filteredData = data?.filter((note) =>
        note.description.includes(searchRedux)
      );
      setNewData(filteredData);
    }
    if (searchRedux.length === 0) {
      setNewData(data);
    }
  }, [searchRedux, data]);

  useEffect(()=>{
    refetch()
  },[])

  return (
    <Layout>
      <MappingMasonryLayout
        data={newData}
        isLoading={isLoading}
        refetch={refetch}
      />
    </Layout>
  );
};

export default Home;
