export default function Subject({ title, photoURL, noq }) {
  return (
    <div className="video">
      <img
        src={`${photoURL}`}
        alt={title}
      />{" "}
      {/* <img
        src={`https://i.postimg.cc/jqZz3fpH/maxresdefault.jpg`}
        alt={title}
      /> */}
      <p className="h-24">{title}</p>
      <div className="qmeta">
        <p>{noq} Questions</p>
        <p>Total points : {noq * 5}</p>
      </div>
    </div>
  );
}
