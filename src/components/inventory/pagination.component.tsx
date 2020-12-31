import React, { FC as Component } from 'react';
import InventoryPageTitle from '../../models/inventory-page-title.model';

interface Props {
  page: InventoryPageTitle | null;
  handlePageChange: (direction: boolean) => void;
}

const Pagination: Component<Props> = ({ page, handlePageChange }: Props) => {
  if (page) {
    const { previous, current, next } = page;
    return (
      <div className="pagination">
        <ul>
          <li>
            <div
              className="button"
              role="button"
              onClick={
                  () => handlePageChange(false)
                }
            >
              <span>{previous}</span>
              <span className="pagination_arrow pagination_arrow-left" />
            </div>
          </li>
          <li>
            <p>{current}</p>
          </li>
          <li>
            <div
              className="button"
              role="button"
              onClick={
                  () => handlePageChange(true)
                }
            >
              <span>{next}</span>
              <span className="pagination_arrow pagination_arrow-right" />
            </div>
          </li>
        </ul>
      </div>
    );
  }
  return null;
};

export default Pagination;
