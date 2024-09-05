import React from "react";
import Layout from "../components/Layout";
import FetchData from "../functions/FetchData";
import MappingMasonryLayout from "../components/MappingMasonryLayout";

const Home = () => {
  const { data, isLoading, refetch } = FetchData();

  return (
    <Layout>
      <MappingMasonryLayout 
        data={data} 
        isLoading={isLoading} 
        refetch={refetch}
      />
    </Layout>
  );
};

export default Home;
