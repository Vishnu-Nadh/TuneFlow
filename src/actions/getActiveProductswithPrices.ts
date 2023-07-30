import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { ProductWithPrice } from "../../types";
import { cookies } from "next/dist/client/components/headers";

const getActiveProductswithPrices = async (): Promise<ProductWithPrice> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data, error } = await supabase.from("products").select("*, prices(*)").eq('active', true).eq('prices.active', true).order('metadata->index').order("unit_amount", { foreignTable: 'prices' });

  if (error) {
    console.error(error);
  }

  return (data as any) || [];
};

export default getActiveProductswithPrices;
