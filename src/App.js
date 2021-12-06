import styles from './App.module.scss';
import globalStyles from '../src/Asset/boostrap.min.module.css';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import allActions from './actions';
import { useEffect, useState } from 'react';
import { createSelector } from 'reselect';
import { createSlice } from '@reduxjs/toolkit';
import { counterActions } from './store/counter';
import "./App.css";

const Modal = ({
  buttonText = "Open Modal",
  cancelButtonText,
  content,
  width = 400
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>{buttonText}</button>
      {isOpen && (
        <div className="modal-wrapper" onClick={handleClose}>
          <div style={{ width }} className="modal-container" onClick={e => e.stopPropagation()}>
            <h2>Modal title</h2>
            <button className="cross-btn" onClick={handleClose}>&#x02A2F;</button>
            <p>{content}</p>
            <button onClick={handleClose}>{cancelButtonText}</button>
            <button>Save changes</button>
          </div>
        </div>
      )}
    </div>
  );
}

const App = () => {
  const content = <p>Hello Modal</p>;
  return (
  <>
        <h1>Hello world</h1>
        <Modal
          buttonText="Open"
          cancelButtonText="Go Back"
          content={content}
          width={400}
        />
      </>
    );
  }


  // const counter = useSelector(state => state.counter);
  // const users = useSelector(state => state.userList);
  
  // const count = useSelector(state => state.counter.value);

  // const dispatch = useDispatch();


  // useEffect(() => {
  //   dispatch(allActions.fetchUserAction.fetchUsers())
  // },[])


  // return (
  //   <div>
  //    <h1>Counter: {counter}</h1>
  //     <button onClick={() => dispatch(allActions.counterActions.increment())}>Increase Counter</button>
  //     <button onClick={() => dispatch(allActions.counterActions.decrement())}>Decrease Counter</button>

      {/* <button onClick={() => dispatch(counterActions.increment())}>ADD</button>
      <button onClick={() => dispatch(counterActions.decrement())}>REDUCE</button>
      <div>{count}</div>  */}

      // <ul>
      //   {users.data.map(user => <li>{user.login}</li>)} 

    //   </ul>
    // </div>
  



    // <div className={styles.Wrap}>
    //   <div className={styles.Image}>
    //     <img 
    //     src="https://picsum.photos/500/400?random=10"
    //     alt="new"
    //     />
    //     <div className={styles.ImgTxt}>
    //       <h2>Practice CSS and SCSS every day by Peter Wang</h2>
    //     </div>
    //   </div>

    //   <div className={styles.Item}>
    //     <div className={styles.Txt}>
    //     <h2> CSS1 </h2>
    //     <p> Text1 </p>

    //     </div>
    //   </div>


    //   <div className={styles.Item}>
    //     <div className={styles.Txt}>
    //       <h2> CSS2 </h2>
    //       <p> Text2 </p>

    //     </div>
    //   </div>


    //   <div className={styles.Item}>
    //     <div className={styles.Txt}>
    //       <h2> CSS3 </h2>
    //       <p> Text3 </p>

    //     </div>
    //   </div>

    //   <div className={styles.Item}>
    //     <div className={styles.Txt}>
    //       <h2> CSS4 </h2>
    //       <p> Text4 </p>

    //     </div>
    //   </div>

    //   <div className={styles.ItemPic}>
    //     <div className={styles.Pic}>
    //       <img 
    //       src="https://picsum.photos/500/400?random=10"
    //       alt="new_1"
    //       />
    //     </div>

    //     <div className={styles.Txt}>
    //       <h2>Practice Float Image</h2>
    //       <p>CoCo Poland Spring Chip</p>
    //     </div>

    //   </div>

    // <div className="container mt-3">
    //   <h2 class="text-center">Register</h2>
    //   <div>
    //     <div class="mb-3">
    //       <label for="email" class="form-label">
    //         Email address
    //       </label>
    //       <input
    //         type="email"
    //         class="form-control"
    //         id="email"
    //         placeholder="name@example.com"
    //       />
    //     </div>
    //     <div class="mb-3">
    //       <label for="password" class="form-label">
    //         Password
    //       </label>
    //       <input
    //         type="password"
    //         class="form-control"
    //         id="password"
    //         placeholder="Password"
    //       />
    //     </div>
    //     <div class="mb-3">
    //       <label for="bio" class="form-label">
    //         Tell us about you
    //       </label>
    //       <textarea class="form-control" id="bio" rows="3"></textarea>
    //     </div>
    //     <div class="col-12">
    //       <button class="btn btn-primary" type="submit">
    //         Register
    //       </button>
    //     </div>
    //   </div>
    // </div>

    // </div>
    // <div className={globalStyles.container} id={styles.test1}>
    //   <button className={cx(globalStyles.btn, globalStyles['btn-outline-primary'])}>Test</button>
    //   <button className={cx(globalStyles.btn, globalStyles['btn-secondary'])} id={styles.test2}>Secondary</button>
    //   <div className={cx(globalStyles.alert, globalStyles['alert-info'])} role="alert">
    //     A simple info alert—check it out!
    //   </div>
    //   <button className={cx(globalStyles.close)}><span aria-hidden="true">&times;</span><span className={globalStyles["sr-only"]}>Close</span></button>

    //   <form>
    //     <div className={cx(globalStyles['form-group'])}>
    //       <input type="email" className={cx(globalStyles['form-control'])} id="email" placeholder="Enter email" />
    //     </div>
    // </form>
    // <div className={cx(globalStyles["form-check"], globalStyles["form-switch"])}>
    //   <input className={cx(globalStyles["form-check-input"])} type="checkbox" />
    // </div>  
    // </div>
    
    // <div className={styles.container}>

    //   {/* <div className={cx(globalStyles["form-check"], globalStyles["form-switch"])}>
    //     <input className={cx(globalStyles["form-check-input"])} type={"checkbox"} />
    //   </div> */}

    // <form className={styles.formcontainer}>
    //   {/* <div id={styles.activeCheck}>
    //     <p>Active</p>
    //   </div>  */}
    //   <div id={styles.editIcon}>
    //   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16" id={styles.editImg}>
    //     <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
    //   </svg>
    //     <p id={styles.editTxt}> Basic options </p>
    //   </div>

    //   <div id={styles.toggleIcon}>
    //     <p id={styles.activeTxt}> Active </p>
    //     <div className={cx(globalStyles["form-check"], globalStyles["form-switch"])} id={styles.checkIcon}>
    //       <input className={cx(globalStyles["form-check-input"])} type={"checkbox"} />
    //     </div>
    //   </div> 

    //   <div className={cx(globalStyles["form-group"])} id={styles.feedNameContainer}>
    //     <label id={styles.feedNameLabel}>Feed Name</label>
    //     <input className={cx(globalStyles["form-control"])} id={styles.feedName} placeholder="Feed name here" />
    //   </div>
      
    //   <div className={cx(globalStyles["form-group"])} id={styles.descriptionContainer}>
    //     <label id={styles.descriptionLabel}>Description (optional)</label>
    //     <input className={cx(globalStyles["form-control"])} id={styles.description} placeholder="Feed description name" />
    //   </div>

    //   <div className={cx(globalStyles["form-group"])} id={styles.urlContainer}>
    //     <label id={styles.urlLabel}> URL </label>
    //     <input className={cx(globalStyles["form-control"])} id={styles.url} placeholder="Feed URL here" />
    //   </div>

    //   <div id={styles.mediaContainer}>
    //     <label id={styles.mediaLabel}> Media </label>
    //     <select className={cx(globalStyles["form-select"])} aria-label="Default select example" id={styles.media}>
    //       <option value="1">One</option>
    //       <option value="2">Two</option>
    //       <option value="3">Three</option>
    //     </select>
    //   </div>

    //   <div id={styles.statusContainer}>
    //     <label id={styles.statusLabel}> Status </label>
    //     <select className={cx(globalStyles["form-select"])} aria-label="Default select example" id={styles.status}>
    //       <option value="1">One</option>
    //       <option value="2">Two</option>
    //       <option value="3">Three</option>
    //     </select>
    //   </div>
      
    //   <button type="submit" className={cx(globalStyles["btn"], globalStyles["btn-primary"])}>Submit</button>
    // </form>
    // </div>


export default App;