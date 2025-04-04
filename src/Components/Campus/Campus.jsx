import "./Campus.css"
import gallery_1 from "../../assets/gallery-1.png"
import gallery_2 from "../../assets/gallery-2.png"
import gallery_3 from "../../assets/gallery-3.png"
import gallery_4 from "../../assets/gallery-4.png"

const Campus = () => {
  // Gallery data with captions
  const galleryData = [
    {
      id: 1,
      image: gallery_1,
      caption: "Modern Library",
    },
    {
      id: 2,
      image: gallery_2,
      caption: "Sports Complex",
    },
    {
      id: 3,
      image: gallery_3,
      caption: "Research Labs",
    },
    {
      id: 4,
      image: gallery_4,
      caption: "Student Center",
    },
  ]

  return (
    <div className="campus-container">
      <div className="campus">
        <div className="gallery">
          {galleryData.map((item) => (
            <div className="gallery-item" key={item.id}>
              <img src={item.image || "/placeholder.svg"} alt={item.caption} />
              <div className="gallery-overlay">
                <div className="gallery-caption">{item.caption}</div>
              </div>
            </div>
          ))}
        </div>
        <button className="btn">Explore Campus Gallery</button>
      </div>
    </div>
  )
}

export default Campus

