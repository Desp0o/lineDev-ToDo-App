import React from "react";
import Layout from "../components/Layout";
import { useUser } from "@clerk/clerk-react";
import { supabase } from "../supabaseConfig";
import { useQuery } from "react-query";
import MappingMasonryLayout from "../components/MappingMasonryLayout";

const ImportantPage = () => {
  const { user } = useUser();

  const fetchImportants = async () => {
    let { data, error } = await supabase
      .from("todos")
      .select("*")
      .eq("user_id", user.id)
      .eq("important", true)
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
      return;
    }
    return data;
  };

  const { data, isLoading, isError } = useQuery(
    ["important-todos", user?.id],
    fetchImportants,
    {
      enabled: !!user,
      retry: true,
    }
  );

  return (
    <Layout>
      <MappingMasonryLayout data={data} isLoading={isLoading} />
    </Layout>
  );
};

export default ImportantPage;
