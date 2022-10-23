import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useSubjectList from "../hooks/useSubjectList";
import FirstSkleton from "./scleton/FirstSkleton";
import SkletonCard from "./scleton/SkletonCard";
import Subject from "./Subject";

export default function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, subjects, hasMore } = useSubjectList(page);

  return (
    <div>
      {subjects.length > 0 && (
        <InfiniteScroll
          dataLength={subjects.length}
          hasMore={hasMore}
          loader={[1,2,3,4,5,6,7,8].map((n, id) =>(<SkletonCard key={id} /> ) )}
          next={() => setPage(page + 8)}
        >
          {subjects.map((subject) =>
            subject.noq > 0 ? (
              <Link
                to={`/quiz/${subject.youtubeID}`}
                state={{ videoTitle: subject.title }}
                key={subject.youtubeID}
              >
                <Subject
                  title={subject.title}
                  id={subject.youtubeID}
                  noq={subject.noq}
                />
              </Link>
            ) : (
              <Subject
                title={subject.title}
                id={subject.youtubeID}
                noq={subject.noq}
                key={subject.youtubeID}
              />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && subjects.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <FirstSkleton />}
      {/* {loading && loading} */}
    </div>
  );
}
