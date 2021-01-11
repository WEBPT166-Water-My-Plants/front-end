import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap';
import { Form } from 'react-bootstrap';
import classnames from 'classnames';
import styled from 'styled-components';

import { logoutUser, toggleModal } from '../redux/actions';
import PlantPage from './PlantPage';
import PlantDataList from './PlantDataList';
import plantIcon from '../images/plant.svg';
import { StyledForm, StyledTextInput } from './Styles/StyledComponents';

const UserPageStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 1em 2em;
  height: 100vh;
  width: 100vw;

  .userDashboard {
    background-color: #f0f0f0;
    border-radius: 5px;
    height: 95%;
    flex: 1;
    box-shadow: 0 0 5px black;

    .nav-link {
      cursor: pointer;
    }
  }
`;

const NavPanelStyle = styled.nav`
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 1em;
  height: 95%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  margin-right: 1em;
  box-shadow: 0 0 5px black;

  .user--icon {
    padding: 1em;
    margin-bottom: 5px;
    box-shadow: 0 0 5px black;
    border-radius: 50px;
    background-color: #499e3c;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .user--logout-btn {
    border: 0;
    padding: 0.5em;
    border-radius: 5px;
    color: white;
    background-color: #bc0003;
    font-weight: 600;
  }

  .user--addPlant {
    border: 1px solid black;
    padding: 0.25em;

    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-evenly;

    img {
      height: 25px;
    }

    p {
      margin: 0;
      padding: 0;
    }
  }
`;

const UserPage = () => {
  const user = useSelector((state) => state.user.userData);
  const userIsNotNull = useSelector((state) => state.user !== {});
  const [activeTab, setActiveTab] = useState('1');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  console.log(user);

  return (
    <UserPageStyle>
      {/* menu side bar */}
      {userIsNotNull && (
        <>
          <PlantModal isOpen={modalIsOpen} dispatch={dispatch} />
          <UserPanel
            username={user.username}
            dispatch={dispatch}
            history={history}
          />
          <div className="userDashboard">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => {
                    toggle('1');
                  }}
                >
                  My Plants
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => {
                    toggle('2');
                  }}
                >
                  Plant List
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <PlantPage />
              </TabPane>
              <TabPane tabId="2">
                <PlantDataList />
              </TabPane>
            </TabContent>
          </div>
        </>
      )}
    </UserPageStyle>
  );
};

const PlantModal = ({ dispatch }) => {
  const isOpen = useSelector((state) => state.plants.plantModalIsOpen);

  return (
    <>
      <Modal
        isOpen={isOpen}
        toggle={() => dispatch(toggleModal())}
        className="addPlantModal"
      >
        <ModalHeader toggle={() => dispatch(toggleModal())}>
          Add A Plant
        </ModalHeader>
        <ModalBody>
          <StyledForm>
            <StyledTextInput>
              <Label for="nickname">
                Plant Name
                <Form.Control type="text" id="nickname" />
              </Label>
            </StyledTextInput>
            <StyledTextInput>
              <Label for="species">
                Plant Species
                <Form.Control type="text" id="species" />
              </Label>
            </StyledTextInput>
            <StyledTextInput>
              <Label for="species">
                Water Frequency
                <Form.Control as="select" custom></Form.Control>
              </Label>
            </StyledTextInput>
          </StyledForm>
        </ModalBody>
      </Modal>
    </>
  );
};

const UserPanel = ({ username, dispatch, history }) => {
  return (
    <>
      <NavPanelStyle>
        <div className="user--wrapper">
          <div className="user--icon">
            {username && username.slice(0, 1).toUpperCase()}
          </div>
          <div className="user--username">{username}</div>
          <div
            className="user--addPlant"
            onClick={(e) => dispatch(toggleModal())}
          >
            <img src={plantIcon} alt="" />
            <p>Add Plant</p>
          </div>
        </div>
        <button
          className="user--logout-btn"
          onClick={(e) => {
            logoutUser(dispatch);
            history.push('/');
          }}
        >
          Logout
        </button>
      </NavPanelStyle>
    </>
  );
};

export default UserPage;
