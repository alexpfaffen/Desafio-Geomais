import { useState } from "react";
import styles from "./AddUserForm.module.css";

export function AddUserForm({ userList, criarUsuario }) {
  const [form, setForm] = useState({
    id: 11234,
    nome: "",
    cpf: "",
    rg: "",
    data_nasc: "",
    sexo: "",
  });

  async function enviarFormulario(event) {
    setForm({ ...form, id: userList[userList.length - 1].id++ });

    await criarUsuario(form);
  }

  return (
    <div className={styles.addUserForm}>
      <form
        className={styles.rightCadastro}
        onSubmit={enviarFormulario}
        type="submit"
      >
        <input
          placeholder="Nome Completo"
          type="text"
          required
          onChange={(event) => setForm({ ...form, nome: event.target.value })}
        />
        <input
          placeholder="CPF"
          type="text"
          required
          onChange={(event) => setForm({ ...form, cpf: event.target.value })}
        />
        <input
          placeholder="RG"
          type="text"
          required
          onChange={(event) => setForm({ ...form, rg: event.target.value })}
        />
        <input
          placeholder="Data de Nascimento"
          type="text"
          required
          onChange={(event) =>
            setForm({ ...form, data_nasc: event.target.value })
          }
        />
        <select
          defaultValue="sexo"
          required
          onChange={(event) => setForm({ ...form, sexo: event.target.value })}
        >
          <option value="sexo">Sexo</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>

        <button className={styles.button} type="submit">
          Salvar
        </button>
        <button className={styles.button}>Cancelar</button>
      </form>
      <div className={styles.leftCadastro}>
        <a href="../assets/img-globo.svg"></a>
      </div>
    </div>
  );
}
