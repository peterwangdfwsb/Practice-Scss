import styles from './App.module.scss';

const App =() => {
  return (
    <div className={styles.Wrap}>
      <div className={styles.Item}>
        <div className={styles.Txt}>
          <h2> CSS1 </h2>
          <p> Text1 </p>

        </div>
      </div>


      <div className={styles.Item}>
        <div className={styles.Txt}>
          <h2> CSS2 </h2>
          <p> Text2 </p>

        </div>
      </div>


      <div className={styles.Item}>
        <div className={styles.Txt}>
          <h2> CSS3 </h2>
          <p> Text3 </p>

        </div>
      </div>

    </div>
  )
}

export default App;
