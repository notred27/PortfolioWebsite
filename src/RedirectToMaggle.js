



import React, { useEffect } from "react";

const RedirectToMaggle = () => {
  useEffect(() => {
    window.location.href = "https://aws-deployment.dhqsr5m8z3m6j.amplifyapp.com/";
  }, []);

  return <div>Redirecting to Maggle...</div>;
};

export default RedirectToMaggle;
