import React from "react";
import Layout from "../components/Layout";
import { useUser } from "@clerk/clerk-react";
import { supabase } from "../supabaseConfig";
import { useQuery } from "react-query";

const ImportantPage = () => {
  const { user } = useUser();

  const fetchImportants = async () => {
    let { data, error } = await supabase
      .from("todos")
      .select("*")
      .eq("user_id", user.id)
      .eq("important", true);

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

  if (data) {
    console.log(data);
  }

  return <Layout></Layout>;
};

export default ImportantPage;
