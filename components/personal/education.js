const Education = (props) => {
  return (
    <div className="flex flex-col my-10 items-start justify-start max-w-xl mr-14 pr-2">
      <div className="my-5">
        <h1 className="text-4xl font-extrabold my-10">Education</h1>
        <h3 className="text-xl font-light">2018-07 - 2020.06</h3>
        <h2 className="text-2xl font-semibold mb-1">
          the University of Sydney, Australia
        </h2>
        <h3 className="text-xl font-normal my-1">
          Department of Engineering & IT
        </h3>
        <h3 className="text-xl font-normal mb-5">
          Bachelor of Advanced Computing (Computer Science Major)
        </h3>
      </div>
      <div className="my-5">
        <h3 className="text-xl font-light">2020-07 - 2020.12</h3>
        <h2 className="text-2xl font-semibold mb-1">
          Leave of Absence (the University of Sydney)
        </h2>
        <h3 className="text-xl font-normal mb-5">COVID-19 Pandemic</h3>
      </div>
      <div className="my-5">
        <h3 className="text-xl font-light">2021-03 - 2022.12</h3>
        <h2 className="text-2xl font-semibold mb-1">
          Leave of Absence (the University of Sydney)
        </h2>
        <h3 className="text-xl font-normal mb-5">
          Mandotory Military Service In Korea
        </h3>
      </div>
    </div>
  );
};

export default Education;
