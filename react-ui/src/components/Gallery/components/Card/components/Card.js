import React, { memo } from "react";
import moment from "moment";
import CardWrapper from "../styles/Card";
import Tags from "./Tags";

function Card({ link, author, dateTaken, tags }) {
  return (
    <CardWrapper url={link}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="anchor"
      >
        <div className="image-thumbnail" />
        <div className="image-info">
          <p className="image-author">{author}</p>
          <p className="image-date">
            {moment(dateTaken).format("do MMM YYYY")}
          </p>
        </div>
        <Tags tags={tags} />
      </a>
    </CardWrapper>
  );
}

export default memo(Card);
