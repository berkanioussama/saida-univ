interface Props {
  title: string
}

const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <h2 className="text-5xl font-bold text-white text-center">
      {title}
    </h2>
  );
}
 
export default SectionTitle;