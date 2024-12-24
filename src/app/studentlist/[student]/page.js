'use client';

export default function Student({ params }) {
  console.log(params);

  return (
    <div className="student-list">
      <h1>Student List</h1>
      <h3>
        Name : {params && params.Student ? params.Student : 'Unknown'}
      </h3>
    </div>
  );
}
