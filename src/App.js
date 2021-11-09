import styles from './App.module.scss';
import globalStyles from '../src/Asset/boostrap.min.module.css';
import cx from 'classnames';


const App =() => {
  return (
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
    
    <div className={styles.container}>

      {/* <div className={cx(globalStyles["form-check"], globalStyles["form-switch"])}>
        <input className={cx(globalStyles["form-check-input"])} type={"checkbox"} />
      </div> */}

    <form className={styles.formcontainer}>
      
      <div className={cx(globalStyles["form-check"], globalStyles["form-switch"])} id={styles.checkIcon}>
        <input className={cx(globalStyles["form-check-input"])} type={"checkbox"} />
      </div> 

      <div className={cx(globalStyles["form-group"])} id={styles.feedNameContainer}>
        <label for="feedName" id={styles.feedNameLabel}>Feed Name</label>
        <input className={cx(globalStyles["form-control"])} id={styles.feedName} placeholder="Feed name here" />
      </div>
      
      <div className={cx(globalStyles["form-group"])} id={styles.descriptionContainer}>
        <label for="description" id={styles.descriptionLabel}>Description (optional)</label>
        <input className={cx(globalStyles["form-control"])} id={styles.description} placeholder="Feed description name" />
      </div>
      
      <button type="submit" className={cx(globalStyles["btn"], globalStyles["btn-primary"])}>Submit</button>
    </form>
    </div>
  )
}

export default App;