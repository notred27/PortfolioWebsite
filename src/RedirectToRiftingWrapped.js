import React, { useEffect } from "react";

const RedirectToRiftingWrapped = () => {
  useEffect(() => {
    window.location.href = "https://aws-hosting.d1t2tctgq2njxi.amplifyapp.com/";
  }, []);

  return <div>Redirecting to Rifting Wrapped 2024...</div>;
};

export default RedirectToRiftingWrapped;
