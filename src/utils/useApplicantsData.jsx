import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { setDate } from 'date-fns';

export default function useApplicantsData(params) {
  const [data, setdata] = useState([]);
  const [filterdData, setFilterdData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [countData, setCountData] = useState({});
  const [majorCount, setMajorCount] = useState({});
  console.log(majorCount);
  const [iDStatusChanging, setIdStatusChanging] = useState(false);
  const [isStatusChanging, setIsStatusChanging] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');

  const token = Cookies.get('token');

  const handleAccept = async (id) => {
    setIdStatusChanging(id);
    setIsStatusChanging(true);
    const response = await axios.put(
      `https://ftc-api-1.onrender.com/applicants/${id}/accept`,
      '',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setIdStatusChanging(false);
    setIsStatusChanging(false);

    const newData = data.map((applicant) => {
      if (applicant.id === id) {
        return { ...applicant, status: 'accepted' };
      }
      return applicant;
    });
    setdata(newData);
  };

  const handleReject = async (id) => {
    setIdStatusChanging(id);
    setIsStatusChanging(true);
    const response = await axios.put(
      `https://ftc-api-1.onrender.com/applicants/${id}/reject`,
      '',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setIdStatusChanging(false);
    setIsStatusChanging(false);

    const newData = data.map((applicant) => {
      if (applicant.id === id) {
        return { ...applicant, status: 'rejected' };
      }
      return applicant;
    });
    setdata(newData);
  };

  const handleSearchById = (id) => {
    const newData = data.filter((applicantId) => {
      return applicantId.college_id.includes(id);
    });
    setFilterdData(newData);
    setdata(filterdData);
  };

  useEffect(() => {
    axios
      .get('https://ftc-api-1.onrender.com/applicants', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setdata(res.data.applicants);
        setFilterdData(res.data.applicants);
        setCountData(res.data.count);
        setMajorCount(res.data.majors);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally();

    return () => {};
  }, []);

  return {
    data,
    filterdData,
    isLoading,
    countData,
    handleAccept,
    handleReject,
    handleSearchById,
    // handleStatusFilter,
    statusFilter,
    setStatusFilter,
    isStatusChanging,
    iDStatusChanging,
    majorCount,
  };
}
