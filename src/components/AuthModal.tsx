"use client";
import { useSupabaseClient, useSessionContext } from "@supabase/auth-helpers-react";

import React, { useEffect } from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const session = useSessionContext();
  const { onClose, isOpen } = useAuthModal();

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);

  return (
    <Modal title="Welcome back" description="Login to your account" isOpen={isOpen} onChange={onChange}>
      <Auth
        theme="dark"
        supabaseClient={supabaseClient}
        providers={[]}
        // magicLink
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#404040",
                brandAccent: "#e11d48",
              },
            },
          },
        }}
      />
    </Modal>
  );
};

export default AuthModal;
