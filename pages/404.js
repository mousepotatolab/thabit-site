import React, { useEffect } from "react";

import SuccessLayout from "@/components/successLayout";

import { useRouter } from "next/router";

export default function PageNotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => router.push("/"), 3500);
  });

  return <h1>404</h1>;
}
PageNotFound.getLayout = function getLayout(page) {
  return <SuccessLayout>{page}</SuccessLayout>;
};
