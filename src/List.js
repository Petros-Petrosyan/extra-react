import React, { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";

export const List = ({ data = [], renderItem, uniqueKeyProp }) => {
  const items = uniqueKeyProp
    ? data
    : data.map((item) => ({ uniqKey: uuidv4(), item }));

  return items.map((el) => (
    <Fragment key={uniqueKeyProp ? el[uniqueKeyProp] : el.uniqKey}>
      {renderItem({ data: uniqueKeyProp ? el : el.item })}
    </Fragment>
  ));
};
