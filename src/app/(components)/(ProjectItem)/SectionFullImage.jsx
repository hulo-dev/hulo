import SectionImage from "./SectionImage";
import SectionText from "./SectionText";

const SectionFullImage = ({ data }) => {
  return (
    <div>
      <SectionText data={data} maxWidth={1063} aligment="left" />
      <SectionImage data={data.image.url} heightImg={941} />
    </div>
  );
};

export default SectionFullImage;
