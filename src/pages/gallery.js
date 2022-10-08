import "./gallery.css";
import ImgCard from "../component/imgcard";

import vet1 from '../img/vet1.jpg';
import vet2 from '../img/vet2.jpg';
import vet3 from '../img/vet3.jpg';
import vet4 from '../img/vet4.jpeg';
import vet5 from '../img/vet5.jpg';
import vet6 from '../img/vet6.jpg';
import vet7 from '../img/vet7.jpg';
import vet8 from '../img/vet8.jpeg';
import vet9 from '../img/vet9.jpg';

function Gallery(){

    return(
        <>

            <div className="breadbox">
            <a href="/">Home</a>/<text>Gallery</text>
            </div>
            

            <div className="row">
            <div className="col-md-3"><ImgCard img={vet3 } desc="Fresh from the farm" name="Pickle"/> </div>
            <div className="col-md-3"> <ImgCard img={vet5 } desc="carrots, Potatos, many more" name="Combo box"/></div> 
            <div className="col-md-3"> <ImgCard img={vet6 } desc="5 Pieces each" name="Carrot"/></div> 
            <div className="col-md-3"><ImgCard img={vet7 } desc="500g " name="lettuce"/> </div>
            <div className="col-md-3"> <ImgCard img={vet3 } desc="Fresh from the farm" name="Pickle"/> </div>
            <div className="col-md-3"> <ImgCard img={vet5 } desc="carrots, Potatos, many more" name="Combo box"/></div> 
            <div className="col-md-3">  <ImgCard img={vet6 } desc="5 Pieces each" name="Carrot"/></div> 
            <div className="col-md-3">  <ImgCard img={vet7 } desc="500g " name="lettuce"/> </div>
            <div className="col-md-3">  <ImgCard img={vet3 } desc="Fresh from the farm" name="Pickle"/> </div>
            <div className="col-md-3">  <ImgCard img={vet5 } desc="carrots, Potatos, many more" name="Combo box"/></div> 
            <div className="col-md-3">  <ImgCard img={vet6 } desc="5 Pieces each" name="Carrot"/></div> 
            <div className="col-md-3"> <ImgCard img={vet7 } desc="500g " name="lettuce"/> </div>
            <div className="col-md-3"> <ImgCard img={vet3 } desc="Fresh from the farm" name="Pickle"/> </div>
            <div className="col-md-3"> <ImgCard img={vet5 } desc="carrots, Potatos, many more" name="Combo box"/></div> 
            <div className="col-md-3"> <ImgCard img={vet6 } desc="5 Pieces each" name="Carrot"/></div> 
            <div className="col-md-3"> <ImgCard img={vet7 } desc="500g " name="lettuce"/> </div>
            <div className="col-md-3"> <ImgCard img={vet3 } desc="Fresh from the farm" name="Pickle"/> </div>
            <div className="col-md-3">   <ImgCard img={vet5 } desc="carrots, Potatos, many more" name="Combo box"/> </div>
            <div className="col-md-3">   <ImgCard img={vet6 } desc="5 Pieces each" name="Carrot"/> </div>
            <div className="col-md-3">   <ImgCard img={vet7 } desc="500g " name="lettuce"/> </div>
            <div className="col-md-3">   <ImgCard img={vet3 } desc="Fresh from the farm" name="Pickle"/> </div>
            <div className="col-md-3">   <ImgCard img={vet5 } desc="carrots, Potatos, many more" name="Combo box"/> </div>
            <div className="col-md-3">   <ImgCard img={vet6 } desc="5 Pieces each" name="Carrot"/> </div>
            <div className="col-md-3">  <ImgCard img={vet7 } desc="500g " name="lettuce"/> </div>


            </div>
            
        </>
    )
}
export default Gallery ;