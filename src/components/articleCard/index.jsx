const FundCard = ({ name, description, fundLink }) => {
  return (
    <a
      href={fundLink}
      aria-label="card link"
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-5 w-[640px] items-start p-5 bg-white rounded-2xl custom-hover"
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl">{name}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </a>
  );
};

export default FundCard;
