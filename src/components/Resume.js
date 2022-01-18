import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
// import DownloadLink from 'react-download-link'
import api from '../api/Users'
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
// import pdfMake from 'pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// import htmlToPdfmake from 'html-to-pdfmake';
// import createPdf from 'CreatePdf';

function Resume() {
    // const componentRef = useRef();
    // const handlePrint = useReactToPrint({
    //     content: () => componentRef.current,
    // })

    const [userInfo, setUserInfo] = useState('')

    useEffect(() => {
        fetchResumeData()
    }, [])

    let fetchResumeData = async () => {
        let sampleData = await api.get(`user`)
        let id = await sampleData.data.length
        console.log(id);
        let resumedata = await api.get(`user/${id}`)
        console.log('inside resume', resumedata.data);
        setUserInfo(resumedata.data)
        // console.log(userInfo)
    }

    let printDocument = () => {
        console.log('print');
        htmlToImage.toPng(document.getElementById('print'), { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'my-image-name.jpeg';
                const pdf = new jsPDF();
                const imgProps = pdf.getImageProperties(dataUrl);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save("download.pdf");
            });
    }
    // let printDocument=()=> {

    //     const doc = new jsPDF();

    //     const pdfTable = document.getElementById('print');

    //     var html = htmlToPdfmake(pdfTable.innerHTML);

    //     const documentDefinition = { content: html };
    //     pdfMake.vfs = pdfFonts.pdfMake.vfs;
    //     pdfMake.createPdf(documentDefinition).open();

    //   };
    return (
        <>
            <div className='container' id='print' >
                <div >
                    <header>
                        <div>
                            <h1>UserDetails</h1>
                            <h3>{userInfo.firstName}{userInfo.lastName}</h3>
                            <h5>{userInfo.email}</h5>
                            <h5>{userInfo.phone}</h5>
                        </div>
                        <br />
                        <hr />
                    </header>
                    <educational>
                        <div>
                            <h2>Educational Details</h2>
                            <h3>University:{userInfo.college}</h3>
                            <h6>Qualification:{userInfo.qualification1}</h6>
                            <h6>{userInfo.fromyear1} - {userInfo.toyear1}</h6>
                        </div>
                        <br />
                        <hr />
                    </educational>
                    <projects>
                        <div>
                            <h3>Projects</h3>
                            <h4>Title:{userInfo.title1}</h4>
                            <p>Description:{userInfo.projectDescription1}</p>
                        </div>
                        <br />
                        <hr />
                    </projects>
                    <experience>
                        <div>
                            <h3>Organisation:{userInfo.institute1}</h3>
                            <h4>Position:{userInfo.position1}</h4>
                            <h4>Duration:{userInfo.duration1}months</h4>
                            <h3>Role:{userInfo.experienceDescription1}</h3>
                        </div>
                        <br />
                        <hr />
                    </experience>
                    <skills>
                        <div>
                            <h2>Skills</h2>
                            <h5>{userInfo.skill1}</h5>
                            <h5>{userInfo.skill2}</h5>
                            <h5>{userInfo.skill3}</h5>
                            <h5>{userInfo.skill4}</h5>
                            <h5>{userInfo.skill5}</h5>
                            <h5>{userInfo.skill6}</h5>
                        </div>
                    </skills>
                </div>
                <div>

                    <Button className="buttons mt-4 mb-4" onClick={() => printDocument()} >Download Resume<i class="bi bi-download" style={{ right: "-5px" }}></i></Button>
                    {/* <DownloadLink
                            
                            label="Download"
                            filename="my.pdf"
                            exportFile={() => <Resume />} /> */}
                </div>
            </div>
        </>
    )
}

export default Resume
