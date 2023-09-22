export default function StatsCard(props: {
  title: string;
  number: number;
  isSpecial: boolean;
}) {
  return (
  <>
      <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/stats.css'} />

      <div className={props.isSpecial ? "statsCard statsCard-special" : "statsCard"}>
        <p className="statsCard-title">{props.title}</p>
        <p className="statsCard-number">{props.number}</p>
      </div>
  </>
  );
}