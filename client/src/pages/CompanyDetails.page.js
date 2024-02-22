import React from 'react';
import defaultLogo from "../assets/img/post.png"
import ApplicationForm from '../components/ApplicationForm.components';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LanguageIcon from '@mui/icons-material/Language';
import { httpGetCompanyById } from '../hooks/requests.hooks';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { shortenText } from '../utils';
import Reviews from '../components/Reviews.component';
function CompanyDetailsPage() {
    const { companyId } = useParams()
    const [loading, setLoading] = React.useState(true)
    const [company, setCompany] = React.useState(true)

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await httpGetCompanyById(companyId);
                setCompany(result);
            } catch (error) {
                alert('Error fetching featured companies:', error);
                console.error('Error fetching featured companies:', error);
            } finally {
                setLoading(false)
            }
        };

        fetchData();
        
    }, [companyId])

    return <main>
            {loading ? <CircularProgress sx={{marginTop: "300px", marginLeft: "800px"}} size={100}/> : <>
                <div className="slider-area">
                    <div
                        className="single-slider section-overly slider-height2 d-flex align-items-center"
                        data-background="assets/img/hero/about.jpg"
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="hero-cap text-center">
                                        {company.logo !== "/images/no-image-available.jpg" && <img alt="logo" src={`https://www.finelib.com${company.logo}`}></img>}
                                        <h2>{company.name}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="job-post-company pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-7 col-lg-8">
                                <div className="single-job-items mb-50">
                                    <div className="job-items">
                                        <div
                                            className="company-img company-img-details"
                                        >
                                            <a href
                                                ><img
                                                    src={company.logo !== "/images/no-image-available.jpg" ? `https://www.finelib.com${company.logo}` : defaultLogo}
                                                    alt="pic"
                                            /></a>
                                        </div>
                                        <div className="job-tittle">
                                            <a href>
                                                <h4>{company.name}</h4>
                                            </a>
                                            <ul>
                                                <li><EmailIcon/>{company.email === "null" ? "none available" : company.email}</li>
                                                <li>
                                                    <LocationOnIcon/>{[company.street, company.city, company.state].join(", ")}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="job-post-details">
                                    <div className="post-details1 mb-50">
                                        <div className="small-section-tittle">
                                            <h4>Job Description</h4>
                                        </div>
                                        <p>{company.description !== "null" ? company.description : "none available"}</p>
                                    </div>
                                </div>

                            </div>

                            <div style={{marginRight: "50px"}} className="col-xl-4 col-lg-4">
                                <div style={{width: "600px"}} className="post-details3 mb-50">
                                    <div className="small-section-tittle">
                                        <h4>Internship Overview</h4>
                                    </div>
                                    <ul>
                                        <li>
                                            <span><EmailIcon/> Email : </span><span>{company.email === "null" ? "none available" : company.email}</span>
                                        </li>
                                        <li><span><LocationOnIcon/> Location : </span><span>{shortenText(30, [company.street, company.city, company.state].join(", "))}</span></li>
                                        <li><span><PhoneIcon/> Phone : </span><span>{company.phoneNumbers ? company.phoneNumbers.join(", ") : "none available"}</span></li>
                                        <li><span><LanguageIcon/> Website : </span><a style={{color: "blue"}} href='link.com'>link.com</a></li>
                                        <li><span><AccessTimeIcon/> Working Hours : </span><span>02-92400</span></li>
                                    </ul>
                                    <div style={{marginLeft: "200px"}} className="apply-btn2">
                                        <a style={{color: "white"}} href className="btn">Apply Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row justify-content-between'>
                            <div className="col-xl-7 col-lg-8">
                                <ApplicationForm />
                            </div>
                            <Reviews reviews={company.reviews}/>
                        </div>
                    </div>
                </div>
            </>}
            </main>

}


export default CompanyDetailsPage