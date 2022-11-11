import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerCadastro}>Cadastro</h1>
      <div className={styles.imgCadastro}>
        <img src="../../src/assets/logo-geomais.png" alt="logo Geomais" />
      </div>
    </div>
  );
}
