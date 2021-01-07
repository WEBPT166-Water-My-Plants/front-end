import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap';
import classnames from 'classnames';
import styled from 'styled-components';

import { logoutUser } from '../redux/actions';
import PlantPage from './PlantPage';
import PlantList from './PlantList';

const UserPageStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 1em 2em;
  height: 100vh;

  .userDashboard {
    background-color: #dddddd;
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
  background-color: #dddddd;
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
`;

const UserPage = () => {
  const user = useSelector((state) => state.user.userData);
  const [userIsNotNull, setUserNull] = useState(user !== {});
  const [activeTab, setActiveTab] = useState('1');
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
              <TabPane tabId="2"></TabPane>
            </TabContent>
          </div>
        </>
      )}
    </UserPageStyle>
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
