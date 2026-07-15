import React from 'react';
import { Hero } from '../components/Hero';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { GroupCompaniesPreview } from '../components/GroupCompaniesPreview';
import { About } from '../components/About';
import { Expertise } from '../components/Expertise';
import { Projects } from '../components/Projects';
import { InnovationPrograms } from '../components/InnovationPrograms';
import { FounderProfile } from '../components/FounderProfile';
import { TeamMembers } from '../components/TeamMembers';
import { Connect } from '../components/Connect';
import { Collaborations } from '../components/Collaborations';

export function HomePage() {
  return (
    <>
      <Hero />
      <GroupCompaniesPreview />
      <WhyChooseUs />
      <About />
      <Expertise />
      <Projects />
      <InnovationPrograms />
      <FounderProfile />
      <TeamMembers preview />
      <Collaborations />
      <Connect />
    </>
  );
}
