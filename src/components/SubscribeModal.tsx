"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import { Price, ProductWithPrice } from "../../types";
import Button from "./Button";
import { useUser } from "@/hooks/useUser";
import { toast } from "react-hot-toast";
import { postData } from "@/libs/helpers";
import { getStripe } from "@/libs/stripeClient";

interface SubscribeModalProps {
  products?: ProductWithPrice[];
}

const formatPrice = (price: Price) => {
  const priceString = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: price.currency,
    minimumFractionDigits: 0,
  }).format((price?.unit_amount || 0) / 100);

  return priceString;
};

const SubscribeModal: React.FC<SubscribeModalProps> = ({ products }) => {
  const { user, isLoading, subscription } = useUser();
  const [priceIdLoading, setPriceIdLoading] = useState<string>();

  let content = <div className="text-center">No product available!</div>;

  async function handleCheckout(price: Price) {
    //
    setPriceIdLoading(price.id);
    if (!user) {
      setPriceIdLoading(undefined);
      return toast.error("Must be logged in!");
    }
    if (subscription) {
      setPriceIdLoading(undefined);
      return toast("Already subscribed!");
    }

    try {
      const { sessionId } = await postData({
        url: "/api/create-checkout-session",
        data: { price },
      });

      const stripe = await getStripe();
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      toast.error((error as Error)?.message);
    } finally {
      setPriceIdLoading(undefined);
    }
  }

  if (subscription) {
    content = <div className="text-center">Already Subscribed</div>;
  }

  // if (products?.length > 0) {
  //   content = (
  //     <div>
  //       {products.map((product) => {
  //         if (!product.prices?.length) {
  //           return <div key={product.id}>No prices available!</div>;
  //         }
  //         return product.prices?.map((price) => (
  //           <Button
  //             key={product.id}
  //             className="py-2"
  //             onClick={() => handleCheckout(price)}
  //             disabled={isLoading || price.id === priceIdLoading}
  //           >{`Subscribe for ${formatPrice(price)} a ${price.interval}`}</Button>
  //         ));
  //       })}
  //     </div>
  //   );
  // }

  return (
    <Modal
      title="Only for premium users"
      description="Listen to unlimited music with tuneflow premium"
      isOpen={false}
      onChange={() => {}}
    >
      {content}
    </Modal>
  );
};

export default SubscribeModal;
