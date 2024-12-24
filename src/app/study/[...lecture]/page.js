export default function Study() {
    // Example static data you want to render
    const studyData = {
        subject: "Computer Science",
        level: "Bachelor's Degree",
        topics: ["Data Structures", "Algorithms", "Web Development"]
    };

    return (
        <div>
            <h1>Study</h1>
            <h2>Subject: {studyData.subject}</h2>
            <p>Level: {studyData.level}</p>
            <h3>Topics to Study:</h3>
            <ul>
                {studyData.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                ))}
            </ul>
        </div>
    );
}
