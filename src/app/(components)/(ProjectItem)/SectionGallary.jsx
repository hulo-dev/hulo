import DoubleText from "./DoubleText";
import { GridImages } from "./GridImages";
import SectionText from "./SectionText";

const SectionGallary = ({ data, arr }) => {
  const array = [{src:`${data.img1.url}`},{src:`${data.img1.url}`},{src:`${data.img1.url}`}];
  return (
    <div>
      <DoubleText data={data}/> 
      <GridImages data={ data } />
      <SectionText data={ data } maxWidth={864} aligment="right" />
    </div>
  );
};

export default SectionGallary;
