import React from 'react';
import styles from './user.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/user.png';

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.curentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
      console.log(response)
    });
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
    });
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return <div>
      <div className={styles.pageNumberContainer}>
        {pages.map(page => <span
          onClick={(e) => this.onPageChanged(page)}
          className={`${this.props.curentPage === page ? styles.selectedPage : ''} ${styles.pageNumber}`}>_{page}
        </span>)}
      </div>
      {
        this.props.users.map(user => <div key={user.id}>
          <span>
            <div>
              <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={styles.userPhoto} alt="avatar" />
            </div>
            <div>
              {user.followed
                ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                : <button onClick={() => this.props.follow(user.id)}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
            </span>
          </span>
        </div>)
      }
    </div>
  }
}

export default Users;
