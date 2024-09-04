import { useEffect } from "react";
import { supabase } from "../supabaseConfig";
import { useQuery } from "react-query";
import { useUser } from "@clerk/clerk-react";

const FetchData = () => {
  const { user } = useUser();

  const fetchSupa = async () => {
    let { data, error } = await supabase
      .from("todos")
      .select("*")
      .eq("user_id", user.id);

    if (error) {
      console.log(error);
    }
    return data;
  };

  useEffect(() => {
    fetchSupa();
  }, []);

  const { data, refetch, isLoading } = useQuery(["todos"], () => fetchSupa(), {
    staleTime: 50 * 1000 * 60,
  });

  if (data) {
    console.log(data);
  }

  return { data, isLoading, refetch };
};

export default FetchData;
