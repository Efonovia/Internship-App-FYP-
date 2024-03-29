import React from 'react';
import "../styles/companiescontainer.css"
import CompanyCard from './CompanyCard.components';
import { httpGetFeaturedCompanies } from '../hooks/requests.hooks';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

function CompaniesContainer() {

    const navigate = useNavigate()
    const [loading, setLoading] = React.useState(true)
    const userInfo = useSelector(state => state.user)
    const [featuredCompanies, setFeaturedCompanies] = React.useState([])
    const featuredCompaniesHtml = featuredCompanies["data"]?.map(featuredCompany => <CompanyCard 
                                                                                        key={featuredCompany.id} 
                                                                                        data={featuredCompany} 
                                                                                        userId={userInfo?._id}
                                                                                        savedCompanies={userInfo?.savedCompanies}
                                                                                    />)

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await httpGetFeaturedCompanies(1);
                setFeaturedCompanies(data);
            } catch (error) {
                alert('Error fetching data:', error);
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false)
            }
        };

        fetchData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return loading ? <CircularProgress sx={{ color: "#fb246a", marginLeft: "45%" }} size={100}/> : <section className="post-area section-gap">
                <div className="section-tittle text-center">
                    <span>FEATURED Companies</span>
                    <h2>Browse through the best companies in Nigeria</h2>
                </div>
                <div className="container">
                    <div className="row justify-content-center d-flex">
                        <div style={{maxWidth: "80%"}} className="col-lg-8 post-list" id='my-col'>
                            {featuredCompaniesHtml}
                            <div className="row">
                        <div className="col-lg-12">
                            <div className="browse-btn2 text-center mt-50">
                                <a href onClick={()=>navigate("/companies/search")} className="border-btn2">Load more jobs</a>
                            </div>
                        </div>
                    </div>
                        </div>
                        
                    </div>
                </div>
            </section>
}


export default CompaniesContainer