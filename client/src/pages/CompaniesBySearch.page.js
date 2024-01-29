import React from 'react';
import "../styles/companiescontainer.css"
import CompanyCard from '../components/CompanyCard.components';
import ComboBox from '../components/mui/Autocomplete.components.mui';
import SearchBar from "../components/SearchBar.components"
import nigerianStates from '../data/nigeria_states';
import importantTagsDetails from '../data/important_tags_details';
import CheckboxesTags from '../components/mui/CategoriesInput.components';


function CompaniesBySearch() {

    return <main>
                <div style={{marginBottom: "40px"}} className="slider-area">
                    <div
                        className="single-slider section-overly slider-height2 d-flex align-items-center"
                        data-background="assets/img/hero/about.jpg"
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="hero-cap text-center">
                                        <h2>Search over 130,000 Nigerian Companies</h2>
                                    </div>
                                    <SearchBar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>

                    <div className='row'>
                        <div className="col-xl-3 col-lg-3 col-md-4" id="my-filteroptions">
                            <div className="row">
                                <div className="col-12">
                                    <div className="small-section-tittle2 mb-45">
                                        <div className="ion">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                width="20px"
                                                height="12px"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    fill="rgb(27, 207, 107)"
                                                    d="M7.778,12.000 L12.222,12.000 L12.222,10.000 L7.778,10.000 L7.778,12.000 ZM-0.000,-0.000 L-0.000,2.000 L20.000,2.000 L20.000,-0.000 L-0.000,-0.000 ZM3.333,7.000 L16.667,7.000 L16.667,5.000 L3.333,5.000 L3.333,7.000 Z"
                                                />
                                            </svg>
                                        </div>
                                        <h4>Filter Jobs</h4>
                                    </div>
                                </div>
                            </div>

                            <div style={{width: "400px", marginLeft: "-100px"}} className="job-category-listing mb-50">
                                <div style={{marginBottom: "20px"}} className="single-listing">
                                    <div className="small-section-tittle2">
                                        <h4>Categories</h4>
                                    </div>
                                    <CheckboxesTags placeholder="Categories" options={Object.keys(importantTagsDetails)} width={340} label="Categories" />
                                </div>

                                <div style={{marginBottom: "20px"}} className="single-listing">
                                    <div className="small-section-tittle2">
                                        <h4>States</h4>
                                    </div>
                                    <ComboBox options={Object.keys(nigerianStates)} width={340} label="States" />
                                </div>

                                <a style={{width: "340px"}} href="/" className="btn head-btn1">FILTER</a>
                            </div>
                        </div>
                        <div style={{marginLeft: "280px", marginTop: "-450px"}} className="col-xl-9 col-lg-9 col-md-8">
                            <div className="container">
                                <div style={{width: "1100px"}} className="row justify-content-center d-flex">
                                    <div style={{fontSize: "20px", marginBottom: "30px"}}>13454 companies found</div>
                                
                                    <div style={{maxWidth: "90%"}} className="col-lg-8 post-list" id='my-col'>
                                        
                                        <CompanyCard />
                                        <CompanyCard />
                                        <CompanyCard />
                                        <CompanyCard />
                                        <CompanyCard />
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </main>
}


export default CompaniesBySearch