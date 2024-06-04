import style from "./TechStack.module.css";

const TechStackItem = ({
  name,
  IconComponent,
  IconColorComponent,
}: {
  name: string;
  IconComponent: () => JSX.Element;
  IconColorComponent: () => JSX.Element;
}) => {
  return (
    <div className="grid grid-rows-2 gap-4">
      <div className={`${style.hoverSwitch} h-16`}>
        <div className={style.iconFirst}>
          <IconComponent />
        </div>
        <div className={style.iconSec}>
          <IconColorComponent />
        </div>
      </div>
      <span className="text-center">{name}</span>
    </div>
  );
};

export default TechStackItem;
