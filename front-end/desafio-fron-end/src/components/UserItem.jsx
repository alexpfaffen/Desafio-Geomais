import styles from "./UserItem.module.css";

export function UserItem({ nome, sexo, dataDeNascimento }) {
  return (
    <div>
      <h3 className={styles.nome}>{nome}</h3>
      <p className={styles.gender}>{sexo}</p>
      <p className={styles.datePicker}>{dataDeNascimento}</p>
    </div>
  );
}
