import type { Route } from "./+types/home";
import Navbar from "../Components/Navbar";
import {resumes} from   "../../constants"
import Resumecard from "../Components/Resumecard";
import { resume } from "react-dom/server";
import {usePuterStore} from "~/lib/puter";
import {Link, useNavigate} from "react-router";
import {useEffect, useState} from "react";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResuMine" },
    { name: "description", content: "Shows how strong your resume is" },
  ];
}

export default function Home() {

  const { auth, kv } = usePuterStore();
  const navigate = useNavigate();
   

  useEffect(() => {
    if(!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Applications and Resume Ratings</h1>
        <h2>Review your submissions and check AI powered feedback</h2>
      </div>
    </section>

    {resume.length>0 &&(
      <div className="resume-section">
        {resumes.map((resume) => (
          <Resumecard key ={resume.id} resume={resume}/>
          ))}</div>

    ) }

    

    
    
     

  </main>
}
