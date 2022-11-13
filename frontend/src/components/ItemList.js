import ItemPreview from "./ItemPreview";
import ListPagination from "./ListPagination";
import React from "react";

const ItemList = (props) => {
  if (!props.items) {
    return <div className="py-4">Loading...</div>;
  }

  if (props.items.length === 0) {
    return (
      <div className="py-4 no-items">
        {props.searchQuery ? (
          <div class="dishwasher-div" id="empty">
            <svg viewBox="0 0 512 512" class="emptyIcon" width="40">
              <circle cx="256" cy="256" r="256" fill="#fff"></circle>
              <path
                fill="currentColor"
                d="M164 171.518C128.259 179.143 141.38 234.496 177 226.319C212.39 218.196 199.491 163.946 164 171.518M335 171.519C299.477 179.225 312.616 234.156 348 226.481C383.71 218.736 370.746 163.763 335 171.519M240 347C270.264 346.997 296.083 349.661 323 365.285C332.585 370.848 341.223 378.146 348.996 386C351.736 388.768 355.791 395.579 360.015 395.883C366.571 396.354 376.552 384.404 382 381C379.142 370.792 366.884 361.476 359 354.921C333.694 333.877 301.988 320.348 269 318.09C260.867 317.533 252.133 317.533 244 318.09C239.753 318.38 234.211 320.426 230.04 319.227C224.054 317.506 219.452 306.679 215.79 302C206.181 289.722 196.027 278.027 185 267C181.421 263.421 176.907 256.866 172 255.176C165.401 252.903 152.269 270.711 148.001 275C126.609 296.495 102.92 324.823 99.4398 356C98.5393 364.067 100.59 373.336 103.029 381C123.583 445.592 219.421 443.41 238.41 379C241.436 368.735 241.952 357.517 240 347z"
              />
            </svg>
            <div>
              No items found for "<b>{props.searchQuery}</b>".
            </div>
          </div>
        ) : (
          "No items... yet"
        )}
      </div>
    );
  }

  return (
    <div className="container py-2">
      <div className="row">
        {props.items.map((item) => {
          return (
            <div className="col-sm-4 pb-2" key={item.slug}>
              <ItemPreview item={item} />
            </div>
          );
        })}
      </div>

      <ListPagination
        pager={props.pager}
        itemsCount={props.itemsCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default ItemList;
