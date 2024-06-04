import techStackItems from "./TechStackData";
import TechStackItem from "./TechStackItem";

const TechStack = () => {
  return (
    <div className="p-24">
      <h2 className="text-5xl font-semibold bg-gradient-to-r from-primary-300 to-accent-400 inline-block text-transparent bg-clip-text">
        Experiance With
      </h2>
      <div className="grid content-center justify-center grid-cols-8 py-20 gap-x-14">
        {techStackItems.map((item, index) => (
          <TechStackItem
            key={index}
            name={item.name}
            IconComponent={item.IconComponent}
            IconColorComponent={item.IconColorComponent}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
