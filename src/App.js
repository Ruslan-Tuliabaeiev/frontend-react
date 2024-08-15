import React from 'react';
import './App.css';
import { HeaderComponent } from './Components/HeaderComponent/HeaderComponent';
import { HomeComponent } from './Components/HomeComponent/HomeComponent';
import { PrimeLicenseComponent } from './Components/PrimeLicenseComponent/PrimeLicenseComponent';
import { PrimeAnalizesComponent } from './Components/PrimeAnalizesComponent/PrimeAnalizesComponent';
import { WorksComponent } from './Components/WorksComponent/WorksComponent';
import { MediaComponent } from './Components/MediaComponent/MediaComponent';
import { QuestionComponent } from './Components/QuestionComponent/QuestionComponent';
import { FooterComponent } from './Components/FooterComponent/FooterComponent';

function App() {
  return (
    <div>
      <HeaderComponent/>
      <HomeComponent />
      <PrimeLicenseComponent />
      <PrimeAnalizesComponent />
      <WorksComponent />
      <MediaComponent />
      <QuestionComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
