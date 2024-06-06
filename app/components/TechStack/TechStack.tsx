import techStackItems from "./TechStackData";
import TechStackItem from "./TechStackItem";

const TechStack = () => {
  return (
    <div>
      <h2 className="text-5xl font-semibold bg-gradient-to-r from-primary-300 to-accent-400 inline-block text-transparent bg-clip-text">
        Experiance With
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9 py-20 gap-x-14">
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
