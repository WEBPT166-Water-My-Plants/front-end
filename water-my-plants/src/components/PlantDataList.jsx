import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import plantData from '../data';
import { StyledButton } from './Styles/StyledComponents';

const StyledPlantDataList = styled.div`
  height: 100%;

  .listContainer {
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;

    .plantListContainer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;

      .listChild {
        width: 100%;
        padding: 1em;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
          font-size: 2rem;
        }
      }
    }
    nav.pagination {
      margin: 0 auto;
    }
  }
`;

const PlantDataList = () => {
  return (
    <StyledPlantDataList>
      {/* Search Plants from data.js */}
      <List />
    </StyledPlantDataList>
  );
};

export default PlantDataList;

const List = () => {
  const [ListData, setListData] = useState([]);
  const [Pages, setPages] = useState([]);

  useMemo(() => {
    setListData(plantData);
  }, []);

  return (
    <div className="listContainer">
      <h2>Plant List</h2>
      {/* container */}
      <div className="plantListContainer">
        {ListData.filter((_, i) => i < 5).map((e, i) => (
          <div className="listChild">
            <img
              src={e.image_url}
              style={{ width: '100px', height: '100px' }}
              alt={e.common_name + '_pic'}
            />
            <p>{e.common_name}</p>
            <StyledButton>Quick Add</StyledButton>
          </div>
        ))}
      </div>
      {/* pagination */}
      <Pagination className="pagination">
        <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem>
      </Pagination>
    </div>
  );
};
