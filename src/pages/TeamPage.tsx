import React, { useEffect } from 'react';
import { TeamMembers } from '../components/TeamMembers';
import { FounderProfile } from '../components/FounderProfile';

export function TeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-8">
      <FounderProfile />
      <TeamMembers preview={false} />
    </div>
  );
}
