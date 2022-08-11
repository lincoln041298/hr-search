import { useState } from 'react';
import { Combobox } from '@headlessui/react';
import { people } from '@/data';

export default function TestTheme() {
    const [selectedPerson, setSelectedPerson] = useState(people[0]);
    const [query, setQuery] = useState('');

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) => {
                  return person.name
                      .toLowerCase()
                      .includes(query.toLowerCase());
              });

    return (
        <Combobox value={selectedPerson} onChange={setSelectedPerson}>
            {({ activeOption }) => (
                <>
                    <Combobox.Input
                        onChange={(event) => setQuery(event.target.value)}
                        displayValue={(person: any) => person.name}
                    />
                    <Combobox.Options>
                        {filteredPeople.map((person) => (
                            <Combobox.Option key={person.id} value={person}>
                                {person.name}
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>

                    {activeOption && (
                        <div>
                            The current active user is: {activeOption.name}
                        </div>
                    )}
                </>
            )}
        </Combobox>
    );
}
