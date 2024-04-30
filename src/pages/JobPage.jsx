import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";

export const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      const apiUrl = `/api/jobs/${id}`;
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, []);

  return loading ? <Spinner /> : <div>{job.title}</div>;
};
