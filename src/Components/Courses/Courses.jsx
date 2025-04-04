import "./Courses.css"
import program_1 from "../../assets/program-1.png"
import program_2 from "../../assets/program-2.png"
import program_3 from "../../assets/program-3.png"
import program_icon_1 from "../../assets/program-icon-1.png"
import program_icon_2 from "../../assets/program-icon-2.png"
import program_icon_3 from "../../assets/program-icon-3.png"

function Courses() {
  // Course data
  const courseData = [
    {
      id: 1,
      image: program_1,
      icon: program_icon_1,
      title: "Undergraduate Programs",
      description:
        "Our undergraduate programs provide a strong foundation in various disciplines, preparing students for successful careers.",
      duration: "4 years",
      students: "2500+",
    },
    {
      id: 2,
      image: program_2,
      icon: program_icon_2,
      title: "Master's Programs",
      description:
        "Advance your knowledge and skills with our specialized master's programs designed for career advancement.",
      duration: "2 years",
      students: "1200+",
    },
    {
      id: 3,
      image: program_3,
      icon: program_icon_3,
      title: "Doctoral Programs",
      description: "Pursue groundbreaking research and become an expert in your field with our doctoral programs.",
      duration: "3-5 years",
      students: "500+",
    },
  ]

  return (
    <div className="courses-container">
      <div className="courses">
        {courseData.map((course) => (
          <div className="course" key={course.id}>
            <div className="course-image">
              <img src={course.image || "/placeholder.svg"} alt={course.title} />
              <div className="caption">
                <img src={course.icon || "/placeholder.svg"} alt="" />
                <p>Learn More</p>
              </div>
            </div>
            <div className="course-content">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <div className="course-meta">
                <div className="meta-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {course.duration}
                </div>
                <div className="meta-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  {course.students}
                </div>
              </div>
              <div className="course-button">
                <button className="btn btn-outline">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-primary view-all-btn">View All Courses</button>
    </div>
  )
}

export default Courses

