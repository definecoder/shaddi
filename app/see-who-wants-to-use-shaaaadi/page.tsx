// pages/admin.tsx
"use client";
import { useState, useEffect } from "react";
// import axios from "axios";

// Define the interface for the vendor data
interface Vendor {
  id: string;
  businessName: string;
  contactEmail: string;
  createdAt: string;
  updatedAt: string;
  chosenServices: string[];
}

const AdminPage = () => {
  const [vendors, setVendors] = useState<Vendor[]>([]);  // Type array of Vendor objects
  const [loading, setLoading] = useState<boolean>(true); // Type boolean
  const [error, setError] = useState<string | null>(null); // Type string or null

  useEffect(() => {
    // Fetch the data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("https://the-shadi-server-git-main-shawonmajids-projects.vercel.app/api/v1/vendors/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Vendor[] = await response.json();
        setVendors(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Vendor List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              {/* <th className="py-3 px-6 text-left">ID</th> */}
              <th className="py-3 px-6 text-left">Business Name</th>
              <th className="py-3 px-6 text-left">Contact Email</th>
              <th className="py-3 px-6 text-left">Choosen Services</th>
              <th className="py-3 px-6 text-left">Created At</th>
              <th className="py-3 px-6 text-left">Updated At</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor) => (
              <tr key={vendor.id} className="border-b hover:bg-gray-100">
                {/* <td className="py-3 px-6">{vendor.id}</td> */}
                <td className="py-3 px-6">{vendor.businessName}</td>
                <td className="py-3 px-6">{vendor.contactEmail}</td>
                <td className="py-3 px-6">{vendor?.chosenServices?.join(", ")}</td>
                <td className="py-3 px-6">
                  {new Date(vendor.createdAt).toLocaleString()}
                </td>
                <td className="py-3 px-6">
                  {new Date(vendor.updatedAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
