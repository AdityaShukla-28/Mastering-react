import { useState } from 'react'
import './App.css'
import Card from "./assets/components/card";
import User from "./assets/components/user";

function App() {

const jobs = [
  {
    brandLogo: "https://cdn.vectorstock.com/i/500p/39/87/amazon-logo-smile-icon-vector-34243987.jpg",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$80/hour",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://cdn.vectorstock.com/i/500p/39/87/amazon-logo-smile-icon-vector-34243987.jpg",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$65/hour",
    location: "California, USA"
  },
  {
    brandLogo: "https://cdn.vectorstock.com/i/500p/39/87/amazon-logo-smile-icon-vector-34243987.jpg",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://cdn.vectorstock.com/i/500p/39/87/amazon-logo-smile-icon-vector-34243987.jpg",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$75/hour",
    location: "New York, USA"
  },
  {
    brandLogo: "https://cdn.vectorstock.com/i/500p/39/87/amazon-logo-smile-icon-vector-34243987.jpg",
    companyName: "Netflix",
    datePosted: "5 days ago",
    post: "UI/UX Designer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://cdn.vectorstock.com/i/500p/39/87/amazon-logo-smile-icon-vector-34243987.jpg",
    companyName: "Apple",
    datePosted: "Today",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hour",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://cdn.vectorstock.com/i/500p/39/87/amazon-logo-smile-icon-vector-34243987.jpg",
    companyName: "Meta",
    datePosted: "4 days ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Entry Level",
    pay: "$68/hour",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://cdn.vectorstock.com/i/500p/39/87/amazon-logo-smile-icon-vector-34243987.jpg",
    companyName: "Adobe",
    datePosted: "1 day ago",
    post: "Full Stack Developer",
    tag1: "Hybrid",
    tag2: "Mid Level",
    pay: "$82/hour",
    location: "San Jose, USA"
  },
  {
    brandLogo: "https://cdn.vectorstock.com/i/500p/39/87/amazon-logo-smile-icon-vector-34243987.jpg",
    companyName: "Spotify",
    datePosted: "2 weeks ago",
    post: "Data Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$88/hour",
    location: "Stockholm, Sweden"
  },
  {
    brandLogo: "https://cdn.vectorstock.com/i/500p/39/87/amazon-logo-smile-icon-vector-34243987.jpg",
    companyName: "Uber",
    datePosted: "Yesterday",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$92/hour",
    location: "San Francisco, USA"
  }
];
console.log(jobs);

  return (
    <div  className='parent'>
      
      {jobs.map(function(elem){

        return <Card  company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} loaction={elem.location} logo={elem.brandlogo} />
      })}
      
      
   </div>
  )
}

export default App

