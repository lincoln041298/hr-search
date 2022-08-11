import Image from 'next/image';

export interface DisplayUserProps {}

const DisplayUser = ({ activeOption }: any) => {
    console.log(activeOption);
    return (
        <div>
            {activeOption.name}
            {/* {activeOption.map((data: any) => (
                <div key={data.id}>{data.name}</div>
            ))} */}
        </div>
    );
};

export default DisplayUser;
