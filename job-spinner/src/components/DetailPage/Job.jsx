import { useState } from "react";
import { postJob } from "../../services/requests";

export default function Job() {
  const [name, setName] = useState();
  const [company, setCompany] = useState();
  const [description, setDescription] = useState();

  const handleSubmit = (job) => {
    postJob(job);
  };
  return <form></form>;
}
