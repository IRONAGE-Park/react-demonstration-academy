import logo from "./logo.svg";
import styles from "./CSSModuleApp.module.css";
// Module CSS 파일의 클래스 명을 객체로 가져옴

// CSS Module 로드 방식을 사용한 컴포넌트
function CSSModuleApp() {
  return (
    <div className={styles.App}>
      <header className={styles["App-header"]}>
        <img src={logo} className={styles["App-logo"]} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default CSSModuleApp;
