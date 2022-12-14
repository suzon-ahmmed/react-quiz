export default function Video({ title, id, noq }) {
  return (
    <div className="video">
      {/* <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      />{" "} */}
      <img
        src={`https://i.postimg.cc/jqZz3fpH/maxresdefault.jpg`}
        alt={title}
      />
      <p className="h-24">{title}</p>
      <div className="qmeta">
        <p>{noq} Questions</p>
        <p>Total points : {noq * 5}</p>
      </div>
    </div>
  );
}
