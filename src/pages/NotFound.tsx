
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl font-bold text-navy-600 mb-4">404</div>
          <h1 className="text-2xl font-bold text-navy-700 mb-4">Page Not Found</h1>
          <p className="text-navy-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button className="bg-navy-600 hover:bg-navy-700 text-white">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
