import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
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

import {
  addPlant,
  logoutUser,
  quickAddPlantInfo,
  toggleModal,
} from '../redux/actions';
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
  const currentPlant = {
    name: '',
    species: '',
    days: 1,
  };

  const quickAddSpecies = useSelector(
    (state) => state.plants.plantModalInfo.species
  );
  const [newPlant, setNewPlant] = useState(currentPlant);
  const userId = useSelector((state) => state.user.userData.id);
  const isOpen = useSelector((state) => state.plants.plantModalIsOpen);

  useEffect(() => {
    setNewPlant({ ...newPlant, species: quickAddSpecies });
  }, [quickAddSpecies]);

  console.log(quickAddSpecies);

  const changeHandler = (e) => {
    setNewPlant({
      ...newPlant,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPlant(dispatch, userId, newPlant);
    dispatch(quickAddPlantInfo(''));
    dispatch(toggleModal());
  };

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
          <StyledForm onSubmit={(e) => handleSubmit(e)}>
            <StyledTextInput>
              <Label for="name">
                Plant Name
                <Form.Control
                  type="text"
                  id="name"
                  name="name"
                  onChange={changeHandler}
                  value={newPlant.name}
                />
              </Label>
            </StyledTextInput>
            <StyledTextInput>
              <Label for="species">
                Plant Species
                <Form.Control
                  type="text"
                  id="species"
                  name="species"
                  onChange={changeHandler}
                  value={newPlant.species}
                />
              </Label>
            </StyledTextInput>
            <StyledTextInput>
              <Label for="species">
                Days to Water
                <Form.Control
                  as="select"
                  name="days"
                  onChange={changeHandler}
                  value={newPlant.days}
                  custom
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                </Form.Control>
              </Label>
            </StyledTextInput>
          </StyledForm>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
            Add Plant
          </Button>
        </ModalFooter>
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
