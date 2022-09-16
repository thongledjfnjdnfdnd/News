import React from 'react';
import Link from 'next/link';
import { Button } from '@components/Button';
import { ROUTES, VARIANTS } from '@enums';

export const Header = (): JSX.Element => {
  return (
    <header className="shadow bg-blue-100">
      <div className="flex justify-between px-3 py-4">
        <h1 className="flex items-center">
          <span className="text-lg font-semibold p-2 text-white bg-cyan-500 rounded-full shadow">
            Meetup
          </span>
        </h1>

        <Button testId="add-button" variant={VARIANTS.PRIMARY}>
          <Link href={ROUTES.ADD_MEETUP}>
            <a>Create New Meetup</a>
          </Link>
        </Button>
      </div>
    </header>
  );
};
