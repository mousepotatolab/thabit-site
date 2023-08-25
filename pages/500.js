import React, { useEffect } from "react";

import Image from "next/image";

import SuccessLayout from "@/components/successLayout";

import { useRouter } from "next/router";

export default function InternalError() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => router.push("/"), 3500);
  });

  return <h1>500</h1>;
}
InternalError.getLayout = function getLayout(page) {
  return <SuccessLayout>{page}</SuccessLayout>;
};
