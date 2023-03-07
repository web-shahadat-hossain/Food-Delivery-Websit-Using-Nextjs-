
import Image from "next/image"
import g1 from "../../assets/Gallery/g-1.jpg"
import g2 from "../../assets/Gallery/g-2.jpg"
import g3 from "../../assets/Gallery/g-3.jpg"
import g4 from "../../assets/Gallery/g-4.jpg"
import g5 from "../../assets/Gallery/g-5.jpg"
import g6 from "../../assets/Gallery/g-6.jpg"
import g7 from "../../assets/Gallery/g-7.jpg"
import g8 from "../../assets/Gallery/g-8.jpg"
import g9 from "../../assets/Gallery/g-9.jpg"
import css from "../../styles/gallery.module.css"
const Gallery = () => {

    const data=[
        {
            img:g1,
            id:1
        },
        {
            img:g2,
            id:2
        },
        {
            img:g3,
            id:3
        },
        {
            img:g4,
            id:4
        },
        {
            img:g5,
            id:5
        },
        {
            img:g6,
            id:6
        },
        {
            img:g7,
            id:7
        },
        {
            img:g8,
            id:8
        },
        {
            img:g9,
            id:9
        },
    ]
    return (
        <section className="container" style={{marginTop:"100px"}}>
        <h3 className="title">Our Food <span style={{color:"var(--themeRed)"}}>  Gallery </span> </h3>

        <div className={css.galleryContainer}>
            {
                data.map(gallery=><div key={gallery.id}>

<div className={css.gallery}>
    <Image layout="intrinsic"  src={gallery.img} alt="" />
</div>
           </div>)
            }
        </div>
  
</section>
    );
};

export default Gallery;