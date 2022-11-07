import { Table } from "antd";
import styles from "./UserList.module.css";
import React from "react";

export function UserList({ userList }) {
  const columns = [
    {
      key: 1,
      title: "Nome",
      dataIndex: "nome",
    },

    {
      key: 2,
      title: "CPF",
      dataIndex: "cpf",
    },

    {
      key: 3,
      title: "RG",
      dataIndex: "rg",
    },

    {
      key: 4,
      title: "Data de Nascimento",
      dataIndex: "data_nasc",
    },

    {
      key: 5,
      title: "Sexo",
      dataIndex: "sexo",
    },
  ];

  return (
    <div styles={styles}>
      <Table columns={columns} dataSource={userList}></Table>
    </div>
  );
}
