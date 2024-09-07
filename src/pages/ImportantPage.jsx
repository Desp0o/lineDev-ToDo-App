import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useUser } from "@clerk/clerk-react";
import { supabase } from "../supabaseConfig";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import MappingMasonryLayout from "../components/MappingMasonryLayout";

const ImportantPage = () => {
  const { user } = useUser();

  const searchRedux = useSelector((state) => state.searchStore.value);

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

  const { data, isLoading, refetch } = useQuery(
    ["important-todos", user?.id],
    fetchImportants,
    {
      enabled: !!user,
      retry: true,
    }
  );
  const [newData, setNewData] = useState(data);

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

export default ImportantPage;
