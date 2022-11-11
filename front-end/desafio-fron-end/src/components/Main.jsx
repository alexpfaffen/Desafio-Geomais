import { UserList } from "./UserList";
import { AddUserForm } from "./AddUserForm";
import { useEffect, useState } from "react";
import { api } from "../services/api";

export function Main() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      const response = await api.get("/pessoas");
      console.log(response);
      setUserList(response.data);
    };

    dataFetch();
  }, []);

  async function criarUsuario(usuario) {
    const response = await api.post("/pessoas", usuario);
    console.log(response.data);
  }

  return (
    <div>
      <AddUserForm criarUsuario={criarUsuario} />
      <UserList userList={userList} />
    </div>
  );
}
