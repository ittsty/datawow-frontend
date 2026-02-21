const StatCard = ({title,value,color,}: {title: string; value: number; color: string;}) => {
  return (
    <div className={`${color} text-white p-4 rounded shadow glow-1 h-48 flex flex-col items-center justify-between`}>
      <div className="text-md mt-2">{title}</div>
      <div className="text-3xl font-bold">{value}</div>
    </div>
  );
};

export default StatCard;
