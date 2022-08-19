import * as React from 'react';

export interface UserProps {
  id: string;
  name: string;
  lastName: string;
  age: number;
}

export interface Props {
  User: React.ComponentType<UserProps>;
}

const ClubMembers = ({ User }: Props) => {
  return (
    <div>
      <User id="01" name="ron" lastName="levy" age={19} />
    </div>
  );
};

const Person = () => {
  return <div>Ron</div>;
};

<ClubMembers User={Person} />;
