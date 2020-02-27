import React, { Component } from "react";
import { PDFViewer } from '@react-pdf/renderer';
import CurriculumContent from "./CurriculumContent";

const Curriculum = () => {
    return (
        <PDFViewer>
            <CurriculumContent/>

       
        </PDFViewer>
    )
}
export default Curriculum;